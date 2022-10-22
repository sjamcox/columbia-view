import { browserClient } from '../utils/client'

export default async function getMessages() {
  const { data } = await browserClient.get('/api/messages')
  return data
}
