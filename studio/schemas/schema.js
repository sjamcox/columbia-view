import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import landingPage from './documents/landingPage'
import menu from './documents/menu'

// Object types
import button from './objects/button'
import heroBanner from './objects/heroBanner'
import imageBlock from './objects/imageBlock'
import internalLink from './objects/internalLink'
import link from './objects/link'
import menuItem from './objects/menuItem'
import portableText from './objects/portableText'
import simpleContent from './objects/simpleContent'
import smallBanner from './objects/smallBanner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    button,
    heroBanner,
    imageBlock,
    internalLink,
    link,
    landingPage,
    menu,
    menuItem,
    portableText,
    simpleContent,
    smallBanner
  ]),
})
