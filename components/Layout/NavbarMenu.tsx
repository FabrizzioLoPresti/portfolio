import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const quote = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const NavbarMenu = ({ isOpen, setIsOpen }: Props) => {
  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (isOpen) {
      body.style.overflow = "hidden"; // Deshabilitar el scroll
    } else {
      body.style.overflow = ""; // Habilitar el scroll nuevamente
    }

    return () => {
      body.style.overflow = ""; // Asegurarse de habilitar el scroll al desmontar el componente
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="fixed h-screen w-screen z-50 bg-[#242424] "
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={quote}
        >
          <div className="flex flex-col h-full">
            <ScrollLink
              to="body"
              smooth={true}
              duration={500}
              className="text-4xl font-semibold text-white px-5 py-10 transition-all ease-in-out duration-300 hover:bg-[#F7AB0A] hover:text-black cursor-pointer"
              onClick={handleLinkClick}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-4xl font-semibold text-white px-5 py-10 transition-all ease-in-out duration-300 hover:bg-[#F7AB0A] hover:text-black cursor-pointer"
              onClick={handleLinkClick}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="text-4xl font-semibold text-white px-5 py-10 transition-all ease-in-out duration-300 hover:bg-[#F7AB0A] hover:text-black cursor-pointer"
              onClick={handleLinkClick}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="text-4xl font-semibold text-white px-5 py-10 transition-all ease-in-out duration-300 hover:bg-[#F7AB0A] hover:text-black cursor-pointer"
              onClick={handleLinkClick}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-4xl font-semibold text-white px-5 py-10 transition-all ease-in-out duration-300 hover:bg-[#F7AB0A] hover:text-black cursor-pointer"
              onClick={handleLinkClick}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-4xl font-semibold text-white px-5 py-10 transition-all ease-in-out duration-300 hover:bg-[#F7AB0A] hover:text-black cursor-pointer"
              onClick={handleLinkClick}
            >
              Contact Me
            </ScrollLink>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavbarMenu;
