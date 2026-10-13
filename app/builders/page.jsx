import Link from 'next/link';

export const metadata = {
  title: 'Low-Voltage Prewire for Builders & Contractors — OKC & Edmond | I Connect 4 U',
  description: 'Low-voltage prewire and structured cabling for home builders, general contractors, and electrical contractors across Edmond and the OKC metro. Cat6, coax, TV and media-wall prewire, speaker wire, and WiFi runs — on schedule, labeled, and tested.',
  alternates: { canonical: 'https://ic4u.us/builders/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Low-Voltage Prewire for Builders & Contractors',
    serviceType: 'New-construction low-voltage prewire, structured cabling, and trim-out',
    provider: { '@id': 'https://ic4u.us/#business' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oklahoma City metro' },
    audience: { '@type': 'BusinessAudience', name: 'Home builders, general contractors, and electrical contractors' }
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'Builders & Contractors', item: 'https://ic4u.us/builders/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Builders &amp; Contractors</div>
          <h1>Low-voltage prewire that is done on schedule and <em>professionally done</em></h1>
          <p>Cat6, coax, TV and media-wall boxes, speaker wire, and WiFi cabling for home builders and contractors in Edmond and the OKC metro. Send a floor plan and get a written price back. 4.9★ · 300+ installs · insured &amp; background-checked · 10+ years.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="btn" href="/quote/">Send a plan for pricing</Link>
            <a className="btn btn-ghost" href="tel:+14692887126">📞 (469) 288-7126</a>
          </div>
        </div>
      </div>
      <main>
        <div className="prose">
          <h2>What we prewire and trim out</h2>
          <p>Every run is labeled at both ends and tested before we leave.</p>
          <div className="svc">
            <div className="cell"><b>Structured cabling</b><span>Cat5e and Cat6 runs home-run to a central panel, plus patch panels and rack cleanup.</span></div>
            <div className="cell"><b>TV &amp; media walls</b><span>Low-voltage boxes and cable paths at each TV location, pulled before drywall.</span></div>
            <div className="cell"><b>Coax &amp; speaker wire</b><span>Coax to main TV locations, and speaker wire for soundbars, in-ceiling, and whole-home audio.</span></div>
            <div className="cell"><b>WiFi access points</b><span>Cable runs and mounting for ceiling access points, with setup and testing.</span></div>
            <div className="cell"><b>Trim-out after paint</b><span>Device plates, TV mounts, hookup, and a final test of every drop.</span></div>
            <div className="cell"><b>As-built sheet</b><span>A one-page record of every drop and label for each home or suite.</span></div>
          </div>
          <p>Scope is low-voltage data, voice, and audio-video cabling. Work that needs a separate license, such as line-voltage wiring, is quoted separately and is not included unless stated. More detail on our <Link href="/low-voltage-wiring-okc/">low-voltage wiring page</Link>.</p>

          <h2>How we work with your team</h2>
          <ul>
            <li><b>1 · Send the plan.</b> Email or text a floor plan or plan set. We reply with a written quote within 24 hours.</li>
            <li><b>2 · Walk the site.</b> We confirm outlet, panel, and wire-path locations with your superintendent. No charge.</li>
            <li><b>3 · Prewire before drywall.</b> We schedule around your framing and inspections, and label every cable.</li>
            <li><b>4 · Trim out and test.</b> After paint we finish each drop, test it, and leave the as-built sheet.</li>
          </ul>

          <h2>For production builders</h2>
          <ul>
            <li>One standing price sheet per floor plan — a fixed price per home for a standard prewire package</li>
            <li>Per-drop pricing for add-ons</li>
            <li>The same labeling and schedule on every house</li>
          </ul>

          <h2>For general and electrical contractors</h2>
          <ul>
            <li>Per-drop unit pricing for commercial and multifamily scopes</li>
            <li>W-9, certificate of insurance, and references on request</li>
            <li>Cable pulling and rough-in labor as a sub on data and communications scopes</li>
          </ul>

          <div className="ctaband">
            <h2>Send us your next floor plan</h2>
            <p>Call or text Amir at (469) 288-7126, or send the details online. We answer the phone and quote fast.</p>
            <Link className="btn" href="/quote/">Send a plan for pricing</Link>
          </div>
        </div>
      </main>
    </>
  );
}
