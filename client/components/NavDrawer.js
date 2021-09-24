import Link from 'next/link'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Grid,
  Toolbar,
  Typography
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles({
  toolbar: {
    margin: '36px 12px'
  },
  icon: {
    padding: '0'
  },
  navLink: {
    color: '#333333',
    fontWeight: '500',
    textDecoration: 'none',
  },
})

export const NavDrawer = ({ menu, open, setOpen }) => {

  const classes = useStyles()
  const linkList = menu.map(link => {
    return (
      <Grid item>
        <Link href={link.href} key={link.text} passHref>
          <Typography className={classes.navLink} component='a'>{link.text}</Typography>
        </Link>
      </Grid>
    )
  })

  return (
    <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
      <Container disableGutters>
        <Toolbar className={classes.toolbar} >
          <Grid container direction='column' spacing={2} >
            <Box display='flex' justifyContent='flex-end'>
              <IconButton className={classes.icon} onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            { linkList }
          </Grid>
        </Toolbar>
      </Container>
    </Drawer>
  )
}

