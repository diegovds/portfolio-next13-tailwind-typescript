import ProjectDetails from '@/app/components/Pages/Project/ProjectDetails'
import ProjectSections from '@/app/components/Pages/Project/ProjectSections'
import { ProjectPageData, ProjectsPageStaticData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { Metadata } from 'next'

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
      sections(first: 100) {
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
      technologies(first: 100) {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `

  return fetchHygraphQuery(query)
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

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  const description = project.description.text
    .replace(/\\n/g, '')
    .replaceAll(String.fromCharCode(8288), '')

  return {
    title: project.title,
    description,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export const revalidate = 60 * 60 * 24 // revalidate this page every 1 day
