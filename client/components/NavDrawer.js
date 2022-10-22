import { useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Grid,
  Toolbar,
  Typography,
  Collapse,
  Button,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export const NavDrawer = ({ menu, open, setOpen }) => {
  const [showSubnav, setShowSubnav] = useState(false)
  const toggleIn = () => {
    setShowSubnav(!showSubnav)
  }
  const linkList = menu.map((link) => {
    if (link.subnav) {
      return (
        <Grid item key={link.text}>
          <Button
            onClick={toggleIn}
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
          <Collapse in={showSubnav}>
            {link.subnav.map((item) => (
              <Grid item key={item.text}>
                <Link href={item.href} key={item.text} passHref>
                  <Typography
                    sx={{
                      color: '#444444',
                      fontWeight: '500',
                      textDecoration: 'none',
                    }}
                    component="a"
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
        <Link href={link.href} key={link.text} passHref>
          <Typography
            sx={{
              color: '#333333',
              fontWeight: '600',
              textDecoration: 'none',
            }}
            component="a"
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
            <Box display="flex" justifyContent="flex-end">
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
