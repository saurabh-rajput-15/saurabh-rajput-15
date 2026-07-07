import { profile } from '../data/profile'
import { site } from '../data/site'
import { SectionHeading } from './layout/SectionHeading'
import { Reveal } from './layout/Reveal'
import { DropCapLede } from './DropCapLede'
import { AtAGlance } from './AtAGlance'
import { ImageFrame } from './ImageFrame'
import { PullQuote } from './PullQuote'

const section = site.sections.find((s) => s.id === 'profile')!

/* The Profile — a feature lede in an asymmetric 7/3 spread: prose on the left,
   a framed portrait + "AT A GLANCE" sidebar on the right. */
export function Profile() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="shell py-[clamp(3.5rem,9vw,7rem)]"
    >
      <SectionHeading id="profile-heading" folio={section.folio} label={profile.kicker} />

      <div className="grid-edit mt-12 gap-y-14">
        {/* prose — columns 1–7 */}
        <Reveal className="col-span-12 lg:col-span-7">
          <DropCapLede>{profile.lede}</DropCapLede>
          {profile.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="measure mt-6 leading-[1.72]">
              {paragraph}
            </p>
          ))}
          <PullQuote hanging className="mt-14">
            {profile.pullQuote}
          </PullQuote>
        </Reveal>

        {/* sidebar — columns 9–12 */}
        <Reveal className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-4 lg:col-start-9">
          <ImageFrame
            src={profile.headshot}
            alt={profile.headshotAlt}
            ratio="4 / 5"
            label="Portrait"
          />
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
            {site.firstName} {site.lastName}
          </p>
          <div className="mt-10">
            <AtAGlance facts={profile.glance} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
