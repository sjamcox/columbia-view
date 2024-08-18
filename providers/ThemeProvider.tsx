'use client'

import { LinkProps } from 'next/link'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { forwardRef } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import NextLink from 'next/link'

import { openSans } from 'utils/fonts'

const LinkAdapter = forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'href'> & { href: LinkProps['href'] }
>(function LinkAdapter(props, ref) {
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
    fontFamily: openSans.style.fontFamily,
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

export default function MuiProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
