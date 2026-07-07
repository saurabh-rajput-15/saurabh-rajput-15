import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/* Single source of truth for the user's motion preference. Every animated
   component reads this so we honour `prefers-reduced-motion` consistently
   (and react to it changing live, without a reload). */
const MotionContext = createContext(false)

function prefersReduced(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(prefersReduced)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return <MotionContext.Provider value={reduced}>{children}</MotionContext.Provider>
}

export function useReducedMotion(): boolean {
  return useContext(MotionContext)
}
