import type { SVGProps } from 'react'
import type { SocialLink } from '../types'

/* A tiny hand-rolled icon set. We inline these rather than depend on an icon
   package: brand marks (GitHub/LinkedIn/X) aren't reliably available there, and
   inlining keeps the bundle to the exact glyphs we use. Sized to 1em, currentColor. */

type IconProps = SVGProps<SVGSVGElement>

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/* Stroke (UI) icons */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M7 17 17 7M7 7h10v10" />
    </Svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  )
}

export function CopyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...stroke} x="9" y="9" width="11" height="11" rx="2" />
      <path {...stroke} d="M5 15V5a2 2 0 0 1 2-2h10" />
    </Svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="m20 6-11 11-5-5" />
    </Svg>
  )
}

/* Filled (brand + glyph) icons */
export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...stroke} d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path {...stroke} d="m3.5 7 8.5 6 8.5-6" />
    </Svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...stroke} cx="12" cy="12" r="9" />
      <path {...stroke} d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21C9.5 18.5 8.2 15.3 8.2 12S9.5 5.5 12 3Z" />
    </Svg>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
      />
    </Svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.83v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.66c0-1.35-.03-3.08-1.93-3.08-1.93 0-2.22 1.46-2.22 2.98V21h-4z"
      />
    </Svg>
  )
}

export function TwitterIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.96 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.12H5.04z"
      />
    </Svg>
  )
}

/* Resolve a SocialLink's icon key to a component. */
export function SocialIcon({ icon, ...props }: IconProps & { icon: SocialLink['icon'] }) {
  switch (icon) {
    case 'github':
      return <GithubIcon {...props} />
    case 'linkedin':
      return <LinkedinIcon {...props} />
    case 'twitter':
      return <TwitterIcon {...props} />
    case 'mail':
      return <MailIcon {...props} />
    case 'globe':
    default:
      return <GlobeIcon {...props} />
  }
}
