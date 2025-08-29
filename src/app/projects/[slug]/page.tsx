import ProjectDetails from '@/app/components/Pages/Project/ProjectDetails'
import ProjectSections from '@/app/components/Pages/Project/ProjectSections'
import { ProjectPageData, ProjectsPageStaticData } from '@/types/PageInfo'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: Promise<{ slug: string }>
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

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = await params
  const data = await getProjectDetails(slug)

  if (!data?.project) notFound()

  const { project } = data

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects.map(({ slug }) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const slug = (await params).slug
  const data = await getProjectDetails(slug)

  if (!data?.project) {
    return {
      title: 'Project not found',
      description: '',
    }
  }

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
