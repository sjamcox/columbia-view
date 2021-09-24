import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(14, 73, 111)',
      light: 'rgb(188, 230, 251)'
    },
    secondary: {
      main: 'rgb(57, 171, 225)'
    },
    text: {
      primary: 'rgb(51, 49, 50)'
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeightMedium: 600,
    h1: {
      fontWeight: 600
    }
  }
});