import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import query from '../../utils/queries'

const NavContainer = styled.header`
  align-items: center;
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;
  @media (${query.medium}) {

  }
  @media (${query.large}) {
    height: 72px;
  }
`

const NavInnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  max-width: 1088px;
`

const LogoContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
`

const LogoMark = styled.div`

  @media (${query.medium}) {

  }
  @media (${query.large}) {

  }
`

const LogoText = styled.div`
  display: none;
  @media (${query.medium}) {
    display: block;
    margin-left: 18px;
  }
  @media (${query.large}) {

  }
`

const DesktopMenu = styled.div`
  display: none;
  @media (${query.large}) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: block;
  @media (${query.large}) {
    display: none;
  }
`

const Menu = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const MenuItem = styled.p`
  margin: 0 0 0 42px;
  width: auto;
`

export const NavBar = ({ items }) => {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation()
    if(showMenu) { setShowMenu(false) }
    else { setShowMenu(true) }
    document.addEventListener('click', closeMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
    document.removeEventListener('click', closeMenu)
  }

  const menu = items.map(({ children, link }) => {

    if (children) {
      return children.map(({ link }) => (
        <Link key={link.slug} href={`/${link.slug}`}>
          <MenuItem>{ link.title }</MenuItem>
        </Link>
      ))
    }

    return (
      <Link key={link.slug} href={`/${link.slug}`}>
        <MenuItem>{ link.title }</MenuItem>
      </Link>
    )

  })

  return (
    <NavContainer>
      <NavInnerContainer>

        <LogoContainer>
          <LogoMark>
            <Image src="/cvwc-logo-dove.png" width='41' height='36' alt="logo" />
          </LogoMark>
          <LogoText>
            <Image src="/cvwc-logo-text-small.png" width='159' height='42' alt="logoName" />
          </LogoText>
        </LogoContainer>

        <DesktopMenu>
          <Menu>
            {menu}
          </Menu>
        </DesktopMenu>

        <MobileMenu>
          <div
            onClick={openMenu}
          >
            <Image
              src="/hamMenu.png"
              alt="HamMenu"
              width="50px"
              height="50px"
            />
            {showMenu && (
              <div>
                {menu}
              </div>
            )}
          </div>
        </MobileMenu>
      </NavInnerContainer>
    </NavContainer>
  )
}