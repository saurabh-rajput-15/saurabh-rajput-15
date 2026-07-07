import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/useTheme'

/* Light/dark switch. Flips the `data-theme` token set on <html>; the palette
   swap is pure CSS variable overrides in index.css. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-accent hover:text-accent active:scale-90 motion-safe:transition-transform ${className}`}
    >
      {isDark ? (
        <Sun className="h-[1.05rem] w-[1.05rem] motion-safe:animate-[spin_0.5s_ease-out]" />
      ) : (
        <Moon className="h-[1.05rem] w-[1.05rem]" />
      )}
    </button>
  )
}
