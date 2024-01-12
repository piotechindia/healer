import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/header';
import Footer from './components/footer'
import Sidebar from './components/sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healer Ai App',
  description: 'Health Fitness App',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <aside id='sidebar'><Sidebar /></aside>
        <main id='main'>
          <header><Header /></header>
          <div className="pageContent">
            {children}
          <footer><Footer /></footer>
          </div>
        </main>
      </body>
    </html>
  )
}
