'use client'

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ExperienceCard from "./ExperienceCard"
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import "swiper/css";
import "swiper/css/pagination";

type Props = {}

const Experience = (props: Props) => {
  const isSmallScreen = useIsSmallScreen(768)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="pt-10 px-10 h-full w-full flex flex-col justify-evenly items-center"
    >
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

      <Swiper
        slidesPerView={isSmallScreen ? 1 : 3}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination]}
        loop={true}
        className="mySwiper w-full mx-auto"
      >
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  )
}

export default Experience