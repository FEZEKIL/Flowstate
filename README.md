# Flowstate Agent Landing Page Guide

## Overview
- **Application Name**: Flowstate Agent
- **Project Type**: React 18 + TypeScript + Vite + Tailwind CSS single-page marketing site
- **Purpose**: Launch landing page for Flowstate Agent, an AI coding co-pilot for SaaS founders, focused on waitlist conversion
- **Entry Point**: `src/main.tsx`
- **Core Page**: `src/App.tsx`

![Flowstate Agent Landing Page](src/assets/screenshots/Screenshot%20(82).png)

## Key Implementation Notes
- Hero section features auto-rotating gallery with `useEffect` interval and manual dot navigation
- Waitlist CTA uses mock submission (`setTimeout`) and toggles success/error states without backend dependency
- Content data (value points, benefits, steps, testimonials, metrics, features, pricing, FAQ) defined as arrays in `App.tsx` to simplify future CMS/API replacement
- Tailwind breaks up sections with muted neutral palette (`#f5f2ee` base) and high-contrast CTA/footer blocks for conversion focus


## Styling & Accessibility
- Global typography set via `:root` in `src/index.css` with Inter stack
- All CTAs maintain ≥44px height and high contrast
- Sections follow 1200px max-width container, 8px-based spacing scale, and responsive stacking for mobile
- Images include descriptive `alt` text; hero carousel uses buttons with `aria-label`
- `aria-live="polite"` announces waitlist submission results
- Tailwind CSS v4 semantic classes used for theming (e.g., `text-foreground`, `bg-card`, `border-border`) to support dynamic color schemes

## Commands
- Install dependencies: `npm install`
- Development server: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run preview`

## Future Enhancements
- Replace mock waitlist submission with real API
- Externalize static copy into dedicated data module or CMS integration for easier localization
- Consider extracting major sections into components if additional pages are introduced
- AI-Powered Chatbot Widget: Integrate conversational AI for FAQs, demos, and waitlist guidance
- Personalized Content Recommendations: Use ML to adjust content based on user behavior and inputs
- Interactive AI Demo Preview: Embed live demo with real-time code generation for user tasks
- Smart Waitlist Prioritization: AI-driven prioritization using user data for invite sequencing
- Voice-Enabled Interactions: Add voice search for FAQs and navigation using Web Speech API
- Predictive Analytics Dashboard: Admin dashboard with AI predictions for growth and optimization
- Progressive Web App (PWA) Features: Enable offline access, push notifications, and AI caching
- A/B Testing with AI Optimization: Automated testing and optimization of CTAs and layouts

