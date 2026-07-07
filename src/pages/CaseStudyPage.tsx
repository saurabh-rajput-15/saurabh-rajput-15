import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { formatStack } from '../lib/formatStack'
import { Rule } from '../components/layout/Rule'
import { ArrowUpRight, ArrowRight } from '../components/icons'
import { useLenis } from '../lib/SmoothScroll'

/* /work/:slug — the magazine "contents page" leads to a real article:
   problem → approach → tradeoffs → outcome, set on the same editorial grid. */
export default function CaseStudyPage() {
  const { slug } = useParams()
  const lenis = useLenis()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [slug, lenis])

  if (!project) {
    return (
      <main
        id="main"
        className="shell flex min-h-screen flex-col items-center justify-center text-center"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold">Case study not found</h1>
        <Link
          to="/#portfolio"
          className="ink-underline mt-6 font-mono text-sm uppercase tracking-[0.12em] text-ink"
        >
          Back to the issue
        </Link>
      </main>
    )
  }

  return (
    <>
      <Rule tone="accent" />
      <main id="main" className="shell py-[clamp(2.5rem,6vw,5rem)]">
        <Link
          to="/#portfolio"
          className="group inline-flex items-center gap-1.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
        >
          <ArrowRight className="rotate-180 text-[0.9em] transition-transform duration-300 group-hover:-translate-x-1" />
          Back to portfolio
        </Link>

        <header className="grid-edit mt-10 gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              <span className="text-accent">{project.folio}</span>
              <span className="mx-2 text-hairline">—</span>
              Case study
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              {project.title}
            </h1>
            <p className="measure mt-5 font-body text-[clamp(1.2rem,2vw,1.6rem)] leading-snug">
              {project.impactDeck}
            </p>
          </div>

          {/* meta sidebar */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <dl className="font-mono text-[0.78rem]">
              <div className="leader py-1.5">
                <dt className="uppercase tracking-[0.08em] text-muted">Year</dt>
                <span aria-hidden="true" className="leader__fill" />
                <dd className="text-right text-ink">{project.year}</dd>
              </div>
              <div className="leader py-1.5">
                <dt className="uppercase tracking-[0.08em] text-muted">Role</dt>
                <span aria-hidden="true" className="leader__fill" />
                <dd className="text-right text-ink">{project.role}</dd>
              </div>
            </dl>
            <p className="mt-4 font-mono text-[0.74rem] uppercase tracking-[0.06em] text-muted">
              {formatStack(project.stack)}
            </p>
            <div className="mt-5 flex flex-col gap-2 font-mono text-[0.78rem] uppercase tracking-[0.08em]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link ink-underline inline-flex items-center gap-1 text-ink"
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
                  className="arrow-link ink-underline inline-flex items-center gap-1 text-ink"
                >
                  Source
                  <ArrowUpRight className="text-[0.85em]" />
                </a>
              )}
            </div>
          </div>
        </header>

        <Rule className="my-12" />

        <article className="mx-auto max-w-3xl">
          {project.caseStudy.map((block) => (
            <section key={block.heading} className="mb-12">
              <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                {block.heading}
              </h2>
              {block.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="measure mt-4 font-body leading-[1.75]">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        <Rule className="my-10" />

        <Link
          to="/#letters"
          className="arrow-link-h ink-underline inline-flex items-center gap-1.5 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-ink"
        >
          Get in touch
          <ArrowRight className="text-[0.9em]" />
        </Link>
      </main>
    </>
  )
}
