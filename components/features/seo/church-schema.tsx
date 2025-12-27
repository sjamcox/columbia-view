'use client'

import JsonLd from './json-ld'

export default function ChurchSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Church', 'LocalBusiness'],
    '@id': 'https://columbiaview.org/#church',
    name: 'Columbia View Church',
    url: 'https://columbiaview.org',
    logo: 'https://columbiaview.org/logos/cvwc-logo-mountains.png',
    image: 'https://columbiaview.org/sunday/mark-baptism.webp',
    description: 'Columbia View Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '16700 NE Halsey Street',
      addressLocality: 'Portland',
      addressRegion: 'OR',
      postalCode: '97230',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.5338214',
      longitude: '-122.49106',
    },
    telephone: '503.253.7939',
    email: 'office.cvwc@gmail.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/COLUMBIAVIEW/',
      'https://www.youtube.com/@columbiaview.church',
    ],
  }

  return <JsonLd data={schema} />
}
