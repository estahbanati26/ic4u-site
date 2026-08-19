import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site" id="book">
      <div className="wrap">
        <div className="foot">
          <div>
            <h2>Ready to mount up?</h2>
            <p>Book your install with Amir today. Local, insured, and background-checked — serving the entire OKC metro.</p>
            <div className="fcta">
              <Link className="btn" href="/book/">Book online</Link>
              <a className="btn btn-ghost" href="tel:+14692887126">📞 (469) 288-7126</a>
            </div>
          </div>
          <nav className="foot-links" aria-label="Services">
            <b>Services</b>
            <Link href="/#pricing">TV Mounting Prices</Link>
            <Link href="/home-theater-installation-okc/">Home Theater OKC</Link>
            <Link href="/whole-home-audio-okc/">Whole-Home Audio</Link>
            <Link href="/low-voltage-wiring-okc/">Cameras & Low-Voltage</Link>
          </nav>
          <nav className="foot-links" aria-label="Areas">
            <b>Areas</b>
            <Link href="/tv-mounting-oklahoma-city/">TV Mounting OKC</Link>
            <Link href="/tv-mounting-edmond/">TV Mounting Edmond</Link>
            <Link href="/#areas">All Service Areas</Link>
          </nav>
          <nav className="foot-links" aria-label="Company">
            <b>Company</b>
            <Link href="/book/">Book Online</Link>
            <Link href="/#quote">Price My Install</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#reviews">Reviews</Link>
          </nav>
        </div>
        <div className="foot-meta">
          <span>© {new Date().getFullYear()} I Connect 4 U LLC · Edmond, OK · serving the OKC metro</span>
          <span>★ 4.9 · 300+ installs · background-checked & insured · 3× Thumbtack Top Pro</span>
        </div>
      </div>
    </footer>
  );
}
