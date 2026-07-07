import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger)

interface ImageFrameProps {
  src?: string
  alt: string
  /** CSS aspect-ratio, e.g. "4 / 5" — reserves space to avoid layout shift */
  ratio?: string
  /** placeholder caption shown when no src is provided */
  label?: string
  /** which surface the frame sits on, so borders/placeholder read correctly */
  tone?: 'paper' | 'panel'
  /** scrubbed vertical parallax on the image as it crosses the viewport */
  parallax?: boolean
  className?: string
}

/* A hairline-framed image with a graceful placeholder. The aspect-ratio box
   reserves space whether or not a real image is supplied, so there's no CLS.
   When motion is allowed and a real image exists, it lifts from grayscale to
   colour on hover (see `group-hover` usage at call sites) and, with `parallax`,
   drifts vertically on scroll. */
export function ImageFrame({
  src,
  alt,
  ratio = '4 / 5',
  label = 'Figure',
  tone = 'paper',
  parallax = false,
  className = '',
}: ImageFrameProps) {
  const border = tone === 'panel' ? 'border-panel-muted/40' : 'border-hairline'
  const reduced = useReducedMotion()
  const imgRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      if (!parallax || reduced || !imgRef.current) return
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    },
    { dependencies: [parallax, reduced] },
  )

  // Parallax needs vertical slack so the drift never exposes an edge.
  const motionClass = parallax && !reduced ? 'scale-[1.16]' : ''

  return (
    <figure
      className={`relative overflow-hidden border ${border} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition duration-700 ease-out motion-safe:grayscale motion-safe:group-hover:grayscale-0 ${motionClass}`}
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center ${
            tone === 'panel' ? 'bg-white/[0.04] text-panel-muted' : 'bg-ink/[0.03] text-muted'
          }`}
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">{label}</span>
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </figure>
  )
}
