import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(14, 73, 111)',
      light: 'rgb(188, 230, 251)',
    },
    secondary: {
      main: 'rgb(57, 171, 225)',
    },
    text: {
      primary: 'rgb(51, 49, 50)',
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
  },
})

theme.typography = {
  ...theme.typography,
  p: {
    marginBottom: '1rem',
  },
  h1: {
    fontSize: '3.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '4.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5.6rem',
    },
  },
  h2: {
    fontSize: '2.1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem',
    },
  },
  h3: {
    fontSize: '1.7rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.8rem',
    },
  },
  h4: {
    fontSize: '1.4rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  h5: {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem',
    },
  },
}
