'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import "swiper/css";
import "swiper/css/navigation";

type Props = {}

const Projects = (props: Props) => {
  const isSmallScreen = useIsSmallScreen(768)

  const projects = [
    1, 
    2, 
    3
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      className='pt-10 relative h-full w-full flex flex-col justify-evenly items-center'
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        navigation={isSmallScreen ? false : true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper w-full max-w-7xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src='/img/PORTFOLIO_2.jpg'
                alt='Experience Logo'
                width={600}
                height={600}
                className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-xl">
                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">Case Study {index + 1} of {projects.length}:</span> UPS
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae similique incidunt placeat? Minima molestias quo sint est saepe voluptatem consequuntur, magnam, in deserunt doloribus, reprehenderit nostrum perspiciatis similique necessitatibus possimus.
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects