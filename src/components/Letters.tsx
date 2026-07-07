import { site } from '../data/site'
import { SectionHeading } from './layout/SectionHeading'
import { Reveal } from './layout/Reveal'
import { Rule } from './layout/Rule'
import { CopyEmail } from './CopyEmail'
import { SocialIcon, ArrowUpRight } from './icons'
import { useMagnetic } from '../lib/useMagnetic'
import { useLenis } from '../lib/SmoothScroll'

const section = site.sections.find((s) => s.id === 'letters')!
const year = new Date().getFullYear()

/* Letters — contact + colophon on the deep panel. A large inked serif email is
   the primary CTA; the colophon closes the issue like a magazine credits page. */
export function Letters() {
  const emailRef = useMagnetic<HTMLAnchorElement>(0.25)
  const lenis = useLenis()

  const toTop = () => {
    if (lenis) lenis.scrollTo(0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="letters" aria-labelledby="letters-heading" className="bg-panel text-panel-ink">
      <div className="shell pt-[clamp(4rem,10vw,8rem)]">
        <SectionHeading id="letters-heading" folio={section.folio} label="Letters" tone="panel" />

        <Reveal>
          <p className="measure mt-10 font-body text-[clamp(1.2rem,2vw,1.6rem)] leading-snug text-panel-ink/85">
            Have a role, a project, or a question? The fastest way to reach me is email — I read
            everything and reply to most.
          </p>

          <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <a
              ref={emailRef}
              href={`mailto:${site.email}`}
              className="ink-underline inline-block break-all font-display text-[clamp(1.7rem,5.5vw,4rem)] font-semibold tracking-[-0.02em] text-panel-ink"
            >
              {site.email}
            </a>
            <CopyEmail email={site.email} />
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-9 gap-y-4 font-mono text-[0.8rem] uppercase tracking-[0.08em]">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link ink-underline inline-flex items-center gap-2 text-panel-ink"
                >
                  <SocialIcon icon={social.icon} className="text-[1.15em] text-panel-muted" />
                  {social.handle}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* colophon */}
      <div className="shell pb-12 pt-[clamp(4rem,9vw,7rem)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-panel-muted/30 pt-5">
          <p className="font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-panel-muted">
            Set in Fraunces &amp; Newsreader · Built with React + Vite · © {year} {site.firstName}{' '}
            {site.lastName}
          </p>
          <button
            type="button"
            onClick={toTop}
            className="arrow-link inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-panel-ink transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUpRight className="text-[0.9em] -rotate-45" />
          </button>
        </div>
      </div>

      {/* closing accent rule mirrors the masthead's top rule */}
      <Rule tone="accent" />
    </section>
  )
}
