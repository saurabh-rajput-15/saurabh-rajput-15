import { useEffect, useState } from 'react'

/* Tracks which section is under a thin band across the viewport's middle and
   returns its id — drives the sticky running folio and nav `aria-current`. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')
  const key = ids.join(',')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) ratios.set(entry.target.id, entry.intersectionRatio)
          else ratios.delete(entry.target.id)
        }
        let best = ''
        let bestRatio = -1
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) setActive(best)
      },
      // a narrow band through the vertical centre of the viewport
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // `key` captures the contents of `ids` without re-running on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
