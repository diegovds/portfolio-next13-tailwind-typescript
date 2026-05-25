import { Project } from '@/types/Projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ')

  return (
    <div className="bg-zinc-900/45 group flex h-[460px] flex-col overflow-hidden rounded-lg border border-white/10 shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:border-zinc-500/60 hover:bg-zinc-900/80">
      <div className="h-52 w-full overflow-hidden border-b border-white/10 bg-neutral-950">
        <Image
          width={380}
          height={220}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <strong className="text-lg font-semibold leading-tight text-zinc-100 transition-all group-hover:text-white">
          {project.title}
        </strong>
        <p className="mt-3 line-clamp-4 leading-7 text-zinc-500">
          {project.shortDescription}
        </p>
        <span className="mt-auto block truncate border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          {technologies}
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
