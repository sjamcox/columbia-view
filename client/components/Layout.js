import { useState } from 'react'
import { Container } from '@mui/material'

import { NavBar } from './NavBar'
import { NavDrawer } from './NavDrawer'
import { menu } from './menuItems'
import Footer from './Footer'

export const Layout = ({ children, noContainer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <NavDrawer menu={menu} open={open} setOpen={setOpen} />
      <NavBar menu={menu} setOpen={setOpen} />
      {noContainer ? (
        children
      ) : (
        <Container maxWidth="md" sx={{ my: 5, px: 3, minHeight: '90vh' }}>
          {children}
        </Container>
      )}

      <Footer />
    </div>
  )
}
