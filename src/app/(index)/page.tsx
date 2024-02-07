import { HomePageData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { Metadata } from 'next'
import HeroSection from '../components/Pages/Home/HeroSection'
import HighlightedProjects from '../components/Pages/Home/HighlightedProjects'
import KnownTechs from '../components/Pages/Home/KnownTechs'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
          text
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
        knownTechs(first: 100) {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies(first: 100) {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
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
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      {/** <WorkExperience experiences={workExperiences} /> */}
    </>
  )
}

export default Home

export async function generateMetadata(): Promise<Metadata> {
  const { page: pageData } = await getPageData()

  return {
    title: 'Home',
    description: `Olá, meu nome é Diego Viana ${pageData.introduction.text
      .replace(/\\n/g, '')
      .replace('S', 's')}`,
  }
}
