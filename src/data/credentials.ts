import type { Certification, EducationEntry } from '../types'

export const education: EducationEntry[] = [
  {
    school: 'SVKM Institute of Technology, Dhule',
    qualification: 'B.Tech, Computer Engineering',
    period: '2023 — 2027',
    result: 'CGPA 6.95',
    coursework: [
      'Data Structures',
      'Operating Systems',
      'Database Systems',
      'Design & Analysis of Algorithms',
      'Computer Architecture',
      'Theory of Computation',
      'Software Engineering',
    ],
  },
  {
    school: 'Jai Hind Junior College, Dhule',
    qualification: 'Higher Secondary (HSC) · MSBSHSE',
    period: '2022 — 2023',
    result: '60.17%',
  },
  {
    school: 'Jai Hind High School, Dhule',
    qualification: 'Secondary (SSC) · MSBSHSE',
    period: '2020 — 2021',
    result: '72.80%',
  },
]

export const certifications: Certification[] = [
  { title: 'React Bootcamp', issuer: 'LetsUpgrade EdTech', date: 'Jul 2024' },
  { title: 'Build an AI Text Summarizer App', issuer: 'Postman Academy', date: 'Nov 2023' },
  { title: 'API Beginner Learning Path', issuer: 'Postman Academy', date: 'Nov 2023' },
]
