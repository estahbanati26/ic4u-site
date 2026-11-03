'use client';
import { useEffect, useRef, useState } from 'react';
import { SIZES, OWN, BRICK, WIRES, EXTRAS, money, mountPrice, calcQuote } from '../lib/pricing';

// Google Appointment Schedules booking page (step 2).
const BOOKING_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Ba9uTv2f8Sb1EeZt70bJFu-ll71f6DSK_j9ka6T8r7PLCWOL3tIQtL9RvcbQfCdrbYq731Q2x?gv=true';
// Job details are emailed here before the customer picks a time.
const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/oldschoolcure.okc@gmail.com';

const SERVICES = [
  { id: 'tv', name: 'TV mounting' },
  { id: 'theater', name: 'Home theater / surround' },
  { id: 'audio', name: 'Whole-home audio' },
  { id: 'cameras', name: 'Security cameras' },
  { id: 'wiring', name: 'Wiring / network / WiFi' },
  { id: 'other', name: 'Something else' },
];
const WALLS = [
  { id: 'drywall', name: 'Drywall' },
  { id: 'brick', name: BRICK.name, price: BRICK.price },
  { id: 'unsure', name: 'Not sure', note: 'Priced as drywall until we confirm it' },
];

function Choice({ selected, onClick, children }) {
  return (
    <button type="button" aria-pressed={selected} className={'qb-opt' + (selected ? ' sel' : '')} onClick={onClick}>
      {children}
    </button>
  );
}

export default function BookingFlow() {
  const [service, setService] = useState('tv');
  const [size, setSize] = useState('s65');
  const [mount, setMount] = useState('ours');
  const [wall, setWall] = useState('');
  const [wires, setWires] = useState('none');
  const [extras, setExtras] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [honey, setHoney] = useState('');
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const top = useRef(null);

  // Carry over whatever the customer picked in the home-page quote builder.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (SERVICES.some(s => s.id === p.get('service'))) setService(p.get('service'));
    if (SIZES.some(s => s.id === p.get('size'))) setSize(p.get('size'));
    if (['ours', 'mine'].includes(p.get('mount'))) setMount(p.get('mount'));
    if (p.get('wall') === 'brick') setWall('brick');
    if (['none', 'cover', 'inwall'].includes(p.get('wires'))) setWires(p.get('wires'));
    if (p.get('extras')) setExtras(p.get('extras').split(',').filter(id => EXTRAS.some(e => e.id === id)));
  }, []);

  const isTv = service === 'tv';
  const q = calcQuote({ size, mount, wall, wires, extras });
  const serviceName = SERVICES.find(s => s.id === service).name;
  const toggleExtra = id => setExtras(e => (e.includes(id) ? e.filter(x => x !== id) : [...e, id]));

  const scrollToTop = () => {
    if (top.current) top.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const validate = () => {
    const e = {};
    if (isTv && !wall) e.wall = 'Choose a wall type so we can price the job.';
    if (!isTv && !notes.trim()) e.notes = 'Tell us a little about the job.';
    if (!name.trim()) e.name = 'Enter your name.';
    if (phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a 10-digit phone number.';
    return e;
  };

  const payload = () => {
    const lead = {
      _subject: `New job details: ${name.trim()} — ${serviceName}${isTv ? ' — est. ' + money(q.total) : ''}`,
      _template: 'table',
      _captcha: 'false',
      _honey: honey,
      Name: name.trim(),
      Phone: phone.trim(),
      Service: serviceName,
    };
    if (isTv) {
      lead['TV size'] = SIZES.find(s => s.id === size).name;
      lead['Mount'] = q.ours ? 'We supply it' : 'Customer has one';
      lead['Wall'] = WALLS.find(w => w.id === wall).name;
      lead['Estimate lines'] = q.lines.map(([n, p]) => `${n}: ${typeof p === 'number' ? money(p) : p}`).join(' | ');
      lead['Estimated total'] = money(q.total);
    }
    lead['Notes'] = notes.trim() || '(none)';
    return lead;
  };

  const submit = async e => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;
    setSending(true);
    setSendFailed(false);
    let sent = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload()),
        signal: controller.signal,
      });
      sent = res.ok;
    } catch (err) {
      sent = false;
    }
    clearTimeout(timer);
    // Never lose the booking over a failed email: go on to the calendar either way.
    setSendFailed(!sent);
    setSending(false);
    setStep(2);
    setTimeout(scrollToTop, 0);
  };

  const summary = (
    <div className="qb-summary">
      <h3>{isTv ? 'Your estimate' : 'Your job'}</h3>
      {isTv ? (
        <>
          {q.lines.map(([n, p], i) => (
            <div className="qb-line" key={i}><span>{n}</span><span className="v">{typeof p === 'number' ? money(p) : p}</span></div>
          ))}
          <div className="qb-total"><span className="t">Estimated total</span><span className="a">{money(q.total)}</span></div>
          <div className="qb-deposit">Includes: {q.includes.join(' · ')}</div>
          <div className="qb-note">Estimate for one TV. Amir confirms the final price with you before any work starts.</div>
        </>
      ) : (
        <>
          <div className="qb-line"><span>{serviceName}</span><span className="v">Custom quote</span></div>
          <div className="qb-deposit">Your time slot is a free walkthrough. You&apos;ll get an exact quote after we see the space.</div>
        </>
      )}
    </div>
  );

  return (
    <div className="bf" ref={top}>
      <ol className="bf-steps">
        <li className={step === 1 ? 'on' : 'done'}>1 · Job details</li>
        <li className={step === 2 ? 'on' : ''}>2 · Pick a time</li>
      </ol>

      {step === 1 && (
        <form className="qb-grid" onSubmit={submit} noValidate>
          <div>
            <div className="qb-step">
              <div className="lbl">What do you need?</div>
              <div className="qb-opts">
                {SERVICES.map(s => (
                  <Choice key={s.id} selected={service === s.id} onClick={() => setService(s.id)}>
                    <div className="on"><span>{s.name}</span></div>
                  </Choice>
                ))}
              </div>
            </div>

            {isTv && (
              <>
                <div className="qb-step">
                  <div className="lbl">How big is your TV?</div>
                  <div className="qb-opts">
                    {SIZES.map(o => (
                      <Choice key={o.id} selected={size === o.id} onClick={() => setSize(o.id)}>
                        <div className="on"><span>{o.name}</span></div>
                      </Choice>
                    ))}
                  </div>
                </div>
                <div className="qb-step">
                  <div className="lbl">Do you have a mount?</div>
                  <div className="qb-opts two">
                    <Choice selected={q.ours} onClick={() => setMount('ours')}>
                      <div className="on"><span>No — bring one</span><span className="p">{money(mountPrice(size))}</span></div>
                      <div className="od">Mount included + every device connected</div>
                    </Choice>
                    <Choice selected={!q.ours} onClick={() => setMount('mine')}>
                      <div className="on"><span>Yes, I have one</span><span className="p">{money(OWN[size])}</span></div>
                      <div className="od">Install only</div>
                    </Choice>
                  </div>
                </div>
                <div className="qb-step">
                  <div className="lbl">What&apos;s the wall made of?</div>
                  <div className="qb-opts">
                    {WALLS.map(w => (
                      <Choice key={w.id} selected={wall === w.id} onClick={() => { setWall(w.id); setErrors(x => ({ ...x, wall: undefined })); }}>
                        <div className="on"><span>{w.name}</span>{w.price && <span className="p">+{money(w.price)}</span>}</div>
                        {w.note && <div className="od">{w.note}</div>}
                      </Choice>
                    ))}
                  </div>
                  {errors.wall && <div className="bf-err" role="alert">{errors.wall}</div>}
                </div>
                <div className="qb-step">
                  <div className="lbl">How should the wires look?</div>
                  {q.premium ? (
                    <div className="bf-included">Wires run fully in-wall with a recessed outlet — included with Premium ✓</div>
                  ) : (
                    <div className="qb-opts">
                      {q.ours ? (
                        <Choice selected={wires !== 'inwall'} onClick={() => setWires('cover')}>
                          <div className="on"><span>In a cord cover</span><span className="p">Incl.</span></div>
                        </Choice>
                      ) : (
                        <>
                          <Choice selected={wires === 'none'} onClick={() => setWires('none')}>
                            <div className="on"><span>Tidied along the wall</span><span className="p">Incl.</span></div>
                          </Choice>
                          <Choice selected={wires === 'cover'} onClick={() => setWires('cover')}>
                            <div className="on"><span>In a cord cover</span><span className="p">+{money(WIRES.cover.price)}</span></div>
                          </Choice>
                        </>
                      )}
                      <Choice selected={wires === 'inwall'} onClick={() => setWires('inwall')}>
                        <div className="on"><span>Hidden in the wall</span><span className="p">+{money(WIRES.inwall.price)}</span></div>
                        <div className="od">Recessed outlet included</div>
                      </Choice>
                    </div>
                  )}
                </div>
                <div className="qb-step">
                  <div className="lbl">Extras (optional)</div>
                  <div className="qb-opts two">
                    {EXTRAS.filter(o => !(o.includedWithOurMount && q.ours)).map(o => (
                      <Choice key={o.id} selected={extras.includes(o.id)} onClick={() => toggleExtra(o.id)}>
                        <div className="on"><span>{o.name}</span><span className="p">+{money(o.price)}</span></div>
                      </Choice>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="qb-step">
              <div className="lbl">Your contact info</div>
              <div className="bf-fields">
                <div>
                  <label htmlFor="bf-name">Name</label>
                  <input id="bf-name" type="text" autoComplete="name" value={name} onChange={e => setName(e.target.value)} />
                  {errors.name && <div className="bf-err" role="alert">{errors.name}</div>}
                </div>
                <div>
                  <label htmlFor="bf-phone">Phone</label>
                  <input id="bf-phone" type="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                  {errors.phone && <div className="bf-err" role="alert">{errors.phone}</div>}
                </div>
              </div>
              <label htmlFor="bf-notes">{isTv ? 'Anything else? (more TVs, other AV work)' : 'Tell us about the job'}</label>
              <textarea id="bf-notes" value={notes} onChange={e => setNotes(e.target.value)} placeholder={isTv ? 'Optional' : 'Rooms, number of speakers or cameras, timeline — whatever you know.'} />
              {errors.notes && <div className="bf-err" role="alert">{errors.notes}</div>}
              <input className="bf-hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honey} onChange={e => setHoney(e.target.value)} />
            </div>
          </div>
          <div>
            {summary}
            <button className="btn bf-next" type="submit" disabled={sending}>{sending ? 'Saving…' : 'Next: pick a time →'}</button>
          </div>
        </form>
      )}

      {step === 2 && (
        <>
          <div className="bf-recap">
            <div>
              <b>{isTv ? `Estimate: ${money(q.total)}` : `${serviceName}: free walkthrough`}</b>
              <div className="od">Use the same name and phone below so we can match your job details.</div>
            </div>
            <button type="button" className="bf-edit" onClick={() => setStep(1)}>Edit job details</button>
          </div>
          {sendFailed && (
            <div className="bf-warn" role="alert">
              We couldn&apos;t save your job details. Book your time below, then text them to <a href="sms:+14692887126">(469) 288-7126</a>.
            </div>
          )}
          <div className="bookframe">
            <iframe src={BOOKING_URL} title="Book an appointment with I Connect 4 U" />
          </div>
        </>
      )}
    </div>
  );
}
