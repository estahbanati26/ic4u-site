import Link from 'next/link';
import BookingFlow from '../../components/BookingFlow';

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
          <h1>Tell us the job. <em>Pick a time.</em></h1>
          <p>Answer a few quick questions and see your price, then choose an open slot. You&apos;ll get a confirmation and reminders automatically. Prefer to talk it through first? Call or text anytime.</p>
          <a className="btn" href="tel:+14692887126">📞 (469) 288-7126</a>
        </div>
      </div>
      <main>
        <div className="wrap">
          <BookingFlow />
          <div className="prose" style={{ paddingBottom: 30 }}>
            <h2>What happens after you book</h2>
            <p>TV mounting prices above are estimates for one TV, and Amir confirms the final price before any work starts. Surround sound, cameras, and wiring jobs start with a free in-home walkthrough, and your time slot is used for that walkthrough. Want to see surround sound pricing first? Try the <Link href="/#theater-sim">home theater estimator</Link>.</p>
          </div>
        </div>
      </main>
    </>
  );
}
