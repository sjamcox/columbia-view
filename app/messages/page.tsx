import axios from 'axios'

import { Typography } from '@mui/material'
import MessageGrid from '../../components/MessageGrid'

export default async function Messages() {
  const { data } = await axios.get(
    'https://api.spreaker.com/v2/shows/3172208/episodes?limit=12'
  )

  return (
    <>
      <Typography component="h1" variant="h1" sx={{ my: 5 }}>
        Messages
      </Typography>
      <MessageGrid messages={data.response.items} />
    </>
  )
}
