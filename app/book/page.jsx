import Link from 'next/link';

const BOOKING_URL = '';

export const metadata = {
  title: 'Book Your TV Mount or Install Online | I Connect 4 U — OKC Metro',
  description: 'Pick a time that works and book your TV mounting, home theater, or wiring install online. Serving Edmond, Oklahoma City & the metro. Or call (469) 288-7126.',
  alternates: { canonical: 'https://ic4u.us/book/' }
};

export default function Book() {
  return (
    <>
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Book online</div>
          <h1>Pick a time. <em>We&apos;ll bring the level.</em></h1>
          <p>Choose an open slot below and your install is on the calendar — you&apos;ll get a confirmation and reminders automatically. Prefer to talk it through first? Call or text anytime.</p>
          <a className="btn" href="tel:+14692887126">📞 (469) 288-7126</a>
        </div>
      </div>
      <main>
        <div className="wrap">
          {BOOKING_URL ? (
            <div className="bookframe">
              <iframe src={BOOKING_URL} title="Book an appointment with I Connect 4 U" loading="lazy" />
            </div>
          ) : (
            <div className="bookfallback">
              <h3>Online calendar coming right up</h3>
              <p>Our live booking calendar is being connected. Until then, booking takes one call or text — most installs are scheduled within the week.</p>
              <a className="btn" href="tel:+14692887126">Call or text (469) 288-7126</a>
            </div>
          )}
          <div className="prose" style={{ paddingBottom: 30 }}>
            <h2>Know your price before you book</h2>
            <p>Use the <Link href="/#quote">30-second quote builder</Link> for TV mounting or the <Link href="/#theater-sim">home theater estimator</Link> for surround sound — then grab a slot. Surround sound, cameras, and wiring jobs start with a free in-home walkthrough; book any slot and we&apos;ll use it for the walkthrough.</p>
          </div>
        </div>
      </main>
    </>
  );
}
