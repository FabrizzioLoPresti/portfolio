'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Experience from "./Experience"

type Props = {
  experience: Experience
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className="h-full flex flex-col rounded-lg items-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={experience.urlLogo}
          alt='Experience Logo'
          width={600}
          height={600}
          className="overflow-hidden w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
          unoptimized={true}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.title}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        
        <p className="uppercase py-5 text-gray-300">{experience.date}</p>
        <p className="text-lg text-left px-2 md:px-0">{experience.description}</p>
      </div>
    </article>
  )
}

export default ExperienceCard