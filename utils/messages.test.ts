import { describe, expect, it } from 'vitest'

import {
  buildMessageDescription,
  getDescriptionWordCount,
  isMessageIndexable,
  MIN_DESCRIPTION_WORDS,
} from '@/utils/messages'

/**
 * Fixtures are real YouTube descriptions pulled from the Columbia View channel
 * in Aug 2026 — the shapes these helpers actually have to survive.
 */

/** Opens with a labelled link, which is the common house style. */
const LABELLED_LINK = [
  'Bible Project: https://bibleproject.com/guides/book-of-mark/',
  'What if following Jesus isn’t about arriving—but about learning how to fail forward?',
  'In this opening message of our year-long journey through the Gospel of Mark, we confront a deeply held assumption many of us carry:: Follow Jesus → get better → stop failing → arrive.',
].join('\n')

/** The one genuinely thin description in the archive — 15 words. */
const THIN =
  's.o.a.p.  mark 2. discovering what God is communicating to each of us in ch 2'

/** Plain prose, no links. */
const PLAIN = [
  'Family is complicated.',
  'For some, it brings warmth, belonging, and great memories. For others, it carries pain, distance, or loss.',
].join('\n')

const FALLBACK =
  'Watch "Test Message" from Columbia View Church in Portland, OR.'

/** Build a description of exactly `count` words. */
const words = (count: number) =>
  Array.from({ length: count }, () => 'word').join(' ')

describe('getDescriptionWordCount', () => {
  it('returns 0 for undefined', () => {
    expect(getDescriptionWordCount(undefined)).toBe(0)
  })

  it('returns 0 for an empty or whitespace-only description', () => {
    expect(getDescriptionWordCount('')).toBe(0)
    expect(getDescriptionWordCount('   \n\n  ')).toBe(0)
  })

  it('counts plain prose words', () => {
    expect(getDescriptionWordCount('one two three')).toBe(3)
  })

  it('treats newlines as word separators', () => {
    expect(getDescriptionWordCount('one\ntwo\n\nthree')).toBe(3)
  })

  it('ignores bare URLs', () => {
    expect(getDescriptionWordCount('watch https://example.com/a/b now')).toBe(2)
  })

  it('ignores a labelled link entirely, label included', () => {
    expect(
      getDescriptionWordCount('Bible Project: https://bibleproject.com/x')
    ).toBe(0)
  })

  it('counts only the prose in a real labelled-link description', () => {
    // The "Bible Project: <url>" line contributes nothing. Counting splits on
    // whitespace, so standalone glyphs like the "→" separators in this
    // fixture count as tokens — a slight over-count the threshold tolerates.
    expect(getDescriptionWordCount(LABELLED_LINK)).toBe(46)
  })

  it('scores the known-thin archive entry below the indexing floor', () => {
    expect(getDescriptionWordCount(THIN)).toBe(15)
  })
})

describe('isMessageIndexable', () => {
  it('rejects undefined and empty descriptions', () => {
    expect(isMessageIndexable(undefined)).toBe(false)
    expect(isMessageIndexable('')).toBe(false)
  })

  it('rejects the known-thin archive entry', () => {
    expect(isMessageIndexable(THIN)).toBe(false)
  })

  it('accepts a description at exactly the threshold', () => {
    expect(isMessageIndexable(words(MIN_DESCRIPTION_WORDS))).toBe(true)
  })

  it('rejects a description one word below the threshold', () => {
    expect(isMessageIndexable(words(MIN_DESCRIPTION_WORDS - 1))).toBe(false)
  })

  it('does not let link boilerplate push a thin description over the line', () => {
    const padding = Array.from(
      { length: MIN_DESCRIPTION_WORDS },
      (_, i) => `Link ${i}: https://example.com/${i}`
    ).join('\n')

    expect(isMessageIndexable(`${THIN}\n${padding}`)).toBe(false)
  })
})

describe('buildMessageDescription', () => {
  it('falls back when the description is missing or empty', () => {
    expect(buildMessageDescription(undefined, FALLBACK)).toBe(FALLBACK)
    expect(buildMessageDescription('', FALLBACK)).toBe(FALLBACK)
    expect(buildMessageDescription('   \n  ', FALLBACK)).toBe(FALLBACK)
  })

  it('falls back when the description is nothing but a link', () => {
    expect(buildMessageDescription('https://example.com/only', FALLBACK)).toBe(
      FALLBACK
    )
    expect(
      buildMessageDescription('Bible Project: https://example.com', FALLBACK)
    ).toBe(FALLBACK)
  })

  it('passes a short description through unchanged', () => {
    expect(buildMessageDescription('A short summary.', FALLBACK)).toBe(
      'A short summary.'
    )
  })

  it('collapses newlines and runs of whitespace into single spaces', () => {
    expect(buildMessageDescription(PLAIN, FALLBACK)).toBe(
      'Family is complicated. For some, it brings warmth, belonging, and great memories. For others, it carries pain, distance, or loss.'
    )
  })

  it('drops a leading labelled link so the snippet opens on prose', () => {
    const result = buildMessageDescription(LABELLED_LINK, FALLBACK)

    expect(result.startsWith('What if following Jesus')).toBe(true)
    expect(result).not.toContain('Bible Project')
    expect(result).not.toContain('http')
  })

  it('truncates long descriptions to at most 156 characters', () => {
    const result = buildMessageDescription(PLAIN.repeat(10), FALLBACK)

    // 155 characters of text plus the ellipsis.
    expect(result.length).toBeLessThanOrEqual(156)
    expect(result.endsWith('…')).toBe(true)
  })

  it('truncates at a word boundary rather than mid-word', () => {
    const result = buildMessageDescription(`${words(200)} finalword`, FALLBACK)
    const body = result.slice(0, -1) // drop the ellipsis

    expect(body.endsWith('word')).toBe(true)
    expect(body.split(' ').every((w) => w === 'word')).toBe(true)
  })

  it('does not add an ellipsis to a description that fits', () => {
    const exact = 'a'.repeat(155)
    const result = buildMessageDescription(exact, FALLBACK)

    expect(result).toBe(exact)
    expect(result.endsWith('…')).toBe(false)
  })
})
