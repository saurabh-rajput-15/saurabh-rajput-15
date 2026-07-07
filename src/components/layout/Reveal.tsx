import type { ReactNode } from 'react'
import { useInView } from '../../lib/useInView'

/* Wraps a content block in the scroll-reveal treatment. Safe by construction:
   the `.reveal` CSS only hides content when JS is present and motion is allowed,
   so no-JS and reduced-motion users see it immediately. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
