import type { SkillGroup } from '../types'

/* ─────────────────────────────────────────────────────────────────────────
   TODO: Make this honest. No bars, no percentages — just what you reach for
   and a terse, truthful qualifier. Engineers trust this far more than 95%.
   ───────────────────────────────────────────────────────────────────────── */
export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    entries: [
      { name: 'TypeScript', note: 'daily driver' },
      { name: 'JavaScript', note: 'ES2023+' },
      { name: 'Python', note: 'ML & scripting' },
      { name: 'C / C++', note: 'fundamentals' },
      { name: 'Java', note: 'comfortable' },
      { name: 'HTML & CSS', note: 'semantic, modern' },
    ],
  },
  {
    title: 'Frontend',
    entries: [
      { name: 'React', note: '18 / 19' },
      { name: 'React Native', note: 'Expo' },
      { name: 'Next.js', note: 'app router' },
      { name: 'Tailwind CSS', note: 'v4' },
    ],
  },
  {
    title: 'Backend & Data',
    entries: [
      { name: 'Node.js', note: 'APIs & tooling' },
      { name: 'Express.js' },
      { name: 'PostgreSQL', note: 'Supabase' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Cloud & Tools',
    entries: [
      { name: 'AWS', note: 'cloud club' },
      { name: 'GCP' },
      { name: 'Git & GitHub' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'Core',
    entries: [
      { name: 'REST APIs', note: 'JWT auth' },
      { name: 'Machine Learning', note: 'KNN / SVM' },
      { name: 'IoT', note: 'ESP8266 / sensors' },
      { name: 'Generative AI', note: 'Gemini / OpenRouter' },
    ],
  },
]
