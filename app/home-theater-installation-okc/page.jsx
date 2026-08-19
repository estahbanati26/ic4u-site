import Link from 'next/link';
import TheaterSim from '../../components/TheaterSim';
import RoomDiagram from '../../components/RoomDiagram';

export const metadata = {
  title: 'Home Theater & Surround Sound Installation OKC | I Connect 4 U',
  description: 'Home theater installation in the OKC metro: 5.1, 7.2 & Dolby Atmos surround sound at $150–200 per speaker (wiring included), projectors, theater rooms & whole-home audio. Free walkthrough.',
  alternates: { canonical: 'https://ic4u.us/home-theater-installation-okc/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Home Theater & Surround Sound Installation',
    serviceType: 'Home theater, surround sound and audio-visual installation',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oklahoma City metro' },
    offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', description: '$150-200 per speaker (wiring + speaker installation); exact quote after free in-home walkthrough' } }
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'Home Theater Installation OKC', item: 'https://ic4u.us/home-theater-installation-okc/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Home Theater Installation OKC</div>
          <h1>Home theater &amp; surround sound, <em>designed to your room</em>.</h1>
          <p>5.1, 7.2, and Dolby Atmos systems, projectors, theater rooms, and whole-home audio across the OKC metro. $150–200 per speaker installed — wiring included — with the exact number confirmed at a free in-home walkthrough.</p>
          <a className="btn" href="#simulator">Estimate my price range</a>{' '}
          <Link className="btn btn-ghost" href="/book/" style={{ marginLeft: 10 }}>Book a free walkthrough</Link>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>Speaker placement is the whole game</h2>
          <p>A great system in the wrong spots sounds worse than a modest system placed right. Every quote starts with a room walkthrough: where you sit, where the screen lives, wall construction, and how far we can run wires in-wall. Then we place the fronts, center, surrounds, subs, and overhead Atmos speakers around your actual sweet spot.</p>
          <div className="room" style={{ background: '#0f1117', borderRadius: 16, padding: 16, margin: '24px 0' }}><RoomDiagram /></div>

          <h2 id="simulator">Estimate your install — simplest to full theater</h2>
          <p>Tap through your setup and see a realistic <b>install range — $150–200 per speaker, wiring + speaker installation</b>. Equipment is priced separately, and your exact number comes from the free walkthrough.</p>
          <TheaterSim />

          <h2>What we install</h2>
          <div className="svc">
            <div className="cell"><b>Surround sound</b><span>5.1, 7.1, 7.2 &amp; Dolby Atmos up to 11.2.4 — receivers, speakers, calibration, wires in-wall.</span></div>
            <div className="cell"><b>Theater rooms</b><span>Projector + screen, acoustic layout, lighting-friendly wiring.</span></div>
            <div className="cell"><b>Whole-home &amp; outdoor audio</b><span>Music in every room — patio and pool included. <Link href="/whole-home-audio-okc/" style={{ color: 'var(--amber-deep)' }}>Sonos, Bose &amp; more →</Link></span></div>
            <div className="cell"><b>Smart-home &amp; networking</b><span>WiFi that reaches, cameras, and automation that just works.</span></div>
          </div>
          <p>Already have equipment? We&apos;ll install and calibrate what you own. Starting fresh? We&apos;ll spec a system to your budget — you buy the gear, we make it sing.</p>

          <h2>How the quote works</h2>
          <ul>
            <li><b>1 · Free walkthrough.</b> We visit, measure, and talk through what you want it to feel like.</li>
            <li><b>2 · Custom quote.</b> A clear, itemized price — layout, labor, and wiring. No obligation.</li>
            <li><b>3 · Install day.</b> Clean in-wall runs, calibrated sound, and a walkthrough of the finished system.</li>
          </ul>
          <p>Pairing it with a TV mount? See <Link href="/#pricing">TV mounting prices</Link> — surround sound is the natural upgrade to a Premium install.</p>

          <div className="ctaband">
            <h2>Hear your room the way it should sound</h2>
            <p>Free walkthrough anywhere in the OKC metro.</p>
            <Link className="btn" href="/book/">Book a free walkthrough</Link>
          </div>
        </div>
      </main>
    </>
  );
}
