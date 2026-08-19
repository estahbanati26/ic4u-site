import Link from 'next/link';

const SERVICES = [
  ['/#pricing', 'TV & Projector Installation'],
  ['/home-theater-installation-okc/', 'Home Theater Setup'],
  ['/whole-home-audio-okc/', 'Audio / Video Installation'],
  ['/low-voltage-wiring-okc/', 'Security & Camera Systems'],
  ['/low-voltage-wiring-okc/#network', 'Network & Structured Wiring'],
  ['/#quote', 'Build a Quote'],
];

const AREAS = [
  ['/tv-mounting-edmond/', 'Edmond'],
  ['/tv-mounting-oklahoma-city/', 'Oklahoma City'],
  ['/#areas', 'All Service Areas'],
];

export default function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <nav className="topnav" aria-label="Main">
          <Link className="brand" href="/">I&nbsp;Connect&nbsp;<span className="glow">4</span>&nbsp;U</Link>
          <div className="navlinks">
            <div className="dropdown">
              <button type="button">Services ▾</button>
              <div className="menu">
                {SERVICES.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            </div>
            <div className="dropdown">
              <button type="button">Areas ▾</button>
              <div className="menu">
                {AREAS.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            </div>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div className="nav-cta">
            <a className="nav-phone" href="tel:+14692887126">📞 <span>(469) 288-7126</span></a>
            <Link className="btn-book" href="/book/">Book online</Link>
            <details className="mobile-nav">
              <summary>Menu</summary>
              <div className="sheet">
                <div className="grp">Services</div>
                {SERVICES.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
                <div className="grp">Areas</div>
                {AREAS.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
                <div className="grp">Book</div>
                <Link href="/book/">Book online</Link>
                <a href="tel:+14692887126">Call (469) 288-7126</a>
              </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  );
}
