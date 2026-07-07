import type { Project } from '../types'

/* ─────────────────────────────────────────────────────────────────────────
   TODO: Replace with your real work. Lead each deck with a QUANTIFIED outcome,
   not a description — recruiters scan the result, engineers click Source.
   One strong, complete case study beats five stubs.
   ───────────────────────────────────────────────────────────────────────── */
export const projects: Project[] = [
  {
    slug: 'unique-fitness',
    folio: '01',
    title: 'Unique Fitness',
    year: '2025',
    role: 'Freelance full-stack',
    impactDeck: 'Shipped a multilingual web + React Native app ecosystem now run by a commercial fitness club.',
    body:
      'A complete web and mobile ecosystem for a real fitness club — a multilingual React 19 marketing site and a cross-platform React Native app for memberships, workouts, and client engagement, with an AI assistant on top. Built solo, on contract, and still in active maintenance.',
    stack: ['React 19', 'React Native', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Expo', 'Tailwind', 'GSAP'],
    imageAlt: 'The Unique Fitness website and companion mobile app',
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'A commercial fitness club needed to streamline memberships, workouts, and client engagement, and to grow its brand online — across an audience that reads English, Hindi, and Marathi.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'I built a high-performance multilingual website in React 19 with GSAP animations for brand presence, and a cross-platform mobile app in React Native and Expo featuring workout tracking, calorie monitoring, progress visualization, and membership management.',
          'On the backend I wrote secure REST APIs with JWT auth over PostgreSQL/Supabase, integrated the Google Gemini API for an AI assistant handling visitor queries and membership FAQs, and automated push-notification workflows for reminders and announcements via Expo.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'The platform is deployed and used day to day by the club. I continue to maintain and optimize it with regular feature updates, bug fixes, and performance improvements.',
        ],
      },
    ],
  },
  {
    slug: 'spine-saver',
    folio: '02',
    title: 'Spine-Saver',
    year: '2026',
    role: 'ML & IoT',
    impactDeck: 'Built a wearable that classifies posture in real time using KNN/SVM on live IoT sensor data.',
    body:
      'A wearable posture and ergonomics classifier. ESP8266 and MPU6050 sensors stream movement data over UDP to machine-learning models that flag upright, slouched, and asymmetric posture in real time — with instant haptic and buzzer alerts when you slump.',
    stack: ['Python', 'Machine Learning', 'KNN', 'SVM', 'ESP8266', 'MPU6050', 'React', 'Node.js', 'IoT'],
    imageAlt: 'The Spine-Saver wearable and its real-time posture dashboard',
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'Poor sitting posture is hard to self-correct because you can’t feel it drift. The goal was a wearable that detects bad posture as it happens and nudges the wearer immediately.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'I integrated ESP8266 and MPU6050 sensors to collect posture and movement data, then trained and compared KNN and SVM models to classify upright, slouched, and asymmetric states. A real-time dashboard handles visualization and analytics, and vibration- and buzzer-based alerts fire the moment posture goes wrong.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'A working end-to-end system — hardware, ML classification, dashboard, and alerts — built as an academic project spanning sensors to UI.',
        ],
      },
    ],
  },
  {
    slug: 'aquamonitor',
    folio: '03',
    title: 'AquaMonitor',
    year: '2025',
    role: 'Full-stack',
    impactDeck: 'Full-stack platform mapping groundwater and surface-water stations with live geospatial dashboards.',
    body:
      'An environmental monitoring platform for groundwater and surface-water stations. Interactive Leaflet maps track stations in real time, role-based dashboards surface analytics, and PDF reporting turns raw readings into shareable insight.',
    stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Leaflet', 'JWT', 'Recharts'],
    imageAlt: 'The AquaMonitor map view with monitoring stations and analytics charts',
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'Monitoring groundwater and surface-water stations meant juggling scattered datasets with no single, live view of where stations were or how they were trending.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'I architected a full-stack platform with interactive geospatial visualization over Leaflet and OpenStreetMap for real-time station tracking, secure REST APIs with JWT auth and role-based access control, and an optimized MySQL schema for environmental datasets. Dashboards and PDF reporting cover station insights and alert management.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'A working monitoring platform that brings station data, maps, analytics, and reporting into one place.',
        ],
      },
    ],
  },
  {
    slug: 'studygenie',
    folio: '04',
    title: 'StudyGenie',
    year: '2025',
    role: 'Hackathon — SUNHACKS 2025',
    impactDeck: 'Local-first AI study app that turns PDFs and images into quizzes, summaries, and flashcards.',
    body:
      'A local-first AI learning platform built at SUNHACKS 2025. It parses PDFs, text, and OCR’d images into quizzes, summaries, and flashcards, maps topics as interactive knowledge graphs, and keeps learners hooked with XP and achievements.',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'OpenRouter', 'Google Gemini', 'ReactFlow', 'Recharts', 'pdfjs-dist'],
    imageAlt: 'The StudyGenie interface showing a knowledge graph and generated flashcards',
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'Turning dense study material into something you can actually revise from is slow and manual. We wanted a tool that does it instantly — and keeps study data private with a local-first architecture.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'I built parsing for PDFs, text, and OCR-based image inputs, wired the OpenRouter API with Google Gemini models for real-time generation of quizzes, summaries, and flashcards, and rendered topics as interactive knowledge graphs with ReactFlow and analytics with Recharts. Gamification — XP, achievements, progress tracking — keeps learners coming back.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'A complete AI study platform built within the SUNHACKS 2025 hackathon, from PDF ingestion to gamified review.',
        ],
      },
    ],
  },
]
