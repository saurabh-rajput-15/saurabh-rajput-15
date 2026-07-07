import type { ProfileContent } from '../types'

/* ─────────────────────────────────────────────────────────────────────────
   TODO: Rewrite this as your own story. The magazine frame rewards real,
   specific prose — a couple of well-told paragraphs beat a list of adjectives.
   ───────────────────────────────────────────────────────────────────────── */
export const profile: ProfileContent = {
  kicker: 'The Profile',

  // The drop-cap lede. The first letter becomes a large editorial-red drop cap,
  // so open on a strong, concrete sentence.
  lede:
    'I’m a computer engineering student who builds full-stack products end to end — web, mobile, and the hardware in between. From a wearable that reads your posture with machine learning to a commercial fitness platform serving real members, I’m drawn to problems that reach across the whole stack.',

  body: [
    'Most of my projects start with a real need and end in something that runs. Unique Fitness is a freelance ecosystem — a multilingual React 19 site and a React Native app — that a fitness club uses day to day. Others, like AquaMonitor and Spine-Saver, grew out of coursework but were built to actually work: sensors, dashboards, auth and all.',
    'I work mostly in TypeScript across React, React Native, and Node.js, and I’m comfortable reaching for Python and machine learning, IoT hardware, or a generative-AI API when the problem calls for it. I care about shipping things that hold up outside the demo.',
  ],

  headshot: '/headshot.png', // optional — a hairline-framed placeholder shows if omitted
  headshotAlt: 'Portrait of Saurabh Girase',

  glance: [
    { label: 'Education', value: 'B.Tech CE · CGPA 6.95' },
    { label: 'Focus', value: 'Full-stack & AI' },
    { label: 'Based in', value: 'Dhule, India' },
    { label: 'Primary stack', value: 'React · Node.js' },
  ],

  pullQuote:
    'I’m drawn to problems that reach across the whole stack — web, mobile, and the hardware in between.',
}
