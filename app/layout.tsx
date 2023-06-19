import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ToUpButton from '@/components/Layout/ToUpButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} id='body'>
        <Header />
        {children}
        <ToUpButton />
        <Footer />
      </body>
    </html>
  )
}

// TODO
// - Add a favicon
// - Experience section Responsive
// - Button Navbar Menu
// - Responsive Web Design
// - Particle.js
// - GSAP Effect - Framer Motion - Three.js - Lenis - Tailwind CSS
// - Download Resume
// - Sanity.io
// - Deploy Backend - Deploy Frontend