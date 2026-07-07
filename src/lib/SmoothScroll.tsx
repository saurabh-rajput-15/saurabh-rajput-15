import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './motion'

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext<Lenis | null>(null)

/** The active Lenis instance, or null when smooth scroll is off (reduced motion). */
export function useLenis(): Lenis | null {
  return useContext(LenisContext)
}

/* Lenis smooth scroll, driven off GSAP's ticker so ScrollTrigger stays in sync.
   Disabled entirely under prefers-reduced-motion — those users get native scroll
   and every ScrollTrigger effect already has its own reduced-motion branch. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (reduced) return
    const instance = new Lenis({ duration: 1.1, smoothWheel: true })
    setLenis(instance)

    const onScroll = () => ScrollTrigger.update()
    instance.on('scroll', onScroll)
    const raf = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      instance.off('scroll', onScroll)
      gsap.ticker.remove(raf)
      instance.destroy()
      setLenis(null)
    }
  }, [reduced])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
