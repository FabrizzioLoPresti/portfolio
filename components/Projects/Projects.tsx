"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { Project } from "@/interfaces/Project";
import "swiper/css";
import "swiper/css/navigation";

type Props = {};

const Projects = (props: Props) => {
  const isSmallScreen = useIsSmallScreen(768);

  // TODO: Obtener de Sanity.io
  const projects: Project[] = [
    {
      nombre: "404 Ecommerce",
      descripcion:
        "Proyecto responsive desarrolado en Next.js 13 con TypeScript, junto a TailwindCSS, NextUI, Redux-Toolkit, Zod, Axios, GSAP, Swiper, React-Toastify, Heroicons que consiste en una tienda de suplementos deportivos y artículos de gimnasio. Cuenta con un carrito de compras, un buscador de productos, un sistema de autenticación y un panel de administración para gestionar cuenta del usuario e historial de compras.",
      url: "https://404ecommerce.netlify.app",
      urlGithub: "https://github.com/404-Suplementos-Deportivos/frontend_ecommerce",
      urlImagen: "/img/projects/404Ecommerce.png",
    },
    {
      nombre: "404 Ecommerce Administración",
      descripcion:
        "Proyecto desarrolado en Next.js 13 con TypeScript, junto a AntDesign, Redux-Toolkit, Zod, Axios, React-PDF, Chart.js, react-chartjs-2, que consiste en un panel de administración para una tienda de suplementos deportivos y artículos de gimnasio. Cuenta con un CRUD completo para productos, categorías, usuarios, pedidos (compras y ventas), control de stock, un sistema de autenticación y un sistema de reportes de ventas.",
      url: "https://404administration.netlify.app",
      urlGithub: "https://github.com/404-Suplementos-Deportivos/frontend_administracion",
      urlImagen: "/img/projects/404EcommerceAdmin.png",
    },
    {
      nombre: "Rick and Morty App",
      descripcion:
        "Proyecto desarrolado en Next.js 13 con TypeScript, haciendo uso de Axios para consulta de API de Rick and Morty, Redux-Toolkit para el manejo de estados globales, TailwindCSS para estilos y Framer Motion para animaciones.",
      // url: "https://rickandmorty-nextjs.netlify.app",
      url: "https://rick-and-morty-ivory-chi.vercel.app/",
      urlGithub: "https://github.com/FabrizzioLoPresti/rick-and-morty",
      urlImagen: "/img/projects/RickAndMortyApp.png",
    },
    {
      nombre: "Buscador de Bebidas",
      descripcion:
        "Proyecto desarrollado en React.js 18 utilizando Vite, junto a React-Bootstrap y Axios para realizar consulta a API externa. Consiste en un buscador de bebidas por nombre y categoría de bebida.",
      url: "https://buscador-bebidas-cursoreact.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/buscadorbebidas",
      urlImagen: "/img/projects/BuscadorBebidas.png",
    },
    {
      nombre: "Cotizador de Seguros",
      descripcion:
        "Proyecto desarrollado en React.js 18 utilizando Vite, junto a TailwindCSS y Spinkit. Consiste en un cotizador de seguros de autos, donde se calcula el precio del seguro en base a la marca, año y tipo de plan del auto.",
      url: "https://cotizador-seguros-cursoreact.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/cotizadorseguros",
      urlImagen: "/img/projects/CotizadorSeguros.png",
    },
    {
      nombre: "Cotizador de Criptomonedas",
      descripcion:
        "Proyecto desarrollado en React.js 18 utilizando Vite y los propios Custom Hooks de React.js, junto a Styled-Components y Axios para consulta a API externa. Consiste en un cotizador de criptomonedas, donde se calcula el precio de la criptomoneda en base a la moneda seleccionada.",
      url: "https://cotizador-crypto-cursoreact.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/cotizadorcrypto",
      urlImagen: "/img/projects/CotizadorCriptomonedas.png",
    },
    {
      nombre: "Planificador de Gastos",
      descripcion:
        "Proyecto desarrollado en React.js 18 utilizando Vite, junto a CSS Modules, react-circular-progressbar para gráfico circular interactivo y react-swipeable-list para selección de opciones basado en Drag and Drop. Consiste en un planificador de gastos, donde se calcula el porcentaje de gastos en base a los ingresos y gastos ingresados.",
      url: "https://planificador-gastos-cursoreact.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/planificadorgastos",
      urlImagen: "/img/projects/PlanificadorGastos.png",
    },
    {
      nombre: "Administrador de Pacientes",
      descripcion:
        "Proyecto desarrollado en React.js 18 utilizando Vite, junto a TailwindCSS y React Router DOM para múltiples páginas, almacenando la información en Local Storage. Consiste en un administrador de pacientes, donde se pueden crear, eliminar y editar pacientes.",
      url: "https://administrador-pacientes-cursoreact.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/administradorpacientes",
      urlImagen: "/img/projects/AdministradorPacientes.png",
    },
    {
      nombre: "Tienda de Muebles",
      descripcion:
        "Proyecto desarrollado en HTML, CSS y JavaScript. Consiste en una tienda de muebles con un diseño responsive y moderno utilizando Flexbox y Grid Layout.",
      url: "https://ecommerce-cursocssgridflexbox.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/Curso-CSSGridFlexbox/tree/main/06-Ecommerce-RWD",
      urlImagen: "/img/projects/TiendaMuebles.png",
    },
    {
      nombre: "TechPRO",
      descripcion:
        "Proyecto desarrollado en HTML, CSS y JavaScript. Consiste en una landing page orientada a un producto tecnológico con un diseño responsive y moderno utilizando Flexbox y Grid Layout.",
      url: "https://techpro-cursocssgridflexbox.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/Curso-CSSGridFlexbox/tree/main/07-TechPRO",
      urlImagen: "/img/projects/TechPRO.png",
    },
    {
      nombre: "Arquitectura Bosque",
      descripcion:
        "Proyecto desarrollado en HTML, CSS y JavaScript. Consiste en una landing page orientada a un producto arquitectónico con un diseño responsive y moderno utilizando Flexbox y Grid Layout.",
      url: "https://arquitecturabosque-cursocssgridflexbox.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/Curso-CSSGridFlexbox/tree/main/08-ArquitecturaBosque",
      urlImagen: "/img/projects/ArquitecturaBosque.png",
    },
    {
      nombre: "Nucleus App",
      descripcion:
        "Proyecto desarrollado en HTML, CSS y JavaScript. Consiste en una landing page orientada a una aplicación móvil con un diseño responsive y moderno utilizando Flexbox y Grid Layout.",
      url: "https://nucleus-cursocssgridflexbox.netlify.app",
      urlGithub: "https://github.com/FabrizzioLoPresti/Curso-CSSGridFlexbox/tree/main/10-Nucleus",
      urlImagen: "/img/projects/NucleusApp.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pt-10 relative h-full w-full flex flex-col justify-evenly items-center"
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
              <Link href={project.url} passHref target="_blank">
                <Image
                  src={project.urlImagen}
                  alt={project.nombre}
                  width={600}
                  height={600}
                  className="w-60 h-36 xl:w-[500px] xl:h-[300px] object-fill object-center"
                />
              </Link>
              <div className="space-y-5 px-0 md:px-10 max-w-xl">
                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {project.nombre}
                  </span>{" "}
                </h4>
                <p className="text-lg text-center md:text-left px-2 md:px-0">
                  {project.descripcion}
                </p>
                <p className="font-light text-gray-300 text-center md:text-left">
                  <Link href={project.urlGithub} passHref target="_blank">
                    Repositorio de Github
                  </Link>
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
