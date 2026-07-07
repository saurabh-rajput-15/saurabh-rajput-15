import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

/* A thin accent reading-progress bar pinned to the very top, scrubbed against
   total page scroll. Sits above the running folio. Honours reduced motion by
   simply not scrubbing (the bar stays at zero — no distracting movement). */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!bar.current) return
    gsap.to(bar.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })
  })

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left scale-x-0 bg-accent"
    />
  )
}
