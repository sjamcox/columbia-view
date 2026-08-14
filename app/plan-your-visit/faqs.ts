/**
 * Single source of truth for the visit FAQ.
 *
 * The accordion and the FAQPage schema both read from here so the structured
 * data can never claim something the page doesn't actually say.
 *
 * Questions are phrased the way people search — "Where do I park?" rather than
 * "Parking" — because answer engines match on the question, not the label.
 */
export type Faq = {
  id: string
  question: string
  answer: string
  color: 'aqua' | 'green' | 'yellow' | 'red'
}

export const visitFaqs: Faq[] = [
  {
    id: 'arrival',
    question: 'What should I expect when I arrive?',
    answer:
      'After parking in our parking lot, you will walk through the main entrance double doors. You will be greeted by a few smiling faces and offered complementary coffee and baked goods. Sunday morning worship service begins at 10:00 am. Our people are very laid back and friendly.',
    color: 'aqua',
  },
  {
    id: 'children',
    question: 'Is there childcare during the service?',
    answer:
      'We have nursery staff on-site for families with infants through age 2. We also offer kids programming for ages 3-12 during the preaching portion of our worship service. All nursery and children volunteers are background checked and trained.',
    color: 'green',
  },
  {
    id: 'parking',
    question: 'Where do I park?',
    answer:
      'We have parking available at the front, side, and the back of the building.',
    color: 'yellow',
  },
  {
    id: 'music',
    question: 'What is the music like?',
    answer:
      'We promote music that reflects the congregation, so we generally worship with a blend of hymns and contemporary music.',
    color: 'red',
  },
  {
    id: 'attendance',
    question: 'How many people attend?',
    answer:
      'Our directory has around 100 names, and on a given Sunday we will have between 50-60 people in attendance.',
    color: 'aqua',
  },
]
