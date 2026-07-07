import { positions, languages } from '../data/beyond'
import { site } from '../data/site'
import { SectionHeading } from './layout/SectionHeading'
import { Reveal } from './layout/Reveal'

const section = site.sections.find((s) => s.id === 'beyond-code')!

/* Beyond Code — leadership/positions as a timeline (left) and spoken languages
   as mono tags (right). */
export function BeyondCode() {
  return (
    <section
      id="beyond-code"
      aria-labelledby="beyond-code-heading"
      className="shell border-t border-hairline py-[clamp(3.5rem,9vw,7rem)]"
    >
      <SectionHeading id="beyond-code-heading" folio={section.folio} label="Beyond Code" />

      <div className="mt-12 grid-edit gap-y-14">
        {/* Positions of responsibility */}
        <div className="col-span-12 lg:col-span-7">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Positions of Responsibility
          </h3>
          <ol className="mt-6">
            {positions.map((p) => (
              <Reveal key={`${p.title}-${p.org}`}>
                <li className="border-b border-hairline/60 py-6 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-display text-[clamp(1.2rem,2vw,1.55rem)] font-semibold leading-tight tracking-[-0.01em]">
                      {p.title}
                    </h4>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
                      {p.period}
                    </span>
                  </div>
                  <p className="mt-1.5 font-body text-ink/85">{p.org}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Languages */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">Languages</h3>
          <Reveal>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {languages.map((l) => (
                <li
                  key={l}
                  className="border border-hairline px-3.5 py-1.5 font-mono text-[0.74rem] uppercase tracking-[0.08em] text-ink"
                >
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
