/**
 * Clean Planning Center's plain-text event summary.
 *
 * PC generates `summary` by flattening the rich-text `description` to plain
 * text, and it renders images and links as a bare parenthesised URL. An event
 * whose description opens with an attached image therefore produces a summary
 * starting with something like:
 *
 *   ( https://registrations-production.s3.amazonaws.com/...png?content-... )
 *   Registration deadline: July 20th.
 *
 * Inline links get the same treatment: "on their website here ( https://... )".
 * Neither is useful to a reader, and both leak into Event structured data, so
 * they're stripped wherever the summary is displayed.
 */
export function cleanEventSummary(summary: string | undefined): string {
  if (!summary) return ''

  return (
    summary
      // The parenthesised URL PC substitutes for an image or link.
      .replace(/\(\s*https?:\/\/\S+\s*\)/g, '')
      // Any bare URL left behind.
      .replace(/https?:\/\/\S+/g, '')
      // Tidy the gap the removal leaves before a closing bracket or punctuation.
      .replace(/[ \t]+([),.!?])/g, '$1')
      // An empty bracket pair left by a link that was the whole parenthetical.
      .replace(/\(\s*\)/g, '')
      .replace(/[ \t]{2,}/g, ' ')
      // Collapse the blank lines the removal opens up.
      .replace(/\n{3,}/g, '\n\n')
      .split('\n')
      .map((line) => line.trim())
      .join('\n')
      .trim()
  )
}
