/* Keyboard users land here first; it stays visually hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-50 font-mono text-sm uppercase tracking-wide focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
    >
      Skip to content
    </a>
  )
}
