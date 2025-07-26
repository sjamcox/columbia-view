import { useState } from 'react'
import Image from 'next/image'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Menu as HamburgerMenu } from '@mui/icons-material'
import logo from '@/public/columbia-view-new-logo-horizontal.webp'

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
    <Button
      href={href}
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
      key={link.text}
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
          <Link href="/">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mb: -1,
              }}
            >
              <Box>
                <Image
                  src={logo}
                  alt="Columbia View logo"
                  width={224}
                  height={42}
                  priority
                />
              </Box>
            </Box>
          </Link>
          {matches ? (
            <Box
              spacing={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              {linkList}
              <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
                {activeMenu.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    sx={{ color: '#333333', textDecoration: 'none' }}
                  >
                    <MenuItem
                      component="span"
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
