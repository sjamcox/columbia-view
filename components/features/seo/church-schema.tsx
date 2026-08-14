import JsonLd from './json-ld'

export default function ChurchSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Church', 'LocalBusiness'],
    '@id': 'https://columbiaview.org/#church',
    name: 'Columbia View Church',
    // Most directory listings and older references still use the pre-rebrand
    // name. Declaring it lets answer engines resolve both to one entity
    // instead of splitting us in two.
    alternateName: 'Columbia View Wesleyan Church',
    url: 'https://columbiaview.org',
    logo: 'https://columbiaview.org/logos/cvwc-logo-mountains.png',
    image: 'https://columbiaview.org/sunday/mark-baptism.webp',
    description:
      'Columbia View Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
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
    telephone: '+15032537939',
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
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=45.5338214,-122.49106',
    areaServed: [
      { '@type': 'City', name: 'Portland' },
      { '@type': 'City', name: 'Gresham' },
      { '@type': 'City', name: 'Fairview' },
      { '@type': 'City', name: 'Wood Village' },
      { '@type': 'City', name: 'Troutdale' },
    ],
    // ICPDX already points here via parentOrganization; this completes the link
    // so its authority is associated with the church entity too.
    subOrganization: {
      '@id': 'https://columbiaview.org/immigrant-connection-pdx/#legalservice',
    },
    // Still Wesleyan-affiliated after dropping it from the name. Declaring the
    // denomination gives answer engines a sourced answer to "what denomination
    // is Columbia View Church?" — currently they can only infer it from stale
    // third-party directory listings.
    parentOrganization: {
      '@type': 'Organization',
      name: 'The Wesleyan Church',
      url: 'https://www.wesleyan.org/',
    },
    sameAs: [
      'https://www.facebook.com/COLUMBIAVIEW/',
      'https://www.youtube.com/@columbiaview.church',
    ],
  }

  return <JsonLd data={schema} />
}
