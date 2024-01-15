"use client"
import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/styles.module.css';
import Logo from '@/app/components/logo';

export default function Sidebar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Logo /></li>
                    <li><Link href='/overview'><Image src='/images/icons/dashboard.svg' alt='' width={25} height={25} /> Overview</Link></li>
                    <li><Link href='/workout'><Image src='/images/icons/workout.svg' alt='' width={25} height={25} /> Workout</Link></li>
                    <li><Link href='/diet-plan'><Image src='/images/icons/dietplan.svg' alt='' width={25} height={25} /> Diet Plan</Link></li>
                    <hr />
                    <li><Link href='/goals'><Image src='/images/icons/goal.svg' alt='' width={25} height={25} /> Goals</Link></li>
                    <li><Link href='/progress'><Image src='/images/icons/progress.svg' alt='' width={25} height={25} /> Progress</Link></li>
                    <li><Link href='/contact'><Image src='/images/icons/contact.svg' alt='' width={25} height={25} /> Contact Us</Link></li>
                    <li><Link href='/help'><Image src='/images/icons/help.svg' alt='' width={25} height={25} /> Help</Link></li>
                    <li><Link href='/my-profile'><Image src='/images/icons/user.svg' alt='' width={25} height={25} /> My Account</Link></li>
                    <hr />
                    <li><Link href='#'><Image src='/images/icons/logout.svg' alt='' width={25} height={25} /> Logout</Link></li>
                </ul>
            </nav>
        </>
    )
}