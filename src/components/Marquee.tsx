import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../lib/motion'

const ITEMS = [
  'TypeScript', 'React', 'React Native', 'Node.js', 'PostgreSQL',
  'Machine Learning', 'IoT', 'Generative AI', 'Express', 'Supabase',
]

/* A seamless scrolling tape of the core stack — a bold editorial divider
   between Portfolio and the credentials. Reduced motion → a static, centred
   strip (no looping movement). */
export function Marquee() {
  const reduced = useReducedMotion()
  const track = useRef<HTMLDivElement>(null)

  const tween = useRef<gsap.core.Tween | null>(null)

  useGSAP(
    () => {
      if (reduced || !track.current) return
      // Two copies sit side by side; sliding one width gives an unbroken loop.
      tween.current = gsap.to(track.current, { xPercent: -50, duration: 24, ease: 'none', repeat: -1 })
    },
    { dependencies: [reduced] },
  )

  // Ease the tape almost to a stop on hover, so a name can be read.
  const slow = () => tween.current && gsap.to(tween.current, { timeScale: 0.15, duration: 0.4 })
  const resume = () => tween.current && gsap.to(tween.current, { timeScale: 1, duration: 0.4 })

  const row = (
    <ul className="flex shrink-0 items-center gap-8 pr-8 font-display text-[clamp(1.5rem,4vw,3rem)] font-semibold italic">
      {ITEMS.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
          {item}
          <span className="text-accent" aria-hidden="true">&bull;</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-hairline py-6 text-ink/85 select-none"
    >
      {reduced ? (
        <div className="shell">{row}</div>
      ) : (
        <div
          ref={track}
          onPointerEnter={slow}
          onPointerLeave={resume}
          className="flex w-max"
        >
          {row}
          {row}
        </div>
      )}
    </div>
  )
}
