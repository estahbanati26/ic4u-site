'use client';
import { useState } from 'react';
import Link from 'next/link';

/* ============================================================
   PRICING CONFIG — edit here.
   Own-mount installs: $125 (≤65"), $150 (66–75"), $175 (over 75")
   Our-mount deals: Standard $200 (≤75") · Premium $299 (any size)
   ============================================================ */
const SIZES = [
  { id: 's65', name: 'Up to 65"' },
  { id: 's75', name: '66" – 75"' },
  { id: 's75p', name: 'Over 75"' },
];
const OWN = { s65: 125, s75: 150, s75p: 175 };

const ADDONS = [
  { id: 'raceway', name: 'Cord-cover raceway', price: 50 },
  { id: 'inwall', name: 'In-wall wiring + outlet', price: 120, od: 'Recessed outlet included' },
  { id: 'brick', name: 'Brick / stone / fireplace', price: 75 },
  { id: 'haul', name: 'Old-TV haul-away', price: 25 },
  { id: 'device', name: 'Device hookup', price: 40 },
  { id: 'soundbar', name: 'Soundbar mount + setup', price: 79 },
  { id: 'wifi', name: 'WiFi / smart-TV apps', price: 49 },
  { id: 'remote', name: 'Universal remote', price: 59 },
];

const money = n => '$' + n.toLocaleString();

export default function QuoteBuilder() {
  const [size, setSize] = useState('s65');
  const [mount, setMount] = useState('ours');
  const [sel, setSel] = useState({});

  const ours = mount === 'ours';
  const premium = ours && size === 's75p';

  let pkgName, pkgPrice, dealNote, includes;
  if (!ours) {
    pkgName = 'TV install — your mount (' + SIZES.find(s => s.id === size).name + ')';
    pkgPrice = OWN[size];
    includes = ['Hung level & secure', 'Cables tidied'];
  } else if (premium) {
    pkgName = 'Premium — our full-motion mount';
    pkgPrice = 299;
    dealNote = 'DEAL: full-motion mount + in-wall wiring + recessed outlet included — $120+ value free';
    includes = ['Full-motion mount included', 'Wires fully in-wall', 'Recessed outlet', 'Every device connected'];
  } else {
    pkgName = 'Standard — our tilting mount';
    pkgPrice = 200;
    dealNote = 'DEAL: tilting mount + full device hookup included — $100+ value vs buying your own';
    includes = ['Tilting mount included', 'Every device connected', 'Cords concealed'];
  }

  const toggle = id => setSel(s => ({ ...s, [id]: !s[id] }));
  const inwallFree = premium;

  const lines = [[pkgName, pkgPrice]];
  let total = pkgPrice;
  ADDONS.forEach(o => {
    if (sel[o.id] && !(inwallFree && o.id === 'inwall')) { lines.push([o.name, o.price]); total += o.price; }
  });
  if (inwallFree) lines.push(['In-wall wiring + outlet', 'incl.']);

  return (
    <div className="qb-grid">
      <div>
        <div className="qb-step">
          <div className="lbl">1 · How big is your TV?</div>
          <div className="qb-opts">
            {SIZES.map(o => (
              <div key={o.id} className={'qb-opt' + (size === o.id ? ' sel' : '')} onClick={() => setSize(o.id)}>
                <div className="on"><span>{o.name}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="qb-step">
          <div className="lbl">2 · Do you have a mount?</div>
          <div className="qb-opts two">
            <div className={'qb-opt' + (ours ? ' sel' : '')} onClick={() => setMount('ours')}>
              <div className="on"><span>No — use yours</span><span className="p">{size === 's75p' ? '$299' : '$200'}</span></div>
              <div className="od">Mount included + every device connected</div>
              <span className="qb-deal">★ Best value deal</span>
            </div>
            <div className={'qb-opt' + (!ours ? ' sel' : '')} onClick={() => setMount('mine')}>
              <div className="on"><span>Yes, I have one</span><span className="p">{money(OWN[size])}</span></div>
              <div className="od">Install only — you provide the mount</div>
            </div>
          </div>
        </div>
        <div className="qb-step">
          <div className="lbl">3 · Extras (optional)</div>
          <div className="qb-opts two">
            {ADDONS.map(o => {
              const disabled = inwallFree && o.id === 'inwall';
              const selected = !!sel[o.id] && !disabled;
              return (
                <div key={o.id} className={'qb-opt' + (selected ? ' sel' : '') + (disabled ? ' disabled' : '')} onClick={() => !disabled && toggle(o.id)}>
                  <div className="on"><span>{o.name}</span><span className="p">+{money(o.price)}</span></div>
                  {(o.od || disabled) && <div className="od">{disabled ? 'Included free with Premium ✓' : o.od}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="qb-summary">
        <h3>Your estimate</h3>
        {lines.map(([n, p], i) => (
          <div className="qb-line" key={i}><span>{n}</span><span className="v">{typeof p === 'number' ? money(p) : p}</span></div>
        ))}
        <div className="qb-total"><span className="t">Estimated total</span><span className="a">{money(total)}</span></div>
        {dealNote && <div className="qb-deposit"><b>{dealNote}</b></div>}
        <div className="qb-deposit">Includes: {includes.join(' · ')}</div>
        <Link className="btn" href="/book/">Book this install — {money(total)}</Link>
        <div className="qb-note">Surround sound &amp; bigger jobs are custom-quoted free.</div>
      </div>
    </div>
  );
}
