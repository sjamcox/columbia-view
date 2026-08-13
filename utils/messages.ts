/**
 * Sermon pages are built from the YouTube description, so a message with a
 * one-line description renders as little more than a title and an embed —
 * thin content that hurts more than it helps once indexed.
 *
 * Sampled from production Aug 2026 (n=15): median 174 words, 14/15 above 100,
 * a single outlier at 15. A 100-word floor drops the outlier and keeps the
 * archive.
 */
export const MIN_DESCRIPTION_WORDS = 100

/**
 * Strip link boilerplate so only prose is left.
 *
 * Descriptions commonly open with a labelled link ("Bible Project: https://…").
 * Removing the URL alone strands the label at the front of the meta
 * description, where it wastes the most valuable characters — so labelled
 * links are removed as a unit, then any bare URLs that remain.
 */
function stripLinkBoilerplate(description: string): string {
  return description
    .replace(/\b[\w'’ ]{1,30}:\s*https?:\/\/\S+/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
}

/** Word count of a description, ignoring link boilerplate. */
export function getDescriptionWordCount(description?: string): number {
  if (!description) return 0

  return stripLinkBoilerplate(description).split(/\s+/).filter(Boolean).length
}

/** Whether a message has enough prose to stand as its own indexable page. */
export function isMessageIndexable(description?: string): boolean {
  return getDescriptionWordCount(description) >= MIN_DESCRIPTION_WORDS
}

/** Condense a YouTube description into a meta description. */
export function buildMessageDescription(
  description: string | undefined,
  fallback: string
): string {
  const cleaned = stripLinkBoilerplate(description ?? '')
    .replace(/\s+/g, ' ')
    .trim()

  if (!cleaned) return fallback
  if (cleaned.length <= 155) return cleaned

  // Trim at a word boundary so the snippet doesn't end mid-word.
  return `${cleaned.slice(0, 155).replace(/\s+\S*$/, '')}…`
}
