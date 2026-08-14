# AI Search Visibility Plan: columbiaview.org

**Date:** August 12, 2026
**Goal:** Get Columbia View Church cited by AI answer engines (Google AI Overviews, ChatGPT Search, Perplexity) and surfaced in local "church near me" intent.
**Companion doc:** [`SEO-AUDIT.md`](./SEO-AUDIT.md) (March 11, 2026) — general SEO health. This plan is narrower and assumes that audit as prior art.

---

## Strategic Frame

AI answer engines don't rank pages, they assemble answers. Two mechanics drive whether we get pulled into one:

1. **Entity resolution** — the model must confidently know that "Columbia View Church" is a specific organization at 16700 NE Halsey Street, Portland OR 97230, with specific service times. Structured data and cross-source agreement do this.
2. **Passage retrieval** — the model quotes a *passage*, not a page. A paragraph that plainly answers one question, in the static HTML, is the unit of citation. Aspirational copy is never cited; a sentence like "Sunday worship begins at 10:00 AM and typically runs 90 minutes" is.

Everything below serves one of those two mechanics, plus a third lever that isn't code: **corroboration** from sources the models already trust.

### Why this site is well-positioned

The March audit scored AI Citation Readiness at 46/100 overall, but that average hides the real picture: the ICPDX pages score 88, 82, and 74 because they contain named credentials, specific fees, real hours, and testimonials. The church's own core pages score 15–31. We already know what "good" looks like here — it just hasn't been applied to the church side of the site.

---

## Already Closed Since the March Audit

Verified in the current tree — do not re-open these:

| March item | Status |
|---|---|
| Telephone not in E.164 format | Fixed — `church-schema.tsx:26` |
| `ChurchSchema` / `JsonLd` client-rendered | Fixed — both are server components |
| Missing security headers | Fixed — `next.config.js:22` |
| No `LegalService` schema for ICPDX | Fixed — `icpdx-schema.tsx:6` |
| Missing meta descriptions on `/events`, `/nextgen` | Fixed |
| Sitemap `priority` / `changeFrequency` noise | Fixed — `app/sitemap.ts` |
| Hero video poster not preloaded | Fixed — `app/page.tsx:56` |
| `HeroVideo` unnecessarily `'use client'` | Fixed |
| YouTube iframe loads unconditionally | Fixed — `YouTubePlayer.tsx` uses a facade |

---

## The Plan

### Phase 1 — Unblock the sermon archive

This is the single highest-leverage change on the site. The teaching archive is the only large body of unique, human-authored, topically-specific content the church owns, and it is currently invisible.

| # | Change | File | Notes |
|---|---|---|---|
| 1.1 | Remove `robots: { index: false }` | `app/messages/[id]/page.tsx:13` | Every sermon page is currently deindexed |
| 1.2 | Replace static `metadata` with `generateMetadata` | `app/messages/[id]/page.tsx` | Per-message title + description from the YouTube snippet; today all pages share the title `"Messages \| Columbia View Church"` |
| 1.3 | Add sermon URLs to the sitemap | `app/sitemap.ts` | Fetch message IDs from `queries/youtube.ts`; use real `published_at` for `lastModified` |
| 1.4 | Add `VideoObject` schema per sermon | new `components/features/seo/video-schema.tsx` | `name`, `description`, `uploadDate`, `thumbnailUrl`, `embedUrl`, `duration` — all available from the YouTube API |
| 1.5 | Add canonical tag to sermon pages | `app/messages/[id]/page.tsx` | Every other page has one; these don't |

**Dependency:** 1.1 must land before 1.3 is meaningful — sitemap entries for noindexed pages are a crawl-budget contradiction.

**Caveat to decide before starting:** sermon pages currently render title, date, player, and the YouTube description. If a given sermon's YouTube description is one line, the indexed page is thin content — which hurts rather than helps. Phase 2 item 2.1 is the real fix; if we ship 1.1 without it, consider indexing only messages whose description exceeds ~150 words.

### Phase 2 — Make pages answer questions

| # | Change | File | Notes |
|---|---|---|---|
| 2.1 | Pull YouTube transcripts onto sermon pages as readable text | `queries/youtube.ts`, `app/messages/[id]/page.tsx` | The highest-value content work available. Transcripts are what make a sermon page citable for "what does the Bible say about…" queries. Needs a transcript source — the YouTube Data API does not expose captions without OAuth; evaluate `youtube-transcript` or a manual paste workflow for key series |
| 2.2 | Add `FAQPage` schema to `/plan-your-visit` | `app/plan-your-visit/accordion-section.tsx` + new schema component | Content already exists and already renders server-side, so it is crawlable — it just isn't marked up |
| 2.3 | Rewrite accordion summaries as questions | `app/plan-your-visit/accordion-section.tsx` | `"On Arrival"` → `"What should I expect when I arrive?"`; `"Infants & Children"` → `"Is there childcare during the service?"`. Matches real query phrasing |
| 2.4 | Add a factual block to the homepage | `app/page.tsx` | ~200 words: service time, address, neighborhood (Rockwood / East Portland / Gresham), denomination, what a first visit is like. Homepage AI-readiness is 15/100 because the copy is entirely aspirational |
| 2.5 | Add static editorial content to `/events` | `app/events/page.tsx` | ~300 words on recurring rhythms (discipleship groups, campout, potlucks, workdays) so the page says something when the Planning Center feed is empty. Currently ~30 words |
| 2.6 | Add `Event` schema from Planning Center data | `app/events/page.tsx` | `name`, `startDate`, `endDate`, `location`, `description` — all already fetched |
| 2.7 | Add contact info to `/plan-your-visit` | `app/plan-your-visit/page.tsx:184` | Page says "We'd love to hear from you" and gives no phone or email |

### Phase 3 — Entity and crawler hygiene

| # | Change | File | Notes |
|---|---|---|---|
| 3.1 | Expand `ChurchSchema` | `components/features/seo/church-schema.tsx` | Add `hasMap` (Google Maps URL), `areaServed` (Portland, Gresham, Fairview, Wood Village), `subOrganization` pointing at the ICPDX `@id`, `parentOrganization` if denominationally affiliated, and Instagram + Google Business Profile in `sameAs` |
| 3.2 | Add `WebSite` schema | `app/layout.tsx` | Establishes the site as the canonical entity home |
| 3.3 | Add `BreadcrumbList` to interior pages | new shared component | Helps models understand site hierarchy |
| 3.4 | Add `llms.txt` | `app/llms.txt/route.ts` or `public/llms.txt` | Plain-text index of key facts and URLs. Low cost, emerging convention, no downside |
| 3.5 | Keep AI crawlers explicitly allowed | `app/robots.ts` | Currently `Allow: /` for `*`, which is correct. **Do not** block GPTBot, ClaudeBot, PerplexityBot, or Google-Extended — being crawled is the entire point of this plan. Noted here so it doesn't get "hardened" by mistake |
| 3.6 | Resolve `/icpdx` vs `/immigrant-connection-pdx` | `app/sitemap.ts`, routing | Two URLs competing for one topic splits the entity signal. Pick one, 301 the other |

### Phase 4 — Cleanup carried over from March

Small, still open, worth doing while adjacent files are being touched:

| # | Change | File |
|---|---|---|
| 4.1 | Fix typo `"Gods Know Me"` → `"God Knows Me"` | `app/nextgen/page.tsx:219` |
| 4.2 | Fix typo `"Dids decorating"` → `"Kids decorating"` (alt text) | `app/nextgen/page.tsx:96` |
| 4.3 | Remove `'use client'` from `Footer` | `components/features/footer.tsx:1` |
| 4.4 | Server-render `ServiceList` | `app/immigrant-connection-pdx/ServiceList.tsx` |
| 4.5 | Expand meta titles toward 50–60 chars with "Portland, OR" | All page files; `app/layout.tsx:13` is bare `"Columbia View Church"` |
| 4.6 | Update ICPDX annual report from 2023 | `app/icpdx/page.tsx` |

---

## Off-Site: The Part That Isn't Code

Ranked by likely impact on AI-assisted local discovery. None of this is in the repo, and items 1 and 2 probably outweigh most of Phase 3.

1. **Google Business Profile.** For "church near me" and "churches in East Portland," this is the dominant input — AI assistants lean on it heavily for local intent. Service times, hours, photos, and the ICPDX service listing must be current and must match the site *exactly*. Any mismatch between GBP and `ChurchSchema` weakens entity confidence in both.
2. **NAP consistency.** Name, address, phone identical across the site, GBP, Facebook, YouTube's about page, and any denominational or local directory. Inconsistency is the most common reason a model hedges on a local entity.
3. **ICPDX as the corroboration engine.** Immigrant legal services in East Portland is a genuinely underserved query space with little competition, and it's the kind of work that earns links from local news, nonprofit directories, legal-aid referral lists, and county resource pages. Those third-party mentions are corroboration that cannot be manufactured with schema — and they lift the church entity via `subOrganization` (3.1).
4. **YouTube metadata.** Sermon descriptions are currently the entire text content of each sermon page. Writing real 150+ word descriptions with Scripture references and topic keywords improves both YouTube search and, via item 1.2, the church site itself. This is a workflow change for whoever publishes, and it compounds.

---

## Measurement

Ranking positions are the wrong metric here. Track instead:

- **Referral traffic from AI sources** in GA4 — `chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com` as referrers. Segment these out now so there's a baseline before Phase 1 lands.
- **Google Search Console impressions on sermon URLs** — currently zero by construction. Any non-zero number after Phase 1 is signal.
- **Direct spot checks** — ask ChatGPT, Perplexity, and Google AI Overviews: "What time are services at Columbia View Church in Portland?", "Where can I get immigration legal help in East Portland?", "Non-denominational churches near Gresham, Oregon." Record the answers and citations verbatim before starting, then re-run monthly. This is crude but it is the only direct read on the actual goal.
- **Rich results validation** — Google Rich Results Test on `/events`, `/plan-your-visit`, and a sermon page after each schema addition.

Expect a lag. Indexation of the sermon archive is weeks; AI training and retrieval corpora refresh on their own schedule, and entity confidence builds slowly.

---

## Sequencing Recommendation

Phase 1 first and alone — it's small, it's the biggest unlock, and it needs the thin-content decision made deliberately rather than discovered later. Phase 2 is where most of the real work and the real payoff live, and 2.1 (transcripts) is the item most likely to need a spike before it can be scoped. Phases 3 and 4 are safe to batch into a single cleanup pass whenever convenient.

---

## Explicitly Not Doing

- **Blocking AI crawlers.** Contrary to the goal.
- **Programmatic/templated location pages.** A single-campus church generating "church in [neighborhood]" pages is thin-content spam and risks the whole domain.
- **AI-generated sermon summaries presented as the pastor's words.** Attribution matters more than volume here, and fabricated theological content attributed to a named person is a trust problem, not an SEO problem.
- **Chasing keyword volume over accuracy.** Wrong service times outrank nothing.

---

*Generated with [Claude Code](https://claude.ai/code)*
