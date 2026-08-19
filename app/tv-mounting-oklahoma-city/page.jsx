import Link from 'next/link';

export const metadata = {
  title: 'TV Mounting Oklahoma City, OK — From $125 | I Connect 4 U',
  description: 'Local TV mounting in Oklahoma City from $125. Wires hidden in-wall, fireplace mounts, soundbars & smart TVs. 4.9★, 300+ installs, insured. Book direct — no lead fees.',
  alternates: { canonical: 'https://ic4u.us/tv-mounting-oklahoma-city/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'TV Mounting in Oklahoma City', serviceType: 'TV wall mounting and installation',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'City', name: 'Oklahoma City', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
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
      { '@type': 'ListItem', position: 2, name: 'TV Mounting Oklahoma City', item: 'https://ic4u.us/tv-mounting-oklahoma-city/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › TV Mounting Oklahoma City</div>
          <h1>TV Mounting in <em>Oklahoma City</em> — from $125, wires hidden.</h1>
          <p>Book direct with a local, insured pro — not a national booking site that resells your job. Upfront pricing, 4.9★ across 300+ installs, and appointments usually within the week.</p>
          <Link className="btn" href="/book/">Book online</Link>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>Upfront TV mounting prices in OKC</h2>
          <div className="prices">
            <div className="prow"><span><b>Basic</b><small>TVs up to 65&quot; · you provide the mount · cords tidied</small></span><span className="p">$125</span></div>
            <div className="prow"><span><b>Standard — most popular</b><small>TVs up to 75&quot; · tilting mount included · every device connected · cords concealed</small></span><span className="p">$200</span></div>
            <div className="prow"><span><b>Premium</b><small>Any size · full-motion mount · wires fully in-wall · recessed outlet</small></span><span className="p">$299</span></div>
          </div>
          <p>Mounting over a brick, stone, or tile fireplace adds $75. Frame &amp; Art TV installs are a flat $250 with a flush, no-gap finish. <Link href="/#pricing">See the full price list →</Link></p>

          <h2>Why OKC homeowners book us direct</h2>
          <ul>
            <li><b>No middleman markup.</b> The big booking platforms charge lead fees and take a cut — you pay our price, not theirs.</li>
            <li><b>One pro, every time.</b> Amir does the install himself — background-checked, insured, 10+ years of AV work.</li>
            <li><b>The finish options that matter.</b> Cord covers, in-wall wiring with a recessed outlet, soundbars, and full surround sound.</li>
            <li><b>All of OKC covered</b> — from downtown and Midtown to Quail Springs, Lake Hefner, and the far south side.</li>
          </ul>

          <h2>More than mounting</h2>
          <p>We also handle soundbar mounting ($79), device hookup ($40), WiFi and smart-TV app setup ($49), universal remotes ($59), <Link href="/home-theater-installation-okc/">home theater and surround sound</Link> at $150–200 per speaker, <Link href="/whole-home-audio-okc/">whole-home audio</Link>, and <Link href="/low-voltage-wiring-okc/">security cameras and Cat6 wiring</Link>.</p>

          <div className="ctaband">
            <h2>Book your Oklahoma City TV mount</h2>
            <p>Pick a time online — most installs scheduled within the week.</p>
            <Link className="btn" href="/book/">Book online</Link>
          </div>
        </div>
      </main>
    </>
  );
}
