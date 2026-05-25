'use client'

import Button from '@/app/components/Button'
import Link from '@/app/components/Link'
import RichText from '@/app/components/RichText'
import SectionTitle from '@/app/components/SectionTitle'
import TechBadge from '@/app/components/TechBadge'
import { fadeUpAnimation, techBadgeAnimation } from '@/libs/animations'
import { Project } from '@/types/Projects'
import { motion } from 'framer-motion'
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
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden border-b border-white/10 px-6 pb-14 pt-32 sm:min-h-[760px] sm:pb-24 sm:pt-40">
      <motion.div
        className="absolute inset-0 z-[-2]"
        style={{
          background: `url(${pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 z-[-1] bg-neutral-950/80 backdrop-blur-[2px]" />
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,rgba(113,113,122,0.18),transparent_30rem)]" />

      <SectionTitle
        subtitle="projetos"
        title={title}
        className="items-center text-center sm:[&>h3]:text-5xl"
      />
      <motion.div
        className="my-6 flex max-w-[720px] flex-col gap-5 text-center text-base leading-8 text-zinc-400"
        {...fadeUpAnimation}
      >
        <RichText content={description.raw} />
      </motion.div>
      <div className="flex w-full max-w-[520px] flex-wrap items-center justify-center gap-2">
        {technologies.map((tech, index) => (
          <TechBadge
            key={index}
            name={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="my-8 flex flex-col items-center gap-3 sm:my-12 sm:flex-row sm:gap-4"
        {...fadeUpAnimation}
      >
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="min-w-[190px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
        {liveProjectUrl && (
          <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer">
            <Button className="min-w-[190px] bg-zinc-900 text-zinc-100 hover:bg-zinc-800">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </motion.div>
      <Link
        href="/projects"
        className="rounded-full border border-white/10 px-4 py-2"
      >
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

export default ProjectDetails
