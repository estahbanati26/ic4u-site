'use client';
import { useState } from 'react';
import Link from 'next/link';

/* ============================================================
   PRICE CONFIG — install labor only, gear excluded.
   Rule: $150–200 per speaker (wiring $100–150 + speaker install $50).
   Easy room = $150–175/speaker · tricky room = $175–200/speaker.
   ============================================================ */
const TIERS = [
  { id: 'sb', name: 'Soundbar + sub', spk: 0, lo: 79, hi: 150, d: 'Soundbar mounted under the TV, sub placed and paired, everything tuned. The simplest real upgrade.' },
  { id: '31', name: '3.1 system', spk: 4, d: 'Receiver with left, center, right, and sub — clear dialogue and real stereo width. 4 speakers installed.' },
  { id: '51', name: '5.1 surround', spk: 6, d: 'The classic: fronts, center, two surrounds, and a sub, placed to your seating. 6 speakers installed.' },
  { id: '71', name: '7.1 surround', spk: 8, d: 'Adds rear surrounds for a bigger room and a fuller bubble of sound. 8 speakers installed.' },
  { id: '72', name: '7.2 surround', spk: 9, d: 'Seven speakers plus dual subwoofers — even bass in every seat, not just the sweet spot. 9 speakers installed.' },
  { id: '512', name: '5.1.2 Dolby Atmos', spk: 8, d: '5.1 plus two overhead Atmos speakers — sound moves above you. 8 speakers installed.' },
  { id: '714', name: '7.1.4 Dolby Atmos', spk: 12, d: 'The full immersion rig: seven speakers, sub, and four overheads, calibrated to the sweet spot. 12 speakers installed.' },
  { id: '724', name: '7.2.4 Dolby Atmos', spk: 13, d: 'Seven speakers, dual subs, and four overheads — reference-level immersion. 13 speakers installed.' },
  { id: '924', name: '9.2.4 Dolby Atmos', spk: 15, d: 'Adds front wides to 7.2.4 — a seamless wall of sound for large rooms. 15 speakers installed.' },
  { id: '1124', name: '11.2.4 dedicated theater', spk: 17, d: 'The no-compromise dedicated theater build: eleven speakers, dual subs, four overheads, fully calibrated. 17 speakers installed.' },
];
const MODS = [
  { id: 'proj', name: 'Projector + screen', lo: 350, hi: 700, d: 'Ceiling-mounted projector and fixed screen, aligned and focused.' },
  { id: 'tv', name: 'Premium TV mount', lo: 299, hi: 299, d: 'Any-size TV on a full-motion mount with in-wall wiring and recessed outlet.' },
];
const ROOMS = [
  { id: 'open', name: 'Easy access (attic/one-story)', rLo: 150, rHi: 175, d: 'Rate covers concealed wiring plus speaker installation.' },
  { id: 'tricky', name: 'Finished / two-story room', rLo: 175, rHi: 200, d: 'Limited attic or wall access adds fishing time — wiring and speaker install still included.' },
];
const MAXHI = 4500;
const money = n => '$' + (Math.round(n / 5) * 5).toLocaleString();

export default function TheaterSim() {
  const [tier, setTier] = useState('51');
  const [mods, setMods] = useState({});
  const [room, setRoom] = useState('open');

  const t = TIERS.find(x => x.id === tier);
  const r = ROOMS.find(x => x.id === room);
  let lo, hi;
  const parts = [t.d];
  if (t.spk > 0) { lo = t.spk * r.rLo; hi = t.spk * r.rHi; } else { lo = t.lo; hi = t.hi; }
  MODS.forEach(m => { if (mods[m.id]) { lo += m.lo; hi += m.hi; parts.push(m.d); } });
  if (t.spk > 0 && r.d) parts.push(r.d);

  const Chip = ({ o, selected, onClick }) => (
    <div className={'sim-opt' + (selected ? ' sel' : '')} onClick={onClick}>{o.name}</div>
  );

  return (
    <div className="sim">
      <div className="sim-body">
        <div className="lbl">1 · Your system</div>
        <div className="sim-opts">{TIERS.map(o => <Chip key={o.id} o={o} selected={tier === o.id} onClick={() => setTier(o.id)} />)}</div>
        <div className="lbl">2 · The finish</div>
        <div className="sim-opts">{MODS.map(o => <Chip key={o.id} o={o} selected={!!mods[o.id]} onClick={() => setMods(m => ({ ...m, [o.id]: !m[o.id] }))} />)}</div>
        <div className="lbl">3 · Your room</div>
        <div className="sim-opts">{ROOMS.map(o => <Chip key={o.id} o={o} selected={room === o.id} onClick={() => setRoom(o.id)} />)}</div>
      </div>
      <div className="sim-result">
        <div className="rt">Estimated install labor</div>
        <div className="range">{money(lo)} – <span>{money(hi)}</span></div>
        <div className="sub">$150–200 per speaker — wiring + speaker installation · equipment separate · exact quote at your free walkthrough</div>
        <div className="sim-bar"><i style={{ left: Math.min(96, lo / MAXHI * 100) + '%', right: Math.max(2, 100 - hi / MAXHI * 100) + '%' }} /></div>
        <div className="sim-bar-lbl"><span>Soundbar</span><span>Dedicated theater</span></div>
        <div className="sim-desc">{parts.join(' ')}</div>
        <Link className="btn" href="/book/">Lock in my exact price — free walkthrough</Link>
      </div>
    </div>
  );
}
