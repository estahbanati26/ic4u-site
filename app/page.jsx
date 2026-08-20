import Link from 'next/link';
import Ticker from '../components/Ticker';
import QuoteBuilder from '../components/QuoteBuilder';
import TheaterSim from '../components/TheaterSim';
import RoomDiagram from '../components/RoomDiagram';
import { BasicArt, StandardArt, PremiumArt } from '../components/TierArt';

export const metadata = {
  title: 'TV Mounting Oklahoma City & Edmond OK — From $125 | I Connect 4 U',
  description: 'Professional TV mounting in Oklahoma City & Edmond from $125. Wires hidden in-wall, same-week appointments. 4.9★, 300+ installs, insured & background-checked. Price your install in 30 seconds and book online.',
  alternates: { canonical: 'https://ic4u.us/' },
  openGraph: {
    title: 'TV Mounting OKC & Edmond — From $125 | I Connect 4 U',
    description: 'Pro TV mounting & home theater install across the OKC metro. 4.9★, 300+ installs. Price your install online and book in 60 seconds.',
    url: 'https://ic4u.us/',
    images: [{ url: 'https://production-next-images-cdn.thumbtack.com/i/498519005501972486/desktop/standard/fullscreen', width: 1200, height: 900, alt: 'Home theater installed by I Connect 4 U in the OKC metro' }]
  }
};

const FAQ = [
  ['How much does TV mounting cost in Oklahoma City?', <>TV mounting starts at <b>$125</b> for TVs up to 65&quot; when you provide the mount. Our most popular package is <b>$200</b> — we supply a tilting mount for TVs up to 75&quot;, connect every device, and conceal the cords. Premium installs with a full-motion mount, in-wall wiring, and recessed outlet are <b>$299</b> for any size.</>],
  ['Do you bring the TV mount, or do I need to buy one?', <>Either works. With Basic ($125) you provide the mount. Standard ($200) includes a tilting mount, Premium ($299) includes a full-motion mount, and we also offer a full-motion mount plus install for $225.</>],
  ['Can you hide the TV wires inside the wall?', <>Yes. In-wall wire concealment with a recessed outlet is $120 as an add-on — and included free with Premium. Prefer a simpler fix? A paintable cord-cover raceway is $50.</>],
  ['Can you mount a TV over a brick or stone fireplace?', <>Yes — brick, stone, tile, and above-fireplace mounts are routine for us. It adds $75 to any package for masonry anchors and extra labor.</>],
  ['What areas do you serve?', <>We&apos;re based in Edmond, OK and serve the entire OKC metro: Oklahoma City, Norman, Moore, Midwest City, Del City, Yukon, Mustang, Piedmont, Guthrie, Arcadia, Nichols Hills, The Village, Warr Acres, Bethany, Choctaw, Newcastle, Tuttle, El Reno, Shawnee, and every neighborhood in between. <a href="#areas">See the full list ↓</a></>],
  ['Are you insured and background-checked?', <>Yes. I Connect 4 U LLC is insured and background-checked, with a 4.9-star rating across 300+ installs and three-time Thumbtack Top Pro status.</>],
  ['Do you install security cameras and run Cat5/Cat6 wiring?', <>Yes — wired PoE camera systems, Cat5e/Cat6 ethernet drops, structured wiring, and all low-voltage installs. Custom-quoted after a free walkthrough. <Link href="/low-voltage-wiring-okc/">Learn more →</Link></>],
  ['Do you install surround sound and home theater systems?', <>Yes — 5.1, 7.1, 7.2, and Dolby Atmos, plus theater rooms, projectors, and whole-home audio at $150–200 per speaker installed. <Link href="/home-theater-installation-okc/">Learn more →</Link></>],
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['How much does TV mounting cost in Oklahoma City?', 'TV mounting starts at $125 for TVs up to 65 inches when you provide the mount. Our most popular package is $200, which includes a tilting mount for TVs up to 75 inches, full device hookup, and concealed cords. Premium installs with a full-motion mount, in-wall wiring, and a recessed outlet are $299 for any size TV.'],
    ['Do you bring the TV mount, or do I need to buy one?', 'Either works. With the Basic package ($125) you provide the mount. With Standard ($200) we supply a tilting mount, and with Premium ($299) we supply a full-motion mount. We also offer a full-motion mount plus install for $225.'],
    ['Can you hide the TV wires inside the wall?', 'Yes. In-wall wire concealment with a recessed outlet is $120 as an add-on and included free with the Premium package. A paintable cord-cover raceway is $50.'],
    ['Can you mount a TV over a brick or stone fireplace?', 'Yes — we mount on brick, stone, tile, and above fireplaces regularly. It adds $75 to any package for the masonry anchors and extra labor.'],
    ['What areas do you serve?', "We're based in Edmond, OK and serve the entire OKC metro: Oklahoma City, Norman, Moore, Midwest City, Del City, Yukon, Mustang, Piedmont, Guthrie, Arcadia, Nichols Hills, The Village, Warr Acres, Bethany, Choctaw, Harrah, Jones, Luther, Newcastle, Tuttle, Blanchard, El Reno, and Shawnee — including OKC, Edmond, and Norman neighborhoods like Deer Creek, Quail Creek, Gaillardia, Oak Tree, Coffee Creek, Iron Horse Ranch, Brookhaven, and Hall Park."],
    ['Are you insured and background-checked?', 'Yes. I Connect 4 U LLC is insured and background-checked, with a 4.9-star rating across 300+ installs and three-time Thumbtack Top Pro status.'],
    ['Do you install security cameras and run Cat5/Cat6 network wiring?', 'Yes — wired PoE security camera systems, Cat5e/Cat6 ethernet drops, structured wiring, and all types of low-voltage installation across the OKC metro. These are custom-quoted after a free walkthrough.'],
    ['Do you install surround sound and home theater systems?', 'Yes — 5.1, 7.1, 7.2 and Dolby Atmos systems, plus full theater rooms, projectors, and whole-home audio, at $150–200 per speaker installed (wiring included). Exact quote after a free in-home walkthrough.'],
  ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
};

const SERVICES = [
  ['01', 'TV & Projector Installation', 'TV mounting from $125 — Basic, Standard, Premium, Frame TVs — plus ceiling projectors and fixed screens.', '/#pricing'],
  ['02', 'Home Theater Setup', '5.1 to 11.2.4 Dolby Atmos at $150–200 per speaker, wiring included. Designed to your room.', '/home-theater-installation-okc/'],
  ['03', 'Audio / Video Installation', 'Whole-home and commercial AV — Sonos, Bose, in-ceiling, outdoor and multi-zone audio, video distribution.', '/whole-home-audio-okc/'],
  ['04', 'Security & Camera Systems', 'Wired PoE camera systems and video doorbells, installed and cabled right — no batteries, no WiFi dropouts.', '/low-voltage-wiring-okc/'],
  ['05', 'Network & Structured Wiring', 'Cat5e/Cat6, coaxial, speaker and all low-voltage wiring — home-run panels, terminated, labeled, tested.', '/low-voltage-wiring-okc/'],
  ['06', 'WiFi, Access Points & Bridges', 'Wired access points, building-to-building WiFi bridges, mesh systems, and networks that actually reach.', '/low-voltage-wiring-okc/'],
];

const THUMBTACK_URL = 'https://www.thumbtack.com/profile/services/444888121324822537/';
const GOOGLE_URL = 'https://share.google/fvrsaGc6M80uW8hMI';

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <header className="site" style={{ position: 'static' }}>
        <div className="wrap">
          <div className="hero">
            <div>
              <div className="eyebrow-lt">Edmond · Oklahoma City · The Metro</div>
              <h1>TV mounting done right. <em>Book it tonight.</em></h1>
              <p className="sub">Skip the national booking sites. Book direct with a local pro — clean installs, hidden wires, and home theaters, usually within the week.</p>
              <div className="hero-cta">
                <Link className="btn" href="/book/">Book online</Link>
                <Link className="btn btn-ghost" href="/quote/">Get a free quote</Link>
              </div>
              <div className="creds">
                <span><b>★ 180+</b> five-star reviews</span>
                <span><b>300+</b> installs</span>
                <span><b>3×</b> Thumbtack Top Pro</span>
                <span><b>Background-checked</b> &amp; insured</span>
                <span><b>10+</b> years</span>
              </div>
            </div>
            <div className="hero-art" style={{ backgroundImage: 'linear-gradient(rgba(21,23,31,.45), rgba(21,23,31,.78)), url(https://production-next-images-cdn.thumbtack.com/i/498519005501972486/width/640.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="from-badge">TV MOUNTING FROM</span>
              <div className="big">$125<small> / install</small></div>
              <div className="note" style={{ color: '#e6e8ee' }}>Our work, our photo — a home theater we built in the OKC metro. Free quotes on bigger jobs.</div>
            </div>
          </div>
        </div>
      </header>

      <Ticker />

      <main>
        <section id="pricing">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">TV Mounting Prices</div>
              <h2>Three ways to mount — pick your finish</h2>
              <p>TV mounting in Oklahoma City and Edmond costs <b>$125 to $299</b> depending on the finish. Every TV is hung level and secure — the difference is how the wires disappear.</p>
            </div>
            <div className="tiers">
              <div className="tier">
                <div className="body">
                  <h3 className="name">Basic</h3>
                  <div className="price">$125</div>
                  <div className="size">TVs up to 65&quot;</div>
                  <div className="illus"><BasicArt /></div>
                  <div className="desc"><strong>Install only — you provide the mount.</strong> Hung level and secure, cables tidied along the wall.</div>
                  <span className="cap">Cord tidied</span>
                </div>
              </div>
              <div className="tier pop">
                <div className="flag">★ Most Popular</div>
                <div className="body">
                  <h3 className="name">Standard</h3>
                  <div className="price">$200</div>
                  <div className="size">TVs up to 75&quot;</div>
                  <div className="illus"><StandardArt /></div>
                  <div className="desc"><strong>We supply the tilting mount</strong> and connect every device. Cords concealed in a clean cover.</div>
                  <span className="cap">Cord concealed</span>
                </div>
              </div>
              <div className="tier">
                <div className="body">
                  <h3 className="name">Premium</h3>
                  <div className="price">$299</div>
                  <div className="size">Any size</div>
                  <div className="illus"><PremiumArt /></div>
                  <div className="desc"><strong>Full-motion mount, wires fully in-wall</strong>, recessed outlet. Zero clutter, swivel &amp; extend.</div>
                  <span className="cap">Wires in-wall</span>
                </div>
              </div>
            </div>
            <div className="strip">
              <div className="cell">
                <div>
                  <div className="nm">Frame &amp; Art TV install</div>
                  <div className="sm">Flush, no-gap mount — wires hidden.</div>
                </div>
                <div className="pr">$250</div>
              </div>
              <div className="cell">
                <div>
                  <div className="nm">Full-motion mount + install</div>
                  <div className="sm">We supply the mount — swivel &amp; extend.</div>
                </div>
                <div className="pr">$225</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--panel)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Everything We Install · Commercial &amp; Residential</div>
              <h2>One pro. The whole job.</h2>
              <p>Homes, offices, restaurants, and retail across the OKC metro — same clean wiring discipline everywhere.</p>
            </div>
            <div className="numlist">
              {SERVICES.map(([num, nm, nd, href]) => (
                <Link className="numrow" href={href} key={num}>
                  <span className="num">{num}</span>
                  <span><span className="nm">{nm}</span><div className="nd">{nd}</div></span>
                  <span className="go">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="cols">
              <div className="card">
                <h3>Popular add-ons</h3>
                <div className="rate"><div className="rn">Cord-cover raceway</div><div className="rp">$50</div></div>
                <div className="rate"><div className="rn">In-wall wiring + recessed outlet <small>included in Premium</small></div><div className="rp">$120</div></div>
                <div className="rate"><div className="rn">Brick / stone / tile / fireplace</div><div className="rp">+$75</div></div>
                <div className="rate"><div className="rn">Old-TV haul-away</div><div className="rp">$25</div></div>
              </div>
              <div className="card">
                <h3>Device &amp; audio setup</h3>
                <div className="rate"><div className="rn">Device hookup</div><div className="rp">$40</div></div>
                <div className="rate"><div className="rn">Soundbar mount + setup</div><div className="rp">$79</div></div>
                <div className="rate"><div className="rn">WiFi / smart-TV apps</div><div className="rp">$49</div></div>
                <div className="rate"><div className="rn">Universal remote</div><div className="rp">$59</div></div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="surround">
              <div>
                <div className="eyebrow">Surround Sound</div>
                <h2>5.1 · 7.2 · Dolby Atmos</h2>
                <p>The premium upgrade to any mounting job. We design the layout to your room — $150–200 per speaker, wiring included. <Link href="/home-theater-installation-okc/" style={{ color: 'var(--amber)' }}>More on home theater →</Link></p>
                <a className="btn" href="#theater-sim">Estimate my theater price</a>
              </div>
              <div className="room"><RoomDiagram /></div>
            </div>
            <p className="also">Also custom quoted: <b>theater rooms · projector + screen · <Link href="/whole-home-audio-okc/" style={{ color: 'var(--amber-deep)' }}>whole-home &amp; outdoor audio (Sonos, Bose…)</Link> · <Link href="/low-voltage-wiring-okc/" style={{ color: 'var(--amber-deep)' }}>security cameras · Cat5/Cat6 &amp; structured wiring</Link> · smart-home automation</b>.</p>
          </div>
        </section>

        <section id="theater-sim" style={{ background: 'var(--panel)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Home Theater Estimator</div>
              <h2>Simplest setup to full theater — see your range</h2>
              <p>Tap through your setup for a realistic install range — <b>$150–200 per speaker, wiring + speaker installation</b>. Equipment priced separately; exact quote at your free walkthrough.</p>
            </div>
            <TheaterSim />
          </div>
        </section>

        <section id="quote">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Build your quote</div>
              <h2>Price your install in 30 seconds</h2>
              <p>Tap to build your job and see the price instantly — the same upfront price you&apos;d pay, no lead fees, no middleman markup.</p>
            </div>
            <QuoteBuilder />
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Recent Work</div>
              <h2>Our walls. Our wiring. Our photos.</h2>
              <p>Straight from real OKC-metro jobs — no stock photos anywhere on this site.</p>
            </div>
            <div className="gallery" style={{ margin: '0 0 22px' }}>
              <img src="https://production-next-images-cdn.thumbtack.com/i/445544493443211267/width/640.jpeg" alt="Starfield-ceiling home theater installed by I Connect 4 U" loading="lazy" />
              <img src="https://production-next-images-cdn.thumbtack.com/i/445544493704896520/width/640.jpeg" alt="LED-backlit TV mount with soundbar by I Connect 4 U" loading="lazy" />
              <img src="https://production-next-images-cdn.thumbtack.com/i/445544493846822921/width/640.jpeg" alt="Clean structured wiring panel installed by I Connect 4 U" loading="lazy" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link className="btn" href="/gallery/">See all job photos</Link>
            </div>
          </div>
        </section>

        <section id="reviews" style={{ background: 'var(--panel)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Reviews</div>
              <h2>Rated Excellent — 4.9 across 180 reviews</h2>
              <p>94% five-star. Customers rate us highest for work quality, professionalism, and responsiveness.</p>
            </div>
            <div className="reviews">
              <div className="review">
                <div className="stars">★★★★★</div>
                <p>&quot;Great work! Able to troubleshoot a tricky mounting location with ease!&quot;</p>
                <div className="who">Toby J.<small>Hired on Thumbtack</small></div>
              </div>
              <div className="review">
                <div className="stars">★★★★★</div>
                <p>&quot;Amir did an amazing job mounting both of my TVs! He explained everything to us and also explained what would work best for us.&quot;</p>
                <div className="who">Tracy H.<small>Hired on Thumbtack</small></div>
              </div>
              <div className="review">
                <div className="stars">★★★★★</div>
                <p>&quot;Very professional and quick — took less than an hour. No hidden or additional charges, and taught us how to use the full-motion mount.&quot;</p>
                <div className="who">Alfonso R.<small>Hired on Thumbtack</small></div>
              </div>
              <div className="review">
                <div className="stars">★★★★★</div>
                <p>&quot;Did a great job mounting TVs on a brick wall over the fireplace and on our back porch — got them both done in about an hour.&quot;</p>
                <div className="who">Craig S.<small>Hired on Thumbtack</small></div>
              </div>
              <div className="review" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <div className="stars" style={{ margin: '0 auto' }}>★★★★★</div>
                <p>Real job photos — our trucks, our walls, our wiring. No stock photos.</p>
                <Link className="btn btn-ghost" style={{ borderColor: 'var(--amber)', color: 'var(--ink)' }} href="/gallery/">See job photos</Link>
              </div>
              <div className="review" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', background: 'var(--ink)', color: '#fff', border: 'none' }}>
                <div className="stars" style={{ margin: '0 auto' }}>★★★★★</div>
                <p style={{ color: '#c7cbd6' }}>180 reviews and counting — read them all for yourself.</p>
                <a className="btn" href={THUMBTACK_URL} target="_blank" rel="noopener">Read our Thumbtack reviews</a>
                <a className="btn btn-ghost" href={GOOGLE_URL} target="_blank" rel="noopener" style={{ marginTop: 10 }}>Find us on Google</a>
              </div>
            </div>
          </div>
        </section>

        <section id="areas">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Service Areas</div>
              <h2>Serving Edmond, OKC, Norman &amp; the whole metro</h2>
              <p>Based in Edmond — we come to you across the metro, usually within the week. If you&apos;re within about 45 minutes of Edmond, you&apos;re in our service area.</p>
            </div>
            <h3 style={{ fontFamily: 'var(--display, inherit)', fontSize: 15, margin: '18px 0 10px', color: 'var(--muted)' }}>Cities &amp; towns</h3>
            <div className="areas">
              <Link className="area link" href="/tv-mounting-edmond/">Edmond</Link>
              <Link className="area link" href="/tv-mounting-oklahoma-city/">Oklahoma City</Link>
              {['Norman','Moore','Midwest City','Del City','Yukon','Mustang','Piedmont','Guthrie','Arcadia','Nichols Hills','The Village','Warr Acres','Bethany','Choctaw','Harrah','Jones','Luther','Newcastle','Tuttle','Blanchard','El Reno','Shawnee'].map(c => <span className="area" key={c}>{c}</span>)}
            </div>
            <h3 style={{ fontFamily: 'var(--display, inherit)', fontSize: 15, margin: '18px 0 10px', color: 'var(--muted)' }}>OKC neighborhoods we&apos;re in every week</h3>
            <div className="areas">
              {['Deer Creek','Quail Creek','Gaillardia','Lake Hefner','Britton','Chisholm Creek','Classen Curve','Downtown OKC','Midtown','Bricktown','Plaza District','Paseo','Automobile Alley','Northwest OKC','South OKC'].map(c => <span className="area" key={c}>{c}</span>)}
            </div>
            <h3 style={{ fontFamily: 'var(--display, inherit)', fontSize: 15, margin: '18px 0 10px', color: 'var(--muted)' }}>Edmond neighborhoods</h3>
            <div className="areas">
              {['Oak Tree','Coffee Creek','Iron Horse Ranch','Fairfax','Twin Bridges','Cross Timbers','Huntwick','Valencia','Sorghum Mill','Olde Edmond','Covell Corridor','UCO area'].map(c => <span className="area" key={c}>{c}</span>)}
            </div>
            <h3 style={{ fontFamily: 'var(--display, inherit)', fontSize: 15, margin: '18px 0 10px', color: 'var(--muted)' }}>Norman neighborhoods</h3>
            <div className="areas">
              {['Brookhaven','Hall Park','Summit Lakes','OU campus area','East Norman','West Norman'].map(c => <span className="area" key={c}>{c}</span>)}
            </div>
            <p style={{ marginTop: 16, color: 'var(--muted)', fontSize: 14 }}>Don&apos;t see your neighborhood? If it&apos;s in the OKC metro, we cover it — <a href="tel:+14692887126" style={{ color: 'var(--amber-deep)' }}>call or text (469) 288-7126</a>.</p>
          </div>
        </section>

        <section id="faq" style={{ background: 'var(--panel)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">FAQ</div>
              <h2>TV mounting questions, answered</h2>
            </div>
            <div className="faq">
              {FAQ.map(([q, a], i) => (
                <details key={i}>
                  <summary>{q}</summary>
                  <div className="a">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">How it works</div>
              <h2>From booking to binge-ready in three steps</h2>
            </div>
            <div className="steps">
              <div className="step"><div className="num">1</div><h4>Book</h4><p>Book online or call. Tell us your TV size and wall — pick a time that works.</p></div>
              <div className="step"><div className="num">2</div><h4>We install</h4><p>On time, clean, and tidy. Mounted level, wires handled, every device connected.</p></div>
              <div className="step"><div className="num">3</div><h4>Enjoy</h4><p>We walk you through it before we leave. Backed by 300+ happy installs.</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
