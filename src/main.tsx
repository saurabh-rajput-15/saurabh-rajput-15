import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts (subset to latin to keep payload lean).
// Fraunces = display (with optical-size axis), incl. true italics for the surname.
import '@fontsource-variable/fraunces/standard.css'
import '@fontsource-variable/fraunces/standard-italic.css'
// Newsreader = body serif.
import '@fontsource/newsreader/latin-400.css'
import '@fontsource/newsreader/latin-400-italic.css'
import '@fontsource/newsreader/latin-500.css'
import '@fontsource/newsreader/latin-600.css'
// JetBrains Mono = metadata "engineer signal" (folios, datelines, stack, email).
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-700.css'

import './index.css'
import App from './App.tsx'

// Progressive enhancement flag: CSS only hides `.reveal` content once JS is
// present, so no-JS visitors still see everything.
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
