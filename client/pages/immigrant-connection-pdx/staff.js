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
      bio: 'Pastor David Rannabargar is married to his wife of 7 years (Tita) and is the proud dad of Kariss (4) and Charlee (2). David accepted the call to be Lead Pastor of Columbia View in 2020 and loves to journey with people in discovering belonging, faith, and formation in Jesus through the local church. In his spare time, he enjoys spending time with his kids building with magnet tiles, drinking really good coffee, going on hikes, and starting remodel projects around his home (sometimes even finishing them!)',
    },
    {
      name: 'Serena Rannabargar',
      title: 'DOJ Accredited Representative',
      image: serena,
      bio: 'Serena Rannabargar, also known by friends as Tita, is the proud wife of David Rannabargar and mother of two. She grew up in Honduras, Central America and feels blessed to be able to use the Spanish learned in her childhood to serve immigrant families in both of her roles as a Department of Justice Accredited Representative and Licensed Clinical Social Worker. She serves in the church where needed currently including in the NextGen ministry teaching kids. In spare time, her family adventures in the beautiful outdoors that God has created in the Northwest.',
    },
    {
      name: 'Nancy Bennett',
      title: 'Legal Assistant',
      image: nancy,
      bio: 'Nancy Bennett is mother to four grown daughters and steward of a small acreage in the beautiful Willamette Valley. With a heart for justice, Nancy has served in multiple roles and ministries that provide resources and care for the vulnerable and the marginalized. She enjoys traveling to out of state family gatherings, being outdoors with her aging flock of Shetland sheep and tending her lavender field.',
    },
    {
      name: 'Hawi Jaldo',
      title: 'Legal Assistant',
      image: hawi,
      bio: 'As a coordinator at a non-profit organization that serves refugees and immigrants, Hawi is passionate about using her skillsets to positively impact vulnerable populations in our city. Growing up in a family of three, she learned the value of compassion, kindness, and empathy toward others. Through her work at Immigrant Connection PDX, she blessed to be able to weave together her faith and her love for people, creating a meaningful and fulfilling career. In addition to her dedication to her work, she find joy in the simple pleasures of life such as savoring a warm cup of chai, admiring the breathtaking sunsets, and wandering through fields of fragrant flowers.',
    },
  ]
  return (
    <Layout>
      <Head>
        <title>Staff | Immigrant Connection PDX</title>
      </Head>
      <Typography component="h1" variant="h2" sx={{ my: 5 }}>
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
                position: 'relative',
                height: 250,
                width: 250,
                flexShrink: 0,
                mr: { xs: 0, sm: 6 },
                mb: { xs: 4, sm: 0 },
                boxShadow: '4px 4px #FFFFFF, 12px 12px #0E496F',
                overflow: 'hidden',
              }}
            >
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                layout="fill"
                objectFit="cover"
              />
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
