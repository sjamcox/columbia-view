# SEO Audit Report: columbiaview.org

**Date:** March 11, 2026 | **Business Type:** Church / Religious Organization | **Framework:** Next.js 15 on Vercel

---

## SEO Health Score: 55 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 71 | 17.8 |
| Content Quality | 25% | 54 | 13.5 |
| On-Page SEO | 20% | 50 | 10.0 |
| Schema / Structured Data | 10% | 28 | 2.8 |
| Performance (CWV) | 10% | 55 | 5.5 |
| Images | 5% | 65 | 3.3 |
| AI Search Readiness | 5% | 46 | 2.3 |

---

## Category Summaries

### Technical SEO — 71/100

**Strengths:** Clean URL structure, proper robots.txt, server-side rendering via Next.js App Router, correct canonical tags on all pages, well-configured redirects.

**Issues:** Missing security headers (CSP, X-Frame-Options, X-Content-Type-Options), no IndexNow protocol, Footer and ChurchSchema unnecessarily marked `'use client'`, missing meta descriptions on 4 pages.

### Content Quality — 54/100

**Strengths:** ICPDX pages are excellent (DOJ credentials, named staff with bios, financial transparency, client testimonials). About page has strong E-E-A-T signals. NextGen page meets word count with curriculum details.

**Issues:** Events page has only ~30 words of static content. Messages page has ~120 words. Homepage is under 500 words. Duplicate worship service paragraph between /plan-your-visit and /ministries. Two typos in rendered content ("Gods Know Me", "Dids decorating").

### On-Page SEO — 50/100

**Strengths:** Every page has an H1. Canonical tags set correctly on all pages.

**Issues:** All 11 meta titles are under 50 characters (target: 50-60). Four pages missing meta descriptions (/events, /nextgen, /icpdx/jobs, /icpdx/staff). Homepage meta description is 175 chars (over limit). No page includes "Portland, OR" in its title.

### Schema / Structured Data — 28/100

**Strengths:** Global Church + LocalBusiness schema with address, geo, hours, and sameAs links.

**Issues:** Only 1 JSON-LD block on the entire site (global). Zero page-specific schema. Telephone format invalid (dots instead of E.164). Logo is a bare string instead of ImageObject. No Event schema on /events, no VideoObject on /messages, no LegalService on /immigrant-connection-pdx, no BreadcrumbList, no WebSite+SearchAction. Schema rendered client-side unnecessarily.

### Performance — 55/100

**Strengths:** Next.js SSR, Vercel edge delivery, WebP images, `next/font` with `display: swap`, proper lazy loading defaults.

**Issues:** Hero video poster not preloaded (LCP risk). HeroVideo is `'use client'` unnecessarily (delays FCP). YouTube iframe loads unconditionally on /messages (INP risk — ~500KB+ of YouTube JS). MessageCard starts at `opacity-0` with JS stagger animation on 36 cards. Recharts not lazy-loaded on /icpdx.

### Sitemap — 48/100

**Strengths:** Valid XML, all indexable routes present, referenced in robots.txt.

**Issues:** `lastModified: new Date()` on every URL every deploy. `priority` and `changeFrequency` fields are ignored by Google. `/icpdx` and `/immigrant-connection-pdx` both in sitemap competing for same topic.

---

## Prioritized Action Plan

### Critical — Fix Immediately

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| 1 | **Events page has ~30 words of static content** — add 300+ words describing event types, community, and frequency. Add meta description. | `app/events/page.tsx` | Content, On-Page |
| 2 | **Messages page has ~120 words** — add context about teaching style, current series, who preaches. Add schema. | `app/messages/page.tsx` | Content, Schema |
| 3 | **Fix telephone in schema to E.164 format** (`+15032537939`) | `components/features/seo/church-schema.tsx` | Schema |
| 4 | **Add LegalService schema for ICPDX** — ICPDX is a separate business with its own hours (Mon 11-5, Tue-Thu 9-6); needs its own structured data distinct from the church schema | `app/immigrant-connection-pdx/page.tsx` | Schema, Trust |

### High — Fix Within 1 Week

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| 5 | **Add security headers** (X-Content-Type-Options, X-Frame-Options, Referrer-Policy) | `next.config.js` | Technical |
| 6 | **Remove `'use client'` from HeroVideo** — no JS needed, delays LCP | `components/HeroVideo.tsx` | Performance |
| 7 | **Add poster preload** for hero video | `app/page.tsx` or `app/layout.tsx` | Performance (LCP) |
| 8 | **Replace YouTube iframe with lite embed** (facade pattern) | `components/YouTubePlayer.tsx` | Performance (INP) |
| 9 | **Remove `'use client'` from ChurchSchema and JsonLd** — render JSON-LD server-side | `components/features/seo/church-schema.tsx`, `json-ld.tsx` | Schema, Performance |
| 10 | **Add meta descriptions** to /events, /nextgen, /icpdx/jobs, /icpdx/staff | 4 page files | On-Page |
| 11 | **Expand all meta titles to 50-60 chars** with "Portland, OR" and brand name | All 11 page files | On-Page |
| 12 | **Fix `lastModified` in sitemap** — use real dates, not `new Date()` | `app/sitemap.ts` | Sitemap |
| 13 | **Remove `priority` and `changeFrequency`** from sitemap (Google ignores them) | `app/sitemap.ts` | Sitemap |
| 14 | **Fix duplicate content** — differentiate worship service paragraph between /plan-your-visit and /ministries | 2 page files | Content |

### Medium — Fix Within 1 Month

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| 15 | **Add Event schema** to /events (data already available from Planning Center) | `app/events/page.tsx` | Schema |
| 16 | **Add VideoObject schema** to /messages | `app/messages/page.tsx` | Schema |
| 17 | **Add LegalService schema** to /immigrant-connection-pdx | `app/immigrant-connection-pdx/page.tsx` | Schema |
| 18 | **Add WebSite + SearchAction schema** (Sitelinks Searchbox eligibility) | `app/layout.tsx` | Schema |
| 19 | **Add BreadcrumbList schema** to all interior pages | New component | Schema |
| 20 | **Resolve /icpdx vs /immigrant-connection-pdx** — pick one canonical URL hierarchy, 301 the other | `app/sitemap.ts`, routing | Sitemap, Technical |
| 21 | **Server-render ServiceList** on /immigrant-connection-pdx (currently behind JS toggle) | `immigrant-connection-pdx/ServiceList.tsx` | Content, AI Readiness |
| 22 | **Homepage** — add 200+ words with Portland/Rockwood context, denomination, history | `app/page.tsx` | Content |
| 23 | **Remove `'use client'` from Footer** — no hooks or browser APIs used | `components/features/footer.tsx` | Performance |
| 24 | **Fix typos**: "Gods Know Me" → "God Knows Me", "Dids decorating" → "Kids decorating" | `app/nextgen/page.tsx` | Content |
| 25 | **Upgrade logo/image in schema** to ImageObject with width/height | `church-schema.tsx` | Schema |
| 26 | **ICPDX Jobs page** — expand job descriptions, add JobPosting schema | `immigrant-connection-pdx/jobs/page.tsx` | Content, Schema |
| 27 | **Add Plan Your Visit contact info** — page says "We'd love to hear from you" but provides no phone/email | `app/plan-your-visit/page.tsx` | Content, Trust |

### Low — Backlog

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| 28 | Lazy-load Recharts on /icpdx with `next/dynamic` | `app/icpdx/page.tsx` | Performance |
| 29 | Implement IndexNow for Bing/Yandex | New file | Technical |
| 30 | Add David's MDiv credential to About page (currently only on ICPDX Staff) | `app/about/page.tsx` | E-E-A-T |
| 31 | Fix Cheney Family bio inconsistency (South Africa vs Swaziland) | `app/ministries/page.tsx` | Trust |
| 32 | Update ICPDX Annual Report from 2023 to current year | `app/icpdx/page.tsx` | Content freshness |
| 33 | Subset Raleway font weights to only those used | `styles/fonts.ts` | Performance |
| 34 | Consider indexing /messages/[id] pages with unique titles for sermon discoverability | `app/messages/[id]/page.tsx` | Indexability |

---

## Content Quality by Page

| Page | Words | Score | Top Issue |
|------|-------|-------|-----------|
| `/about` | ~2,100 | 74 | Meta title too short |
| `/immigrant-connection-pdx` | ~750 | 72 | ServiceList hidden behind JS toggle |
| `/immigrant-connection-pdx/staff` | ~1,600 | 71 | Missing meta description |
| `/icpdx` | ~1,200 | 68 | Annual report outdated (2023) |
| `/plan-your-visit` | ~500 | 63 | No contact info despite CTA |
| `/nextgen` | ~950 | 62 | Missing meta description, typos |
| `/ministries` | ~650 | 57 | Under word count, duplicate content |
| `/` (homepage) | ~320 | 52 | Under word count, no local keywords |
| `/messages` | ~120 | 31 | Almost no static content |
| `/events` | ~30 | 24 | Critically thin |
| `/immigrant-connection-pdx/jobs` | ~120 | 19 | Critically thin, no schema |

---

## E-E-A-T Assessment

| Factor | Weight | Score | Weighted |
|--------|--------|-------|----------|
| Experience | 20% | 68 | 13.6 |
| Expertise | 25% | 71 | 17.8 |
| Authoritativeness | 25% | 58 | 14.5 |
| Trustworthiness | 30% | 74 | 22.2 |
| **Total E-E-A-T** | | | **68.1/100** |

The ICPDX pages significantly elevate the overall E-E-A-T score. The church's core pages (Homepage, Events, Messages) drag the average down.

---

## AI Citation Readiness by Page

| Page | Score | Reason |
|------|-------|--------|
| `/icpdx` | 88 | Named stats, process steps, values, testimonials |
| `/immigrant-connection-pdx/staff` | 82 | Named credentials, languages, specific dates |
| `/immigrant-connection-pdx` | 74 | DOJ status, fees, hours, address, service list |
| `/about` | 65 | Vision/mission statements, beliefs, staff bios |
| `/nextgen` | 60 | Age groups, curriculum, Scripture references |
| `/plan-your-visit` | 45 | Accordion content client-rendered, limited static data |
| `/ministries` | 42 | Missionary family details, office hours — sparse on others |
| `/messages` | 18 | No sermon content in static HTML |
| `/` (homepage) | 15 | No factual blocks, aspirational copy only |
| `/events` | 12 | Dynamic content, no static editorial context |
| `/immigrant-connection-pdx/jobs` | 10 | Nearly empty descriptions |

---

## Technical Details

### Crawlability (90/100)

- robots.txt: `Allow: /` for all user agents, sitemap declared
- Sitemap: 11 URLs, valid XML, all indexable routes present
- Internal linking: Header navigation covers all top-level routes; Footer repeats key links
- Dynamic `/messages/[id]` pages correctly excluded from sitemap (noindexed)

### Indexability (65/100)

- Canonical tags set on every page
- `/messages/[id]` intentionally noindexed (consider re-evaluating for sermon discoverability)
- Missing meta descriptions on `/events`, `/nextgen`, `/immigrant-connection-pdx/jobs`, `/immigrant-connection-pdx/staff`
- `/icpdx` title vague — omits "PDX" and "Columbia View Church"

### Security (60/100)

- HTTPS enforced via Vercel
- `metadataBase` uses HTTPS
- Missing from `next.config.js`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`

Recommended `next.config.js` addition:

```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
  ]
},
```

### URL Structure (88/100)

- Clean, lowercase, hyphenated URLs
- Proper 308 redirects for `/give`, `/join-us`, `/immigrant-connection-pdx/booking`
- Shallow depth (all content one level deep)

### Mobile (85/100)

- Responsive Tailwind CSS breakpoints throughout
- Hamburger menu for mobile navigation
- Proper viewport meta (auto-injected by Next.js)
- Background video has `playsInline` and `muted` for mobile compatibility

### Core Web Vitals (60/100)

- **LCP risk:** Hero video poster not preloaded; HeroVideo is client component
- **INP risk:** YouTube iframe loads ~500KB+ JS unconditionally; 36 MessageCards animate via JS
- **CLS:** Generally well-handled with `fill` or explicit dimensions on images

### JavaScript Rendering (82/100)

- All pages are React Server Components (good)
- Unnecessary `'use client'` on: `Footer`, `ChurchSchema`, `JsonLd`, `HeroVideo`
- Data fetching is entirely server-side with `revalidate` caching

### Structured Data (28/100)

Existing schema (global Church + LocalBusiness) has issues:
- `telephone` uses dot notation instead of E.164 (`+15032537939`)
- `logo` and `image` should be `ImageObject` with width/height
- Rendered client-side (should be server component)

Missing schema:
- `Event` on `/events` (all data available from Planning Center)
- `VideoObject` on `/messages` (all data available from YouTube API)
- `LegalService` on `/immigrant-connection-pdx`
- `WebSite` + `SearchAction` (Sitelinks Searchbox)
- `BreadcrumbList` on all interior pages
- `JobPosting` on `/immigrant-connection-pdx/jobs`

### IndexNow (0/100)

Not implemented. Would benefit `/events` and `/messages` pages for Bing/Yandex indexation speed.

---

## Performance Recommendations

### 1. Hero Video (LCP)

Remove `'use client'` from `components/HeroVideo.tsx` — the video element needs no React state or effects. Add poster preload:

```tsx
<link rel="preload" as="image" href="/videos/hero-poster.jpg" fetchpriority="high" />
```

Add `width={1920} height={1080}` to the `<video>` element to prevent CLS.

### 2. YouTube Lite Embed (INP)

Replace the bare iframe in `components/YouTubePlayer.tsx` with a facade pattern — render a thumbnail + play button, inject iframe only on click. This eliminates ~500KB of YouTube JS from initial page load on `/messages`.

### 3. MessageCard Animation (INP)

`components/MessageCard.tsx` starts at `opacity-0` and animates in via JS across 36 cards. Use CSS animation or only animate viewport-visible cards via IntersectionObserver.

### 4. Client Component Cleanup

Remove `'use client'` from components that don't need it:
- `components/HeroVideo.tsx`
- `components/features/footer.tsx`
- `components/features/seo/church-schema.tsx`
- `components/features/seo/json-ld.tsx`

---

## Quick Wins (Highest Impact, Lowest Effort)

1. **Fix telephone format** in `church-schema.tsx` — one-line change
2. **Remove `'use client'`** from 4 components — four one-line deletions
3. **Add 4 missing meta descriptions** — ~10 minutes of writing
4. **Expand all meta titles** to include "Columbia View Church" + "Portland, OR"
5. **Clean up sitemap** — remove `priority`/`changeFrequency`, fix `lastModified`
6. **Fix 2 typos** on NextGen page — two-word fixes

---

*Generated with [Claude Code](https://claude.ai/code)*
