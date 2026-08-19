import Link from 'next/link';

// Arsalan's own job photos, served from his Thumbtack profile media CDN.
// TODO: replace with locally hosted originals in /public/gallery for full control.
const IDS = ['498519005501972486','453228643001688069','448842161542987788','431319592553463810','534198086754828293','433018740414693376','445545052228288520','445544825787850757','467835437910081544','467835441736720390','481445276726042629','481514383996723202','481491099325775884','481744711045079052','485304759910424608'];
const src = id => 'https://production-next-images-cdn.thumbtack.com/i/' + id + '/width/640.jpeg';
const THUMBTACK_URL = 'https://www.thumbtack.com/profile/services/444888121324822537/';

export const metadata = {
  title: 'Job Photos — Real TV Mounts & Installs in OKC | I Connect 4 U',
  description: 'Real installation photos from I Connect 4 U jobs across Edmond and the OKC metro — TV mounts, fireplace installs, home theaters and clean in-wall wiring. No stock photos.',
  alternates: { canonical: 'https://ic4u.us/gallery/' }
};

export default function Gallery() {
  return (
    <>
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Job Photos</div>
          <h1>Real jobs. Real walls. <em>No stock photos.</em></h1>
          <p>Every photo below is our own work in OKC-metro homes — mounted level, wires handled, rooms left clean. 168 project photos and 180+ five-star reviews live on our Thumbtack profile.</p>
          <Link className="btn" href="/book/">Book your install</Link>
        </div>
      </div>
      <main>
        <div className="wrap">
          <div className="gallery">
            {IDS.map(id => (
              <img key={id} src={src(id)} alt="TV mounting and AV installation by I Connect 4 U in the Oklahoma City metro" loading="lazy" />
            ))}
          </div>
          <div className="ctaband">
            <h2>Want yours to look like this?</h2>
            <p>Pick a package, pick a time — most installs happen within the week. <a href={THUMBTACK_URL} target="_blank" rel="noopener" style={{ color: 'var(--amber)' }}>See all 168 photos on Thumbtack →</a></p>
            <Link className="btn" href="/book/">Book online</Link>
          </div>
        </div>
      </main>
    </>
  );
}
