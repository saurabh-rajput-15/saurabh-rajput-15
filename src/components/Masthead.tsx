import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { site } from '../data/site'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'
import { StatusDateline } from './StatusDateline'
import { Rule } from './layout/Rule'
import { ArrowUpRight } from './icons'
import { useReducedMotion } from '../lib/motion'
import { useIntro } from '../lib/intro'
import { useMagnetic } from '../lib/useMagnetic'
import { splitWords } from '../lib/splitText'

/* The issue nameplate — the one ownable, nameable visual hook. Everything a
   recruiter needs (name, role, stack, résumé) is STATIC text legible in the
   first frame. When motion is allowed, the nameplate + standfirst clip-reveal
   once the intro/preloader finishes; reduced-motion users see it immediately. */
export function Masthead() {
  const reduced = useReducedMotion()
  const { done } = useIntro()
  const root = useRef<HTMLElement>(null)
  const resumeRef = useMagnetic<HTMLAnchorElement>()

  useGSAP(
    () => {
      if (reduced || !root.current) return
      const targets = root.current.querySelectorAll<HTMLElement>('[data-hero-reveal]')
      const words = Array.from(targets).flatMap((el) => splitWords(el))
      if (!done) {
        gsap.set(words, { yPercent: 115, opacity: 0 })
        return
      }
      // fromTo (not to): useGSAP reverts the prior set on re-run, so we must
      // re-assert the hidden start state for the entrance to actually play.
      gsap.fromTo(
        words,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, ease: 'power4.out', stagger: 0.05 },
      )
    },
    { scope: root, dependencies: [done, reduced] },
  )

  return (
    <header ref={root} className="relative">
      <Rule tone="accent" />

      <div className="shell">
        {/* top bar: publication line + primary nav */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-5">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted">
            The Portfolio
          </p>
          <div className="flex items-center gap-5">
            <Nav />
            <ThemeToggle />
          </div>
        </div>

        {/* nameplate */}
        <div className="pb-8 pt-[7vh] sm:pt-[11vh]">
          <h1 className="text-nameplate font-semibold leading-[0.9] tracking-[-0.03em]">
            <span data-hero-reveal className="block">{site.firstName}</span>
            <span data-hero-reveal className="block italic">{site.lastName}</span>
          </h1>
        </div>

        {/* dateline · standfirst · status — the recruiter-comprehension block */}
        <div className="grid-edit gap-y-7 pb-[9vh]">
          <p className="col-span-12 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.16em] text-muted sm:col-span-4">
            {site.role}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> · </span>
            {site.location} · {site.issue}
          </p>

          <p
            data-hero-reveal
            className="measure col-span-12 font-body text-[clamp(1.2rem,2.2vw,1.65rem)] leading-snug sm:col-span-8"
          >
            {site.standfirst}
          </p>

          <div className="col-span-12 flex flex-wrap items-center gap-x-8 gap-y-3 sm:col-span-8 sm:col-start-5">
            <StatusDateline />
            <a
              ref={resumeRef}
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="arrow-link inline-flex items-center gap-1 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink ink-underline"
            >
              Download résumé
              <ArrowUpRight className="text-[0.9em]" />
            </a>
          </div>
        </div>
      </div>

      <Rule />
    </header>
  )
}
