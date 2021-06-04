import React from 'react'
import styles from './navbar.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ links }) => (
  <div className={styles.nav}>

    <div className="LogoContainter">
      <img src="Logo"></img>
      <img src="NameLogo"></img>
    </div>

    <div className="LinksContainer">
      {links.map(link => {
        <Link href={link}>
          <a>{link}</a>
        </Link>
      })}
    </div>

    <Image id="HamMenu" src="/HamburgerMenu" alt="HamMenu"></img>
  </div>
)


export default Navbar