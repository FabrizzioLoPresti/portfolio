import Image from "next/image"
import { motion } from "framer-motion"
import { Skill } from "@/interfaces/Skill"
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen"

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
  const isSmallScreen = useIsSmallScreen(768)

  return (
    <div className="group flex cursor-pointer">
      <motion.div
        initial={{
          x: isSmallScreen ? 0 : directionLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out flex justify-center items-center overflow-hidden"
      >
        <Image
          src={skill.urlImage}
          alt='Experience Logo'
          width={600}
          height={600}
          unoptimized={true}
          className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.percentage}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill