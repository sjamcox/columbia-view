import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Menu as HamburgerMenu } from '@mui/icons-material'
import logo from '../public/columbia-view-new-logo-horizontal.webp'

const NavItem = ({ href, subnav, text, handleClick }) => {
  if (subnav) {
    return (
      <Button
        onClick={(e) => handleClick(e, subnav)}
        sx={{
          color: '#333333',
          fontWeight: '500',
          px: 2,
        }}
      >
        {text}
      </Button>
    )
  }

  return (
    <Link key={href + 'bar'} href={href} passHref>
      <Button
        component="a"
        sx={{
          color: '#333333',
          fontWeight: '500',
          px: 2,
        }}
      >
        {text}
      </Button>
    </Link>
  )
}

export const NavBar = ({ menu, setOpen }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const [activeMenu, setActiveMenu] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e, menu) => {
    setActiveMenu(menu)
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const linkList = menu.map((link) => (
    <NavItem
      href={link.href}
      text={link.text}
      subnav={link.subnav}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  ))

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
              <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
                {activeMenu.map((item) => (
                  <Link href={item.href} passHref>
                    <MenuItem
                      component="a"
                      onClick={handleClose}
                      sx={{ fontSize: 16 }}
                    >
                      {item.text}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          ) : (
            <IconButton sx={{ padding: 0 }} onClick={() => setOpen(true)}>
              <HamburgerMenu />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
