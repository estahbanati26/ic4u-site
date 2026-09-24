import Link from 'next/link';

// ============================================================
// VLOG EMBEDS: when Arsalan films an episode and uploads it to
// YouTube, add { id: '<youtube-video-id>', title: '...' } to
// EPISODES below and the player renders automatically.
// ============================================================
const EPISODES = [];

export const metadata = {
  title: 'Install Vlog — Real TV Mounting & Theater Builds in OKC | I Connect 4 U',
  description: 'Watch real TV mounting and home theater installs from around the OKC metro — fireplace mounts, in-wall wiring, and before/afters from I Connect 4 U. New episodes as we film them on real jobs.',
  alternates: { canonical: 'https://ic4u.us/vlog/' }
};

export default function Vlog() {
  return (
    <>
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Install Vlog</div>
          <h1>The install vlog: <em>real jobs, real walls</em>.</h1>
          <p>Short videos from actual OKC-metro installs — fireplace mounts, wires disappearing into walls, theater builds coming together. Filmed on the job, not in a studio.</p>
          <Link className="btn" href="/book/">Book your install</Link>
        </div>
      </div>
      <main>
        <div className="wrap">
          {EPISODES.length > 0 ? (
            <div className="gallery" style={{ marginTop: 30 }}>
              {EPISODES.map(ep => (
                <div key={ep.id} style={{ aspectRatio: '16/9' }}>
                  <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${ep.id}`} title={ep.title} frameBorder="0" allowFullScreen style={{ borderRadius: 12 }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="prose">
              <h2>First episodes are being filmed now</h2>
              <p>We&apos;re filming on real jobs across the metro — first up: an 85&quot; over a brick fireplace with the wires vanishing in-wall. While you wait, the photos don&apos;t lie: see <Link href="/work/starfield-home-theater/">our latest project spotlight</Link> and <Link href="/gallery/">every job photo</Link>, or read <Link href="/reviews/">195+ customer reviews</Link>.</p>
              <div className="ctaband">
                <h2>Don&apos;t wait for the video</h2>
                <p>Your install can be the next episode — from $125, booked online.</p>
                <Link className="btn" href="/book/">Book online</Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
