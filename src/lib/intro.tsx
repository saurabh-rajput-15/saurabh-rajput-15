import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from './motion'

/* Tracks the one-time intro/preloader. `done` flips true when the preloader
   finishes (or immediately for reduced-motion users), which is the cue the
   Masthead waits on before playing its hero reveal. */
const IntroContext = createContext<{ done: boolean; finish: () => void }>({
  done: true,
  finish: () => {},
})

export function useIntro() {
  return useContext(IntroContext)
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  const [done, setDone] = useState(reduced) // reduced motion → skip the intro
  const finish = useCallback(() => setDone(true), [])

  return <IntroContext.Provider value={{ done, finish }}>{children}</IntroContext.Provider>
}
