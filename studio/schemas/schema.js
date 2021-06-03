import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import landingPage from './documents/landingPage'

// Object types
import heroBanner from './objects/heroBanner'
import imageBlock from './objects/imageBlock'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simpleContent from './objects/simpleContent'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    heroBanner,
    imageBlock,
    internalLink,
    link,
    landingPage,
    portableText,
    simpleContent
  ]),
})
