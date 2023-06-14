import HeroSection from './components/Pages/Home/HeroSection'
import HighlightedProjects from './components/Pages/Home/HighlightedProjects'
import KnownTechs from './components/Pages/Home/KnownTechs'
import WorkExperience from './components/Pages/Home/WorkExperience'

const Home = () => {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}

export default Home
