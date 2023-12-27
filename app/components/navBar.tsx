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
                <li><Link href='/'><Image src='./Overview.svg' alt='overview' width={24} height={24} style={{marginRight: '1em'}}/>Overview</Link></li>
                <li><Link href='/workout'><Image src='./workout.svg' alt='workout' width={24} height={24} style={{marginRight: '1em'}}/>Workout</Link></li>
                <li><Link href='/diet-plan'><Image src='./dietplan.svg' alt='dietplan' width={24} height={24} style={{marginRight: '1em'}}/>Diet Plan</Link></li>
                <hr />
                <li><Link href='/goals'><Image src='./Goal.svg' alt='goal' width={24} height={24} style={{marginRight: '1em'}}/>Goals</Link></li>
                <li><Link href='/mySchedule'><Image src='./schedule.svg' alt='schedule' width={24} height={24} style={{marginRight: '1em'}}/>My Schedule</Link></li>
                <li><Link href='/progress'><Image src='./progress.svg' alt='progress' width={24} height={24} style={{marginRight: '1em'}}/>Progress<Image src='./Vector.svg' alt='vector' width={10} height={10} style={{marginLeft: '1em'}}/></Link></li>
            </ul>
            <ul className={styles.ul}>
                <li><Link href='/contact'><Image src='./contact.svg' alt='contact' width={24} height={24} style={{marginRight: '1em'}}/>Contact Us</Link></li>
                <li><Link href='/help'><Image src='./Help.svg' alt='help' width={24} height={24} style={{marginRight: '1em'}}/>Help</Link></li>
                <li><Link href='/my-profile'><Image src='./account.svg' alt='account' width={24} height={24} style={{marginRight: '1em'}}/>My Account</Link></li>
                <hr />
                <li><Link href='/logout'><Image src='./Logout.svg' alt='logout' width={24} height={24} style={{marginRight: '1em'}}/>Logout</Link></li>
            </ul>
        </nav>
        </div>
        
    )
}