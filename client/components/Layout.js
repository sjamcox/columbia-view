import { useState } from 'react'
import { NavBar } from './NavBar'
import { NavDrawer } from './NavDrawer'
import { menu } from './menuItems'
import Footer from './Footer'
import { Box } from '@mui/material'

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <NavDrawer menu={menu} open={open} setOpen={setOpen} />
      <NavBar menu={menu} setOpen={setOpen} />
      <Box component="main" minHeight="90vh">
        {children}
      </Box>
      <Footer />
    </div>
  )
}
