'use client'

import { Link } from 'react-scroll'
import { motion, Transition } from 'framer-motion'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

type Props = {}

const iconVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 360, 360, 0],
  },
};

const transition: Transition = {
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.3, 0.5, 0.8, 1],
  repeat: Infinity,
  repeatDelay: 10
};

const ToUpButton = (props: Props) => {
  return (
      <div className='sticky bottom-5 right-10 flex items-center justify-end px-5 md:px-10'>
        <motion.div
          variants={iconVariants}
          animate="animate"
          transition={transition}
        >
          <Link to={'body'} smooth={true} duration={1000}>
            <ArrowUpCircleIcon className='h-10 w-10 text-gray-500 cursor-pointer' />
          </Link>
        </motion.div>
      </div>
  )
}

export default ToUpButton