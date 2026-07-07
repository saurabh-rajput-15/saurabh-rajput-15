import { site } from '../data/site'
import { ArrowUpRight } from './icons'
import { useLenis } from '../lib/SmoothScroll'

interface NavProps {
  /** id of the section currently in view — gets the accent marker + aria-current */
  activeId?: string
  variant?: 'masthead' | 'compact'
  /** distinguishes the two nav landmarks (masthead vs. sticky) for screen readers */
  ariaLabel?: string
  className?: string
}

/* Semantic section nav, reused at full size in the Masthead and compact in the
   sticky running folio. The active link carries the rationed accent underline.
   Clicks route through Lenis for a smooth in-page jump (falling back to the
   native anchor when smooth scroll is off / no-JS). */
export function Nav({ activeId, variant = 'masthead', ariaLabel = 'Sections', className = '' }: NavProps) {
  const lenis = useLenis()
  const size = variant === 'masthead' ? 'text-[0.8rem]' : 'text-[0.7rem]'
  const gap = variant === 'masthead' ? 'gap-x-6 gap-y-2' : 'gap-x-4'

  const onJump = (e: React.MouseEvent, id: string) => {
    if (!lenis) return // native anchor behaviour
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    lenis.scrollTo(el, { offset: -72 })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav aria-label={ariaLabel} className={`font-mono uppercase tracking-[0.12em] ${size} ${className}`}>
      <ul className={`flex flex-wrap items-center ${gap}`}>
        {site.sections.map((section) => {
          const isActive = section.id === activeId
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => onJump(e, section.id)}
                aria-current={isActive ? 'true' : undefined}
                className={
                  isActive
                    ? 'border-b-2 border-accent pb-0.5 text-ink'
                    : 'text-muted ink-underline transition-colors hover:text-ink'
                }
              >
                {section.label}
              </a>
            </li>
          )
        })}
        <li>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="arrow-link inline-flex items-center gap-0.5 text-ink ink-underline"
          >
            Résumé
            <ArrowUpRight className="text-[0.85em]" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
