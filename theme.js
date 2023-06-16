import { createTheme } from '@mui/material/styles'
import NextLink from 'next/link'
import { forwardRef } from 'react'

const LinkAdapter = forwardRef(function LinkAdapter(props, ref) {
  return <NextLink ref={ref} {...props} />
})

export const theme = createTheme({
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
      body: 'rgb(100, 98, 99)',
    },
    background: {
      grey: 'rgb(231, 231, 231)',
      light: 'rgb(240, 240, 240)',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  components: {
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
  p: {
    marginBottom: '1rem',
  },
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
  c1: {
    fontFamily: 'Open Sans Condensed',
    fontSize: '1.7rem',
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.8rem',
    },
    lineHeight: 1.3,
  },
  c2: {
    fontFamily: 'Open Sans Condensed',
    fontWeight: 300,
  },
}
