import Link from 'next/link';

export const metadata = {
  title: 'Quote Request Received | I Connect 4 U',
  robots: { index: false },
  alternates: { canonical: 'https://ic4u.us/quote/thanks/' }
};

export default function Thanks() {
  return (
    <div className="subhero" style={{ paddingBottom: 80 }}>
      <div className="wrap">
        <h1>Got it. <em>Amir will call you today.</em></h1>
        <p>Your quote request is in. If it&apos;s urgent, call or text <a href="tel:+14692887126" style={{ color: 'var(--amber)' }}>(469) 288-7126</a> — or grab a time on the calendar now.</p>
        <Link className="btn" href="/book/">Book online</Link>
      </div>
    </div>
  );
}
