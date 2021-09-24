import { useState } from 'react'
import { NavBar } from './NavBar'
import { NavDrawer } from './NavDrawer'
import { menu } from './menuItems'

export const Layout = ({ children }) => {

  const [ open, setOpen ] = useState(false)

  return (
    <div>
        <NavDrawer
          menu={menu}
          open={open}
          setOpen={setOpen}
        />
        <NavBar
          menu={menu}
          setOpen={setOpen}
        />
        { children }
    </div>
  )
}
