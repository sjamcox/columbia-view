'use client'

import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
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
import InfoIcon from '@mui/icons-material/Info'
import Image from 'next/image'

import { NavDrawer } from './NavDrawer'
import logo from '../public/logos/cvwc-logo-mountains.png'

const menu = [
  {
    text: 'Get Involved',
    subnav: [
      {
        text: 'Join Us',
        href: '/join-us',
      },
      {
        text: 'Service Opportunities',
        href: 'https://columbiaview.churchcenter.com/people/forms/86247',
      },
      {
        text: 'Event Calendar',
        href: 'https://columbiaview.churchcenter.com/calendar?view=list',
      },
      { text: 'Give', href: 'https://columbiaview.churchcenter.com/giving' },
    ],
  },
  { text: 'Ministries', href: '/ministries' },
  { text: 'Messages', href: '/messages' },
  {
    text: 'Immigrant Connection',
    subnav: [
      {
        text: 'Client Portal',
        href: '/immigrant-connection-pdx',
      },
      {
        text: 'Partner With Us',
        href: '/icpdx',
      },
      {
        text: 'Available Positions',
        href: '/immigrant-connection-pdx/jobs',
      },
      {
        text: 'Our Staff',
        href: '/immigrant-connection-pdx/staff',
      },
    ],
  },
  { text: 'About Us', href: '/about' },
]

const NavItem = ({ href, subnav, text, handleClick }) => {
  if (subnav) {
    return (
      <ButtonBase
        onClick={(e) => handleClick(e.currentTarget, subnav)}
        sx={{ mx: 1.5, py: 1 }}
      >
        <Typography fontSize={16} fontWeight={600}>
          {text}
        </Typography>
      </ButtonBase>
    )
  }

  return (
    <ButtonBase href={href} sx={{ mx: 1.5, py: 1 }}>
      <Typography fontSize={16} fontWeight={600}>
        {text}
      </Typography>
    </ButtonBase>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState([])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (element, menu) => {
    setActiveMenu(menu)
    setAnchorEl(element)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const showBanner = new Date('2024-05-27') > new Date()

  return (
    <>
      <NavDrawer menu={menu} open={open} setOpen={setOpen} />
      {showBanner && (
        <Alert
          severity="warning"
          icon={<InfoIcon />}
          sx={{ justifyContent: 'center', border: '2px solid gold' }}
        >
          <Box maxWidth={700}>
            Church service will be held offsite on Sunday, May 26 at 10am at
            Willamette Mission State Park in conjuction with our church campout.{' '}
            <Link href="https://columbiaview.churchcenter.com/calendar/event/155341599">
              Campout Details
            </Link>
          </Box>
        </Alert>
      )}
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
            <>
              {menu.map((link) => (
                <NavItem
                  key={link.text}
                  href={link.href}
                  text={link.text}
                  subnav={link.subnav}
                  handleClick={handleClick}
                />
              ))}
              <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
                {activeMenu.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    sx={{ textDecoration: 'none' }}
                  >
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
                ))}
              </Menu>
            </>
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
