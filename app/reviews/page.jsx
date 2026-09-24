import Link from 'next/link';

export const metadata = {
  title: 'Reviews — 4.9★ Across 195+ Jobs | I Connect 4 U — TV Mounting OKC',
  description: 'Read real customer reviews of I Connect 4 U: 4.9★ from 180 Thumbtack reviews and 4.8★ on Google. TV mounting, home theater and wiring across Edmond and the OKC metro.',
  alternates: { canonical: 'https://ic4u.us/reviews/' }
};

const THUMBTACK_URL = 'https://www.thumbtack.com/profile/services/444888121324822537/';
const GOOGLE_URL = 'https://share.google/fvrsaGc6M80uW8hMI';

const TT = [
  ['David W.', 'Oct 2023', 'We highly, HIGHLY recommend I Connect 4 U! We were impressed by his level of detail in ensuring our TV was level and centered just perfectly! He was quick while being absolutely precise. He also went above and beyond to set up our antenna and to be sure that it, along with all cords, were out of sight.'],
  ['Jeremy H.', 'May 2023', 'From the start of the job to the end, Amir and his associate were top notch. They mounted 5 TVs in my house and also a sound bar. They were efficient, great communicators, and also suggested some additional services with networking to make my new construction home feel more settled.'],
  ['Laura L.', 'Jul 2023', 'Amir did an excellent job installing my new short throw laser projector! He is friendly, knowledgeable and replied quickly to my messages. His suggestions on how to get the most out of my home theater were very helpful.'],
  ['Jennifer H.', 'Sep 2023', 'Very prompt, did an excellent job hanging my large TV above my fireplace. He was efficient and cleaned up when he was done. Will definitely hire him again!'],
  ['Alfonso R.', 'Sep 2023', 'This team is very professional and quick to complete the project — took less than an hour. No hidden or additional charges. Gave great recommendations on placement of the TV and taught us how to use the full motion mount.'],
  ['Toby J.', 'Apr 2025', 'Great work! Able to troubleshoot a tricky mounting location with ease!'],
  ['Cheryl O.', 'Aug 2023', 'Amir was awesome to work with. Very professional and hung a very large flatscreen. Love how it looks! He was quick and knew what he was doing.'],
  ['Mike C.', 'Jun 2023', 'Great job of hanging my TV on the brick patio. Job was done one day after my request and was done in an excellent manner.'],
  ['George P.', 'Jul 2023', 'He is professional and knows what he is doing. Excellent job skills and a good communicator. I recommend him to anybody looking for good quality work — and he is not crazy on his price either.'],
  ['Kurt N.', 'Mar 2023', 'Excellent work. Will be hiring again for future projects. He’s the no-brainer choice if you’re wanting your TV properly mounted.'],
  ['Adreana I.', 'Dec 2022', 'Did a great job on installing my wired doorbell cam and hiding the TV cords in my bedroom. Highly recommend!'],
  ['Barbra L.', 'Jun 2024', 'Amir got the job done fast, with no hidden charges, and did excellent work!!!'],
  ['Jamica J.', 'Nov 2022', 'I requested my TVs be mounted and 30 minutes later he arrived and got to work!'],
  ['Montu P.', 'Apr 2022', 'Amir and his team are prompt to respond and do an excellent job. Hard working, quality work, fair pricing.'],
  ['Cody S.', 'Aug 2022', 'Fast responding and hard working! Very trustworthy! If I need a job done this is the only person I will call. Hands down the best!'],
  ['Tauni Y.', 'Apr 2023', 'Amir is awesome and as long as he is in business, we will not use anyone but him.'],
  ['John H.', 'Oct 2022', 'Excellent work on a tough job with brick walls.'],
  ['Roger P.', 'Apr 2023', 'Easily the best. Called in and got same-day service — best service and best price.'],
  ['Brandon B.', 'Jun 2022', 'The technician was a consummate professional, extremely talented and knowledgeable. I would not hesitate to invite him back for future projects.'],
  ['Stephen M.', 'Apr 2022', 'Came out same day and completed the job quickly and got everything working as I wanted. Would recommend Amir for wiring jobs.'],
  ['Eldhose A.', 'Jun 2023', 'Amir did a great job. He was to the point and finished promptly. TV setup looks great now. Highly recommended.'],
  ['Jordan S.', 'May 2022', 'They did a great job hanging my TV up above my fireplace!'],
  ['Donna M.', 'Mar 2022', 'Fast, explained everything he was doing and why. Very well pleased and would highly recommend!'],
  ['Lynn S.', 'Nov 2022', 'Great work, prompt responses, professional and friendly service!'],
];

const GG = [
  ['Emily Garcia', 'Amir was awesome! He installed 2 TVs for me and a speaker bar in my living room. He was super responsive and let me know when he was on the way. Easy and reliable — I will definitely be using him again.'],
  ['JD W', 'I had a very large 75" Samsung Frame that needed mounting, and he was able to do it in under an hour. Resourceful with his materials, and super friendly. Almost a decade of experience with these kinds of things, and it definitely shows.'],
  ['Mindy', 'We moved into a new home and were ready for all the electronics to be set up. Amir has been top notch since the first conversation. He and his crew did an AMAZING job setting up our TVs, internet and more.'],
  ['Roy Aslani', 'Amir was professional and friendly. He did a great job running all the wires through the attic. I would definitely hire him again for my next projects.'],
  ['Andrea', 'He did a fast-paced, well executed, and clean job which made the rooms look professional and appealing. Best equipment, well priced, humble service.'],
  ['B Young', 'Amir helped us design and install our home theater!! The time and work invested into the renovation was smooth and it turned out amazing. You won’t be disappointed!!'],
  ['Taylor', 'Whether I need a TV mounted or wiring redone, he always comes on time and helps me as quickly as possible!'],
  ['noushin bastani', 'They mounted 4 TVs for my restaurant’s display and handled the wiring. The prices are reasonable and their team was very professional. I definitely recommend them.'],
  ['Micaliah Farris', 'Amir was really quick to respond, professional and efficient. I would definitely hire again for future projects!'],
];

export default function Reviews() {
  return (
    <>
      <div className="subhero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> › Reviews</div>
          <h1>195+ reviews. <em>One promise kept.</em></h1>
          <p><b>4.9★ across 180 Thumbtack reviews</b> (94% five-star) and <b>4.8★ on Google</b> — earned one level, secure, tidy install at a time across the OKC metro. Every review below is real, public, and verifiable at the source.</p>
          <Link className="btn" href="/book/">Book your install</Link>{' '}
          <a className="btn btn-ghost" href={THUMBTACK_URL} target="_blank" rel="noopener" style={{ marginLeft: 10 }}>Verify on Thumbtack</a>
        </div>
      </div>
      <main>
        <div className="wrap">
          <div className="sec-head" style={{ paddingTop: 30 }}>
            <div className="eyebrow">From Google</div>
            <h2>What Google customers say</h2>
          </div>
          <div className="reviews">
            {GG.map(([who, text]) => (
              <div className="review" key={who}>
                <div className="stars">★★★★★</div>
                <p>&quot;{text}&quot;</p>
                <div className="who">{who}<small>via Google</small></div>
              </div>
            ))}
          </div>

          <div className="sec-head" style={{ paddingTop: 40 }}>
            <div className="eyebrow">From Thumbtack — 180 reviews, 94% five-star</div>
            <h2>What Thumbtack customers say</h2>
          </div>
          <div className="reviews">
            {TT.map(([who, when, text]) => (
              <div className="review" key={who + when}>
                <div className="stars">★★★★★</div>
                <p>&quot;{text}&quot;</p>
                <div className="who">{who}<small>Hired on Thumbtack · {when}</small></div>
              </div>
            ))}
          </div>

          <div className="ctaband" style={{ marginTop: 40 }}>
            <h2>Read them all — then book with confidence</h2>
            <p><a href={THUMBTACK_URL} target="_blank" rel="noopener" style={{ color: 'var(--amber)' }}>All 180 reviews on Thumbtack →</a> · <a href={GOOGLE_URL} target="_blank" rel="noopener" style={{ color: 'var(--amber)' }}>Find us on Google →</a></p>
            <Link className="btn" href="/book/">Book online</Link>
          </div>
        </div>
      </main>
    </>
  );
}
