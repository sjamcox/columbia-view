import React from 'react'
import { getLandingPage, getLandingPageSlugs } from '../client'
import {HeroBanner} from '../components/HeroBanner/HeroBanner.jsx'

const componentMap = {
  'heroBanner': HeroBanner,
}

export default function LandingPage(props) {
  let components
  if(props.content) {
    components = props.content.map(prop => {
      let Component = componentMap[prop._type]
      if (typeof (Component) !== 'undefined') {
        return <Component {...prop} key={prop._key}/>
      }
    })
  }
  return (
    <div>
      {components}
      { JSON.stringify(props) }
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getLandingPage(params.slug)
  return { props: data }
}

export async function getStaticPaths() {
  const paths = await getLandingPageSlugs()
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}