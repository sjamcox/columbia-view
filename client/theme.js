import { createTheme } from '@mui/material/styles'

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
    },
    background: {
      grey: 'rgb(231, 231, 231)',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  components: {
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
}
