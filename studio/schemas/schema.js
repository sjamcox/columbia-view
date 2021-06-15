import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import footer from './documents/footer'
import landingPage from './documents/landingPage'
import mainNavigation from './documents/mainNavigation'
import siteSettings from './documents/siteSettings'
import socialAccounts from './documents/socialAccounts'

// Object types
import button from './objects/button'
import ctaBanner from './objects/ctaBanner'
import featuredImage from './objects/featuredImage'
import gridContent from './objects/gridContent'
import heroBanner from './objects/heroBanner'
import internalLink from './objects/internalLink'
import link from './objects/link'
import menuItem from './objects/menuItem'
import photoTile from './objects/photoTile'
import portableText from './objects/portableText'
import simpleContent from './objects/simpleContent'
import smallBanner from './objects/smallBanner'
import splitLayout from './objects/splitLayout'
import videoSection from './objects/videoSection'
import youtube from './objects/youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    button,
    ctaBanner,
    featuredImage,
    footer,
    gridContent,
    heroBanner,
    internalLink,
    link,
    landingPage,
    mainNavigation,
    menuItem,
    photoTile,
    portableText,
    simpleContent,
    siteSettings,
    smallBanner,
    socialAccounts,
    splitLayout,
    videoSection,
    youtube
  ]),
})
