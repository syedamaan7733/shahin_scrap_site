// Single source of truth for contact details and site-wide constants.
export const SITE = {
  name: 'Shahin Scrap',
  motto: 'Trusted Since 1985',
  foundedYear: 1985,
  phoneDisplay: '+91 86021 23226',
  phoneE164: '+918602123226',
  whatsappNumber: '918602123226',
  whatsappPrefill:
    "Hello Shahin Scrap, I'd like to discuss a scrap requirement.",
  email: 'ashadkhan.ambikapur1@gmail.com',
  address: 'Mahamaya Road, Ambikapur, Surguja, Chhattisgarh — 497001',
  addressShort: 'Ambikapur, Surguja (CG)',
  hours: 'Daily, 8:00 AM – 10:00 PM',
  mapsQuery: 'Mahamaya Road, Ambikapur, Surguja, Chhattisgarh 497001',
  co2AvoidedTonnes: 20,
  description:
    'Shahin Scrap — metal, material and vehicle scrapping firm serving mining, industrial and government sectors from Ambikapur, Surguja, Chhattisgarh. Trusted since 1985.',
};

export const whatsappLink = (text: string = SITE.whatsappPrefill) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${SITE.phoneE164}`;

export const mailtoLink = `mailto:${SITE.email}`;

export const CONTACTS = [
  {
    name: 'Zeeshan Ahmed Khan',
    phoneDisplay: '+91 83191 27709',
    phoneE164: '+918319127709',
    email: 'zeeshankhan.ambikapur@gmail.com',
  },
  {
    name: 'Ahmed Ashadullah Khan',
    phoneDisplay: '+91 86021 23226',
    phoneE164: '+918602123226',
    email: 'ashadkhan.ambikapur1@gmail.com',
  },
];

export const CLIENTS = [
  { name: 'South Eastern Coalfields Limited', logo: '/clients/secl.png' },
  { name: 'Maa Kudargarhi Group', logo: '/clients/mkg.webp' },
  { name: 'Adani Enterprises', logo: '/clients/adani.webp' },
  { name: 'NTPC Limited', logo: '/clients/ntpc.svg' },
];

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Vehicle Scrap', href: '/vehicle-scrap' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Companies', href: '/companies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
