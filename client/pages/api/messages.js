import Parser from 'rss-parser'

export default async function handler(req, res) {
  try {
    console.log('handler')
    const RSS_URL = `https://www.spreaker.com/show/3172208/episodes/feed`
    const parser = new Parser()
    const feed = await parser.parseURL(RSS_URL)
    console.log('made it')
    res.setHeader('Cache-Control', 's-maxage=3600')
    res.status(200).send(feed)
  } catch (err) {
    res.status(500).send(err)
  }
}
