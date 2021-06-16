import { useState } from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
        <Link key={link.slug} className={styles.link} href={`/${link.slug}`}>
          <p className={styles.p}>{ link.title }</p>
        </Link>
      ))
    }

    return (
      <Link key={link.slug} className={styles.link} href={`/${link.slug}`}>
        <p className={styles.p}>{ link.title }</p>
      </Link>
    )

  })

  return (
    <div className={styles.nav}>

      <div className={styles.logoContainer}>
        <Image src="/logo.png" width="50px" height="50px" alt="logo" />
        <div className={styles.logoName}>
          <Image src="/logo.png" width="50px" height="50px" alt="logoName" />
        </div>
      </div>

      <div className={styles.linkContainer}>
        {menu}
      </div>

      <div
        className={styles.hamMenu}
        onClick={openMenu}
      >
        <Image
          src="/hamMenu.png"
          alt="HamMenu"
          width="50px"
          height="50px"
        />
        {showMenu && (
          <div className={styles.menu}>
            {menu}
          </div>
        )}
      </div>

    </div>
  )
}