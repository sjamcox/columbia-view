# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server with Turbo
pnpm build      # Production build
pnpm start      # Start production server
```

Use `pnpm` exclusively — never `npm` or `yarn`.

## Architecture

Next.js 15 App Router site for Columbia View Church, deployed on Vercel.

**Key directories:**
- `app/` — Pages and routing. Each route folder contains a `page.tsx`.
- `components/ui/` — Primitive/base components (Button, Card, Section, Hero, etc.)
- `components/features/` — Complex feature components (Header, Footer, SEO, Analytics)
- `queries/` — Server-side data fetching (Planning Center API, YouTube API)
- `helpers/` — Menu structure, maps, message gradient mappings
- `utils/` — Utility functions (`cn.ts` for class merging, `index.ts`)
- `types/` — Shared TypeScript types

**Data fetching pattern:** All external data is fetched server-side in page components using functions from `queries/`. Results are cached with Next.js `fetch` `revalidate` options (600s for events, 1800s for messages). No client-side data fetching.

**External integrations:**
- **Planning Center** (`queries/calendar.ts`): Events via Calendar API, filtered by `tag_ids=24038`, auth via Basic token from `PLANNING_CENTER_APP_ID` + `PLANNING_CENTER_SECRET`
- **YouTube** (`queries/youtube.ts`): Sermon messages via playlist items (preferred) or search fallback, using `YOUTUBE_API_KEY`, `YOUTUBE_PLAYLIST_ID`, `YOUTUBE_CHANNEL_ID`

## Design System

Theme defined in `styles/globals.css` using Tailwind CSS 4 `@theme`.

**Brand colors (use these Tailwind classes):**
- `primary-dark-blue` (#0b496f), `primary-light-blue` (#39aae1)
- `secondary-aqua`, `secondary-green`, `secondary-yellow`, `secondary-red`, `secondary-blue-black`
- `neutral-dark-gray`, `neutral-mid-gray`, `neutral-light-gray`, `neutral-light-blue`

**Typography:** `font-display` (Raleway) for headings, `font-sans` (Open Sans) for body text.

**Animations:** Use `motion/react` for entrance/scroll animations.

**Class merging:** Use `@/utils/cn` (clsx + tailwind-merge).

## Coding Guidelines

- Tailwind utility classes for all styling — no custom CSS except in `globals.css`
- Use Next.js `Image` component with WebP format; import local images as `StaticImageData`
- Strict TypeScript — avoid `any`
- Page metadata defined per-page via Next.js `export const metadata`; global metadata in `app/layout.tsx`

## Environment Variables

```
PLANNING_CENTER_APP_ID
PLANNING_CENTER_SECRET
YOUTUBE_API_KEY
YOUTUBE_CHANNEL_ID
YOUTUBE_PLAYLIST_ID   # optional, falls back to search
```
