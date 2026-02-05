# Columbia View Church Website - Site Assessment

> **Assessment Date:** December 19, 2025
> **Scope:** All pages excluding ICPDX and Immigrant Connection PDX

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Top 10 Recommendations](#top-10-recommendations)
3. [User Journey Analysis](#-user-journey-analysis)
4. [Navigation & Information Architecture](#-navigation--information-architecture)
5. [Missing Content & Pages](#-missing-content--pages)
6. [Page-by-Page Assessment](#page-by-page-assessment)
7. [Technical Considerations](#technical-considerations)
8. [Appendix: Reference Materials](#appendix-reference-materials)

---

## Executive Summary

The website has successfully transitioned to a **modern Tailwind-based architecture**, with legacy MUI components fully removed. The NextGen page remains the gold standard for design, and the rest of the site now matches its quality and performance.

**Key Findings:**

- ✅ NextGen page demonstrates excellent modern design
- ✅ Homepage, About, Messages, and Ministries migrated to Tailwind
- ✅ MUI dependencies fully removed
- 🔧 Unified Tailwind 4 design system implemented code-wide

---

## Top 10 Recommendations

> These are the highest-impact changes to improve the site.

1. **Create a "Plan Your Visit" page** - Give first-timers a clear, warm welcome
2. **Add NextGen to main navigation** - Your best page is hidden
3. **Create a Contact page** - With map, form, and clear info
4. **Add "Watch Live" to navigation** - Serve online attendees
5. **Redesign the homepage hero** - Replace slideshow with purposeful messaging
6. **Create a Life Groups landing page** - Groups are key for connection
7. **Optimize Planning Center integration** - Leverage API for dynamic event data
8. **Add hero sections to all pages** - Consistent, polished first impressions
9. **Complete staff photos** - Everyone should have a headshot
10. **Add a prayer request form** - Simple way for people to connect

---

## 🎯 User Journey Analysis

Understanding how different users experience the site reveals key improvement opportunities.

### First-Time Visitor Journey

| Current Experience                                    | Ideal Experience                                                               |
| ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| Lands on homepage → sees slideshow with no context    | Lands on homepage → immediately sees welcoming hero with "Plan Your Visit" CTA |
| Scrolls to find "Join us Sunday" section              | Clicks CTA → lands on dedicated visitor page                                   |
| Clicks "Join us this Sunday" → goes to /join-us       | Sees service time, location with map, parking info                             |
| Has to read through page to find service time         | Clear section about kids with link to NextGen                                  |
| If they have kids, they need to find /nextgen somehow | Option to fill out "New Here" form for a welcome gift                          |
| If they want directions, they check the footer        | Leaves with clear expectations and excitement                                  |

### Returning Member Journey

| Current Experience                                     | Ideal Experience                                |
| ------------------------------------------------------ | ----------------------------------------------- |
| Events: Must navigate to Get Involved → Event Calendar | Events easily accessible (or current nav works) |
| Messages: Direct nav link works well ✓                 | Messages: Direct nav link works well ✓          |
| Giving: Direct nav link works well ✓                   | Giving: Direct nav link works well ✓            |
| Life Groups: Must go to Ministries page and scroll     | Life Groups easily accessible from nav          |

### Online-Only Attendee Journey

| Current Experience                                | Ideal Experience                      |
| ------------------------------------------------- | ------------------------------------- |
| No clear "Watch Live" option in navigation        | "Watch Live" prominently in nav       |
| Must know to click YouTube icon in header         | Dedicated page with embedded stream   |
| No landing page explaining online experience      | Chat or prayer request form available |
| No way to connect or request prayer during stream | Easy giving link and connect card     |

---

## 🧭 Navigation & Information Architecture

### Current Menu Structure

```
Get Involved (dropdown)
├── Join Us
├── Service Opportunities → external
├── Event Calendar
├── Membership → external
├── Baptism → external
├── Child Dedication → external
└── Internship Opportunities → external

Ministries
Messages
Immigrant Connection (dropdown) [excluded from scope]
About Us
Give → external
```

### What's Working

- ✅ **"Give" is visible** - Donation link is in the main nav
- ✅ **External links for forms** - Using Planning Center keeps the site lean
- ✅ **Social media icons** - Facebook and YouTube are accessible
- ✅ **Footer has essentials** - Address, phone, service time

### Navigation Issues

| Issue                                           | Impact                                        | Recommendation                                        |
| ----------------------------------------------- | --------------------------------------------- | ----------------------------------------------------- |
| No "I'm New" or "Plan Your Visit" prominent CTA | First-time visitors have to hunt for info     | Add a bold "Plan Your Visit" button in header or hero |
| NextGen not in main nav                         | One of your best pages is buried              | Add to Ministries dropdown or make it top-level       |
| "Get Involved" is vague                         | Visitors don't know what to expect            | Rename to "Visit" or "Connect"                        |
| No Contact page                                 | People must scroll to footer for contact info | Create dedicated Contact page                         |
| No Watch Online / Livestream link               | YouTube links exist but aren't prominent      | Add "Watch Live" to nav                               |
| Life Groups buried                              | Small groups are key but hidden in Ministries | Add to nav dropdown                                   |

### Suggested Navigation Restructure

```
Plan Your Visit (prominent button/link)
├── What to Expect
├── Service Times & Location
├── Kids & Nursery → /nextgen
└── New Here Form

Connect (dropdown)
├── Life Groups
├── Serve / Volunteer
├── Membership
├── Baptism & Dedications

Ministries
├── NextGen (Kids)
├── Worship
├── Missions
└── Immigrant Connection

Messages
├── Watch Live
└── Podcast/Archive

About
├── Our Story & Vision
├── Staff & Leadership
├── Beliefs
└── Contact

Give (button style, stands out)
```

---

## 📋 Missing Content & Pages

### High Priority - Should Add

| Missing Content                      | Why It Matters                                                     | Suggested Implementation                                                             |
| ------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| **"I'm New" / Plan Your Visit Page** | First-time visitors need a clear, welcoming landing page           | Page with: what to wear, parking, kids info, service flow, map, pastor welcome video |
| **Contact Page**                     | People want to reach the church easily                             | Contact form, address with Google Map, phone, email, office hours                    |
| **Watch Live / Livestream Page**     | No branded landing page for online attendees                       | Embedded live stream, prayer request form, service times, past messages link         |
| **Life Groups Landing Page**         | Small groups are key for connection but have no dedicated presence | Why groups matter, photos, how to join, leader spotlight                             |

### Medium Priority - Would Improve Experience

| Missing Content                  | Why It Matters                                  | Suggested Implementation                         |
| -------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| **Prayer Request Form**          | Allows visitors/members to submit prayer needs  | Simple form that emails prayer team              |
| **Photo/Media Gallery**          | People want to see what the church _feels_ like | Gallery of community life: events, worship, kids |
| **Testimonies/Stories Page**     | Powerful social proof of life change            | Video or written testimonies                     |
| **Blog / Church News**           | Keeps site fresh, improves SEO                  | Pastor letters, event recaps, announcements      |
| **What We Believe (standalone)** | Currently buried in About page                  | Dedicated, visually engaging page                |

### Low Priority - Nice to Have

| Missing Content        | Why It Matters                           | Suggested Implementation                       |
| ---------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Facility Rentals**   | Income opportunity                       | Info page if applicable                        |
| **Podcast Page**       | Messages on Spreaker but no branded page | Subscribe links (Apple, Spotify, etc.)         |
| **FAQ Page**           | Reduces repetitive questions             | Common questions about visiting, kids, beliefs |
| **Giving Impact Page** | Shows donors where money goes            | Annual report highlights, ministry impact      |

---

## 🖼️ Content & Imagery Gaps

### Photos That Are Missing or Needed

| Content Type            | Current State                                   | What's Needed                         |
| ----------------------- | ----------------------------------------------- | ------------------------------------- |
| **Staff Headshots**     | 3 staff (Russelle, Johan, Linda) have no photos | Professional headshots for all        |
| **Life Groups**         | Only 2 stock-ish photos                         | Authentic photos of actual groups     |
| **Facilities**          | No building/interior photos                     | Sanctuary, lobby, kids rooms, parking |
| **Baptism/Dedications** | Limited imagery                                 | More celebration photos               |
| **Community Events**    | Good Easter 2025 set                            | Continue documenting events           |

### Video Content Opportunities

| Video Type                 | Purpose                           | Placement                      |
| -------------------------- | --------------------------------- | ------------------------------ |
| **Welcome Video**          | 60-90 sec pastor welcome          | Homepage hero, Plan Your Visit |
| **NextGen Overview**       | Show parents what kids experience | NextGen page                   |
| **Life Group Testimonial** | Why groups matter                 | Life Groups page               |
| **Church Story**           | 2-3 min history and vision        | About page                     |

---

## Page-by-Page Assessment

### 🌟 Pages Looking Great

#### NextGen Ministries (`/nextgen`) — ★★★★★ Excellent

This page is the benchmark for what the rest of the site should aspire to.

**Strengths:**

- **Cohesive Design System:** Custom Tailwind theme with brand colors
- **Stunning Hero Section:** Full-bleed image with gradient overlay, bold typography, clear CTA
- **Thoughtful Component Design:** `KeywordCard`, `AgeCard`, `CoreTruth` components
- **Rich Visual Storytelling:** Multiple image sections, overlapping photo grids, gradient backgrounds
- **Motion & Interactivity:** Smooth fade-in animations using `motion/react`
- **Strong Typography Hierarchy:** Display font (Raleway), gradient text effects
- **Beautiful Gradient Sections:** Multiple branded gradient backgrounds

**What Makes It Work:**

- Hero with purpose and clear call-to-action
- Varied section backgrounds (gradients, images, white)
- Consistent rounded corners and shadow depth
- Proper whitespace throughout

---

### ⚠️ Pages Needing Improvement

#### Homepage (`/`) — ★★★☆☆ Moderate

The homepage is modern and cohesive, following the Tailwind design system.

| Issue                                             | Recommendation                                        |
| ------------------------------------------------- | ----------------------------------------------------- |
| Slideshow lacks impact - no text overlays or CTAs | Replace with Hero component with text overlay and CTA |
| Hardcoded colors like `rgb(14, 73, 111)`          | Use brand color variables consistently                |
| Inconsistent button components                    | Standardize on Tailwind Button component              |
| Static sections lack animation                    | Add entrance animations                               |

---

#### About Page (`/about`) — ★★☆☆☆ Needs Work

This page is extremely text-heavy with minimal visual interest.

| Issue                                         | Recommendation                                               |
| --------------------------------------------- | ------------------------------------------------------------ |
| No hero section                               | Add Hero with warm, welcoming community image                |
| Wall of text for Vision/Mission/Beliefs       | Create visual cards for "Belong, Believe, Become" with icons |
| Inconsistent staff display (3 without photos) | Add photos for all staff or remove incomplete entries        |
| Core values as unstyled `<ul>`                | Design icon cards for core values                            |
| No imagery                                    | Break up text with images, pull quotes, or dividers          |

---

#### Join Us Page (`/join-us`) — ★★★☆☆ Moderate

Has some nice elements but lacks a proper introduction.

| Issue                             | Recommendation                                     |
| --------------------------------- | -------------------------------------------------- |
| No hero section                   | Add hero image of Sunday worship with overlay text |
| Standard accordion component used | Enhance accordions with brand colors and icons     |
| Photo grid has no captions        | Add subtle labels to the photo grid                |
| No map or directions section      | Add styled map/directions section                  |

---

#### Messages Page (`/messages`) — ★★☆☆☆ Needs Work

Extremely minimal design that feels like a placeholder.

| Issue                                      | Recommendation                                        |
| ------------------------------------------ | ----------------------------------------------------- |
| No hero or visual introduction             | Add Hero with teaching/Scripture imagery              |
| MessageCard is minimal (just date + title) | Add speaker name, series badges, duration, thumbnails |
| All messages look identical                | Add "Current Series" featured section                 |
| No search or filter                        | Consider category filtering or search                 |
| Plain white background                     | Add subtle gradient or pattern                        |

---

#### Ministries Page (`/ministries`) — ★★☆☆☆ Needs Work

Repetitive layout with minimal visual interest.

| Issue                                | Recommendation                                           |
| ------------------------------------ | -------------------------------------------------------- |
| No hero section                      | Add Hero showing community/ministry in action            |
| Every ministry uses identical layout | Use alternating layouts (image left/right) or card grids |
| Text-heavy, minimal imagery          | Add icons for each ministry category                     |
| All sections look the same           | Add gradient section breaks between ministries           |

---

#### Events Page (`/events`) — ★★★☆☆ Moderate

Clean but basic - the EventCard component is well-designed but page lacks polish.

| Issue                      | Recommendation                                |
| -------------------------- | --------------------------------------------- |
| No hero section            | Add Hero with vibrant community event imagery |
| Generic gray-50 background | Use brand gradients instead                   |
| All events treated equally | Create "Featured Events" section              |
| Only grid of cards         | Consider calendar view toggle                 |

---

## Technical Considerations

### Framework Split

### Modern Architecture

The site has been unified under a modern Tailwind CSS 4 styling approach:

| Area           | Technology                       | State               |
| -------------- | -------------------------------- | ------------------- |
| **All Pages**  | Tailwind CSS 4 with custom theme | Modern, Unified     |
| **Components** | Radix UI + Framer Motion         | Accessible, Premium |

**Achieved:**

- Consistent look and feel across all pages
- Removed technical debt by eliminating MUI dependencies
- High performance via Next.js 15 and Tailwind 4

---

### Component Inventory

#### Great Components (Keep & Reuse)

| Component      | Location                      | Notes                               |
| -------------- | ----------------------------- | ----------------------------------- |
| `Hero`         | `/components/Hero.tsx`        | Modern, flexible, great gradients   |
| `ImageSection` | `/components/Section.tsx`     | Beautiful image overlays            |
| `KeywordCard`  | `/components/KeywordCard.tsx` | Clean image + text layout           |
| `AgeCard`      | `/nextgen/AgeCard.tsx`        | Good color-coded badge system       |
| `EventCard`    | `/components/EventCard.tsx`   | Well-structured with metadata       |
| `Button`       | `/components/Button.tsx`      | Modern gradient buttons with arrows |

#### Components Needing Enhancements

| Component          | Location                       | Issues                        |
| ------------------ | ------------------------------ | ----------------------------- |
| `Slideshow`        | `/components/Slideshow.tsx`    | No text overlay, no CTA       |
| `StaffListing`     | `/components/StaffListing.tsx` | Needs more modern layout      |
| `AccordionSection` | `/components/ui/accordion.tsx` | Could use more custom styling |

---

### 📱 Mobile Experience

**Strengths:**

- Responsive layouts work on mobile
- NavDrawer provides mobile navigation
- Images scale appropriately

**Concerns:**

- Header is 90px tall (significant screen real estate)
- No sticky mobile CTA (consider floating "Visit" or "Give" button)
- Footer could be enhanced with quick links and social icons
- Form links go to external Planning Center (acceptable but breaks immersion)

---

### 🔍 SEO & Discoverability

**Current State:**

- Pages have basic metadata (title, description)
- No structured data (schema.org) for church/events
- No blog for content marketing

**Recommendations:**

1. Add `LocalBusiness` and `Church` schema markup
2. Add `Event` schema for Google rich results
3. Ensure all images have descriptive alt text (mostly good already)
4. Consider blog for SEO content (sermon summaries, devotionals)
5. Create location pages if targeting specific neighborhoods

---

## Appendix: Reference Materials

### Design Tokens

When updating pages, use these established design tokens from `globals.css`:

```css
/* Primary Colors */
--color-primary-dark-blue: #0b496f;
--color-primary-light-blue: #39aae1;

/* Secondary Colors */
--color-secondary-aqua: #40bcbc;
--color-secondary-green: #83b841;
--color-secondary-yellow: #fdbf51;
--color-secondary-red: #e96351;
--color-secondary-blue-black: #03344d;

/* Neutral Colors */
--color-neutral-dark-gray: #333132;
--color-neutral-mid-gray: #b8b9b9;
--color-neutral-light-gray: #e7e7e7;
--color-neutral-light-blue: #bde6fa;

/* Fonts */
--font-display: Raleway; /* headings */
--font-sans: Open Sans; /* body */
```

### Priority Action Items

#### Quick Wins (1-2 hours each)

1. Add Hero components to Events and Messages pages
2. Replace plain h1 headings with styled display text
3. Add gradient backgrounds to section breaks

#### Medium Effort (Half day each)

1. Redesign Messages page with enhanced MessageCard
2. Create Tailwind Accordion component
3. Add featured events section to Events page

#### Major Projects (1-2 days each)

1. Homepage redesign with new Hero and section layouts
2. About page restructure with visual content
3. Ministries page with varied layouts and imagery

---

_This assessment should guide prioritization of design updates to create a cohesive, modern experience across all pages._
