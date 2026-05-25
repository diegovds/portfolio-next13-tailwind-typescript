'use client'

import Link from '@/app/components/Link'
import TechBadge from '@/app/components/TechBadge'
import { fadeUpAnimation, techBadgeAnimation } from '@/libs/animations'
import { Project } from '@/types/Projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="group grid gap-7 lg:grid-cols-[360px_1fr] lg:gap-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative h-[210px] w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-xl shadow-black/20 sm:h-[260px] lg:h-[250px]"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={620}
          height={460}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="saturate-110 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
      </motion.div>

      <div className="flex flex-1 flex-col justify-center lg:py-3">
        <div>
          <motion.div
            className="mb-3 flex items-center gap-3"
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              projeto
            </span>
          </motion.div>

          <motion.h3
            className="text-xl font-semibold leading-tight text-zinc-50 sm:text-2xl"
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="mt-4 line-clamp-3 max-w-2xl leading-7 text-zinc-400"
            {...fadeUpAnimation}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            {project.shortDescription}
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[430px]">
            {project.technologies.map((tech, index) => (
              <TechBadge
                name={tech.name}
                key={index}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
              />
            ))}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 w-max rounded-full border border-white/10 px-4 py-2 hover:border-zinc-400/60"
        >
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
