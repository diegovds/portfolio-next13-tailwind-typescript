import { Project } from '@/types/Projects'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

type ProjectsListProps = {
  projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, index) => (
        <Link key={index} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  )
}

export default ProjectsList
