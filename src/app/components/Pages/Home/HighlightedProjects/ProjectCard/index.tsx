import Link from '@/app/components/Link'
import TechBadge from '@/app/components/TechBadge'
import { Project } from '@/types/Projects'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-[200px] w-full sm:h-[300px] lg:min-h-full lg:w-[420px]">
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          {project.title}
        </h3>

        <p className="my-6 text-gray-400">{project.shortDescription}</p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {project.technologies.map((tech, index) => (
            <TechBadge name={tech.name} key={index} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
