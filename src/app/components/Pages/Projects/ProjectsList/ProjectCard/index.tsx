import { Project } from '@/types/Projects'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ')

  return (
    <article className="bg-zinc-950/45 group flex h-[430px] flex-col overflow-hidden rounded-lg border border-white/10 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500/60 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-black/25">
      <div className="relative h-52 w-full overflow-hidden border-b border-white/10 bg-neutral-950">
        <Image
          width={420}
          height={240}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="saturate-110 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-150"
        />
        <div className="from-neutral-950/45 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
          projeto
        </span>

        <strong className="mt-3 text-lg font-semibold leading-tight text-zinc-100 transition-colors group-hover:text-white">
          {project.title}
        </strong>

        <p className="mt-3 line-clamp-3 leading-7 text-zinc-500">
          {project.shortDescription}
        </p>

        <div className="mt-auto border-t border-white/10 pt-5">
          <span className="block truncate text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
            {technologies}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
            Ver detalhes
            <HiArrowNarrowRight />
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
