import type { GlanceFact } from '../types'

/* A leadered fact list ("term .......... value") in mono — the recruiter's
   at-a-glance summary in the Profile sidebar. */
export function AtAGlance({ facts }: { facts: GlanceFact[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
        At a glance
      </p>
      <dl className="font-mono text-[0.82rem]">
        {facts.map((fact) => (
          <div key={fact.label} className="leader py-1.5">
            <dt className="uppercase tracking-[0.08em] text-muted">{fact.label}</dt>
            <span aria-hidden="true" className="leader__fill" />
            <dd className="text-right text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
