import Hero_section from './home/page'
import Contact from './contact/page'
import ProjectMain from './projectMain/page'
// import ProjectsW from './projectMain/projectsW/page'
// import ProjectP from './projectMain/projectsP/page'
// import ProjectsM from './projectMain/projectsM/page'
import About from './about/page'
import Skills from './skills/page'

export default function Home() {
  return (
    <main>
      <header/>
      <Hero_section />
      <About/>
      <Skills/>
      <ProjectMain />
      <Contact />
    </main>
  )
}
