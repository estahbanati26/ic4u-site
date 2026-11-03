'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SIZES, OWN, BRICK, WIRES, EXTRAS, money, mountPrice, calcQuote } from '../lib/pricing';

export default function QuoteBuilder() {
  const [size, setSize] = useState('s65');
  const [mount, setMount] = useState('ours');
  const [brick, setBrick] = useState(false);
  const [wires, setWires] = useState('none');
  const [extras, setExtras] = useState([]);

  const q = calcQuote({ size, mount, wall: brick ? 'brick' : '', wires, extras });
  const toggleExtra = id => setExtras(e => (e.includes(id) ? e.filter(x => x !== id) : [...e, id]));
  const toggleWires = id => setWires(w => (w === id ? 'none' : id));

  const params = new URLSearchParams({ size, mount, wires });
  if (brick) params.set('wall', 'brick');
  if (extras.length) params.set('extras', extras.join(','));

  const coverIncluded = q.ours;
  const inwallIncluded = q.premium;

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
            <div className={'qb-opt' + (q.ours ? ' sel' : '')} onClick={() => setMount('ours')}>
              <div className="on"><span>No — bring one</span><span className="p">{money(mountPrice(size))}</span></div>
              <div className="od">Mount included + every device connected</div>
              <span className="qb-deal">★ Best value deal</span>
            </div>
            <div className={'qb-opt' + (!q.ours ? ' sel' : '')} onClick={() => setMount('mine')}>
              <div className="on"><span>Yes, I have one</span><span className="p">{money(OWN[size])}</span></div>
              <div className="od">Install only — you provide the mount</div>
            </div>
          </div>
        </div>
        <div className="qb-step">
          <div className="lbl">3 · Extras (optional)</div>
          <div className="qb-opts two">
            <div className={'qb-opt' + (wires === 'cover' && !coverIncluded ? ' sel' : '') + (coverIncluded ? ' disabled' : '')} onClick={() => !coverIncluded && toggleWires('cover')}>
              <div className="on"><span>{WIRES.cover.name}</span><span className="p">+{money(WIRES.cover.price)}</span></div>
              {coverIncluded && <div className="od">Included with our mount ✓</div>}
            </div>
            <div className={'qb-opt' + (wires === 'inwall' && !inwallIncluded ? ' sel' : '') + (inwallIncluded ? ' disabled' : '')} onClick={() => !inwallIncluded && toggleWires('inwall')}>
              <div className="on"><span>{WIRES.inwall.name}</span><span className="p">+{money(WIRES.inwall.price)}</span></div>
              <div className="od">{inwallIncluded ? 'Included free with Premium ✓' : 'Recessed outlet included'}</div>
            </div>
            <div className={'qb-opt' + (brick ? ' sel' : '')} onClick={() => setBrick(b => !b)}>
              <div className="on"><span>{BRICK.name}</span><span className="p">+{money(BRICK.price)}</span></div>
            </div>
            {EXTRAS.map(o => {
              const included = o.includedWithOurMount && q.ours;
              return (
                <div key={o.id} className={'qb-opt' + (extras.includes(o.id) && !included ? ' sel' : '') + (included ? ' disabled' : '')} onClick={() => !included && toggleExtra(o.id)}>
                  <div className="on"><span>{o.name}</span><span className="p">+{money(o.price)}</span></div>
                  {included && <div className="od">Included with our mount ✓</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="qb-summary">
        <h3>Your estimate</h3>
        {q.lines.map(([n, p], i) => (
          <div className="qb-line" key={i}><span>{n}</span><span className="v">{typeof p === 'number' ? money(p) : p}</span></div>
        ))}
        <div className="qb-total"><span className="t">Estimated total</span><span className="a">{money(q.total)}</span></div>
        {q.dealNote && <div className="qb-deposit"><b>{q.dealNote}</b></div>}
        <div className="qb-deposit">Includes: {q.includes.join(' · ')}</div>
        <Link className="btn" href={'/book/?' + params.toString()}>Book this install — {money(q.total)}</Link>
        <div className="qb-note">Surround sound &amp; bigger jobs are custom-quoted free.</div>
      </div>
    </div>
  );
}
