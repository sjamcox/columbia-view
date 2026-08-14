import type { Faq } from '@/app/plan-your-visit/faqs'
import JsonLd from './json-ld'

export default function FaqSchema({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}
