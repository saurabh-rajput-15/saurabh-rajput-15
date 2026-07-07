import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Masthead } from '../components/Masthead'
import { Profile } from '../components/Profile'
import { FieldNotes } from '../components/FieldNotes'
import { Interstitial } from '../components/Interstitial'
import { Portfolio } from '../components/Portfolio'
import { Marquee } from '../components/Marquee'
import { Credentials } from '../components/Credentials'
import { BeyondCode } from '../components/BeyondCode'
import { Letters } from '../components/Letters'
import { RunningFolio } from '../components/layout/RunningFolio'
import { useLenis } from '../lib/SmoothScroll'

/* Composes the issue in order. The hash effect makes in-page anchors work even
   when arriving from another route (e.g. "Back to portfolio" from a case study),
   routing through Lenis when smooth scroll is active. */
export function HomePage() {
  const { hash } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset: -72 })
        else el.scrollIntoView({ block: 'start' })
        return
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [hash, lenis])

  return (
    <>
      <RunningFolio />
      <Masthead />
      <main id="main">
        <Profile />
        <FieldNotes />
        <Interstitial />
        <Portfolio />
        <Marquee />
        <Credentials />
        <BeyondCode />
        <Letters />
      </main>
    </>
  )
}
