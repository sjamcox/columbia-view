# Columbia View Church Project Overview

Columbia View Church is a modern, responsive website built with Next.js 15, focusing on providing a welcoming experience for both first-time visitors and long-time members. The site is built on a unified, high-performance Tailwind CSS 4 design system.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4, Radix UI (Headless UI components)
- **Animations**: Framer Motion (via `motion/react`)
- **Icons**: Lucide React, Heroicons
- **Typography**: Raleway (Headless/Display), Open Sans (Body/Sans)
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 🔌 External Integrations

- **Planning Center**: Used for event management, registrations, and people management.
  - [API Documentation](https://developer.planning.center/docs/#/overview/)
- **YouTube**: Hosts Sunday service recordings and live streams.
  - [Channel: @columbiaview.church](https://www.youtube.com/@columbiaview.church)
- **Spreaker**: Hosts the church podcast series.
  - [Podcast Link](https://www.spreaker.com/podcast/columbia-view-podcast--3172208)

## 📁 Project Structure

- `app/`: Contains the application's pages and routing logic.
- `components/`: UI components organized by purpose:
  - `ui/`: Primitive and base components (Buttons, Cards, Sections, etc.).
  - `features/`: Complex, feature-specific components (Header, Footer, SEO).
- `public/`: Static assets, primarily optimized WebP images and SVG icons.
- `styles/`: Global CSS (`globals.css`) and custom font configurations.
- `helpers/` & `utils/`: Utility functions and shared logic.
- `types/`: Shared TypeScript type definitions.

## 🎨 Design System & Tokens

The project uses a custom Tailwind 4 theme defined in `styles/globals.css`.

### Core Colors

- **Primary**: `dark-blue (#0b496f)`, `light-blue (#39aae1)`
- **Secondary**: `aqua (#40bcbc)`, `green (#83b841)`, `yellow (#fdbf51)`, `red (#e96351)`
- **Neutrals**: `dark-gray (#333132)`, `light-gray (#e7e7e7)`, `light-blue (#bde6fa)`

### Key Components

- `Hero`: The primary branding component used at the top of pages.
- `Section`: A flexible container for page sections with support for gradients and background images.
- `Button`: A custom Tailwind-based button component supporting brand variants.
- `EventGrid`: Displays upcoming church events (integrated with Planning Center).

## 🚀 Coding Guidelines

1.  **Tailwind First**: Use Tailwind CSS 4 utility classes for all styling.
2.  **Modern Typography**: Use `font-display` (Raleway) for headings and `font-sans` (Open Sans) for body text.
3.  **Image Optimization**: Use the Next.js `Image` component with WebP format and proper `alt` text. Prefer `StaticImageData` imports for local assets.
4.  **Animations**: Use `motion/react` for entrance and scroll animations to maintain a "premium" feel.
5.  **Type Safety**: Maintain strict TypeScript types across the codebase. Avoid `any`.
6.  **Package Management**: Use `pnpm` exclusively for managing dependencies and running scripts. Do not use `npm` or `yarn`.

## ⚙️ Configuration & Environment

- `PLANNING_CENTER_APP_ID`: Application ID from Planning Center.
- `PLANNING_CENTER_SECRET`: Secret key from Planning Center.
- `YOUTUBE_API_KEY`: API Key for YouTube Data API v3.
- `YOUTUBE_CHANNEL_ID`: The ID of your YouTube channel.
- `YOUTUBE_PLAYLIST_ID`: (Optional) The ID of the playlist containing your sermons.

## 🔄 Redirects & Routing

Key redirects are managed in `next.config.js`:

- `/give` -> Redirects to Planning Center Giving.
- `/join-us` -> Redirects to `/plan-your-visit`.

## 🛠 Technical Specifics

1.  **Data Sources**:
    - **Events**: Fetched via Planning Center Calendar API (uses `tag_ids=24038`).
    - **Messages**: Fetched via YouTube Data API v3 (uses playlist for recordings).
2.  **SEO & Metadata**:
    - Global metadata is in `app/layout.tsx`.
    - Structured data (JSON-LD) is managed via the `ChurchSchema` component.
3.  **Utility Functions**:
    - Use `@/utils/cn` for merging Tailwind classes safely (standard `clsx` + `tailwind-merge` pattern).
4.  **Image Optimization**:
    - Remote images from Planning Center and YouTube are allowed in `next.config.js`.

## 📌 Current Strategic Priorities

- **SEO Optimization**: Implement Schema.org markup (Church, Event) and improve meta descriptions across all pages (refer to `SEO_SUGGESTIONS.md`).
- **User Journey**: Focus on the "First-Time Visitor" journey by completing the "Plan Your Visit" and "Contact" pages.
- **Visual Excellence**: Ensure all pages have high-quality hero sections, consistent whitespace, and subtle micro-animations.

## 📡 Useful Commands

- `pnpm run dev`: Starts the development server with Turbo.
- `pnpm run build`: Creates a production build.
- `pnpm run start`: Starts the production server.
