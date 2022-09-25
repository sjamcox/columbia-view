import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from '../components/Layout'
import blakeFamily from '../public/blake-family.webp'
import cheneyFamily from '../public/cheney-family.webp'
import dunbarFamily from '../public/dunbar-family.webp'
import jonesFamily from '../public/jones-family.webp'

export default function Ministries() {
  return (
    <Layout>
      <Head>
        <title>Ministries | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ mt: 5, mb: 3 }}>
          Ministries
        </Typography>
        <Typography variant="h4" paragraph>
          Our ministries can be summed up in three words: belong, believe, and
          become.
        </Typography>
        <Typography paragraph>
          First, our ministries provide both places and spaces where you can
          belong just as you are. We are a diverse and eclectic group of people
          all seeking to know God’s heart.
        </Typography>
        <Typography paragraph>
          Second, our ministries are designed to help you move towards greater
          alignment with the Bible. We believe the story of the Bible ultimately
          points to Jesus, and through belief in Jesus, we can truly know God’s
          heart.
        </Typography>
        <Typography paragraph>
          Lastly, we view our ministries as tools God can use to shape you to
          become the person he intends you to be — reflecting the life and
          character of Jesus as you seek to share his heart with your people.
        </Typography>
        <Box id="sunday-worship" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Worship Service
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                Every Sunday, we gather and worship through music, prayer,
                preaching/teaching of God's word, giving, and testimony. Worship
                for us is the response of a life that is seeking after Jesus. If
                you are a guest with us, we encourage you to come with an open
                heart to what God may want to do in your life, and don't worry,
                we will not embarrass or call on you during worship.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Meeting Time & Location</strong>
              </Typography>
              <Typography fontSize={15} paragraph>
                10:00 AM in the sanctuary
              </Typography>
              <Typography
                fontSize={15}
                sx={{
                  '& a': {
                    textDecoration: 'none',
                    color: 'rgb(57, 171, 225)',
                  },
                }}
              >
                {`We also live stream our worship services via `}
                <a href="https://www.facebook.com/COLUMBIAVIEW/">Facebook</a>
                {` each Sunday`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="womens-retreat" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Women's Retreat
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                Women's Retreat 2022 is designed to provide a comfortable
                environment for ladies to slow down, rest, and rejuvenate. There
                will be a basic flow of activities, balancing time together and
                individually, times of reflection and times for fun, etc. We are
                pumped to welcome Jessica Schmerse as our guest speaker! Jess is
                so excited to be with us and lead us through some sessions on
                finding rest in the chaotic and busy world we all live in.
              </Typography>
              <Typography paragraph>
                <strong>Cost:</strong> $130 per person
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white', mb: 3 }}
                href="https://columbiaview.churchcenter.com/registrations/events/1450232"
              >
                Register for Women's Retreat
              </Button>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Dates & Location</strong>
              </Typography>
              <Typography fontSize={15}>November 4–6, 2022</Typography>
              <Typography fontSize={15}>Twin Rock Friends Camp @</Typography>
              <Typography fontSize={15}>
                The Harbor Villa Retreat Center
              </Typography>
              <Typography fontSize={15}>Rockaway Beach, OR</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="columbia-kids" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Children's Ministry
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                We offer a children's class during our Sunday morning preaching
                portion of our worship service. Our Children's Ministry team are
                all background checked and trained to ensure the highest quality
                and safety for your children.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Meeting Time & Location</strong>
              </Typography>
              <Typography fontSize={15} paragraph>
                10:00 AM in the kids room
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="life-groups" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Life Groups
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                Life groups are the heartbeat of our church as we seek to live
                out the practice of Acts 2:42-47. All are welcome and encouraged
                to join a Life Group that best fits them regardless of Biblical
                experience.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Meeting Times & Locations</strong>
              </Typography>
              <Typography
                fontSize={15}
                paragraph
                sx={{
                  '& a': {
                    textDecoration: 'none',
                    color: 'rgb(57, 171, 225)',
                  },
                }}
              >
                Check{' '}
                <Link href="https://columbiaview.churchcenter.com/groups">
                  Planning Center
                </Link>{' '}
                for meeting times
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="immigrant-connection" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Immigrant Connection
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                Immigrant Connection PDX is a low-cost immigration legal
                services office. Our Department of Justice Accredited
                Representatives provide affordable immigration legal services
                for our clients. Our vision is to build bridges for a
                hope-filled future, and our mission is to provide affordable
                immigration legal services to immigrants in our community.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Office Hours & Location</strong>
              </Typography>
              <Typography fontSize={15}>Tuesdays and Thursdays</Typography>
              <Typography fontSize={15} paragraph>
                10:00 am – 4:00 pm
              </Typography>
              <Typography fontSize={15} paragraph>
                Columbia View Wesleyan Church <br />
                16700 NE Halsey St. <br />
                Portland, OR 97230
              </Typography>
              <Typography
                fontSize={15}
                paragraph
                sx={{
                  '& a': {
                    textDecoration: 'none',
                    color: 'rgb(57, 171, 225)',
                  },
                }}
              >
                <a href="tel:+19712022073">971.202.2073</a>
                <br />
                <a href="mailto:info.icpdx@gmail.com">info.icpdx@gmail.com</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="youth-ministry" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Youth Ministry
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                We offer periodic outings and yearly retreats, camps, and
                service opportunities. Rather than a traditional youth group, we
                seek to integrate youth into the overall life of our church
                through our worship services and life groups.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box id="global-missions" my={4} sx={{ scrollMarginTop: '100px' }}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Global Missions
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Image
                src={blakeFamily}
                alt="Blake family photo"
                layout="responsive"
              />
              <Typography component="h3" variant="h4" mt={2}>
                Blake Family
              </Typography>
              <Typography paragraph color="secondary">
                Czech Republic
              </Typography>
              <Typography sx={{ pb: 3 }}>
                The Blake family has been serving in Czech Republic since 2003.
                They are currently focused on developing relationships,
                discipleship and church leadership.
              </Typography>

              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white' }}
                href="https://www.globalpartnersonline.org/missionary/wm04-0264/"
              >
                Learn more or donate
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={cheneyFamily}
                alt="Cheney family photo"
                layout="responsive"
              />
              <Typography component="h3" variant="h4" mt={2}>
                Cheney Family
              </Typography>
              <Typography paragraph color="secondary">
                Swaziland
              </Typography>
              <Typography sx={{ pb: 3 }}>
                The Cheney's have been missionaries with Global Partners since
                2010. They currently live in South Africa. Recently, their focus
                is in developing and strengthening churches and communities
                through theological education and health initiatives.
              </Typography>
              <Button
                variant="contained"
                href="https://www.globalpartnersonline.org/missionary/wm04-0368/"
                size="large"
                color="secondary"
                sx={{ color: 'white' }}
              >
                Learn more or donate
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={dunbarFamily}
                alt="Dunbar family photo"
                layout="responsive"
              />
              <Typography component="h3" variant="h4" mt={2}>
                Mark and Serena Dunbar
              </Typography>
              <Typography paragraph color="secondary">
                Mexico
              </Typography>
              <Typography sx={{ pb: 3 }}>
                The Dunbars have been missionaries with World Gospel Missions
                for 25+ years. They currently serve alongside Mexican church in
                the area of theological education, employment skills, and
                discipleship.
              </Typography>
              <Button
                href="https://www.wgm.org/missionary/dunbar"
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white' }}
              >
                Learn more or donate
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={jonesFamily}
                alt="Jones family photo"
                layout="responsive"
              />
              <Typography component="h3" variant="h4" mt={2}>
                Jones Family
              </Typography>
              <Typography paragraph color="secondary">
                Wycliff Bible Translators
              </Typography>
              <Typography sx={{ pb: 3 }}>
                Milt and Becky Jones have served with the Seed Company working
                alongside Wycliffe Bible Translators. Recently, Milt has been
                asked to support and oversee translations for the continents of
                Africa and Asia.
              </Typography>
              <Button
                variant="contained"
                href="https://www.wycliffe.org/partner/E7666D"
                size="large"
                color="secondary"
                sx={{ color: 'white' }}
              >
                Learn more or donate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}
