'use client'

import type { SubnavItem } from 'helpers/menu'

import { useState } from 'react'
import {
  Box,
  ButtonBase,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import MenuIcon from '@mui/icons-material/Menu'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Image from 'next/image'

import { NavDrawer } from './NavDrawer'
import { menu } from 'helpers/menu'
import logo from 'public/logos/cvwc-logo-mountains.png'

type NavLinkProps = {
  href: string
  text: string
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <Link href={href} sx={{ mx: 1.5, py: 1, textDecoration: 'none' }}>
      <Typography fontSize={16} fontWeight={600} color="#333333">
        {text}
      </Typography>
    </Link>
  )
}

type NavParentProps = {
  text: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function NavParent({ text, onClick }: NavParentProps) {
  return (
    <ButtonBase onClick={onClick} sx={{ mx: 1.5, py: 1 }}>
      <Typography fontSize={16} fontWeight={600}>
        {text}
      </Typography>
    </ButtonBase>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveMenu(e.currentTarget.textContent)
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const primaryNavItems = menu.map((item) => {
    if (item.subnav) {
      return (
        <NavParent key={item.text} text={item.text} onClick={handleClick} />
      )
    } else if (item.href) {
      return <NavLink key={item.text} href={item.href} text={item.text} />
    }
  })

  const subnavItems = menu.find((item) => {
    console.log(item.text, activeMenu)
    console.log(item.text === activeMenu)
    return item.text === activeMenu
  })?.subnav

  const popperMenuItems = subnavItems?.map((item) => (
    <Link key={item.text} href={item.href} sx={{ textDecoration: 'none' }}>
      <MenuItem
        component="span"
        onClick={handleClose}
        sx={{
          color: '#333333',
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {item.text}
      </MenuItem>
    </Link>
  ))

  return (
    <>
      <NavDrawer menu={menu} open={open} setOpen={setOpen} />
      <Grid container height={90} width="100%" px="4vw">
        <Grid
          xs={6}
          sm={1}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Link href="/">
            <Box display="flex" mb={-1}>
              <Box>
                <Image
                  src={logo}
                  alt="Columbia View logo"
                  width={70}
                  height={70}
                  priority
                />
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid
          xs={6}
          sm={11}
          md={10}
          display="flex"
          justifyContent={{ xs: 'flex-end', md: 'center' }}
          alignItems="center"
        >
          <Box display={{ xs: 'none', md: 'block' }}>
            <Box display="flex">{primaryNavItems}</Box>
            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
              {popperMenuItems}
            </Menu>
          </Box>
          <Box display={{ xs: 'block', md: 'none' }}>
            <IconButton sx={{ padding: 0 }} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid
          xs={0}
          md={1}
          display={{ xs: 'none', md: 'flex' }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://www.facebook.com/COLUMBIAVIEW/"
              color="primary"
              sx={{ padding: 0 }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@columbiaview.church"
              color="primary"
              sx={{ padding: 0 }}
            >
              <YouTubeIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
