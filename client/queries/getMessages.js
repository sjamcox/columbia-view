import { browserClient } from '../utils/client'

export default async function getMessages() {
  console.log('fetching')
  const { data } = await browserClient.get('/api/messages')
  return data
}
