import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../../lib/motion'
import { splitWords } from '../../lib/splitText'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeadingProps {
  /** matches aria-labelledby on the parent <section> */
  id: string
  /** folio number, e.g. "02" */
  folio: string
  label: string
  /** 'paper' (default) or 'panel' for deep-panel sections */
  tone?: 'paper' | 'panel'
}

/* The department running head, e.g. "02 — FIELD NOTES". Doubles as the
   section's accessible <h2>. When motion is allowed, the label clip-reveals
   word-by-word on scroll; reduced-motion users just see the static heading. */
export function SectionHeading({ id, folio, label, tone = 'paper' }: SectionHeadingProps) {
  const labelColor = tone === 'panel' ? 'text-panel-ink' : 'text-ink'
  const dashColor = tone === 'panel' ? 'text-panel-muted' : 'text-hairline'
  const folioColor = tone === 'panel' ? 'text-panel-muted' : 'text-muted'

  const reduced = useReducedMotion()
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      if (reduced || !ref.current) return
      const labelEl = ref.current.querySelector<HTMLElement>('[data-split]')
      if (!labelEl) return
      const words = splitWords(labelEl)
      gsap.from(words, {
        yPercent: 120,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      })
    },
    { scope: ref, dependencies: [reduced] },
  )

  return (
    <h2 ref={ref} id={id} className="font-mono text-[0.78rem] uppercase tracking-[0.18em]">
      <span className={folioColor}>{folio}</span>
      <span className={`mx-2 ${dashColor}`}>—</span>
      <span data-split className={`inline-block ${labelColor}`}>{label}</span>
    </h2>
  )
}
