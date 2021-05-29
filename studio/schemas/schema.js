import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import landingPage from './documents/landingPage'
import series from './documents/series'
import sermon from './documents/sermon'

// Object types
import imageBlock from './objects/imageBlock'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import textSection from './objects/textSection'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    imageBlock,
    internalLink,
    link,
    landingPage,
    portableText,
    series,
    sermon,
    textSection
  ]),
})
