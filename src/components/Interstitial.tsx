import { interstitialQuote } from '../data/site'
import { PullQuote } from './PullQuote'
import { Reveal } from './layout/Reveal'

/* A single large philosophy line on paper between the dossier and the work —
   breathing room and a statement of intent. */
export function Interstitial() {
  return (
    <div className="shell border-t border-hairline py-[clamp(3.5rem,9vw,7rem)]">
      <Reveal className="mx-auto max-w-4xl text-center">
        <PullQuote className="text-center">{interstitialQuote}</PullQuote>
      </Reveal>
    </div>
  )
}
