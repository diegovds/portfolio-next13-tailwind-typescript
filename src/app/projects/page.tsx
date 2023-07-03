import { ProjectsPageData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import PageIntroduction from '../components/Pages/Projects/PageIntroduction'
import ProjectsList from '../components/Pages/Projects/ProjectsList'

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

const Projects = async () => {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}

export default Projects
