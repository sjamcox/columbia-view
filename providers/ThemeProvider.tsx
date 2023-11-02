'use client'

import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { forwardRef } from 'react'
import createCache from '@emotion/cache'
import CssBaseline from '@mui/material/CssBaseline'
import NextLink from 'next/link'

const LinkAdapter = forwardRef(function LinkAdapter(props, ref) {
  return <NextLink ref={ref} {...props} />
})

declare module '@mui/material/styles' {
  interface Palette {
    neutrals: {
      one: string
      two: string
      three: string
    }
  }

  interface PaletteOptions {
    neutrals: {
      one: string
      two: string
      three: string
    }
  }

  interface TypographyVariants {
    date: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    date: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#0E496F',
      light: 'rgb(188, 230, 251)',
    },
    secondary: {
      main: 'rgb(57, 171, 225)',
    },
    text: {
      primary: 'rgb(51, 49, 50)',
      secondary: 'rgb(100, 98, 99)',
    },
    neutrals: {
      one: 'rgb(231, 231, 231)',
      two: 'rgb(240, 240, 240)',
      three: 'rgb(200, 200, 200)',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgb(250, 250, 250)',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkAdapter,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkAdapter,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '28px',
          padding: '12px 36px',
          textTransform: 'none',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: '8px',
        },
      },
    },
  },
})

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: '2.8rem',
    lineHeight: 1.2,
    [theme.breakpoints.up('md')]: {
      fontSize: '4.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5.6rem',
    },
  },
  h2: {
    fontSize: '2.1rem',
    lineHeight: 1.3,
    [theme.breakpoints.up('md')]: {
      fontSize: '3.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem',
    },
  },
  h3: {
    fontSize: '1.7rem',
    lineHeight: 1.3,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.8rem',
    },
  },
  h4: {
    fontSize: '1.4rem',
    lineHeight: 1.3,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  h5: {
    fontSize: '1.2rem',
    lineHeight: 1.3,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem',
    },
  },
  date: {
    color: theme.palette.neutrals.three,
    fontWeight: 700,
  },
}

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({ children }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'mui' })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
