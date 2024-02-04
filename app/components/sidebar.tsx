"use client"
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/components/logo';

export default function Sidebar() {
    return (
        <aside id='sidebar' className='sidebar p2'>
                <ul className='flex-column gap2'>
                    <li className='logoArea1' ><Logo /></li>
                    <li title='Overview'><Link href='/overview'><Image src='/images/icons/dashboard.svg' alt='' width={25} height={25} /> Overview</Link></li>
                    <li title='Workout'><Link href='/workout'><Image src='/images/icons/workout.svg' alt='' width={25} height={25} /> Workout</Link></li>
                    <li title='Diet Plans'><Link href='/diet-plan'><Image src='/images/icons/dietplan.svg' alt='' width={25} height={25} /> Diet Plan</Link></li>
                    <li title='Recipes'><Link href='/recipes'><Image src='/images/icons/dietplan.svg' alt='' width={25} height={25} />Recipes</Link></li>
                    <hr />
                    <li title='Goals'><Link href='/goals'><Image src='/images/icons/goal.svg' alt='' width={25} height={25} /> Goals</Link></li>
                    <li title='Progress'><Link href='/progress'><Image src='/images/icons/progress.svg' alt='' width={25} height={25} /> Progress</Link></li>
                    <li title='Contact Us'><Link href='/contact'><Image src='/images/icons/contact.svg' alt='' width={25} height={25} /> Contact Us</Link></li>
                    <li title='Help'><Link href='/help'><Image src='/images/icons/help.svg' alt='' width={25} height={25} /> Help</Link></li>
                    <li title='My Profile'><Link href='/my-profile'><Image src='/images/icons/user.svg' alt='' width={25} height={25} /> My Account</Link></li>
                    <hr />
                    <li title='Logout'><Link href='#'><Image src='/images/icons/logout.svg' alt='' width={25} height={25} /> Logout</Link></li>
                </ul>
        </aside>
    )
}