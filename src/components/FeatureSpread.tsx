import { useRef } from 'react'
import type { Project } from '../types'
import { Reveal } from './layout/Reveal'
import { ImageFrame } from './ImageFrame'
import { ProjectCredit } from './ProjectCredit'
import { useParallax } from '../lib/gsapEffects'

/* One project as a magazine feature spread: oversized red folio numeral, a
   Fraunces headline, an IMPACT-METRIC-FIRST deck, body, an alternating-side
   figure, and the credit line. The big folio numeral drifts on scroll. */
export function FeatureSpread({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  const folioRef = useRef<HTMLSpanElement>(null)
  useParallax(folioRef, { from: 30, to: -30 })

  return (
    <Reveal>
      <article className="group grid-edit items-center gap-y-10">
        {/* text column */}
        <div
          className={`col-span-12 lg:col-span-6 ${flip ? 'lg:order-2 lg:col-start-7' : ''}`}
        >
          <div className="flex items-start gap-4">
            <span
              ref={folioRef}
              aria-hidden="true"
              className="text-folio font-display font-semibold leading-[0.8] text-accent"
            >
              {project.folio}
            </span>
            <div className="pt-1">
              <h3 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-panel-ink transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-panel-muted">
                {project.year} · {project.role}
              </p>
            </div>
          </div>

          <p className="measure mt-7 font-body text-[clamp(1.15rem,1.8vw,1.45rem)] leading-snug text-panel-ink">
            {project.impactDeck}
          </p>
          <p className="measure mt-4 font-body leading-[1.7] text-panel-ink/85">
            {project.body}
          </p>

          <div className="mt-8">
            <ProjectCredit project={project} />
          </div>
        </div>

        {/* figure column — sits opposite the text and flips each row */}
        <div
          className={`col-span-12 lg:col-span-5 ${
            flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'
          }`}
        >
          <ImageFrame
            src={project.image}
            alt={project.imageAlt}
            ratio="4 / 3"
            label={`${project.title} — figure`}
            tone="panel"
            parallax
          />
        </div>
      </article>
    </Reveal>
  )
}
