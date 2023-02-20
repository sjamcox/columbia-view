import PropTypes from 'prop-types'
import { useState } from 'react'
import { DefaultSeo } from 'next-seo'
import { CssBaseline, Box, Container, Typography } from '@mui/material'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '@mui/material/styles'
import ErrorIcon from '@mui/icons-material/Error'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { theme } from '../theme'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import '@fontsource/open-sans/800-italic.css'
import '@fontsource/open-sans-condensed/300.css'
import '@fontsource/open-sans-condensed/700.css'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo
        defaultTitle="Columbia View Church"
        additionalMetaTags={[
          { name: 'viewport', content: 'initial-scale=1, width=device-width' },
          { name: 'theme-color', content: `${theme.palette.primary}` },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicon/apple-touch-icon.png',
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en',
          url: 'https://www.columbiaview.org/',
          site_name: 'Columbia View Church',
          title: 'Columbia View Church',
          description:
            'Columbia View Wesleyan Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
          images: [
            {
              url: 'https://www.columbiaview.org/og/mark-baptism.webp',
              width: 1200,
              height: 630,
              alt: 'Baptism at Columbia View',
            },
          ],
        }}
      />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Box bgcolor="#b71c1c" p={3}>
            <Container sx={{ display: 'flex' }}>
              <ErrorIcon sx={{ color: 'white', mr: 2, p: 0 }} />
              <Typography color="white">
                <strong>
                  Due to winter weather, we will not be holding Sunday service on
                  Dec. 26th. Stay safe and warm!
                </strong>
              </Typography>
            </Container>
          </Box> */}
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
