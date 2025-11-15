import Hero from '../components/Hero'
import Services from '../components/Services'
import ProjectsPreview from '../components/ProjectsPreview'
import AboutPreview from '../components/AboutPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white">
      <Hero />
      <Services />
      <ProjectsPreview />
      <AboutPreview />
      <Contact />
    </main>
  )
}
