/* Wrap each word of an element in an overflow-hidden mask + inner span, so the
   inner spans can be slid in with GSAP (yPercent) for a clip-reveal. Idempotent:
   the original text is stashed on `data-text`, so re-running (StrictMode, theme
   re-renders) re-splits cleanly. Accessibility: the original string is kept on
   `aria-label` and the generated pieces are `aria-hidden`. */
export function splitWords(el: HTMLElement): HTMLElement[] {
  const original = el.dataset.text ?? el.textContent ?? ''
  el.dataset.text = original
  el.setAttribute('aria-label', original)
  el.textContent = ''

  const inners: HTMLElement[] = []
  for (const token of original.split(/(\s+)/)) {
    if (token.trim() === '') {
      el.appendChild(document.createTextNode(token))
      continue
    }
    const mask = document.createElement('span')
    mask.setAttribute('aria-hidden', 'true')
    mask.style.display = 'inline-block'
    mask.style.overflow = 'hidden'
    mask.style.verticalAlign = 'top'

    const inner = document.createElement('span')
    inner.style.display = 'inline-block'
    inner.style.willChange = 'transform'
    inner.textContent = token

    mask.appendChild(inner)
    el.appendChild(mask)
    inners.push(inner)
  }
  return inners
}
