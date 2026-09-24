import Link from 'next/link';

export const metadata = {
  title: 'How to Hide TV Wires: In-Wall vs Raceway Cost (OKC 2026) | I Connect 4 U',
  description: 'Hiding TV wires costs $50 for a paintable cord cover or $120 for true in-wall concealment with a recessed outlet in the OKC metro — free with a $299 Premium mount. What each option looks like and which walls qualify.',
  alternates: { canonical: 'https://ic4u.us/guides/hide-tv-wires-in-wall/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'How to Hide TV Wires: In-Wall vs Cord Cover, Real OKC Prices',
    author: { '@type': 'Organization', name: 'I Connect 4 U LLC', url: 'https://ic4u.us/' },
    publisher: { '@id': 'https://ic4u.us/#business' },
    datePublished: '2026-09-24', dateModified: '2026-09-24',
    mainEntityOfPage: 'https://ic4u.us/guides/hide-tv-wires-in-wall/'
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      ['How much does it cost to hide TV wires in the wall?', 'In the OKC metro, true in-wall wire concealment with a recessed outlet costs $120 as an add-on to any TV mount, and is included free with a $299 Premium install. A paintable cord-cover raceway on the wall surface costs $50.'],
      ['Is it safe to run a TV power cord inside the wall?', 'A standard power cord should never be run inside a wall — it violates electrical code. The correct method uses an in-wall rated power relocation kit with a recessed outlet behind the TV, which is exactly what a professional install includes.'],
      ['Can you hide TV wires on a brick or stone fireplace?', 'Wires usually cannot be fished through solid brick or stone. The clean options are a painted raceway that blends with the masonry, or routing through an adjacent stud wall when the layout allows. A pro can tell you in one look which your fireplace supports.'],
      ['Can renters hide TV wires without cutting the wall?', 'Yes — a paintable cord-cover raceway ($50) hides cables against the wall with no drywall cutting, which keeps it landlord-friendly and removable.']
    ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://ic4u.us/guides/tv-mounting-cost-oklahoma-city/' },
      { '@type': 'ListItem', position: 3, name: 'Hide TV Wires', item: 'https://ic4u.us/guides/hide-tv-wires-in-wall/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Guides › Hide TV Wires</div>
          <h1>Hiding TV wires: <em>what it really costs</em> and which way is right.</h1>
          <p>In the OKC metro it costs <b>$50</b> for a paintable cord cover or <b>$120</b> for true in-wall concealment with a recessed outlet — and in-wall is <b>free</b> inside our $299 Premium mount. Here&apos;s how each option looks, and what your wall allows.</p>
          <Link className="btn" href="/quote/">Price my install in 30 seconds</Link>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>Option 1: In-wall concealment — the invisible finish ($120, or free with Premium)</h2>
          <p>We cut two small openings, fish the HDMI and low-voltage cables through the wall cavity, and add a <b>recessed outlet behind the TV</b> using an in-wall rated power kit. Nothing shows — not a cord, not a cover. This is the &quot;magazine photo&quot; look, and it works on standard drywall-over-stud walls, which covers most homes in Edmond, Yukon, Mustang, and newer OKC builds. It&apos;s included free with the <Link href="/guides/tv-mounting-cost-oklahoma-city/">$299 Premium mount</Link>.</p>

          <h2>Option 2: Cord-cover raceway — the 15-minute fix ($50)</h2>
          <p>A slim channel mounts to the wall surface, the cables ride inside, and the cover paints to match your wall. It&apos;s the right call for <b>rentals</b> (no drywall cutting), for <b>solid brick or stone</b> where fishing cable isn&apos;t possible, and for anyone who wants tidy-for-cheap today.</p>

          <h2>The safety part most DIY videos skip</h2>
          <p>A TV&apos;s factory power cord is <b>not rated to run inside a wall</b> — hiding it in the cavity violates electrical code and creates a fire risk. The correct method uses an in-wall rated power relocation kit, which is what the $120 add-on includes. Signal cables (HDMI, ethernet, speaker wire) are fine in-wall when they&apos;re CL-rated.</p>

          <h2>What about fireplaces?</h2>
          <p>Above-fireplace installs are our most-requested job. Drywall chases above the mantel usually take full in-wall concealment; solid brick and stone usually take a painted raceway that disappears into the grout lines. Masonry mounting adds <b>$75</b> for anchors and labor either way. Not sure which yours is? Send a photo to <a href="tel:+14692887126">(469) 288-7126</a> and we&apos;ll tell you before you book.</p>

          <h2>Cost summary</h2>
          <p>Cord-cover raceway — <b>$50</b> · In-wall + recessed outlet — <b>$120</b> · In-wall included — <b>free with $299 Premium</b> · Brick/stone/fireplace surcharge — <b>+$75</b>. Every option comes with the TV hung level and secure and every device connected. See <Link href="/reviews/">what 195+ customers say</Link> about the finish.</p>

          <div className="ctaband">
            <h2>Make the wires disappear</h2>
            <p>Book online — evenings and weekends, all over the OKC metro.</p>
            <Link className="btn" href="/book/">Book online</Link>
          </div>
        </div>
      </main>
    </>
  );
}
