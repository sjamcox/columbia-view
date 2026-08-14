import { describe, expect, it } from 'vitest'

import { cleanEventSummary } from '@/utils/events'

/** The real Kids Camp summary from Planning Center, Aug 2026. */
const KIDS_CAMP = `( https://registrations-production.s3.amazonaws.com/uploads/image/file/405196/Screenshot_2026-06-02_at_11.02.17_AM.png?content-disposition=attachment )
Registration deadline: July 20th.

We're excited to host your kids this summer for a week of church camp!

Where?
Camp Yamhill (more info on their website here ( https://campyamhill.org/ ))`

describe('cleanEventSummary', () => {
  it('returns an empty string for missing input', () => {
    expect(cleanEventSummary(undefined)).toBe('')
    expect(cleanEventSummary('')).toBe('')
  })

  it('leaves an ordinary summary untouched', () => {
    const plain = 'Join us for a potluck in the fellowship hall.'
    expect(cleanEventSummary(plain)).toBe(plain)
  })

  it('drops a leading attached-image URL so the text starts on real content', () => {
    const result = cleanEventSummary(KIDS_CAMP)

    expect(result.startsWith('Registration deadline: July 20th.')).toBe(true)
    expect(result).not.toContain('amazonaws')
    expect(result).not.toContain('http')
  })

  it('strips an inline link without mangling the sentence around it', () => {
    expect(
      cleanEventSummary(
        'More info on their website here ( https://campyamhill.org/ )'
      )
    ).toBe('More info on their website here')
  })

  it('does not leave an empty bracket pair behind', () => {
    const result = cleanEventSummary(KIDS_CAMP)

    expect(result).not.toMatch(/\(\s*\)/)
    expect(result).toContain('Camp Yamhill')
  })

  it('strips a bare URL that is not parenthesised', () => {
    expect(
      cleanEventSummary('Register at https://example.com/signup today')
    ).toBe('Register at today')
  })

  it('collapses the blank lines removal opens up', () => {
    expect(cleanEventSummary('One\n\n( https://x.com/a )\n\nTwo')).toBe(
      'One\n\nTwo'
    )
  })

  it('returns an empty string when the summary was only a URL', () => {
    expect(cleanEventSummary('( https://example.com/image.png )')).toBe('')
  })
})
