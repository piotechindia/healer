import Link from 'next/link'
import Image from 'next/image'
import '../styles/header.module.css';
import Greetings from './greetings'
// import SearchBox from './searchBox'

export default function Header() {
  return (
    <>
      <Greetings />

      {/* <SearchBox/> */}
      <div className='navTopIcons'>
        <ul>
          <li><Link href='#notifications'><Image src='/images/icons/notification.svg' alt='icon' width={29} height={29} title='Notifications'></Image></Link></li>
          <li><Link href='/my-profile/settings'><Image src='/images/icons/settings.svg' alt='icon' width={30} height={30} title='Settings'></Image></Link></li>
          <li><Link href='/my-profile'><Image src='/images/icons/avatar.svg' alt='icon' width={29} height={29} title='My Profile'></Image></Link></li>
          <li><Image src='/images/icons/menu.svg' alt='' width={30} height={30} /></li>
        </ul>
      </div>
    </>
  )
}

