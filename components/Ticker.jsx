export default function Ticker() {
  const items = ['TV mounting from $125', 'Wires hidden in-wall', 'Home theater & Dolby Atmos', 'Sonos & whole-home audio', 'Security cameras', 'Cat5/Cat6 & structured wiring', '4.9★ · 300+ installs', 'Book online in 60 seconds'];
  const row = items.map((t, i) => <span key={i}>{t} ✦</span>);
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">{row}{row}</div>
    </div>
  );
}
