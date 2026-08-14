import { describe, expect, it } from 'vitest'

import { isServiceWindow } from '@/utils/service-window'

/**
 * Fixtures are UTC instants; the comment on each gives the Pacific wall clock.
 * August dates are PDT (UTC-7), January dates are PST (UTC-8), so the pair
 * covers the daylight-saving transition.
 */
describe('isServiceWindow', () => {
  it('is true during the Sunday service', () => {
    // Sunday 2026-08-16, 10:00 am PDT
    expect(isServiceWindow(new Date('2026-08-16T17:00:00Z'))).toBe(true)
  })

  it('is true at the start of the window', () => {
    // Sunday 2026-08-16, 9:30 am PDT
    expect(isServiceWindow(new Date('2026-08-16T16:30:00Z'))).toBe(true)
  })

  it('is false just before the window opens', () => {
    // Sunday 2026-08-16, 9:29 am PDT
    expect(isServiceWindow(new Date('2026-08-16T16:29:00Z'))).toBe(false)
  })

  it('is false once the window closes', () => {
    // Sunday 2026-08-16, 12:30 pm PDT
    expect(isServiceWindow(new Date('2026-08-16T19:30:00Z'))).toBe(false)
  })

  it('is true in the last minute of the window', () => {
    // Sunday 2026-08-16, 12:29 pm PDT
    expect(isServiceWindow(new Date('2026-08-16T19:29:00Z'))).toBe(true)
  })

  it('is false on other days at the same hour', () => {
    // Monday 2026-08-17, 10:00 am PDT
    expect(isServiceWindow(new Date('2026-08-17T17:00:00Z'))).toBe(false)
    // Saturday 2026-08-15, 10:00 am PDT
    expect(isServiceWindow(new Date('2026-08-15T17:00:00Z'))).toBe(false)
  })

  it('tracks Pacific time through standard time, not a fixed UTC offset', () => {
    // Sunday 2026-01-11, 10:00 am PST — the PDT equivalent instant (17:00Z)
    // would be 9:00 am PST and outside the window, so a hardcoded offset fails.
    expect(isServiceWindow(new Date('2026-01-11T18:00:00Z'))).toBe(true)
    expect(isServiceWindow(new Date('2026-01-11T17:00:00Z'))).toBe(false)
  })

  it('is false late on Sunday evening', () => {
    // Sunday 2026-08-16, 8:00 pm PDT
    expect(isServiceWindow(new Date('2026-08-17T03:00:00Z'))).toBe(false)
  })
})
