import Link from 'next/link';

export const metadata = {
  title: 'TV Mounting Edmond, OK — Local Pro, From $125 | I Connect 4 U',
  description: 'TV mounting in Edmond, OK by a local Edmond-based pro. From $125, wires hidden in-wall, fireplace mounts. 4.9★, 300+ installs, insured & background-checked. Book online.',
  alternates: { canonical: 'https://ic4u.us/tv-mounting-edmond/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'TV Mounting in Edmond', serviceType: 'TV wall mounting and installation',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'City', name: 'Edmond', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
    offers: [
      { '@type': 'Offer', name: 'Basic TV Mounting', price: '125', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Standard TV Mounting with tilting mount', price: '200', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Premium TV Mounting with in-wall wiring', price: '299', priceCurrency: 'USD' }
    ]
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'TV Mounting Edmond', item: 'https://ic4u.us/tv-mounting-edmond/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › TV Mounting Edmond</div>
          <h1>TV Mounting in <em>Edmond, OK</em> — your neighborhood pro, from $125.</h1>
          <p>I Connect 4 U is based right here in Edmond. That means faster scheduling, no trip fees, and a local pro who&apos;s mounted TVs in hundreds of homes like yours — 4.9★ across 300+ installs.</p>
          <Link className="btn" href="/book/">Book online</Link>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>Edmond TV mounting prices</h2>
          <div className="prices">
            <div className="prow"><span><b>Basic</b><small>TVs up to 65&quot; · you provide the mount · cords tidied</small></span><span className="p">$125</span></div>
            <div className="prow"><span><b>Standard — most popular</b><small>TVs up to 75&quot; · tilting mount included · every device connected · cords concealed</small></span><span className="p">$200</span></div>
            <div className="prow"><span><b>Premium</b><small>Any size · full-motion mount · wires fully in-wall · recessed outlet</small></span><span className="p">$299</span></div>
          </div>
          <p>Fireplace and brick/stone mounts add $75 — common in newer Edmond builds with stone accent walls. Frame &amp; Art TVs install flush for a flat $250. <Link href="/#pricing">Full price list →</Link></p>

          <h2>Why Edmond books local</h2>
          <ul>
            <li><b>We&apos;re your neighbors.</b> Based in Edmond, serving Deer Creek, Arcadia, Guthrie, and the whole OKC metro — often with same-week appointments.</li>
            <li><b>Book direct, skip the platforms.</b> No lead fees, no strangers dispatched by an app — Amir shows up himself, background-checked and insured.</li>
            <li><b>New-build friendly.</b> In-wall wiring with recessed outlets for that clean, model-home look above the fireplace.</li>
          </ul>

          <h2>Beyond the TV</h2>
          <p>Soundbars ($79), device hookup ($40), smart-TV and WiFi setup ($49), universal remotes ($59), plus <Link href="/home-theater-installation-okc/">surround sound and home theater</Link> at $150–200 per speaker, <Link href="/whole-home-audio-okc/">Sonos and whole-home audio</Link>, and <Link href="/low-voltage-wiring-okc/">cameras and Cat6 wiring</Link>.</p>

          <div className="ctaband">
            <h2>Book your Edmond TV mount</h2>
            <p>Pick a time online — we&apos;re minutes away.</p>
            <Link className="btn" href="/book/">Book online</Link>
          </div>
        </div>
      </main>
    </>
  );
}
