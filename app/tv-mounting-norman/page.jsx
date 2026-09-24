import Link from 'next/link';

export const metadata = {
  title: 'TV Mounting Norman, OK — From $125, Wires Hidden | I Connect 4 U',
  description: 'TV mounting in Norman, OK from $125 with flat published prices. Fireplace and brick mounts, wires hidden in-wall, game-day ready. 4.9★, 300+ installs, insured. Book online 7 days a week.',
  alternates: { canonical: 'https://ic4u.us/tv-mounting-norman/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'TV Mounting in Norman', serviceType: 'TV wall mounting and installation',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'City', name: 'Norman', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
    offers: [
      { '@type': 'Offer', name: 'Basic TV Mounting', price: '125', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Standard TV Mounting with tilting mount', price: '200', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Premium TV Mounting with in-wall wiring', price: '299', priceCurrency: 'USD' }
    ]
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      ['How much does TV mounting cost in Norman, OK?', 'TV mounting in Norman costs $125 to $299 flat. Basic is $125 with your own mount (up to 65 inches), Standard is $200 with a tilting mount included and cords concealed, and Premium is $299 for any size with a full-motion mount and wires hidden in-wall.'],
      ['Do you charge a trip fee to Norman?', 'No. Norman is part of our standard OKC-metro service area — the published price is the full price, 7 days a week, 8am to 8pm.'],
      ['Can you mount a TV in an apartment near campus?', 'Yes — we mount in apartments, rentals, and student housing all over Norman, and a cord-cover raceway ($50) keeps the install clean without opening walls.']
    ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'TV Mounting Norman', item: 'https://ic4u.us/tv-mounting-norman/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › TV Mounting Norman</div>
          <h1>TV Mounting in <em>Norman, OK</em> — game-day ready, from $125.</h1>
          <p>TV mounting in Norman costs <b>$125 to $299</b>, flat — no trip fee, no hourly meter. From Brookhaven and Hall Park to the apartments off Lindsey Street, we hang it level, hide the wires, and connect every device. 4.9★ across 300+ metro installs.</p>
          <Link className="btn" href="/book/">Book online</Link>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>Norman TV mounting prices</h2>
          <div className="prices">
            <div className="prow"><span><b>Basic</b><small>TVs up to 65&quot; · you provide the mount · cords tidied</small></span><span className="p">$125</span></div>
            <div className="prow"><span><b>Standard — most popular</b><small>TVs up to 75&quot; · tilting mount included · every device connected · cords concealed</small></span><span className="p">$200</span></div>
            <div className="prow"><span><b>Premium</b><small>Any size · full-motion mount · wires fully in-wall · recessed outlet</small></span><span className="p">$299</span></div>
          </div>
          <p>Brick, stone, and above-fireplace mounts add $75. Frame &amp; Art TVs install flush for $250. Renting near campus? A paintable cord-cover raceway ($50) gives a clean look without cutting drywall. <Link href="/#pricing">Full price list →</Link></p>

          <h2>Why Norman homes book us</h2>
          <ul>
            <li><b>Flat prices, published online.</b> Build your exact quote in 30 seconds with the <Link href="/quote/">quote builder</Link> — the number you see is the number you pay.</li>
            <li><b>Weekends and evenings.</b> 8am–8pm, 7 days — we work around kickoff, not the other way.</li>
            <li><b>Every wall type.</b> Older Norman brick, new-build drywall, stone fireplaces in Summit Lakes and Carrington — right anchors, every time.</li>
            <li><b>Insured &amp; background-checked</b>, 3× Thumbtack Top Pro, with <Link href="/reviews/">195+ public reviews</Link>.</li>
          </ul>

          <h2>The whole setup, one visit</h2>
          <p>Soundbars ($79), device hookup ($40), smart-TV and WiFi setup ($49), plus <Link href="/home-theater-installation-okc/">surround sound and Dolby Atmos</Link> at $150–200 per speaker, <Link href="/whole-home-audio-okc/">whole-home audio</Link>, and <Link href="/low-voltage-wiring-okc/">Cat6 network wiring</Link> for the home office.</p>

          <h2>Common questions in Norman</h2>
          <div className="faq">
            <details><summary>How much does TV mounting cost in Norman?</summary><div className="a">$125 to $299 flat, depending on the package — see the prices above. Fireplace/brick adds $75.</div></details>
            <details><summary>Do you charge extra to drive to Norman?</summary><div className="a">No — Norman is inside our standard service area. Published price is the full price.</div></details>
            <details><summary>Can you mount in apartments and rentals?</summary><div className="a">Yes, all over Norman — and a $50 cord-cover raceway keeps it landlord-friendly with no in-wall cutting.</div></details>
          </div>

          <div className="ctaband">
            <h2>Book your Norman TV mount</h2>
            <p>Pick a time online — evenings and weekends included.</p>
            <Link className="btn" href="/book/">Book online</Link>
          </div>
        </div>
      </main>
    </>
  );
}
