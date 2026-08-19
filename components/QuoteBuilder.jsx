'use client';
import { useState } from 'react';
import Link from 'next/link';

const TIERS = [
  { id: 'basic', name: 'Basic', label: 'Basic mount', price: 125, od: 'TVs ≤ 65" · install only' },
  { id: 'standard', name: 'Standard', label: 'Standard mount', price: 200, od: 'TVs ≤ 75" · tilting mount' },
  { id: 'premium', name: 'Premium', label: 'Premium mount', price: 299, od: 'Any size · in-wall' },
];
const ADDONS = [
  { id: 'raceway', name: 'Cord-cover raceway', price: 50 },
  { id: 'inwall', name: 'In-wall wiring + outlet', price: 120, od: 'Recessed outlet included' },
  { id: 'brick', name: 'Brick / stone / fireplace', price: 75 },
  { id: 'haul', name: 'Old-TV haul-away', price: 25 },
];
const DEVICES = [
  { id: 'device', name: 'Device hookup', price: 40 },
  { id: 'soundbar', name: 'Soundbar mount + setup', price: 79 },
  { id: 'wifi', name: 'WiFi / smart-TV apps', price: 49 },
  { id: 'remote', name: 'Universal remote', price: 59 },
];

const money = n => '$' + n.toLocaleString();

export default function QuoteBuilder() {
  const [tier, setTier] = useState('standard');
  const [sel, setSel] = useState({});
  const isPremium = tier === 'premium';

  const toggle = id => setSel(s => ({ ...s, [id]: !s[id] }));

  const t = TIERS.find(x => x.id === tier);
  const lines = [[t.label, t.price]];
  let total = t.price;
  [...ADDONS, ...DEVICES].forEach(o => {
    if (sel[o.id] && !(isPremium && o.id === 'inwall')) { lines.push([o.name, o.price]); total += o.price; }
  });
  if (isPremium) lines.push(['In-wall wiring + outlet', 'incl.']);

  const Opt = ({ o, group }) => {
    const disabled = isPremium && o.id === 'inwall';
    const selected = group === 'tier' ? tier === o.id : !!sel[o.id] && !disabled;
    return (
      <div
        className={'qb-opt' + (selected ? ' sel' : '') + (disabled ? ' disabled' : '')}
        onClick={() => (group === 'tier' ? setTier(o.id) : !disabled && toggle(o.id))}
      >
        <div className="on"><span>{o.name}</span><span className="p">{group === 'tier' ? money(o.price) : '+' + money(o.price)}</span></div>
        {(o.od || disabled) && <div className="od">{disabled ? 'Included free with Premium ✓' : o.od}</div>}
      </div>
    );
  };

  return (
    <div className="qb-grid">
      <div>
        <div className="qb-step">
          <div className="lbl">1 · Choose your mount</div>
          <div className="qb-opts">{TIERS.map(o => <Opt key={o.id} o={o} group="tier" />)}</div>
        </div>
        <div className="qb-step">
          <div className="lbl">2 · Popular add-ons</div>
          <div className="qb-opts two">{ADDONS.map(o => <Opt key={o.id} o={o} group="x" />)}</div>
        </div>
        <div className="qb-step">
          <div className="lbl">3 · Device & audio</div>
          <div className="qb-opts two">{DEVICES.map(o => <Opt key={o.id} o={o} group="x" />)}</div>
        </div>
      </div>
      <div className="qb-summary">
        <h3>Your estimate</h3>
        {lines.map(([n, p], i) => (
          <div className="qb-line" key={i}><span>{n}</span><span className="v">{typeof p === 'number' ? money(p) : p}</span></div>
        ))}
        <div className="qb-total"><span className="t">Estimated total</span><span className="a">{money(total)}</span></div>
        <div className="qb-deposit">Reserve now with a <b>$25 deposit</b> — nonrefundable, but credited toward your install total when the job&apos;s done.</div>
        <Link className="btn" href="/book/">Book this install — {money(total)}</Link>
        <div className="qb-note">Surround sound & bigger jobs are custom-quoted free.</div>
      </div>
    </div>
  );
}
