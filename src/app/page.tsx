import Image from 'next/image'
import { HeroSection } from './components/HeroSection'
import Navbar from './components/navbar'
import AchievementsSection from './components/Achievements'
import AboutSection from './components/About'
import ProjectsSection from './components/projectsection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    </>


  )
}
