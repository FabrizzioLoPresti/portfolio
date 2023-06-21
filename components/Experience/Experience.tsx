'use client'

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ExperienceCard from "./ExperienceCard"
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { Experience } from "@/interfaces/Experience";
import "swiper/css";
import "swiper/css/pagination";

type Props = {}

const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    description: 'Desarrollo de sitios web y aplicaciones web con React, Next.js, Axios, Redux-Toolkit, Tailwind CSS, Framer Motion, Three.js, GSAP, Firebase, Sanity.io, entre otras tecnologías.',
    date: '2021 - Present',
    urlLogo: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1284735/retina_500x200_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png'
  },
  {
    title: 'Estudiante de Tecnicatura Universitaria en Programación',
    company: 'UTN FRC',
    description: 'Profesional recibido en el año 2023 con título de Técnico Universitario en Programación.',
    date: '2021 - 2023',
    urlLogo: 'https://wmc-euw.b-cdn.net/profile/tecnicaturaenprogramacion.utn/profile_pic.webp'
  },
  {
    title: 'Estudiante de Ingeniería en Sistemas de Información',
    company: 'UTN FRC',
    description: 'Estudiante hasta el año 2020 de la carrera de Ingeniería en Sistemas de Información.',
    date: '2018 - 2020',
    urlLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg'
  },
  {
    title: 'Pasantía en Desarrollo Web',
    company: 'Instituto Universitario Aeronáutico',
    description: 'Pasante en el área de Desarrollo Web, realizando tareas de mantenimiento y desarrollo de proyectos web para la institución en el marco de una campaña de concientización en el campo de la seguridad informática.',
    date: '2017 - 2017',
    urlLogo: 'https://www.universidades.com.ar/logos/original/logo-instituto-universitario-aeronautico.webp'
  },
]

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
        {experiences.map((experience, index) => (
          <SwiperSlide key={index}>
            <ExperienceCard experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default Experience