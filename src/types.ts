/* Shared content types. All site copy lives in src/data/*.ts and is typed
   against these interfaces, so editing content never means touching a component. */

export interface SocialLink {
  /** Display label, e.g. "GitHub" */
  label: string
  /** Shown as mono metadata, e.g. "@yourhandle" */
  handle: string
  href: string
  /** lucide-react icon key — see components/Letters icon map */
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe'
}

export interface NavSection {
  /** anchor id on the home page */
  id: string
  /** nav label, e.g. "Portfolio" */
  label: string
  /** running-head folio number, e.g. "04" */
  folio: string
}

export interface SiteMeta {
  firstName: string
  lastName: string
  /** profession line, e.g. "Front-End Engineer" */
  role: string
  location: string
  /** masthead dateline issue tag, e.g. "ISSUE 07" */
  issue: string
  /** one sentence, role + stack — must be legible in the first frame */
  standfirst: string
  status: {
    available: boolean
    /** e.g. "open to work" */
    label: string
  }
  email: string
  /** path to the resume PDF in /public or /src/assets */
  resumeUrl: string
  socials: SocialLink[]
  /** ordered home-page sections, drives Nav + the sticky running folio */
  sections: NavSection[]
}

export interface GlanceFact {
  label: string
  value: string
}

export interface ProfileContent {
  kicker: string
  /** the drop-cap lede paragraph */
  lede: string
  /** any further paragraphs of the about feature */
  body: string[]
  /** image path; a styled placeholder renders when omitted */
  headshot?: string
  headshotAlt: string
  /** "AT A GLANCE" leadered fact list */
  glance: GlanceFact[]
  /** pull quote that hangs into the margin within the Profile */
  pullQuote: string
}

export interface SkillEntry {
  name: string
  /** terse qualifier shown right of the leader dots */
  note?: string
}

export interface SkillGroup {
  title: string
  entries: SkillEntry[]
}

export interface EducationEntry {
  school: string
  qualification: string
  /** e.g. "2023 — 2027" */
  period: string
  /** e.g. "CGPA 6.95" or "72.80%" */
  result: string
  /** optional relevant-coursework chips */
  coursework?: string[]
}

export interface Certification {
  title: string
  issuer: string
  /** e.g. "Jul 2024" */
  date: string
  href?: string
}

export interface Position {
  title: string
  org: string
  /** e.g. "Apr 2025 — Present" */
  period: string
}

/** One section of a /work/:slug case-study article */
export interface CaseBlock {
  /** e.g. "Problem" | "Approach" | "Tradeoffs" | "Outcome" */
  heading: string
  body: string[]
}

export interface Project {
  slug: string
  /** large folio numeral, e.g. "01" */
  folio: string
  title: string
  year: string
  role: string
  /** impact-metric-FIRST deck, e.g. "Cut p95 latency 40% for 2M monthly users." */
  impactDeck: string
  /** one paragraph shown on the home feature spread */
  body: string
  stack: string[]
  liveUrl?: string
  sourceUrl?: string
  /** image path; a styled placeholder renders when omitted */
  image?: string
  imageAlt: string
  /** full case-study article; one strong study beats five stubs */
  caseStudy: CaseBlock[]
}
