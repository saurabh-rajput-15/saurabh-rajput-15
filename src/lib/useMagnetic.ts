import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from './motion'

/* Returns a ref for an element that gently pulls toward the cursor while hovered
   and springs back on leave. Only active on fine pointers (mouse) with motion
   allowed — touch and reduced-motion users get a plain, static element. */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(strength = 0.4) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      const el = ref.current
      if (!el || reduced || !window.matchMedia('(pointer: fine)').matches) return

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) * strength
        const y = (e.clientY - (r.top + r.height / 2)) * strength
        gsap.to(el, { x, y, duration: 0.4, ease: 'power3.out' })
      }
      const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })

      el.addEventListener('pointermove', move)
      el.addEventListener('pointerleave', reset)
      return () => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerleave', reset)
      }
    },
    { dependencies: [reduced, strength] },
  )

  return ref
}
