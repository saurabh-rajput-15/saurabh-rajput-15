import { useCallback, useState } from 'react'

type Theme = 'light' | 'dark'

/* Reads/writes the `data-theme` attribute set pre-paint by the inline script in
   index.html, persisting the choice to localStorage. The attribute is the single
   source of truth; the CSS token overrides in index.css do the rest. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) || 'light',
  )

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        // private mode / storage disabled — the in-memory state still flips
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
