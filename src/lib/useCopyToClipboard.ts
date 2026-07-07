import { useCallback, useEffect, useRef, useState } from 'react'

/* Copy text to the clipboard and flip a `copied` flag for a short, announced
   confirmation. Returns false (and leaves `copied` off) if the API is blocked. */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopied(false), resetMs)
        return true
      } catch {
        setCopied(false)
        return false
      }
    },
    [resetMs],
  )

  return { copied, copy }
}
