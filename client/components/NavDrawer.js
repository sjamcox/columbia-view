import Link from 'next/link'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export const NavDrawer = ({ menu, open, setOpen }) => {
  const linkList = menu.map((link) => {
    return (
      <Grid item key={link.text}>
        <Link href={link.href} key={link.text} passHref>
          <Typography
            sx={{
              color: '#333333',
              fontWeight: '500',
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
