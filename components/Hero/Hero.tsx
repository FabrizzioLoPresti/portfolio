'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundParticles from './BackgroundParticles'
import BackgroundCircles from './BackgroundCircles'
import Picture from '/public/img/PORTFOLIO_1.jpg'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'Frontend Developer',
      'React Developer',
      'Web Developer',
      '<Code Lover />',
    ],
    loop: true,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <div className='-mt-6 h-screen flex flex-col justify-center items-center text-center overflow-hidden'>
      <BackgroundParticles />
      <BackgroundCircles />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
        className='space-y-8 z-20'
      >
        <Image
          src={Picture}
          alt='Fabrizzio Lo Presti'
          quality={100}
          className='w-32 h-32 rounded-full overflow-hidden mx-auto object-cover'
        />
        <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px] md:tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
      </motion.div>
    </div>
  )
}

export default Hero