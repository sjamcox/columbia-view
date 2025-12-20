# Columbia View Church Website - Site Assessment

> **Assessment Date:** December 19, 2025
> **Scope:** All pages excluding ICPDX and Immigrant Connection PDX

---

## Executive Summary

The website has a clear divide in quality between **modern Tailwind-based pages** and **legacy MUI-based pages**. The NextGen page stands out as the gold standard, while several legacy pages need significant visual and structural updates to match its quality.

---

## 🌟 Pages Looking Great

### NextGen Ministries (`/nextgen`)

**Rating: ★★★★★ Excellent**

This page is the benchmark for what the rest of the site should aspire to.

#### Strengths

- **Cohesive Design System:** Uses the custom Tailwind theme with brand colors (`primary-dark-blue`, `primary-light-blue`, `secondary-aqua`, `secondary-green`, etc.)
- **Stunning Hero Section:** Full-bleed image with gradient overlay, bold display typography, and clear CTA
- **Thoughtful Component Design:**
  - `KeywordCard` - image with overlay text, clean content sections
  - `AgeCard` - color-coded age badges, consistent styling
  - `CoreTruth` - staggered layout with motion animations
- **Rich Visual Storytelling:** Multiple image sections, overlapping photo grids, gradient backgrounds
- **Motion & Interactivity:** Smooth fade-in animations using `motion/react` with staggered reveals
- **Strong Typography Hierarchy:** Display font (`Raleway`) for headings, gradient text effects, proper sizing scales
- **Beautiful Gradient Sections:** `from-secondary-green to-primary-light-blue`, `from-secondary-yellow to-secondary-green`

#### What Makes It Work

```
✓ Hero with purpose and clear call-to-action
✓ Varied section backgrounds (gradients, images, white)
✓ Consistent use of rounded corners (rounded-2xl)
✓ Shadow depth on images (shadow-2xl)
✓ Proper whitespace (py-15, lg:py-25)
```

---

## ⚠️ Pages Needing Improvement

### Homepage (`/`)

**Rating: ★★★☆☆ Moderate**

The homepage is functional but shows its age with MUI-based styling that doesn't match the modern NextGen aesthetic.

#### Issues

1. **Slideshow lacks impact** - Images auto-rotate without text overlays, CTAs, or any context about what the viewer is seeing
2. **MUI/Tailwind inconsistency** - Uses `@mui/material` components while newer pages use Tailwind
3. **Generic styling** - Hardcoded colors like `rgb(14, 73, 111)` instead of design tokens
4. **Scattered button styling** - Inconsistent button components (`MuiButton` vs custom `Button`)
5. **Missing animation** - Static sections lack the polished motion of NextGen

#### Recommendations

- [ ] Replace slideshow with a proper Hero component with text overlay and CTA
- [ ] Migrate from MUI to Tailwind components
- [ ] Add entrance animations to sections
- [ ] Use the brand color variables consistently
- [ ] Create visual variety with gradient backgrounds between sections

---

### About Page (`/about`)

**Rating: ★★☆☆☆ Needs Work**

This page is extremely text-heavy with minimal visual interest.

#### Issues

1. **No hero section** - Jumps straight into text content
2. **Wall of text** - Vision, Mission, and Beliefs sections are dense prose with no visual breaks
3. **Inconsistent staff display** - Some staff have photos via `StaffListing`, others (Russelle, Johan, Linda) are just text
4. **Basic bullet list** - Core values presented as unstyled `<ul>`
5. **Missing imagery** - No photos representing the church community or values

#### Recommendations

- [ ] Add a Hero with a warm, welcoming church community image
- [ ] Create visual cards for "Belong, Believe, Become" with icons
- [ ] Design icon cards for core values (Biblical authority, Christlikeness, etc.)
- [ ] Add photos for all staff members or remove the incomplete entries
- [ ] Break up text with images, pull quotes, or visual dividers
- [ ] Consider an accordion for the detailed beliefs section

---

### Join Us Page (`/join-us`)

**Rating: ★★★☆☆ Moderate**

Has some nice elements but lacks a proper introduction.

#### Issues

1. **No hero section** - Missing the welcoming visual impact of NextGen
2. **Basic accordion styling** - MUI accordions look generic, not branded
3. **Photo grid is nice** - But photos have no captions or context
4. **Inconsistent typography** - Uses MUI's Typography component vs Tailwind classes

#### Recommendations

- [ ] Add a hero image of Sunday worship with overlay text
- [ ] Restyle accordions to match site brand (custom colors, icons)
- [ ] Add captions or subtle labels to the photo grid
- [ ] Migrate to Tailwind for consistency
- [ ] Add a map or directions section with visual styling

---

### Messages Page (`/messages`)

**Rating: ★★☆☆☆ Needs Work**

Extremely minimal design that feels like a placeholder.

#### Issues

1. **No hero or visual introduction** - Just a plain h1 heading
2. **Bare-bones layout** - White background, basic heading, grid of cards
3. **MessageCard is minimal** - Just date and title, no image or description
4. **No visual differentiation** - All messages look identical
5. **No search or filter** - Hard to find specific messages

#### Recommendations

- [ ] Add a Hero with imagery related to teaching/Scripture
- [ ] Enhance MessageCard with:
  - Speaker name
  - Series/category badges
  - Duration indicator
  - Optional thumbnail image
- [ ] Add a "Current Series" featured section at the top
- [ ] Consider category filtering or search
- [ ] Add subtle gradient or pattern to the background

---

### Ministries Page (`/ministries`)

**Rating: ★★☆☆☆ Needs Work**

Repetitive layout with minimal visual interest outside the Global Missions section.

#### Issues

1. **No hero section** - Starts with plain text
2. **Repetitive structure** - Every ministry uses identical two-column layout
3. **No visual differentiation** - All sections look the same
4. **Text-heavy** - Minimal imagery for most sections
5. **Global Missions is better** - Has photos, but still uses basic MUI styling

#### Recommendations

- [ ] Add a Hero showing community/ministry in action
- [ ] Create distinct card styles for different ministry types
- [ ] Add icons for each ministry category
- [ ] Use alternating layouts (image left/right) or card grids
- [ ] Add gradient section breaks between ministries
- [ ] Consider tabbed navigation for different ministry categories

---

### Events Page (`/events`)

**Rating: ★★★☆☆ Moderate**

Clean but basic - the EventCard component is well-designed but the page itself is minimal.

#### Issues

1. **No hero section** - Simple heading with gray background
2. **Generic gray-50 background** - Feels corporate, not welcoming
3. **No featured events section** - All events treated equally
4. **Missing calendar view** - Only grid of cards

#### Recommendations

- [ ] Add a Hero with vibrant community event imagery
- [ ] Create a "Featured Events" section for highlighted items
- [ ] Add category filters (Kids, Adults, Community, etc.)
- [ ] Consider adding a calendar view toggle
- [ ] Use brand gradients instead of gray background
- [ ] Add month/week navigation

---

## Technical Debt & Consistency Issues

### Framework Split

The site has two route groups:

- **`(legacy)`** - Uses MUI (`@mui/material`) with inline `sx` props
- **`(tailwind)`** - Uses Tailwind CSS with custom theme

This creates:

- Inconsistent look and feel between pages
- Duplicate components (MUI Button vs Tailwind Button)
- Harder maintenance

### Recommendations for Unification

1. **Adopt NextGen as the template** - Use it as the reference for all redesigns
2. **Create shared Tailwind components:**
   - `Hero` ✓ (already exists)
   - `Section` variants with gradients
   - `Card` components for different content types
   - `Accordion` component (Tailwind version)
3. **Migrate pages incrementally:**
   - Priority 1: Messages (high traffic, simple structure)
   - Priority 2: Events (already partially Tailwind)
   - Priority 3: Join Us (medium complexity)
   - Priority 4: Ministries (complex, multiple sections)
   - Priority 5: About (text-heavy, needs content strategy)
   - Priority 6: Homepage (most complex, do last)

---

## Component Quality Reference

### Great Components (Keep & Reuse)

| Component      | Location                      | Notes                                |
| -------------- | ----------------------------- | ------------------------------------ |
| `Hero`         | `/components/Hero.tsx`        | Modern, flexible, great gradients    |
| `ImageSection` | `/components/Section.tsx`     | Beautiful image overlays             |
| `KeywordCard`  | `/components/KeywordCard.tsx` | Clean image + text layout            |
| `AgeCard`      | `/nextgen/AgeCard.tsx`        | Good color-coded badge system        |
| `EventCard`    | `/components/EventCard.tsx`   | Well-structured with proper metadata |
| `Button`       | `/components/Button.tsx`      | Modern gradient buttons with arrows  |

### Components Needing Updates

| Component          | Location                        | Issues                           |
| ------------------ | ------------------------------- | -------------------------------- |
| `Slideshow`        | `/(legacy)/Slideshow.tsx`       | No text overlay, no CTA          |
| `ImageTile`        | `/components/ImageTile.js`      | Uses MUI, needs Tailwind version |
| `StaffListing`     | `/components/StaffListing.js`   | Basic MUI styling                |
| `AccordionSection` | `/join-us/AccordionSection.tsx` | Generic MUI accordion            |

---

## Priority Action Items

### Quick Wins (1-2 hours each)

1. Add Hero components to Events and Messages pages
2. Replace plain h1 headings with styled display text
3. Add gradient backgrounds to section breaks

### Medium Effort (Half day each)

1. Redesign Messages page with enhanced MessageCard
2. Create Tailwind Accordion component
3. Add featured events section to Events page

### Major Projects (1-2 days each)

1. Homepage redesign with new Hero and section layouts
2. About page restructure with visual content
3. Ministries page with varied layouts and imagery

---

## Design Tokens Reference

When updating pages, use these established design tokens from `globals.css`:

```css
/* Primary Colors */
--color-primary-dark-blue: #0b496f --color-primary-light-blue: #39aae1
  /* Secondary Colors */ --color-secondary-aqua: #40bcbc
  --color-secondary-green: #83b841 --color-secondary-yellow: #fdbf51
  --color-secondary-red: #e96351 /* Fonts */ --font-display: Raleway (headings)
  --font-sans: Open Sans (body);
```

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

1. **"Give" is visible** - Donation link is in the main nav (good for churches)
2. **External links for forms** - Using Planning Center for registrations keeps the site lean
3. **Social media icons** - Facebook and YouTube are accessible in the header
4. **Footer has essentials** - Address, phone, service time

### Navigation Issues

| Issue                                               | Impact                                                            | Recommendation                                                   |
| --------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| **No "I'm New" or "Plan Your Visit" prominent CTA** | First-time visitors have to hunt for info                         | Add a bold "Plan Your Visit" button in the header or hero        |
| **NextGen not in main nav**                         | One of your best pages is buried                                  | Add to Ministries dropdown or make it a top-level item           |
| **"Get Involved" is vague**                         | Visitors don't know what to expect                                | Rename to "Visit" or "Connect" for the visitor-focused items     |
| **No Contact page**                                 | People have to scroll to footer for contact info                  | Create a dedicated Contact page with map, form, and staff emails |
| **No Watch Online / Livestream link**               | YouTube links exist but aren't prominent                          | Add "Watch Live" to nav, especially for remote attendees         |
| **Life Groups buried**                              | Small groups are key for connection but hidden in Ministries page | Consider adding to nav dropdown                                  |

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

Effective church websites typically include content that Columbia View is currently missing or underserving:

### High Priority - Should Add

| Missing Content                      | Why It Matters                                                                                         | Suggested Implementation                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **"I'm New" / Plan Your Visit Page** | First-time visitors need a clear, welcoming landing page that answers all their questions in one place | Dedicated page with: what to wear, where to park, what happens with kids, service flow, map, and a warm video welcome from the pastor |
| **Contact Page**                     | People want to reach the church without hunting through footers                                        | Simple page with: contact form, address with embedded Google Map, phone, email, office hours, and staff contact options               |
| **Watch Live / Livestream Page**     | YouTube links exist but there's no branded landing page for online attendees                           | Dedicated page with embedded live stream, chat/prayer request form, service times, and "Watch Past Messages" link                     |
| **Life Groups Landing Page**         | Small groups are mentioned but have no dedicated presence                                              | Showcase page with: why groups matter, group photos, how to join, leader spotlight, and link to Planning Center groups                |

### Medium Priority - Would Improve Experience

| Missing Content                  | Why It Matters                                     | Suggested Implementation                                                          |
| -------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Prayer Request Form**          | Allows visitors and members to submit prayer needs | Simple form that emails the prayer team, could be a page or modal                 |
| **Photo/Media Gallery**          | People want to see what the church _feels_ like    | Gallery page showcasing community life: events, worship, kids, baptisms, potlucks |
| **Testimonies/Stories Page**     | Powerful social proof of life change               | Collection of video or written testimonies from members                           |
| **Blog / Church News**           | Keeps the site fresh and improves SEO              | Simple blog for pastor letters, event recaps, announcements                       |
| **What We Believe (standalone)** | Currently buried in About page                     | Dedicated, visually engaging page for doctrinal positions                         |

### Low Priority - Nice to Have

| Missing Content        | Why It Matters                                       | Suggested Implementation                                             |
| ---------------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| **Facility Rentals**   | Many churches generate income this way               | Simple page with info if applicable                                  |
| **Podcast Page**       | Messages are on Spreaker but no branded podcast page | Landing page for podcast with subscribe links (Apple, Spotify, etc.) |
| **FAQ Page**           | Reduces repetitive questions                         | Common questions about visiting, kids, beliefs, etc.                 |
| **Giving Impact Page** | Shows donors where their money goes                  | Annual report highlights, ministry impact stories                    |

---

## 🎯 User Journey Analysis

### First-Time Visitor Journey

**Current Experience:**

```
1. Lands on homepage → sees slideshow with no context
2. Scrolls to find "Join us Sunday" section
3. Clicks "Join us this Sunday" → goes to /join-us
4. Has to read through page to find service time (it's there but not prominent)
5. If they have kids, they need to find /nextgen somehow (not linked prominently)
6. If they want directions, they check the footer
```

**Ideal Experience:**

```
1. Lands on homepage → immediately sees welcoming hero with "Plan Your Visit" CTA
2. Clicks CTA → lands on dedicated visitor page
3. Sees service time, location with map, parking info
4. Clear section about kids with link to NextGen
5. Option to fill out "New Here" form for a welcome gift
6. Leaves with clear expectations and excitement to visit
```

### Returning Member Journey

**Current Experience:**

```
1. Comes to site for specific purpose (event, message, giving)
2. Events: Must navigate to Get Involved → Event Calendar
3. Messages: Direct nav link works well ✓
4. Giving: Direct nav link works well ✓
5. Life Groups: Must go to Ministries page and scroll
```

**Ideal Experience:**

```
1. Quick access to Events, Messages, and Giving (current nav works)
2. Life Groups easily accessible from nav
3. Personal dashboard (future: Planning Center integration)
4. Quick links for common forms (prayer, baptism, etc.)
```

### Online-Only Attendee Journey

**Current Experience:**

```
1. No clear "Watch Live" option in navigation
2. Must know to click YouTube icon in header
3. No landing page explaining online experience
4. No way to connect, give, or request prayer during stream
```

**Ideal Experience:**

```
1. "Watch Live" prominently in nav
2. Dedicated page with embedded stream
3. Chat or prayer request form
4. Easy giving link
5. Connect card for online visitors
```

---

## 🖼️ Content & Imagery Gaps

### Photos That Are Missing or Needed

| Content Type            | Current State                                           | What's Needed                                            |
| ----------------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| **Staff Headshots**     | 3 staff members (Russelle, Johan, Linda) have no photos | Professional headshots for all staff                     |
| **Life Groups**         | Only 2 stock-ish photos                                 | Authentic photos of actual groups meeting                |
| **Facilities**          | No building/interior photos                             | Welcoming shots of sanctuary, lobby, kids rooms, parking |
| **Baptism/Dedications** | Limited imagery                                         | More celebration photos to inspire participation         |
| **Community Events**    | Good Easter 2025 set                                    | Continue documenting events for fresh content            |

### Video Content Opportunities

| Video Type                 | Purpose                               | Placement                                          |
| -------------------------- | ------------------------------------- | -------------------------------------------------- |
| **Welcome Video**          | 60-90 sec pastor welcome for visitors | Homepage hero, Plan Your Visit page                |
| **NextGen Overview**       | Show parents what kids experience     | NextGen page (already strong, video would enhance) |
| **Life Group Testimonial** | Why groups matter                     | Life Groups page                                   |
| **Church Story**           | 2-3 min history and vision            | About page                                         |

---

## 📱 Mobile Experience Notes

### Strengths

- Responsive layouts work on mobile
- NavDrawer provides mobile navigation
- Images scale appropriately

### Concerns

1. **Header is 90px tall** - Takes significant screen real estate on mobile
2. **No sticky mobile CTA** - Consider a floating "Visit" or "Give" button
3. **Footer could be enhanced** - Add quick links, social icons
4. **Form links go to external Planning Center** - Acceptable but breaks immersion

---

## 🔍 SEO & Discoverability

### Current State

- Pages have basic metadata (title, description)
- No structured data (schema.org) for church/events
- No blog for content marketing

### Recommendations

1. Add `LocalBusiness` and `Church` schema markup
2. Add `Event` schema to events for Google rich results
3. Ensure all images have descriptive alt text (mostly good)
4. Consider a blog for SEO content (sermon summaries, devotionals)
5. Create location pages if targeting specific neighborhoods

---

## Summary: Top 10 Recommendations

1. **Create a "Plan Your Visit" page** - Give first-timers a clear, warm welcome
2. **Add NextGen to main navigation** - Your best page is hidden
3. **Create a Contact page** - With map, form, and clear info
4. **Add "Watch Live" to navigation** - Serve online attendees
5. **Redesign the homepage hero** - Replace slideshow with purposeful messaging
6. **Create a Life Groups landing page** - Groups are key for connection
7. **Migrate legacy pages to Tailwind** - Unify the visual experience
8. **Add hero sections to all pages** - Consistent, polished first impressions
9. **Complete staff photos** - Everyone should have a headshot
10. **Add a prayer request form** - Simple way for people to connect

---

_This assessment should guide prioritization of design updates to create a cohesive, modern experience across all pages._
