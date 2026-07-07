import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from './motion'

gsap.registerPlugin(ScrollTrigger)

/* Scrubbed vertical parallax: the element drifts as it crosses the viewport.
   No-op under reduced motion. Used on the oversized folio numerals and figures. */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  { from = 40, to = -40 }: { from?: number; to?: number } = {},
) {
  const reduced = useReducedMotion()
  useGSAP(
    () => {
      if (reduced || !ref.current) return
      gsap.fromTo(
        ref.current,
        { yPercent: from },
        {
          yPercent: to,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    },
    { dependencies: [reduced] },
  )
}
