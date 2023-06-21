"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavbarMenu from "./NavbarMenu";

type Props = {};

const menuVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 overflow-x-hidden bg-[#242424] py-5 px-2 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -500, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center"
          >
            <SocialIcon
              url="https://github.com/FabrizzioLoPresti"
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/fabrizzio-lo-presti-a7222b1b4/"
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center justify-center text-gray-300 cursor-pointer gap-3 overflow-y-hidden"
          >
            <div className="border border-[#F7AB0A] px-3 py-2 animate-pulse hover:borderGlowEffect">
              <a className="uppercase inline-flex text-sm text-gray-400 select-none" href={'/CV_LoPrestiFabrizzio.pdf'} download>
                My Resume
              </a>
            </div>
            <div className="h-8 w-8 cursor-pointer">
              <AnimatePresence>
                {!isOpen ? (
                  <motion.div
                    key="barsIcon"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Bars3Icon onClick={handleClick} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="xMarkIcon"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <XMarkIcon onClick={handleClick} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </header>
      <NavbarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
