import { useCopyToClipboard } from '../lib/useCopyToClipboard'
import { CopyIcon, CheckIcon } from './icons'

/* Copy-to-clipboard affordance for the email, with a polite live announcement
   so screen-reader users hear the confirmation too. */
export function CopyEmail({ email }: { email: string }) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <span className="inline-flex items-center">
      <button
        type="button"
        onClick={() => void copy(email)}
        className="inline-flex items-center gap-2 font-mono text-[0.74rem] uppercase tracking-[0.1em] text-panel-muted transition-colors hover:text-panel-ink active:scale-95 motion-safe:transition-transform"
      >
        {copied ? (
          <CheckIcon className="text-[0.95em] text-accent" />
        ) : (
          <CopyIcon className="text-[0.95em]" />
        )}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </span>
  )
}
