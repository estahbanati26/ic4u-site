import Link from 'next/link';

export const metadata = {
  title: 'Get a Free Quote — TV Mounting, Home Theater & Wiring | I Connect 4 U',
  description: 'Tell us about your job — TV mounting, home theater, cameras, or wiring — and get a fast free quote from a local Edmond pro. Serving the OKC metro.',
  alternates: { canonical: 'https://ic4u.us/quote/' }
};

export default function Quote() {
  return (
    <>
      <style>{`
        .qform{max-width:640px;margin:30px auto;border:1px solid var(--hair);border-radius:16px;padding:28px;background:var(--paper)}
        .qform label{display:block;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.88rem;margin:16px 0 6px}
        .qform label:first-child{margin-top:0}
        .qform input,.qform select,.qform textarea{width:100%;padding:12px 14px;border:1.5px solid var(--hair);border-radius:10px;font:inherit;font-size:.95rem;background:var(--paper)}
        .qform input:focus,.qform select:focus,.qform textarea:focus{outline:none;border-color:var(--amber)}
        .qform textarea{min-height:110px;resize:vertical}
        .qform .btn{width:100%;text-align:center;margin-top:20px}
        .qform .fine{color:var(--muted);font-size:.8rem;margin-top:12px;text-align:center}
      `}</style>
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Get a Free Quote</div>
          <h1>Tell us what you&apos;re building. <em>Quote comes fast.</em></h1>
          <p>TV mounts get instant pricing — try the <Link href="/#quote" style={{ color: 'var(--amber)' }}>30-second quote builder</Link>. For home theaters, cameras, wiring, or anything bigger, drop the details below and Amir will get back to you the same day.</p>
        </div>
      </div>
      <main>
        <div className="wrap">
          <form className="qform" name="quote-request" method="POST" action="https://formsubmit.co/oldschoolcure.okc@gmail.com">
            <input type="hidden" name="_subject" value="🔨 New quote request from ic4u.us" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://ic4u.us/quote/thanks/" />
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required placeholder="First name is fine" />
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required placeholder="(405) 555-0100" />
            <label htmlFor="city">City / area</label>
            <input id="city" name="city" type="text" placeholder="Edmond, OKC, Yukon…" />
            <label htmlFor="service">What do you need?</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>Choose a service…</option>
              <option>TV mounting</option>
              <option>Home theater / surround sound</option>
              <option>Whole-home audio (Sonos, Bose…)</option>
              <option>Security cameras</option>
              <option>Cat5/Cat6 / network / structured wiring</option>
              <option>WiFi / access points</option>
              <option>Commercial / office job</option>
              <option>Something else</option>
            </select>
            <label htmlFor="details">Details</label>
            <textarea id="details" name="details" placeholder="TV size, room, number of cameras or drops, timeline — whatever you know." />
            <button className="btn" type="submit">Send my quote request</button>
            <div className="fine">Or skip the form: call/text <a href="tel:+14692887126"><b>(469) 288-7126</b></a> · <Link href="/book/">book online</Link></div>
          </form>
        </div>
      </main>
    </>
  );
}
