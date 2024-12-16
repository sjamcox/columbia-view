import { Metadata } from 'next'
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import icMap from 'public/ic-map.webp'
import chart from 'public/family-workplace-community.webp'
import immigrantSuccess from 'public/immigrant-success-stories.webp'
import celebrationLuncheon from 'public/icpdx/2024-luncheon-digital-invite.png'
import YouTubePlayer from 'components/YouTubePlayer'
import ResponsiveImage from 'components/ResponsiveImage'
import { ImageSection } from 'components/Section'

export const metadata: Metadata = {
  title: 'Partner With Us | Immigrant Connection',
  description:
    'Immigrant Connection is committed to seeing immigrant families in East Portland thrive. See how you can get involved today.',
}

function CoreValue({ title, description }) {
  return (
    <Box
      sx={{
        display: 'flex',
        my: { xs: 1, md: 4 },
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'primary.main',
          maxWidth: 300,
          mr: 4,
        }}
      >
        {title}
      </Typography>
      <Divider flexItem orientation="vertical" sx={{ mr: 4 }} />
      <Typography
        variant="h5"
        paragraph
        sx={{
          maxWidth: 900,
          textAlign: 'left',
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default function ImmigrantConnection() {
  return (
    <>
      <ImageSection
        src={immigrantSuccess}
        alt="Immigrant families celebrating success"
      >
        <Stack
          sx={{
            minHeight: { xs: 350, sm: 500 },
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="white"
            sx={{
              maxWidth: 900,
              textAlign: 'left',
            }}
          >
            Partner With Immigrant Connection PDX
          </Typography>
        </Stack>
      </ImageSection>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Stack
          sx={{
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: 4,
          }}
        >
          <Grid container spacing={{ xs: 0, sm: 4 }}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: { xs: 'left', sm: 'center' },
                }}
              >
                <strong>Vision</strong>
              </Typography>
              <Divider
                sx={{
                  borderColor: 'primary.main',
                  width: 200,
                  my: 2,
                }}
              />
              <Typography
                variant="h5"
                paragraph
                sx={{
                  maxWidth: 900,
                  textAlign: { xs: 'left', sm: 'center' },
                  mb: 3,
                }}
              >
                Building bridges for a hope-filled future.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: { xs: 'left', sm: 'center' },
                }}
              >
                <strong>Mission</strong>
              </Typography>
              <Divider
                sx={{
                  borderColor: 'primary.main',
                  width: 200,
                  my: 2,
                }}
              />
              <Typography
                variant="h5"
                paragraph
                sx={{
                  maxWidth: 900,
                  textAlign: { xs: 'left', sm: 'center' },
                }}
              >
                Providing low-cost immigration legal services to the
                under-resourced communities of the Portland metro area and
                beyond.
              </Typography>
            </Grid>
          </Grid>
          <Stack
            sx={{
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: { xs: 'left', sm: 'center' },
                mt: 2,
              }}
            >
              <strong>Core Values</strong>
            </Typography>
            <Divider
              sx={{
                borderColor: 'primary.main',
                width: 200,
                my: 2,
              }}
            />
          </Stack>
          <CoreValue
            title="Loving Welcome."
            description="The life and teachings of Jesus compel us to love, welcome, and value immigrants. We affirm the rights of immigrant families, each made in the image of God, and we are committed to seeing immigrant families thrive in their local communities."
          />
          <CoreValue
            title="Innovative Excellence."
            description="We are committed to excellence and innovation as we build programs and systems to train, launch, and resource local like-minded churches and organizations."
          />
          <CoreValue
            title="Church-Based Expansion."
            description="A church-based model enables us to bring immigration legal services access to hard-to-reach communities in a sustainable manner: (1) churches exist in nearly every town/city, (2) church-hosted sites drastically reduce start-up and overhead costs, and (3) churches are trusted local entities."
          />
          <CoreValue
            title="Community Based Leadership."
            description="Our training and leadership model is focused on “home-grown” leaders, experts, and staff. We equip and empower individuals to become immigrant advocates in their own localities and to serve their own neighbors, communities, and regions."
          />
          <CoreValue
            title="Mutual Partnership."
            description="We build authentic, mutual partnerships in order to make a lasting impact for immigrant families. Every partner is creating with us a future where all immigrants are welcomed and belong."
          />
        </Stack>
        <YouTubePlayer id={'ek0RzZbxUXY'} />
        <Grid
          container
          sx={{
            my: 4,
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'primary.main',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: 64, color: 'orange', textAlign: 'center' }}
            >
              800+
            </Typography>
            <Typography
              color="white"
              sx={{
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              new client consultations
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'secondary.main',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: 64, color: 'orange', textAlign: 'center' }}
            >
              165+
            </Typography>
            <Typography
              color="white"
              sx={{
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              citizenship applications
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'primary.main',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: 64, color: 'orange', textAlign: 'center' }}
            >
              60+
            </Typography>
            <Typography
              color="white"
              sx={{
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              family-based petitions
            </Typography>
          </Grid>
        </Grid>
        <Typography
          component="p"
          variant="h5"
          sx={{
            textAlign: 'center',
            borderTop: '1px solid silver',
            borderBottom: '1px solid silver',
            p: 5,
          }}
        >
          We're grateful for the impact we made together so far!
        </Typography>
      </Container>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'block', alignItems: 'center' }}
        >
          <ResponsiveImage
            src={icMap}
            alt="Map of Immigrant Connection sites across the United States"
            aspectRatio="2:1"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography
            sx={{
              p: 4,
              mr: 4,
            }}
          >
            Immigrant Connection is a network of Immigration Legal Services
            sites based in both rural and urban areas across the country. Sites
            are church-based and are established in under-resourced communities
            in order to best serve the needs of immigrant families.
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="lg" sx={{ my: 5, px: 3 }}>
        <YouTubePlayer id={'_Px3J78h5x0'} />
        <Typography
          sx={{
            my: 5,
          }}
        >
          As Immigrant Connection PDX provides critical services, we can see
          positive outcomes for immigrant families, the workplace and school
          they are part of, as well as the communities they live in. Immigrant
          Connection PDX opens pathways for whole communities and their
          residents to thrive.
        </Typography>
        <Stack
          sx={{
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 500,
            }}
          >
            <ResponsiveImage
              src={chart}
              alt="Chart showing key pillars of Immigrant Connection"
              aspectRatio="2:1"
            />
          </Box>
        </Stack>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'center',
          }}
        >
          <Button
            href="https://columbiaview.churchcenter.com/giving"
            variant="contained"
            color="secondary"
            sx={{ mt: 2, mr: 2, textAlign: 'center' }}
          >
            Donate here
          </Button>
          <Button
            href="https://columbiaview.churchcenter.com/people/forms/34910"
            variant="contained"
            color="secondary"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Explore ways to partner with us
          </Button>
        </Stack>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            mt: 5,
          }}
        >
          Our Partners
        </Typography>
        <Typography>
          A heartfelt thank you to each of the organizations below for their
          support. Together we are able to accomplish so much.
        </Typography>
        <Grid container spacing={1} sx={{ mt: 2, mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://riverwest.org/">Riverwest Church</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.gracecc.net/">Grace Community Church</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.greshambible.org/about/">
              Gresham Bible Church
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://brilliancelabs.org/">Brilliance Labs</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://tipwelcome.com/">
              Tyson Immigration Partnership
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://woodvillagebaptist.org/">
              Wood Village Baptist Church
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="http://www.thechapelonline.org/">The Chapel</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://rockwoodcdc.org/">
              Rockwood Community Development Corporation
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://eastportlandchamberofcommerce.com/">
              East Portland Chamber of Commerce
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.catholiccharitiesoregon.org/">
              Catholic Charities
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.ilrc.org/">
              Immigration Legal Resource Center
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.facebook.com/loveincemc/">
              Love INC East Multnomah
            </Link>
          </Grid>
        </Grid>
        <Typography>
          ... and to all of our individual recurring donors!
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            mt: 5,
          }}
        >
          2023 Annual Report
        </Typography>
        <Button
          href="https://drive.google.com/file/d/1wU-Hmam19gN4CeHlemYWDsIDZESEFPcd/view"
          target="_blank"
          variant="contained"
          size="large"
          color="secondary"
          sx={{ color: 'white', mt: 2 }}
        >
          View Our Annual Report
        </Button>
      </Container>
    </>
  )
}
