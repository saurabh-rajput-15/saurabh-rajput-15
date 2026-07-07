import { projects } from '../data/projects'
import { site } from '../data/site'
import { SectionHeading } from './layout/SectionHeading'
import { FeatureSpread } from './FeatureSpread'

const section = site.sections.find((s) => s.id === 'portfolio')!

/* The Portfolio — the centerpiece. A deep-panel section of feature spreads.
   The tonal shift to #211c17 sets the work apart from the paper sections. */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-panel text-panel-ink"
    >
      <div className="shell py-[clamp(4rem,10vw,8rem)]">
        <SectionHeading
          id="portfolio-heading"
          folio={section.folio}
          label="Selected Work"
          tone="panel"
        />

        <div className="mt-16 space-y-[clamp(4.5rem,9vw,7.5rem)]">
          {projects.map((project, index) => (
            <FeatureSpread key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
