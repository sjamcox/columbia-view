import JsonLd from './json-ld'

export default function IcpdxSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://columbiaview.org/immigrant-connection-pdx/#legalservice',
    name: 'Immigrant Connection PDX',
    url: 'https://columbiaview.org/immigrant-connection-pdx',
    description:
      'A Department of Justice recognized, church-based, low-cost immigration legal services office in East Portland.',
    telephone: '+19712022073',
    email: 'info.icpdx@gmail.com',
    priceRange: '$',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Monday',
        opens: '11:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    parentOrganization: {
      '@id': 'https://columbiaview.org/#church',
    },
    // Matches the service area published by 211info and findhelp, which
    // previously credited ICPDX with more reach than the site claimed.
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Clackamas County, OR' },
      { '@type': 'AdministrativeArea', name: 'Columbia County, OR' },
      { '@type': 'AdministrativeArea', name: 'Multnomah County, OR' },
      { '@type': 'AdministrativeArea', name: 'Washington County, OR' },
      { '@type': 'AdministrativeArea', name: 'Yamhill County, OR' },
      { '@type': 'AdministrativeArea', name: 'Clark County, WA' },
      { '@type': 'AdministrativeArea', name: 'Skamania County, WA' },
    ],
    sameAs: ['https://www.icwelcome.org'],
  }

  return <JsonLd data={schema} />
}
