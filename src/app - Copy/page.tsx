import Hero_section from './components/hero_section'
import Contact from './components/contact'
import ProjectMain from './components/projectMain'
import ProjectsW from './components/projectsW'
import ProjectP from './components/projectP'
import ProjectsM from './components/projectsM'
import About from './components/about'
import Skills from './components/skills'

export default function Home() {
  return (
    <main>
      <Hero_section />
      <About/>
      <Skills/>
      <ProjectMain />
      <ProjectsW/>
      <ProjectP/>
      <ProjectsM/>  
      <Contact />


    </main>
  )
}
