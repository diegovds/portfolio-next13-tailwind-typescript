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
    <section className="container py-20 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionTitle subtitle="destaques" title="Projetos em destaque" />
        <Link
          href="/projects"
          className="w-max rounded-full border border-white/10 px-4 py-2"
        >
          Ver todos
          <HiArrowNarrowRight />
        </Link>
      </div>
      <HorizonalDivider className="mb-12" />

      <div>
        {projects?.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
            <HorizonalDivider className="my-12 md:my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-zinc-500">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Explore a lista completa
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}

export default HighlightedProjects
