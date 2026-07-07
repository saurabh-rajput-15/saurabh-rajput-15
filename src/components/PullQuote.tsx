import type { ReactNode } from 'react'

interface PullQuoteProps {
  children: ReactNode
  /** on wide viewports, let the quote hang into the left margin */
  hanging?: boolean
  className?: string
}

/* Display-italic pull quote with a rationed-red opening quotation mark
   (see the `.pullquote` component class). */
export function PullQuote({ children, hanging = false, className = '' }: PullQuoteProps) {
  const hang = hanging ? 'lg:-ml-[8%]' : ''
  return (
    <blockquote
      className={`pullquote text-[clamp(1.6rem,3.4vw,2.6rem)] text-ink ${hang} ${className}`}
    >
      {children}
    </blockquote>
  )
}
