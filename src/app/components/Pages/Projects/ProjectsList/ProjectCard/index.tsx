import { Project } from '@/types/Projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ')

  return (
    <div className="group flex h-[460px] flex-col overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(39,39,42,0.82),rgba(9,9,11,0.92))] shadow-xl shadow-black/25 transition-all hover:-translate-y-1 hover:border-zinc-400/50 hover:shadow-2xl hover:shadow-black/40">
      <div className="h-52 w-full overflow-hidden border-b border-white/10 bg-neutral-950">
        <Image
          width={380}
          height={220}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="saturate-110 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-150"
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
