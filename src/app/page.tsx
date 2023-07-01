import { HomePageData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import HeroSection from './components/Pages/Home/HeroSection'
import HighlightedProjects from './components/Pages/Home/HighlightedProjects'
import KnownTechs from './components/Pages/Home/KnownTechs'
import WorkExperience from './components/Pages/Home/WorkExperience'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

const Home = async () => {
  const { page: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}

export default Home
