import axios from 'axios'

export default async function handler(req, res) {
  try {
    await axios.get(process.env.REDEPLOY_HOOK_URL)
    res.status(200).json({
      message:
        'Redeploy successfully started. Should be complete in 2-5 minutes.',
    })
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong. Try again or let your web admin know.',
    })
  }
}
