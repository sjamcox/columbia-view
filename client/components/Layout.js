import { useState } from 'react'
import { Container } from '@mui/material'

import { NavBar } from './NavBar'
import { NavDrawer } from './NavDrawer'
import Footer from './Footer'

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
        href: '/events',
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
        href: '/immigrant-connection-pdx/clients',
      },
      {
        text: 'Partner With Us',
        href: '/immigrant-connection-pdx',
      },
      {
        text: 'Our Staff',
        href: '/immigrant-connection-pdx/staff',
      },
    ],
  },
  { text: 'About Us', href: '/about' },
]

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
