import { site } from '../data/site'

/* "CURRENTLY — open to work" with a rationed-red status dot. An at-a-glance
   recruiter signal, expressed in-metaphor as a dateline element. */
export function StatusDateline({ className = '' }: { className?: string }) {
  const { status } = site
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted ${className}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 rounded-full ${
          status.available ? 'bg-accent motion-safe:animate-pulse' : 'bg-muted'
        }`}
      />
      <span>Currently — {status.label}</span>
    </p>
  )
}
