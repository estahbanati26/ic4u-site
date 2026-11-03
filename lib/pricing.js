/* ============================================================
   PRICING CONFIG — edit prices here. The home-page quote builder
   and the /book/ flow both read from this file.
   Own-mount installs: $125 (≤65"), $150 (66–75"), $175 (over 75")
   Our-mount deals: Standard $200 (≤75") · Premium $299 (any size)
   ============================================================ */
export const SIZES = [
  { id: 's65', name: 'Up to 65"' },
  { id: 's75', name: '66" – 75"' },
  { id: 's75p', name: 'Over 75"' },
];
export const OWN = { s65: 125, s75: 150, s75p: 175 };
export const STANDARD = 200;
export const PREMIUM = 299;

export const BRICK = { id: 'brick', name: 'Brick / stone / fireplace', price: 75 };
export const WIRES = {
  cover: { id: 'cover', name: 'Cord-cover raceway', price: 50 },
  inwall: { id: 'inwall', name: 'In-wall wiring + outlet', price: 120 },
};
export const EXTRAS = [
  { id: 'haul', name: 'Old-TV haul-away', price: 25 },
  { id: 'device', name: 'Device hookup', price: 40, includedWithOurMount: true },
  { id: 'soundbar', name: 'Soundbar mount + setup', price: 79 },
  { id: 'wifi', name: 'WiFi / smart-TV apps', price: 49 },
  { id: 'remote', name: 'Universal remote', price: 59 },
];

export const money = n => '$' + n.toLocaleString();
export const mountPrice = size => (size === 's75p' ? PREMIUM : STANDARD);

/* size: s65|s75|s75p · mount: ours|mine · wall: drywall|brick|unsure|''
   wires: none|cover|inwall · extras: array of EXTRAS ids */
export function calcQuote({ size, mount, wall, wires, extras }) {
  const ours = mount === 'ours';
  const premium = ours && size === 's75p';
  const sizeName = SIZES.find(s => s.id === size).name;
  let pkgName, pkgPrice, dealNote, includes;
  if (!ours) {
    pkgName = 'TV install — your mount (' + sizeName + ')';
    pkgPrice = OWN[size];
    includes = ['Hung level & secure', 'Cables tidied'];
  } else if (premium) {
    pkgName = 'Premium — our full-motion mount';
    pkgPrice = PREMIUM;
    dealNote = 'DEAL: full-motion mount + in-wall wiring + recessed outlet included — $120+ value free';
    includes = ['Full-motion mount included', 'Wires fully in-wall', 'Recessed outlet', 'Every device connected'];
  } else {
    pkgName = 'Standard — our tilting mount';
    pkgPrice = STANDARD;
    dealNote = 'DEAL: tilting mount + full device hookup included — $100+ value vs buying your own';
    includes = ['Tilting mount included', 'Every device connected', 'Cords concealed'];
  }

  const lines = [[pkgName, pkgPrice]];
  let total = pkgPrice;
  const add = o => { lines.push([o.name, o.price]); total += o.price; };

  if (wall === 'brick') add(BRICK);
  if (premium) {
    lines.push([WIRES.inwall.name, 'incl.']);
  } else if (wires === 'inwall') {
    add(WIRES.inwall);
  } else if (wires === 'cover') {
    if (ours) lines.push([WIRES.cover.name, 'incl.']);
    else add(WIRES.cover);
  }
  EXTRAS.forEach(o => {
    if (!(extras || []).includes(o.id)) return;
    if (o.includedWithOurMount && ours) lines.push([o.name, 'incl.']);
    else add(o);
  });

  return { ours, premium, pkgName, pkgPrice, dealNote, includes, lines, total };
}
