import Link from 'next/link';

export const metadata = {
  title: 'Low-Voltage Wiring & Security Camera Installation OKC | Cat5/Cat6 | I Connect 4 U',
  description: 'Cat5e/Cat6 network wiring, structured wiring, and security camera installation across Edmond & the OKC metro. Clean in-wall runs by an insured local pro. Free walkthrough & custom quote.',
  alternates: { canonical: 'https://ic4u.us/low-voltage-wiring-okc/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Low-Voltage Wiring & Security Camera Installation',
    serviceType: 'Low-voltage wiring, Cat5e/Cat6 network cabling, structured wiring and security camera installation',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oklahoma City metro' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Low-Voltage Services',
      itemListElement: ['Cat5e / Cat6 network wiring (ethernet drops)', 'Coaxial wiring', 'Structured wiring / whole-home and office wiring panels', 'Security camera installation and wiring', 'WiFi access points and point-to-point WiFi bridges', 'Audio and speaker wiring', 'Low-voltage installation — commercial and residential'].map(name => ({ '@type': 'Offer', name, priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } }))
    }
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'Low-Voltage Wiring & Security Cameras OKC', item: 'https://ic4u.us/low-voltage-wiring-okc/' }
    ]
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      ['How much does it cost to run Cat6 ethernet in a house in OKC?', 'It depends on the number of drops, wall construction, and attic or crawlspace access, so we quote each job after a free walkthrough. You get a clear, itemized price per run before any work starts.'],
      ['Do you install security cameras I already bought?', 'Yes — we install and wire customer-supplied camera systems (Reolink, Lorex, Ubiquiti, Ring, and others) or help you spec a system to your budget. Wired PoE installs are our specialty.'],
      ['Can you add wiring to a finished home without tearing up walls?', 'In most homes, yes. We fish cable through attics, crawlspaces, and wall cavities and cut in clean low-voltage boxes, so finished walls stay finished.']
    ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 30, alignItems: 'center' }}>
          <div>
            <div className="crumb"><Link href="/">Home</Link> › Low-Voltage Wiring &amp; Security Cameras</div>
            <h1>Low-voltage wiring &amp; <em>security camera installation</em> in the OKC metro.</h1>
            <p>Cat5e/Cat6 network drops, structured wiring, PoE camera systems, and every kind of low-voltage install — run clean, in-wall, by an insured local pro. Free walkthrough, itemized custom quote, no obligation.</p>
            <Link className="btn" href="/book/">Book a free walkthrough</Link>
          </div>
          <img src="https://production-next-images-cdn.thumbtack.com/i/445544493846822921/width/640.jpeg" alt="Clean structured wiring panels installed by I Connect 4 U" style={{ width: '100%', borderRadius: 16, border: '1px solid rgba(255,255,255,.12)' }} />
        </div>
      </div>
      <style>{`@media(max-width:880px){.subhero .wrap{grid-template-columns:1fr !important}}`}</style>
      <main>
        <div className="prose">
          <h2 id="network">What we wire — commercial &amp; residential</h2>
          <div className="svc">
            <div className="cell"><b>Cat5e / Cat6 network wiring</b><span>Hardwired ethernet drops to offices, TVs, gaming setups, and access points — terminated, labeled, and tested. WiFi is a convenience; wire is a guarantee.</span></div>
            <div className="cell"><b>Structured wiring</b><span>Whole-home and office wiring panels — network, coaxial, and speaker runs home-ran to one clean enclosure.</span></div>
            <div className="cell"><b>Security cameras</b><span>Wired PoE camera systems installed and cabled right — no batteries to change, no WiFi dropouts. We install your gear (Reolink, Lorex, Ubiquiti, Ring…) or spec a system to your budget.</span></div>
            <div className="cell"><b>Coaxial &amp; audio wiring</b><span>Coax runs for TV and internet, speaker wire to every zone, and clean terminations at both ends.</span></div>
            <div className="cell"><b>Access points &amp; WiFi bridges</b><span>Wired WiFi access points for full-house coverage, and point-to-point bridges for shops, garages, and outbuildings.</span></div>
            <div className="cell"><b>All low-voltage installs</b><span>In-ceiling speakers, video doorbells, smart-home devices, media panels — if it runs on low voltage, we run it. Homes and businesses alike.</span></div>
          </div>

          <h2>Finished walls stay finished</h2>
          <p>Most of our wiring goes into homes that are already built. We fish cable through attics, crawlspaces, and wall cavities, cut in clean low-voltage boxes, and leave paint-ready walls — the same in-wall discipline behind our <Link href="/#pricing">Premium TV mounts</Link>.</p>

          <h2>How the quote works</h2>
          <ul>
            <li><b>1 · Free walkthrough.</b> We count drops and camera positions, check attic/crawl access, and talk through what you actually need.</li>
            <li><b>2 · Itemized quote.</b> A clear price per run and per camera — no hourly surprises.</li>
            <li><b>3 · Install day.</b> Cables terminated, labeled, and tested; cameras aimed, connected, and pulled up on your phone before we leave.</li>
          </ul>

          <h2>Common questions</h2>
          <div className="faq">
            <details><summary>How much does it cost to run Cat6 in a house?</summary><div className="a">Depends on the number of drops, wall construction, and attic access — so we quote after a free walkthrough. You&apos;ll get a clear per-run price before any work starts.</div></details>
            <details><summary>Do you install cameras I already bought?</summary><div className="a">Yes — customer-supplied systems are welcome. Wired PoE installs are our specialty; we&apos;ll also help you pick gear if you&apos;re starting fresh.</div></details>
            <details><summary>Can you wire a finished home without tearing up walls?</summary><div className="a">Almost always. We fish through attics, crawlspaces, and wall cavities and cut in clean low-voltage boxes — finished walls stay finished.</div></details>
          </div>

          <div className="ctaband">
            <h2>Get it wired right</h2>
            <p>Free walkthrough anywhere in the OKC metro — Edmond, Oklahoma City &amp; surrounding.</p>
            <Link className="btn" href="/book/">Book a free walkthrough</Link>
          </div>
        </div>
      </main>
    </>
  );
}
