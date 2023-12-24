import style from '../styles/sidebar.module.css'
import styles from '../styles/styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function navBar() {
    return (
        <div style={{display:'flex', flexDirection: 'column', height: '100%', alignItems: 'center', gap: '1rem'}}>
            <Link href='/' className={styles.flex} >
                <Image src='/healer-logo.svg' alt='logo' width={110} height={50}></Image>
        </Link>
        <nav className={style.navbar}>
            <ul className={styles.ul}>
                <li><Link href='/'>Overview</Link></li>
                <li><Link href='/workout'>Workout</Link></li>
                <li><Link href='/diet-plan'>Diet Plan</Link></li>
                <li><Link href='/goals'>Goals</Link></li>
                <li><Link href='/progress'>Progress</Link></li>
            </ul>
            <ul className={styles.ul}>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li><Link href='/help'>Help</Link></li>
                <li><Link href='/my-profile'>My Account</Link></li>
                <li><Link href='/logout'>Logout</Link></li>
            </ul>
        </nav>
        </div>
        
    )
}