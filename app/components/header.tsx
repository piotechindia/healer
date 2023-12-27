"use client";
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/header.module.css'
import styles from '../styles/styles.module.css'
import SearchBox from './searchBox'
import { useState } from 'react'

export default function Header() {
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleAccount = () => {
    setAccountOpen(!isAccountOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setAccountOpen(false);
  };



  return (
    <header className={style.header}>
      <div className={style.greeting}>
        <p>Good Morning  🙏</p>
        <h3>Welcome Back!</h3>
      </div>
      <Image src='/healer-logo.svg' alt='icon' className={style.logo} width={110} height={50}></Image>
      <SearchBox/>

      <div className= {style.desktopIcons} >
        <Image src='/notification.svg' alt='icon' width={35} height={35}></Image>
        <Image src='/setting.svg' alt='icon' width={35} height={35}></Image>
        <Image src='/avatar.svg' alt='icon' width={35} height={35}></Image>
      </div>

      <div className= {style.mobileIcons}>
        <Image  src='/avatar.svg' alt='icon' width={35} height={35} onClick={toggleAccount}></Image>
        { isMenuOpen ? <Image src='/cross.svg' alt='icon' width={35} height={35} onClick={toggleMenu}></Image> :
           <Image src='/bars.svg' alt='icon' width={35} height={35} onClick={toggleMenu} ></Image>
         }
      </div>

      {isMenuOpen ? <nav className={style.navbar}>
            <ul className={styles.ul}>
                <li><Link href='/'>Overview</Link></li>
                <li><Link href='/workout'>Workout</Link></li>
                <li><Link href='/diet-plan'>Diet Plan</Link></li>
                <li><Link href='/goals'>Goals</Link></li>
                <li><Link href='/progress'>Progress</Link></li>
            </ul>
        </nav>  : null} 

        { isAccountOpen ?<nav className={style.navbar} >
        <ul className={styles.ul}>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li><Link href='/help'>Help</Link></li>
                <li><Link href='/my-profile'>My Account</Link></li>
                <li><Link href='/logout'>Logout</Link></li>
            </ul>
        </nav> : null }


    </header>
  )
}
