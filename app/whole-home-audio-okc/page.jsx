import Link from 'next/link';

export const metadata = {
  title: 'Whole-Home Audio Installation OKC — Sonos, Bose & In-Ceiling Speakers | I Connect 4 U',
  description: 'Whole-home audio installation in Edmond & the OKC metro: Sonos, Bose, in-ceiling speakers, outdoor & patio audio. Clean in-wall wiring by an insured local pro. Free walkthrough & custom quote.',
  alternates: { canonical: 'https://ic4u.us/whole-home-audio-okc/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Whole-Home Audio Installation',
    serviceType: 'Whole-home audio, multi-room speaker and outdoor audio installation',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oklahoma City metro' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Whole-Home Audio Services',
      itemListElement: ['Sonos system setup & installation', 'Bose & other brand speaker installation', 'In-ceiling / in-wall speaker installation & wiring', 'Outdoor & patio audio'].map(name => ({ '@type': 'Offer', name, priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } }))
    }
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'Whole-Home Audio OKC', item: 'https://ic4u.us/whole-home-audio-okc/' }
    ]
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      ['Do you install Sonos systems in Oklahoma City?', 'Yes — we set up and install Sonos throughout the OKC metro: soundbars, Era speakers, Sonos Amp with wired in-ceiling speakers, and multi-room configurations, all tuned and grouped in the app before we leave.'],
      ['Wireless speakers or wired in-ceiling — which is better?', 'Both have a place. Wireless systems like Sonos and Bose are flexible and easy to grow. Wired in-ceiling speakers disappear into the room and never drop out — and pairing a Sonos Amp with wired ceiling speakers gives you both. We recommend the right mix at the free walkthrough.'],
      ['Can you add outdoor or patio speakers?', 'Yes — weatherproof patio and pool-area speakers wired back to your system, so the backyard is on the same app as the kitchen. Custom-quoted after a free walkthrough.']
    ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Whole-Home Audio</div>
          <h1>Whole-home audio — <em>Sonos, Bose &amp; in-ceiling</em> — installed across the OKC metro.</h1>
          <p>Music in every room, one app to run it all. We install and tune Sonos, Bose, and wired in-ceiling systems — kitchen to patio — with the wiring hidden and the setup finished before we leave. Free walkthrough, custom quote.</p>
          <Link className="btn" href="/book/">Book a free walkthrough</Link>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>What we install</h2>
          <div className="svc">
            <div className="cell"><b>Sonos</b><span>Soundbars, Era speakers, and Sonos Amp driving wired in-ceiling speakers — grouped, tuned, and on your phone before we&apos;re out the door.</span></div>
            <div className="cell"><b>Bose &amp; other brands</b><span>Bose smart speakers and soundbars, plus Denon HEOS, Yamaha MusicCast, and whatever gear you already own or want.</span></div>
            <div className="cell"><b>In-ceiling &amp; in-wall speakers</b><span>Speakers that disappear into the room, wired through attic and wall cavities — no visible boxes, no dropouts.</span></div>
            <div className="cell"><b>Outdoor &amp; patio audio</b><span>Weatherproof speakers for the patio and pool, on the same app as the rest of the house.</span></div>
          </div>

          <h2>Own the gear or starting fresh — both work</h2>
          <p>Already bought a Sonos set on sale? We&apos;ll install, wire, and configure it. Starting from zero? We&apos;ll spec a system to your budget at the walkthrough — you buy the equipment, we make every room sound right. Either way the wiring runs in-wall, the same clean discipline behind our <Link href="/#pricing">Premium TV mounts</Link> and <Link href="/low-voltage-wiring-okc/">structured wiring</Link>.</p>

          <h2>How the quote works</h2>
          <ul>
            <li><b>1 · Free walkthrough.</b> We walk the rooms, check attic access, and figure out where music should live — inside and out.</li>
            <li><b>2 · Custom quote.</b> Itemized by room and speaker — no hourly surprises, no obligation.</li>
            <li><b>3 · Install day.</b> Speakers in, wires hidden, every zone tested and playing from your phone before we leave.</li>
          </ul>

          <h2>Common questions</h2>
          <div className="faq">
            <details><summary>Do you install Sonos systems?</summary><div className="a">Yes — full Sonos setups including Sonos Amp with wired in-ceiling speakers, multi-room grouping, and app configuration throughout the OKC metro.</div></details>
            <details><summary>Wireless speakers or wired in-ceiling — which is better?</summary><div className="a">Wireless (Sonos, Bose) is flexible and easy to grow; wired in-ceiling disappears into the room and never drops out. A Sonos Amp with wired ceiling speakers gives you both — we&apos;ll recommend the right mix at the walkthrough.</div></details>
            <details><summary>Can you add outdoor or patio speakers?</summary><div className="a">Yes — weatherproof patio and pool-area speakers wired back to your system, on the same app as the kitchen.</div></details>
          </div>

          <h2>Pairs with home theater</h2>
          <p>Many customers do both at once: <Link href="/home-theater-installation-okc/">surround sound in the living room</Link>, whole-home audio everywhere else — one walkthrough covers it all.</p>

          <div className="ctaband">
            <h2>Music in every room</h2>
            <p>Free walkthrough anywhere in the OKC metro — Edmond, Oklahoma City &amp; surrounding.</p>
            <Link className="btn" href="/book/">Book a free walkthrough</Link>
          </div>
        </div>
      </main>
    </>
  );
}
