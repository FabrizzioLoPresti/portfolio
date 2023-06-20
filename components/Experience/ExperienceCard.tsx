'use client'

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src='/img/PORTFOLIO_2.jpg'
          alt='Experience Logo'
          width={600}
          height={600}
          className="overflow-hidden w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <Image
            src='/img/PORTFOLIO_2.jpg'
            alt='Technologie Logo'
            width={600}
            height={600}
            className="overflow-hidden w-10 h-10 rounded-full object-cover object-center"
          />
          <Image
            src='/img/PORTFOLIO_2.jpg'
            alt='Technologie Logo'
            width={600}
            height={600}
            className="overflow-hidden w-10 h-10 rounded-full object-cover object-center"
          />
          <Image
            src='/img/PORTFOLIO_2.jpg'
            alt='Technologie Logo'
            width={600}
            height={600}
            className="overflow-hidden w-10 h-10 rounded-full object-cover object-center"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Endend work...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard