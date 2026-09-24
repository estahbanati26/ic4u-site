import Link from 'next/link';

export const metadata = {
  title: 'Project: Starfield-Ceiling Home Theater, OKC Metro | I Connect 4 U',
  description: 'A dedicated home theater we built in the OKC metro: starfield ceiling, wall-to-wall screen, surround sound with every wire run in-wall. Real job, our photo. Theater installs run $150-200 per speaker.',
  alternates: { canonical: 'https://ic4u.us/work/starfield-home-theater/' }
};

const LD = [
  {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Project Spotlight: Starfield-Ceiling Home Theater in the OKC Metro',
    author: { '@type': 'Organization', name: 'I Connect 4 U LLC', url: 'https://ic4u.us/' },
    publisher: { '@id': 'https://ic4u.us/#business' },
    datePublished: '2026-09-24', dateModified: '2026-09-24',
    image: 'https://production-next-images-cdn.thumbtack.com/i/445544493443211267/width/640.jpeg',
    mainEntityOfPage: 'https://ic4u.us/work/starfield-home-theater/'
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ic4u.us/' },
      { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://ic4u.us/gallery/' },
      { '@type': 'ListItem', position: 3, name: 'Starfield Home Theater', item: 'https://ic4u.us/work/starfield-home-theater/' }
    ]
  }
];

export default function Page() {
  return (
    <>
      {LD.map((o, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />)}
      <div className="subhero">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 30, alignItems: 'center' }}>
          <div>
            <div className="crumb"><Link href="/">Home</Link> › <Link href="/gallery/">Our Work</Link> › Starfield Home Theater</div>
            <h1>Project spotlight: <em>a theater with its own night sky</em>.</h1>
            <p>A dedicated home theater we built in an OKC-metro home — starfield ceiling, screen wall, theater seating, and surround sound with every wire run where you can&apos;t see it. Our job, our photo.</p>
            <Link className="btn" href="/book/">Book a free walkthrough</Link>
          </div>
          <img src="https://production-next-images-cdn.thumbtack.com/i/445544493443211267/width/640.jpeg" alt="Dedicated home theater with starfield ceiling and screen wall built by I Connect 4 U in the OKC metro" style={{ width: '100%', borderRadius: 16, border: '1px solid rgba(255,255,255,.12)' }} />
        </div>
      </div>
      <style>{`@media(max-width:880px){.subhero .wrap{grid-template-columns:1fr !important}}`}</style>
      <main>
        <div className="prose">
          <h2>What went into this room</h2>
          <p>A theater like this is really four jobs done in the right order: <b>the wiring</b> (speaker runs, HDMI, and power routed in-wall and overhead before anything pretty happens), <b>the video</b> (screen wall placement sized to the seating distance), <b>the audio</b> (fronts, center, surrounds, and sub placed around the actual sweet spot — not just where there&apos;s space), and <b>the finish</b> — the starfield ceiling that makes movie night feel like something you bought a ticket for.</p>

          <h2>What a room like this costs</h2>
          <p>Theater installs are custom-quoted after a free walkthrough, with labor at <b>$150–200 per speaker, wiring included</b> — a 5.1 room runs roughly $900–$1,200 in install labor, a 7.2.4 Atmos room $1,950–$2,275. Equipment is priced separately (yours or spec&apos;d to your budget). Try the <Link href="/home-theater-installation-okc/">home theater estimator</Link> for your configuration&apos;s range.</p>

          <h2>Want yours?</h2>
          <p>Every build starts with a free in-home walkthrough anywhere in the OKC metro — Edmond, Oklahoma City, Norman, Moore, Yukon and beyond. We measure, listen to what you want it to feel like, and hand you an itemized quote. See more <Link href="/gallery/">real job photos</Link> and <Link href="/reviews/">195+ reviews</Link>.</p>

          <div className="ctaband">
            <h2>Movie night, upgraded</h2>
            <p>Free walkthrough · custom quote · clean in-wall wiring.</p>
            <Link className="btn" href="/book/">Book a free walkthrough</Link>
          </div>
        </div>
      </main>
    </>
  );
}
