import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { Box, Divider, Stack, Typography } from '@mui/material'
import david from '../../public/david-headshot.webp'
import serena from '../../public/serena-headshot.webp'
import nancy from '../../public/nancy-headshot.webp'
import hawi from '../../public/hawi-headshot.webp'

export default function Staff() {
  const staff = [
    {
      name: 'David Rannabargar',
      title: 'Site Director',
      image: david,
      bio: 'bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio',
    },
    {
      name: 'Serena Rannabargar',
      title: 'DOJ Accredited Representative',
      image: serena,
      bio: 'bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio',
    },
    {
      name: 'Nancy Bennett',
      title: 'Legal Assistant, DOJ Accredited Representative In-Training',
      image: nancy,
      bio: 'bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio',
    },
    {
      name: 'Hawi Jaldo',
      title: 'Legal Assistant',
      image: hawi,
      bio: 'bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio',
    },
    {
      name: 'Elvia Angel-Silva',
      title: 'Intern',
      bio: 'bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio',
    },
  ]
  return (
    <Layout>
      <Head>
        <title>Immigrant Connection Staff | Columbia View</title>
      </Head>
      <Typography component="h1" variant="h1" sx={{ my: 5 }}>
        Immigrant Connection Staff
      </Typography>
      <Stack
        alignItems="center"
        divider={
          <Divider orientation="horizontal" flexItem sx={{ color: 'blue' }} />
        }
        spacing={6}
      >
        {staff.map((member) => (
          <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box
              sx={{
                maxHeight: 250,
                maxWidth: 250,
                flexShrink: 0,
                mr: { xs: 0, sm: 4 },
                mb: { xs: 2, sm: 0 },
                borderRadius: 4,
              }}
            >
              {member.image && (
                <Image src={member.image} alt={`Photo of ${member.name}`} />
              )}
            </Box>
            <Box>
              <Typography component="h2" variant="h4" gutterBottom>
                {member.name}
              </Typography>
              <Typography gutterBottom color="secondary">
                <strong>{member.title}</strong>
              </Typography>
              <Typography color="text.body">{member.bio}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Layout>
  )
}
