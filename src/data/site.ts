import type { SiteMeta } from '../types'

/* ─────────────────────────────────────────────────────────────────────────
   TODO: Replace every placeholder below with your real details.
   This file drives the masthead, nav, running folio, and the contact section.
   ───────────────────────────────────────────────────────────────────────── */
export const site: SiteMeta = {
  firstName: 'Saurabh',
  lastName: 'Girase', // set like a magazine byline — the surname is italicised
  role: 'Full-Stack Developer',
  location: 'Dhule, India',
  issue: 'ISSUE 00',

  // One sentence. Role + stack. This is the line a recruiter reads in the
  // first frame, so keep it concrete and legible without any animation.
  standfirst:
    'I build full-stack web and mobile products in React, React Native, and Node.js — from IoT and ML systems to AI-powered apps.',

  status: {
    available: true,
    label: 'open to work',
  },

  email: 'saurabhgirase2005@gmail.com',
  resumeUrl: '/SAURABH_CV.pdf',

  socials: [
    { label: 'GitHub', handle: '@saurabh-rajput-15', href: 'https://github.com/saurabh-rajput-15', icon: 'github' },
    { label: 'LinkedIn', handle: 'in/saurabh-girase', href: 'https://www.linkedin.com/in/saurabhrajput15', icon: 'linkedin' },
    { label: 'Email', handle: 'saurabhgirase2005@gmail.com', href: 'mailto:saurabhgirase2005@gmail.com', icon: 'mail' },
  ],

  // Ordered home-page sections. `id` must match each <section id="…">.
  sections: [
    { id: 'profile', label: 'Profile', folio: '01' },
    { id: 'field-notes', label: 'Field Notes', folio: '02' },
    { id: 'portfolio', label: 'Portfolio', folio: '03' },
    { id: 'credentials', label: 'Credentials', folio: '04' },
    { id: 'beyond-code', label: 'Beyond Code', folio: '05' },
    { id: 'letters', label: 'Letters', folio: '06' },
  ],
}

/* A standalone interstitial pull quote between the skills and portfolio
   sections — keep it to one sharp line of philosophy. */
export const interstitialQuote =
  'The best interface is the one that disappears — fast to load, obvious to use, and impossible to get wrong.'
