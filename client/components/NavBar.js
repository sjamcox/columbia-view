import Image from 'next/image'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Menu } from '@mui/icons-material'
import logo from '../public/columbia-view-new-logo-horizontal.webp'

export const NavBar = ({ menu, setOpen }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  const linkList = menu.map((link) => {
    return (
      <Link key={link.href + 'bar'} href={link.href} passHref>
        <Typography
          component="a"
          sx={{
            color: '#333333',
            fontWeight: '500',
            marginLeft: '24px',
            textDecoration: 'none',
          }}
        >
          {link.text}
        </Typography>
      </Link>
    )
  })

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: '4px 0',
        height: 72,
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <Box component="a" display="flex" flexDirection="row" mb={-1}>
              <Box>
                <Image
                  src={logo}
                  alt="Columbia View logo"
                  width="224px"
                  height="42px"
                  priority
                />
              </Box>
            </Box>
          </Link>
          {matches ? (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              spacing={4}
            >
              {linkList}
            </Box>
          ) : (
            <IconButton sx={{ padding: '0' }} onClick={() => setOpen(true)}>
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
