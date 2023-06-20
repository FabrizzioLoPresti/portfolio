"use client";

import { motion } from "framer-motion";
import Picture from "/public/img/PORTFOLIO_2.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="pt-10 h-full w-full flex flex-col justify-evenly items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0 max-w-7xl">
        <motion.img
          src={Picture.src}
          alt="Fabrizzio Lo Presti"
          className='object-cover object-center md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <div className="space-y-5 md:space-y-10 px-5 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-sm">
            I&apos;m a Frontend developer from Córdoba, Argentina 🤓🤓🤓,
            passionate about UI effects, animations and intuitive and dynamic
            user experiences. My goal is to combine technical skills and
            creativity to build attractive and functional web interfaces. I am
            constantly learning and keeping myself updated with the latest
            trends in design and development. My focus is on understanding user
            needs and creating effective solutions. I enjoy challenges and
            collaborate with other creative professionals, I look forward to
            working with you and creating awesome web interfaces! 🚀🚀🚀
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
