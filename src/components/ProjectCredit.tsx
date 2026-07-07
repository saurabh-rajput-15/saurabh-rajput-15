import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { formatStack } from '../lib/formatStack'
import { ArrowUpRight, ArrowRight } from './icons'

/* The "photo credit" caption: stack + role, then equal-weight Live / Source /
   Read-case-study links. The recruiter reads the metrics above; the engineer
   clicks Source here. */
export function ProjectCredit({ project }: { project: Project }) {
  return (
    <div>
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-panel-muted">
        {formatStack(project.stack)}
        <span className="mx-2 text-panel-muted/50">·</span>
        {project.role}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[0.78rem] uppercase tracking-[0.08em]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} — live site (opens in a new tab)`}
            className="arrow-link inline-flex items-center gap-1 text-panel-ink ink-underline"
          >
            Live
            <ArrowUpRight className="text-[0.85em]" />
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} — source code (opens in a new tab)`}
            className="arrow-link inline-flex items-center gap-1 text-panel-ink ink-underline"
          >
            Source
            <ArrowUpRight className="text-[0.85em]" />
          </a>
        )}
        <Link
          to={`/work/${project.slug}`}
          aria-label={`Read the ${project.title} case study`}
          className="arrow-link-h inline-flex items-center gap-1 text-panel-ink ink-underline"
        >
          Read case study
          <ArrowRight className="text-[0.9em]" />
        </Link>
      </div>
    </div>
  )
}
