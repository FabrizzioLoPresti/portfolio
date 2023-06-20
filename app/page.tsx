import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Experience from "@/components/Experience/Experience"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import ContactMe from "@/components/ContactMe/ContactMe"

export default function Home() {
  return (
    <>
      <section id='hero' className='h-screen'>
        <Hero />
      </section>

      <section id="about" className="h-screen">
        <About />
      </section>

      <section id="experience" className="h-screen">
        <Experience />
      </section>

      <section id="skills" className="h-screen">
        <Skills />
      </section>

      <section id="projects" className="h-screen">
        <Projects />
      </section>

      <section id="contact" className="h-screen">
        <ContactMe />
      </section>
    </>
  )
}
