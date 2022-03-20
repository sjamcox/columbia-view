import axios from 'axios'

export default async function handler(req, res) {
  res.setHeader('Content-type', 'text/html')
  try {
    await axios.get(process.env.REDEPLOY_HOOK_URL)
    res
      .status(200)
      .send(
        '<h3>Redeploy successfully started. Should be complete in 2-5 minutes.</h3>'
      )
  } catch (err) {
    res
      .status(500)
      .send(
        '<h3>Something went wrong. Try again or let your web admin know.</h3>'
      )
  }
}
