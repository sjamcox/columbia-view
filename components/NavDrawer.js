'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  Grid,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export const NavDrawer = ({ menu, open, setOpen }) => {
  const generateDefaultNavState = (menu) => {
    const defaultNavState = {}
    menu.forEach((item) => {
      if (item.subnav) {
        defaultNavState[item.text] = false
      }
    })
    return defaultNavState
  }
  const [navState, setNavState] = useState(menu)

  const toggleIn = (name) => {
    setNavState((prevState) => ({ ...prevState, [name]: !navState[name] }))
  }

  const linkList = menu.map((link) => {
    if (link.subnav) {
      return (
        <Grid item key={link.text}>
          <Button
            onClick={() => toggleIn(link.text)}
            sx={{ p: 0, '&:hover': { background: 'none' } }}
          >
            <Typography
              sx={{
                color: '#333333',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              {link.text}
            </Typography>
          </Button>
          <Collapse in={navState[link.text]}>
            {link.subnav.map((item) => (
              <Grid item key={item.text}>
                <Link
                  href={item.href}
                  key={item.text}
                  sx={{ textDecoration: 'none' }}
                >
                  <Typography
                    sx={{
                      color: '#444444',
                      fontWeight: '500',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Collapse>
        </Grid>
      )
    }

    return (
      <Grid item key={link.text}>
        <Link href={link.href} key={link.text} sx={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              color: '#333333',
              fontWeight: '600',
            }}
          >
            {link.text}
          </Typography>
        </Link>
      </Grid>
    )
  })

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Container disableGutters>
        <Toolbar sx={{ margin: '36px 12px' }}>
          <Grid container direction="column" spacing={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <IconButton sx={{ padding: 0 }} onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            {linkList}
          </Grid>
        </Toolbar>
      </Container>
    </Drawer>
  )
}
