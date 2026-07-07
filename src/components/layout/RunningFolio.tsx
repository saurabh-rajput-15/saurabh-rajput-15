import { useEffect, useRef, useState } from 'react'
import { site } from '../../data/site'
import { useActiveSection } from '../../lib/useActiveSection'
import { Nav } from '../Nav'
import { ThemeToggle } from '../ThemeToggle'

const SECTION_IDS = site.sections.map((s) => s.id)

/* The sticky "running head" of the magazine: appears once the reader scrolls
   past the masthead, showing the active section as a folio and offering a
   persistent, compact nav so recruiters can jump straight to Portfolio/Letters. */
export function RunningFolio() {
  const activeId = useActiveSection(SECTION_IDS)
  const [shown, setShown] = useState(false)
  const frame = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        setShown(window.scrollY > window.innerHeight * 0.85)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  const active = site.sections.find((s) => s.id === activeId) ?? site.sections[0]

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 border-b border-hairline bg-paper/90 backdrop-blur-sm transition-[opacity,transform] duration-300 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <div className="shell flex h-14 items-center justify-between gap-4">
        {/* left: magazine masthead line (decorative) */}
        <p aria-hidden="true" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
          <span className="text-ink">{site.lastName}</span>
          <span className="mx-2 text-hairline">/</span>
          <span className="text-accent">{active.folio}</span> {active.label}
        </p>

        <div className="flex items-center gap-4">
          <Nav activeId={activeId} variant="compact" ariaLabel="Sections (sticky)" />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
