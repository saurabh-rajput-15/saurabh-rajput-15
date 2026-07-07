import { skills } from '../data/skills'
import { site } from '../data/site'
import { SectionHeading } from './layout/SectionHeading'
import { Reveal } from './layout/Reveal'

const section = site.sections.find((s) => s.id === 'field-notes')!

/* Field Notes — skills as a dossier of grouped leader-dot lists. No bars, no
   percentages: just what's reached for and a terse, honest qualifier. */
export function FieldNotes() {
  return (
    <section
      id="field-notes"
      aria-labelledby="field-notes-heading"
      className="shell border-t border-hairline py-[clamp(3.5rem,9vw,7rem)]"
    >
      <SectionHeading id="field-notes-heading" folio={section.folio} label="Field Notes" />

      <div className="mt-12 grid gap-x-[8%] gap-y-12 sm:grid-cols-2">
        {skills.map((group) => (
          <Reveal key={group.title}>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              {group.title}
            </h3>
            <ul className="mt-3">
              {group.entries.map((entry) => (
                <li
                  key={entry.name}
                  className="leader border-b border-hairline/60 py-2.5 last:border-0"
                >
                  <span className="font-body text-[1.05rem] text-ink">{entry.name}</span>
                  <span aria-hidden="true" className="leader__fill" />
                  {entry.note && (
                    <span className="font-mono text-[0.74rem] uppercase tracking-[0.06em] text-muted">
                      {entry.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
