import { useRouter } from 'next/router'
import client from '../client'

const Sermon = ({ sermons }) => {
  const sermonList = sermons.map(sermon => <h3 key={sermon.title}>{ sermon.title }</h3>)
  return (
    <article>
      <h1>Sermons</h1>
      { sermonList }
    </article>
  )
}

export const getStaticProps = async (context) => {
  const sermons = await client.fetch(`*[_type == 'sermon']`)
  return {
    props: { sermons }
  }
}

export default Sermon