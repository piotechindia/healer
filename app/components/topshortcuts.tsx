import Image from "next/image";
import Link from "next/link";

export default function topShortcuts() {
    return <>
        <ul className='flex gap12'>
          <li><Link href='#notifications'><Image src='/images/icons/notification.svg' alt='icon' width={29} height={29} title='Notifications'></Image></Link></li>
          <li><Link href='/my-profile/settings'><Image src='/images/icons/settings.svg' alt='icon' width={30} height={30} title='Settings'></Image></Link></li>
          <li><Link href='/my-profile'><Image src='/images/icons/avatar.svg' alt='icon' width={30} height={30} title='My Profile'></Image></Link></li>
        </ul>
    </>
}