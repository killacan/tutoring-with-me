import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import BottomNav from './components/bottomnav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tutoring with Cameron',
  description: 'Created by Cameron',
}

export default function RootLayout({ children }) {
  return (
    <html id="top" lang="en">
      <body className={inter.className}>
        <div className='grid grid-rows-[70px_1fr_50px] relative min-h-screen bg-sky-100 text-black'>
          <Navbar />
            {children}
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
