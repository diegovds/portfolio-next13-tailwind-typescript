import HorizonalDivider from '@/app/components/Divider/HorizonalDivider'
import Link from '@/app/components/Link'
import SectionTitle from '@/app/components/SectionTitle'
import { Project } from '@/types/Projects'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProjectCard from './ProjectCard'

type HighlightedProjectsProps = {
  projects: Project[]
}

const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizonalDivider className="mb-16" />

      <div>
        {projects?.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
            <HorizonalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}

export default HighlightedProjects
