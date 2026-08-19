import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallBar from '../components/CallBar';

export const metadata = {
  metadataBase: new URL('https://ic4u.us'),
  title: 'TV Mounting Oklahoma City & Edmond OK — From $125 | I Connect 4 U',
  description: 'Professional TV mounting in Oklahoma City & Edmond from $125. Wires hidden in-wall, home theater, security cameras & Cat6 wiring. 4.9★, 300+ installs. Book online.',
  applicationName: 'I Connect 4 U',
  openGraph: { siteName: 'I Connect 4 U', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' }
};

export const viewport = { themeColor: '#15171F' };

const BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ic4u.us/#business',
  name: 'I Connect 4 U LLC',
  alternateName: 'I Connect 4 U',
  description: 'Commercial and residential AV: TV and projector installation, home theater setup, whole-home audio (Sonos, Bose), security cameras, Cat5e/Cat6, coaxial and structured wiring, access points, WiFi bridges and all low-voltage installation serving Edmond, Oklahoma City and the OKC metro.',
  url: 'https://ic4u.us/',
  telephone: '+14692887126',
  priceRange: '$125 - $299',
  sameAs: [
    'https://www.thumbtack.com/profile/services/444888121324822537/',
    'https://share.google/fvrsaGc6M80uW8hMI'
  ],
  knowsAbout: ['TV mounting', 'Projector installation', 'Home theater setup', 'Dolby Atmos surround sound', 'Whole-home audio', 'Sonos installation', 'Security camera installation', 'Cat5e and Cat6 network wiring', 'Structured wiring', 'Coaxial wiring', 'WiFi access points', 'Low-voltage installation'],
  slogan: 'TV mounting done right — book it tonight.',
  foundingDate: '2015',
  address: { '@type': 'PostalAddress', addressLocality: 'Edmond', addressRegion: 'OK', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 35.6528, longitude: -97.4781 },
  areaServed: ['Edmond','Oklahoma City','Nichols Hills','Deer Creek','Guthrie','Arcadia','Yukon','Moore','Norman','Midwest City','Piedmont','Mustang'].map(name => ({ '@type': 'City', name })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '08:00', closes: '20:00'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'TV Mounting & AV Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Basic TV Mounting (up to 65", customer provides mount)', price: '125', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Standard TV Mounting (up to 75", tilting mount included, devices connected)', price: '200', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Premium TV Mounting (any size, full-motion mount, in-wall wiring, recessed outlet)', price: '299', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Frame & Art TV Installation', price: '250', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Full-Motion Mount + Installation', price: '225', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Soundbar Mount + Setup', price: '79', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Home Theater / Surround Sound Installation ($150-200 per speaker)', priceSpecification: { '@type': 'PriceSpecification', description: '$150-200 per speaker, wiring + speaker installation; exact quote after free walkthrough' } },
      { '@type': 'Offer', name: 'Whole-Home Audio (Sonos, Bose, in-ceiling, outdoor)', priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } },
      { '@type': 'Offer', name: 'Security Camera Installation & Wiring', priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } },
      { '@type': 'Offer', name: 'Cat5e / Cat6 & Structured Wiring', priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } }
    ]
  }
};

const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://ic4u.us/#website',
  url: 'https://ic4u.us/',
  name: 'I Connect 4 U',
  publisher: { '@id': 'https://ic4u.us/#business' },
  inLanguage: 'en-US'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_LD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_LD) }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallBar from '../components/CallBar';

export const metadata = {
  metadataBase: new URL('https://ic4u.us'),
  title: 'TV Mounting Oklahoma City & Edmond OK — From $125 | I Connect 4 U',
  description: 'Professional TV mounting in Oklahoma City & Edmond from $125. Wires hidden in-wall, home theater, security cameras & Cat6 wiring. 4.9★, 300+ installs. Book online.',
  applicationName: 'I Connect 4 U',
  openGraph: { siteName: 'I Connect 4 U', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' }
};

export const viewport = { themeColor: '#15171F' };

const BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ic4u.us/#business',
  name: 'I Connect 4 U LLC',
  alternateName: 'I Connect 4 U',
  description: 'Commercial and residential AV: TV and projector installation, home theater setup, whole-home audio (Sonos, Bose), security cameras, Cat5e/Cat6, coaxial and structured wiring, access points, WiFi bridges and all low-voltage installation serving Edmond, Oklahoma City and the OKC metro.',
  url: 'https://ic4u.us/',
  telephone: '+14692887126',
  priceRange: '$125 - $299',
  address: { '@type': 'PostalAddress', addressLocality: 'Edmond', addressRegion: 'OK', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 35.6528, longitude: -97.4781 },
  areaServed: ['Edmond','Oklahoma City','Nichols Hills','Deer Creek','Guthrie','Arcadia','Yukon','Moore','Norman','Midwest City','Piedmont','Mustang'].map(name => ({ '@type': 'City', name })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '08:00', closes: '20:00'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'TV Mounting & AV Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Basic TV Mounting (up to 65", customer provides mount)', price: '125', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Standard TV Mounting (up to 75", tilting mount included, devices connected)', price: '200', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Premium TV Mounting (any size, full-motion mount, in-wall wiring, recessed outlet)', price: '299', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Frame & Art TV Installation', price: '250', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Full-Motion Mount + Installation', price: '225', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Soundbar Mount + Setup', price: '79', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Home Theater / Surround Sound Installation ($150-200 per speaker)', priceSpecification: { '@type': 'PriceSpecification', description: '$150-200 per speaker, wiring + speaker installation; exact quote after free walkthrough' } },
      { '@type': 'Offer', name: 'Whole-Home Audio (Sonos, Bose, in-ceiling, outdoor)', priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } },
      { '@type': 'Offer', name: 'Security Camera Installation & Wiring', priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } },
      { '@type': 'Offer', name: 'Cat5e / Cat6 & Structured Wiring', priceSpecification: { '@type': 'PriceSpecification', description: 'Custom quote after free walkthrough' } }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_LD) }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
