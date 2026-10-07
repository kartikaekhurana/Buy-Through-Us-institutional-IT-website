export const siteConfig = {
  name: 'Buy Through Us',
  tagline: 'You run the company. We run your hardware.',
  description:
    'IT hardware procurement, setup and ongoing support for startups and institutions across Delhi NCR, Chandigarh and Punjab.',
  // Confirm which supplied contact number(s) are WhatsApp-enabled before activating chat links.
  contactEmail: 'buythroughus@gmail.com',
  contactPeople: [
    { name: 'Kartikae Khurana', phone: '8558074708' },
    { name: 'Samit Wadhwa', phone: '9717913568' },
  ],
  whatsappNumber: '',
  addresses: {
    noida: '[Noida address to be added]',
    chandigarhMohali: '[Chandigarh / Mohali address to be added]',
  },
  startingBuy: '[X]',
  startingManaged: '[X]',
  warrantyPeriod: '[Confirm warranty period per product]',
  warrantySummary: '[Warranty terms to be confirmed per product and quote]',
  returnSummary: '[Return and replacement terms to be confirmed per product and quote]',
  canonicalOrigin: '[Canonical website URL to be added]',
  coverageRegions: [
    {
      label: 'Delhi NCR',
      places: ['Noida', 'Greater Noida', 'Delhi', 'Gurugram', 'Ghaziabad', 'Faridabad'],
      description: 'Procurement, setup and support scope depends on the requirement and location.',
    },
    {
      label: 'Chandigarh Tricity',
      places: ['Chandigarh', 'Mohali', 'Panchkula'],
      description: 'Tell us the site and equipment scope so we can confirm the right service arrangement.',
    },
    {
      label: 'Punjab',
      places: ['Ludhiana', 'Bathinda', 'Other Punjab locations'],
      description: 'Projects are considered based on scale, timing and site requirements.',
    },
  ],
  contactCities: [
    'Noida',
    'Delhi',
    'Gurugram',
    'Ghaziabad',
    'Faridabad',
    'Greater Noida',
    'Chandigarh',
    'Mohali',
    'Panchkula',
    'Ludhiana',
    'Bathinda',
    'Other',
  ],
  contactRoles: [
    'Administration / office',
    'Teaching / classrooms',
    'Research / lab',
    'Healthcare / clinical',
    'Design / engineering',
    'Transport / operations',
    'Founder / leadership',
    'Other',
  ],
};

export const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Buy Through Us | IT hardware, setup & support',
    description: 'Hardware procurement and practical IT support for startups and institutions across Delhi NCR, Chandigarh and Punjab.',
  },
  '/services': { title: 'IT Services | Buy Through Us', description: 'Devices, networking, AV, workplace setup and ongoing IT support for organizations.' },
  '/roles': { title: 'IT Plan Estimator | Buy Through Us', description: 'Build a practical equipment checklist for your team, campus or organization.' },
  '/plans': { title: 'IT Procurement Plans | Buy Through Us', description: 'Compare one-time hardware buying with a monthly managed service approach.' },
  '/refurbished': { title: 'Refurbished IT Hardware | Buy Through Us', description: 'Understand refurbished grades and condition checks before requesting a quote.' },
  '/coverage': { title: 'Service Coverage | Buy Through Us', description: 'Explore Buy Through Us coverage across Delhi NCR, Chandigarh Tricity and Punjab.' },
  '/how-it-works': { title: 'How It Works | Buy Through Us', description: 'A clear process for planning, sourcing, setting up and supporting your IT.' },
  '/faq': { title: 'Frequently Asked Questions | Buy Through Us', description: 'Answers about procurement, plans, refurbished devices, support and coverage.' },
  '/contact': { title: 'Contact Buy Through Us', description: 'Tell us what your team or site needs. We will help shape a practical IT plan.' },
  '/privacy': { title: 'Privacy Policy | Buy Through Us', description: 'Draft privacy information for Buy Through Us website enquiries.' },
  '/terms': { title: 'Terms of Use | Buy Through Us', description: 'Draft website and service terms for Buy Through Us.' },
  '/warranty': { title: 'Warranty & Returns | Buy Through Us', description: 'Draft warranty, return and replacement information for Buy Through Us.' },
};
