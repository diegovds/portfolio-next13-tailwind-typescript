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
      className="grid gap-7 lg:grid-cols-[420px_1fr] lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="group h-[220px] w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:h-[320px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </motion.div>

      <div className="flex flex-1 flex-col justify-center lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 text-xl font-semibold text-zinc-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <span className="h-2 w-2 rounded-full bg-zinc-500" />
          {project.title}
        </motion.h3>

        <motion.p
          className="my-6 max-w-2xl leading-7 text-zinc-400"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[430px]">
          {project.technologies.map((tech, index) => (
            <TechBadge
              name={tech.name}
              key={index}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="w-max">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
