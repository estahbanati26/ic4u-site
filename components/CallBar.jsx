import Link from 'next/link';

export default function CallBar() {
  return (
    <div className="callbar">
      <a className="btn" href="tel:+14692887126">📞 Call now</a>
      <Link className="btn btn-ghost" href="/book/">Book online</Link>
    </div>
  );
}
