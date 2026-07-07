import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionProvider } from './lib/motion'
import { IntroProvider } from './lib/intro'
import { SmoothScroll } from './lib/SmoothScroll'
import { SkipLink } from './components/layout/SkipLink'
import { Preloader } from './components/Preloader'
import { ScrollProgress } from './components/ScrollProgress'
import { HomePage } from './pages/HomePage'

// The case-study route is lazy-loaded so the home bundle stays lean.
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))

export default function App() {
  return (
    <MotionProvider>
      <IntroProvider>
        <SmoothScroll>
          <BrowserRouter>
            <Preloader />
            <ScrollProgress />
            <SkipLink />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/work/:slug" element={<CaseStudyPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SmoothScroll>
      </IntroProvider>
    </MotionProvider>
  )
}
