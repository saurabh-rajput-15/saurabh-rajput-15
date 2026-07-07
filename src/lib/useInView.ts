import { useEffect, useRef, useState } from 'react'

/* Reveal-once hook. Returns a ref to attach and whether the element has
   entered the viewport. The reveal CSS (.reveal / .is-visible) handles the
   reduced-motion case, so callers don't need to branch on it here. */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect() // reveal once, then stop observing
            break
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView } as const
}
