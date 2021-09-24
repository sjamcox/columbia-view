import Image from 'next/image'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import logoMark from '../public/cvwc-logo-dove.png'
import logoText from '../public/cvwc-logo-text-small.png'


const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '4px 0',
    height: 72,
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  logoText: {
    marginLeft: '18px'
  },
  navLink: {
    color: '#333333',
    fontWeight: '500',
    marginLeft: '24px',
    textDecoration: 'none',
  },
  hamburger: {
    padding: '0',
  }
})

export const NavBar = ({ menu, setOpen }) => {

  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const linkList = menu.map(link => {
    return (
      <Link key={link.href + 'bar'} href={link.href} passHref>
        <Typography className={classes.navLink} component='a'>{link.text}</Typography>
      </Link>
    )
  })

  return (
    <AppBar className={classes.root} position='fixed'>
      <Container maxWidth='lg' disableGutters>
        <Toolbar className={classes.toolbar}>
          <Box display='flex' flexDirection='row' mb={-1}>
            <Box>
              <Image src={logoMark} width='41px' height='36px' />
            </Box>
            <Box className={classes.logoText}>
              <Image src={logoText} width='159px' height='42px' />
            </Box>
          </Box>
          {matches
            ? <Box display='flex' flexDirection='row' justifyContent='flex-end' spacing={4} >
                { linkList }
              </Box>
            : <IconButton className={classes.hamburger} onClick={() => setOpen(true)}>
                <Menu />
              </IconButton>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}
