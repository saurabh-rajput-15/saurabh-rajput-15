import { education, certifications } from '../data/credentials'
import { site } from '../data/site'
import { SectionHeading } from './layout/SectionHeading'
import { Reveal } from './layout/Reveal'

const section = site.sections.find((s) => s.id === 'credentials')!

/* Credentials — Education as a hairline timeline (left) and Certifications as a
   leader-dot dossier (right), on the 12-column editorial grid. */
export function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="shell border-t border-hairline py-[clamp(3.5rem,9vw,7rem)]"
    >
      <SectionHeading id="credentials-heading" folio={section.folio} label="Credentials" />

      <div className="mt-12 grid-edit gap-y-14">
        {/* Education */}
        <div className="col-span-12 lg:col-span-7">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">Education</h3>
          <ol className="mt-6">
            {education.map((e) => (
              <Reveal key={e.school}>
                <li className="border-b border-hairline/60 py-6 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-display text-[clamp(1.25rem,2.2vw,1.7rem)] font-semibold leading-tight tracking-[-0.01em]">
                      {e.school}
                    </h4>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1.5 font-body text-ink/85">
                    {e.qualification} · <span className="text-accent">{e.result}</span>
                  </p>
                  {e.coursework && (
                    <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                      {e.coursework.map((c) => (
                        <li
                          key={c}
                          className="border border-hairline px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.06em] text-muted"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Certifications */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">Certifications</h3>
          <ul className="mt-6">
            {certifications.map((c) => (
              <Reveal key={`${c.title}-${c.date}`}>
                <li className="border-b border-hairline/60 py-4 last:border-0">
                  <div className="leader">
                    <span className="font-body text-[1.02rem] text-ink">{c.title}</span>
                    <span aria-hidden="true" className="leader__fill" />
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted">
                      {c.date}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                    {c.issuer}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
