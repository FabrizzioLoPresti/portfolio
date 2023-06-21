"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as ISkill } from "@/interfaces/Skill";

type Props = {};

const techs: ISkill[] = [
  { tech: 'HMTL', percentage: 95, urlImage: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png' },
  { tech: 'CSS', percentage: 100, urlImage: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png' },
  { tech: 'JavaScript', percentage: 95, urlImage: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png' },
  { tech: 'TypeScript', percentage: 90, urlImage: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png' },
  { tech: 'React', percentage: 100, urlImage: 'https://icons.veryicon.com/png/o/application/skills-section/react.png' },
  { tech: 'Next.js', percentage: 85, urlImage: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-eugu5rfi.png' },
  { tech: 'Tailwind CSS', percentage: 100, urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' },
  { tech: 'Framer Motion', percentage: 85, urlImage: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png' },
  { tech: 'GSAP - Lenis.js', percentage: 65, urlImage: 'https://cpwebassets.codepen.io/assets/packs/greensock-logo-9db91ff4c4a50faa1690d4f3d7ffca6e.png' },
  { tech: 'Three.js', percentage: 80, urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png' },
  { tech: 'Nest.js', percentage: 100, urlImage: 'https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png' },
  { tech: 'PostgreSQL', percentage: 75, urlImage: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png' },
  { tech: 'MongoDB', percentage: 80, urlImage: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png' },
  { tech: 'Prisma', percentage: 100, urlImage: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png' },
  { tech: 'Firebase', percentage: 80, urlImage: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' },
  { tech: 'Git', percentage: 100, urlImage: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },

]

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="pt-10 h-full w-full flex flex-col justify-evenly items-center"
    >
      <div className="text-center space-y-4">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>

        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
        {techs.map((tech, index) => (
          <Skill
            key={index}
            directionLeft={index % 2 === 0}
            skill={tech}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
