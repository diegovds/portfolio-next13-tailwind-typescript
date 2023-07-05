import { ProjectsPageData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import PageIntroduction from '../components/Pages/Projects/PageIntroduction'
import ProjectsList from '../components/Pages/Projects/ProjectsList'

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects(first: 100) {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies(first: 100) {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(query)
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

export const revalidate = 60 * 60 * 24 // revalidate this page every 1 day
