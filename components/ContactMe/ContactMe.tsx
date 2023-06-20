'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import FormContact from './FormContact'

type Props = {}

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const ContactMe = (props: Props) => {
  return (
    <motion.div 
      className='pt-10 h-full w-full flex flex-col justify-evenly items-center'
      variants={variants}
      initial='hidden'
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='w-full flex flex-col space-y-10'>
        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
          I have got just what you need. {''}
          <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s talk.</span>
        </h4>

        <div className='space-y-3 md:space-y-10'>
          <div className='flex items-center gap-3 justify-center'>
            <PhoneIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <Link href='tel:+5493513983317' className='text-xl md:text-2xl'>+54 9 351 398-3317</Link>
          </div>

          <div className='flex items-center gap-3 justify-center'>
            <EnvelopeIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <p className='text-xl md:text-2xl'>fabrizziolopresti1999@gmail.com</p>
          </div>
          
          <div className='flex items-center gap-3 justify-center'>
            <MapPinIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <p className='text-xl md:text-2xl'>Córdoba, Argentina</p>
          </div>
        </div>

        <FormContact />
      </div>
    </motion.div>
  )
}

export default ContactMe