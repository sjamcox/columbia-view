import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import landingPage from './documents/landingPage'
import mainNavigation from './documents/mainNavigation'
import siteSettings from './documents/siteSettings'

// Object types
import button from './objects/button'
import gridContent from './objects/gridContent'
import heroBanner from './objects/heroBanner'
import imageBlock from './objects/imageBlock'
import internalLink from './objects/internalLink'
import link from './objects/link'
import menuItem from './objects/menuItem'
import portableText from './objects/portableText'
import simpleContent from './objects/simpleContent'
import smallBanner from './objects/smallBanner'
import socialBlock from './objects/socialBlock'
import splitLayout from './objects/splitLayout'
import youtube from './objects/youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    button,
    gridContent,
    heroBanner,
    imageBlock,
    internalLink,
    link,
    landingPage,
    mainNavigation,
    menuItem,
    portableText,
    simpleContent,
    siteSettings,
    smallBanner,
    socialBlock,
    splitLayout,
    youtube
  ]),
})
