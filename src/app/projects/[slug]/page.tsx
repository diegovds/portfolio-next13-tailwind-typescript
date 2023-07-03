import ProjectDetails from '@/app/components/Pages/Project/ProjectDetails'
import ProjectSections from '@/app/components/Pages/Project/ProjectSections'
import { ProjectPageData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { project } = await getProjectDetails(slug)

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export default Project
