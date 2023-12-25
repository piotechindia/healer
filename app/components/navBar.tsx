import style from '../styles/sidebar.module.css'
import styles from '../styles/styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function navBar() {
    return (
        <div style={{display:'flex', flexDirection: 'column', height: '100%', alignItems: 'center', gap: '1rem' }}>
            <Link href='/' className={styles.flex} style={{ borderBottom: '.1rem solid #ddd'}}>
                <Image src='/healer-logo.svg' alt='logo' width={192} height={64} ></Image>
        </Link>
        <nav className={style.navbar}>
            <ul className={styles.ul}>
                <li><Image src='./Overview.svg' alt='overview' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/'>Overview</Link></li>
                <li><Image src='./workout.svg' alt='workout' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/workout'>Workout</Link></li>
                <li><Image src='./dietplan.svg' alt='dietplan' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/diet-plan'>Diet Plan</Link></li>
                <hr />
                <li><Image src='./Goal.svg' alt='goal' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/goals'>Goals</Link></li>
                <li><Image src='./schedule.svg' alt='schedule' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/mySchedule'>My Schedule</Link></li>
                <li><Image src='./progress.svg' alt='progress' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/progress'>Progress</Link><Image src='./Vector.svg' alt='vector' width={10} height={10} style={{marginLeft: '1em'}}/></li>
            </ul>
            <ul className={styles.ul}>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li><Image src='./Help.svg' alt='help' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/help'>Help</Link></li>
                <li><Link href='/my-profile'>My Account</Link></li>
                <hr />
                <li><Image src='./Logout.svg' alt='logout' width={24} height={24} style={{marginRight: '1em'}}/><Link href='/logout'>Logout</Link></li>
            </ul>
        </nav>
        </div>
        
    )
}