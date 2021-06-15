import { getLandingPage, getLandingPageSlugs } from '../client'

export default function LandingPage(props) {
  return (
    <div>
      { JSON.stringify(props) }
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getLandingPage(params.slug)
  console.log(data)
  return { props: data }
}

export async function getStaticPaths() {
  const paths = await getLandingPageSlugs()
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}