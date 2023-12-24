import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/header.module.css'
import styles from '../styles/styles.module.css'
import SearchBox from './searchBox'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={styles.flex} style={{ flexDirection: 'column' }}>
        <p>Good Morning  🙏</p>
        <h3>Welcome Back!</h3>
      </div>
      <SearchBox/>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Image src='/notification.svg' alt='icon' width={35} height={35}></Image>
        <Image src='/setting.svg' alt='icon' width={35} height={35}></Image>
        <Image src='/avatar.svg' alt='icon' width={35} height={35}></Image>
      </div>
    </header>
  )
}
