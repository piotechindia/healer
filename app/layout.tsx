import type { Metadata } from 'next'
import { Suspense } from 'react';
import './globals.css'

import Header from './components/header';
import Footer from './components/footer'
import Sidebar from './components/sidebar';
import Loading from './loading'

export const metadata: Metadata = {
  title: 'Healer Ai App',
  description: 'Health Fitness App',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='flex'>
        <Sidebar />
        <main className='flex-column gap2 flex-space-between'>
          <Header />
          <Suspense fallback={<Loading/>}>
            <div className='flex-column flex-center p2' style={{overflowY:"scroll"}}>
              {children}
            </div>
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  )
}
