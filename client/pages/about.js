import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography, Link } from '@mui/material'
import { Layout } from '../components/Layout'
import david from '../public/staff/david.webp'
import tita from '../public/staff/tita.webp'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ mt: 5, mb: 3 }}>
          Welcome Home
        </Typography>
        <Typography paragraph>
          Columbia View Wesleyan Church is a church body committed to
          consistently pursuing a personal knowledge of the heart of God and
          then sharing that with our people. The Wesleyan church has had a
          presence in Portland since 1893. We are honored to carry on a rich
          commitment to study, know and teach the Word of God in this great
          city.
        </Typography>
        <Typography component="h2" variant="h3" color="primary" mt={4}>
          Our Mission
        </Typography>
        <Typography variant="h4" my={2} paragraph>
          Advancing the great commission, in the spirit of the great
          commandment, for the flourishing of the whole community.
        </Typography>
        <Typography paragraph>
          Our mission is not a “solo” endeavor; it is a communal enterprise. All
          are welcome to discover the God who made them, died for them, and who
          wants an ongoing, transformative, hope-giving relationship with them.
        </Typography>
        <Typography component="h2" variant="h3" color="primary" mt={4}>
          Our Vision
        </Typography>
        <Typography variant="h4" my={2} paragraph>
          Columbia View’s vision is five-fold:
        </Typography>
        <Typography paragraph>
          <strong>We want</strong> to see people’s lives transformed through the
          hope and holiness of Jesus Christ. We want to see the Kingdom of God
          that Jesus described in the Sermon on the Mount (Matthew 5-7)
          actualized in our neighborhoods, city, and across the world.
        </Typography>
        <Typography paragraph>
          <strong>We want</strong> to see a church multiplication movement of
          Christ-followers advancing new expressions of the gospel in unreached
          corners of our city.
        </Typography>
        <Typography paragraph>
          <strong>We want</strong> to see immigrant brothers and sisters
          welcomed in the name of Jesus.
        </Typography>
        <Typography paragraph>
          <strong>We want</strong> to see a multi-ethnic family of Jesus’
          followers expressing their faith in ways that are culturally
          meaningful to them, and yet united under our common mission of knowing
          and sharing God’s heart.
        </Typography>
        <Typography paragraph>
          <strong>We want</strong> to see individuals’ lives aligned more to the
          way and teachings of Jesus.
        </Typography>
        <Typography component="h2" variant="h3" color="primary" mt={4}>
          Beliefs and Core Values
        </Typography>
        <Typography variant="h4" my={2} paragraph>
          Wesleyans believe in one God, who is Father, Son, and Holy Spirit, and
          the Savior of all who put their faith in Him alone for eternal life.
        </Typography>
        <Typography paragraph>
          <strong>We believe</strong> that those who are made new in Christ are
          called to be holy in character and conduct and can only live this way
          by being filled with the Lord’s Spirit.
        </Typography>
        <Typography paragraph>
          <strong>We believe</strong> in the Bible and its sufficiency to
          establish our faith and conduct.
        </Typography>
        <Typography paragraph>
          <strong>We believe</strong> God wills for people everywhere to know
          him and be made new in Christ.
        </Typography>
        <Typography paragraph>
          <strong>We believe</strong> that the purpose of the Church is to
          worship God in spirit and in truth, and to reach a lost and fallen
          world with the gospel of Jesus Christ through its worship, witness and
          loving deeds.
        </Typography>
        <Typography paragraph>
          These terms describe the “soul of the Church”:
          <ul>
            <li>Biblical authority</li>
            <li>Christlikeness</li>
            <li>Disciple Making</li>
            <li>Local Church-Centered</li>
            <li>Servant Leadership</li>
          </ul>
        </Typography>
        <Typography paragraph>
          {'For a comprehensive overview of Wesleyan beliefs, please visit '}
          <Link href="https://www.wesleyan.org/about">wesleyan.org/about</Link>.
        </Typography>

        <Box>
          <Typography variant="h4" paragraph textAlign="center" mt={6}>
            <strong>Our Team</strong>
          </Typography>
          <Grid container spacing={4}>
            <Grid
              item
              mt={4}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src={david}
                alt="Senior Pastor David Rannabargar"
                width="128px"
                height="128px"
              />
              <Typography mt={3} color="primary">
                <strong>David Rannabargar</strong>
              </Typography>
              <Typography fontSize={15}>Senior Pastor</Typography>
              <Link
                href="mailto:david.cvwc@gmail.com"
                fontSize={15}
                color="#A2230A"
              >
                david.cvwc@gmail.com
              </Link>
            </Grid>
            <Grid
              item
              mt={4}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src={tita}
                alt="Serena Rannabargar"
                width="128px"
                height="128px"
              />
              <Typography mt={3} color="primary">
                <strong>Serena Rannabargar</strong>
              </Typography>
              <Typography fontSize={15}>Missions Director</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}
