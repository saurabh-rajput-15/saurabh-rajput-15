interface RuleProps {
  /** 'hairline' for column/section rules, 'accent' for the rationed page rules */
  tone?: 'hairline' | 'accent'
  className?: string
}

/* The editorial horizontal rule. Accent tone is part of the rationed-red set
   (top/bottom-of-page rules) — don't reach for it elsewhere. */
export function Rule({ tone = 'hairline', className = '' }: RuleProps) {
  const tones = tone === 'accent' ? 'h-0.5 bg-accent' : 'h-px bg-hairline'
  return <hr aria-hidden="true" className={`border-0 ${tones} ${className}`} />
}
