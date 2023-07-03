import Button from '@/app/components/Button'
import Link from '@/app/components/Link'
import RichText from '@/app/components/RichText'
import SectionTitle from '@/app/components/SectionTitle'
import TechBadge from '@/app/components/TechBadge'
import { Project } from '@/types/Projects'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

type ProjectDetailsProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const {
    description,
    pageThumbnail,
    technologies,
    title,
    githubUrl,
    liveProjectUrl,
  } = project

  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${pageThumbnail.url}) no-repeat center/cover`,
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title={title}
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <div className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        <RichText content={description.raw} />
      </div>
      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {technologies.map((tech, index) => (
          <TechBadge key={index} name={tech.name} />
        ))}
      </div>
      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
        {liveProjectUrl && (
          <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

export default ProjectDetails
