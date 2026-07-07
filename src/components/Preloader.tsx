import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { site } from '../data/site'
import { useIntro } from '../lib/intro'
import { useReducedMotion } from '../lib/motion'

/* One-time intro curtain. The nameplate clip-reveals line by line while a hairline
   progress bar fills 0→100, then the whole panel wipes up to hand off to the
   Masthead hero reveal. Skipped for reduced-motion users (IntroProvider starts
   done), and hidden from assistive tech. */
export function Preloader() {
  const reduced = useReducedMotion()
  const { done, finish } = useIntro()
  const root = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      if (reduced || !root.current) return

      gsap.set('[data-pre-line]', { yPercent: 110 })
      gsap.set('[data-pre-fade]', { opacity: 0, y: 8 })

      const counter = { v: 0 }
      const tl = gsap.timeline({ onComplete: finish })

      tl.to('[data-pre-line]', { yPercent: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12 })
        .to('[data-pre-fade]', { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '<0.1')
        .to(
          counter,
          {
            v: 100,
            duration: 1.15,
            ease: 'power1.inOut',
            onUpdate: () => {
              if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(3, '0')
              if (bar.current) gsap.set(bar.current, { scaleX: counter.v / 100 })
            },
          },
          '<0.05',
        )
        // exit
        .to('[data-pre-line]', { yPercent: -110, duration: 0.5, ease: 'power3.in', stagger: 0.08 }, '+=0.25')
        .to('[data-pre-fade]', { opacity: 0, duration: 0.3 }, '<')
        .to(root.current, { yPercent: -100, duration: 0.85, ease: 'power4.inOut' }, '<0.15')
    },
    { scope: root, dependencies: [reduced] },
  )

  // Once finished (or skipped for reduced motion) the curtain is gone for good.
  if (done) return null

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-paper px-[clamp(1.25rem,6vw,5rem)] py-8"
    >
      {/* top line */}
      <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
        <span data-pre-fade>
          {site.firstName} {site.lastName}
        </span>
        <span data-pre-fade>{site.issue}</span>
      </div>

      {/* nameplate — each line masked and clipped in */}
      <h2 className="font-display text-[clamp(2.5rem,9vw,6rem)] font-semibold leading-[0.9] tracking-[-0.03em]">
        <span className="block overflow-hidden">
          <span data-pre-line className="block">{site.firstName}</span>
        </span>
        <span className="block overflow-hidden">
          <span data-pre-line className="block italic">{site.lastName}</span>
        </span>
      </h2>

      {/* footer — role/location + counter, over a filling progress rule */}
      <div>
        <div className="flex items-end justify-between font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          <span data-pre-fade>
            {site.role} — {site.location}
          </span>
          <span data-pre-fade className="text-accent">
            <span ref={count}>000</span>
            <span className="text-muted"> / 100</span>
          </span>
        </div>
        <div className="mt-3 h-px w-full overflow-hidden bg-hairline">
          <div ref={bar} className="h-full w-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </div>
  )
}
