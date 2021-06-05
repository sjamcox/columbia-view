import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ links }) => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = (e) => {
    setShowMenu(true)
    e.stopPropagation()
    document.addEventListener('click', closeMenu)
  }
  const closeMenu = () => {
    setShowMenu(false)
    document.removeEventListener('click', closeMenu)
  }

  const linkTags = links.map((link,i) => (
    <Link key={i} className={styles.link} href={`/${link}`}>
      <p className={styles.p}>{link}</p>
    </Link>
  ))
  return (
  <div className={styles.nav}>

    <div className="LogoContainer">
      <Image src="/logo.png" width="50px" height="50px" alt="logo"/>
      <div className={styles.logoName}>
        <Image src="/logo.png" width="50px" height="50px" alt="logoName" />
      </div>
    </div>

    <div className={styles.linkContainer}>
      {linkTags}
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
            {linkTags}
          </div>
        )}
      </div>

  </div>

)
}

export default Navbar