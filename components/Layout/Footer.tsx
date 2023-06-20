import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='p-5 mx-auto max-w-7xl'>
      <p className='text-center text-gray-400 text-sm'>
        © {new Date().getFullYear()} Fabrizzio Lo Presti. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer