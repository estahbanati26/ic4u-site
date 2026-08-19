export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://ic4u.us';
  return [
    { url: base + '/', priority: 1.0 },
    { url: base + '/book/', priority: 0.9 },
    { url: base + '/quote/', priority: 0.9 },
    { url: base + '/tv-mounting-oklahoma-city/', priority: 0.8 },
    { url: base + '/tv-mounting-edmond/', priority: 0.8 },
    { url: base + '/home-theater-installation-okc/', priority: 0.8 },
    { url: base + '/low-voltage-wiring-okc/', priority: 0.8 },
    { url: base + '/whole-home-audio-okc/', priority: 0.8 },
    { url: base + '/gallery/', priority: 0.7 },
  ].map(e => ({ ...e, lastModified: new Date() }));
}
