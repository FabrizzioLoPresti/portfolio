import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ToUpButton from '@/components/Layout/ToUpButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabrizzio Lo Presti | Frontend Developer',
  description: 'Hi, I’m Fabrizzio Lo Presti, a frontend developer based in Córdoba, Argentina. I specialize in building websites and web applications with React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`} id='body'>
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
// - Responsive Web Design -> Skills
// - Custom Cursor
// - Smooth Scrolling Fullscreen Sections - Horizontal Scroll - Scrolling Indicator Top (Framer Motion)
// - GSAP Effect - Framer Motion - Three.js - Lenis - Tailwind CSS
// - Particle.js
// - Sanity.io -> Firebase API
// - Parallax Effect
// - Deploy Backend - Deploy Frontend