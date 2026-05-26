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
    <section
      className="relative flex min-h-screen overflow-hidden bg-cover bg-center px-6 pb-14 pt-32 sm:pb-24 sm:pt-40"
      style={{ backgroundImage: `url(${pageThumbnail.url})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.96),rgba(9,9,11,0.86)_46%,rgba(9,9,11,0.34)),linear-gradient(180deg,rgba(9,9,11,0.34),rgba(9,9,11,0.88))]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-px bg-zinc-800" />

      <div className="container relative z-[1] flex items-center">
        <motion.div
          className="flex w-full max-w-4xl flex-col items-start"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="mb-8 rounded-full border border-white/10 px-4 py-2"
          >
            <HiArrowNarrowLeft size={20} />
            Voltar para projetos
          </Link>

          <SectionTitle
            subtitle="projetos"
            title={title}
            className="[&>h3]:text-5xl"
          />

          <motion.article className="relative mt-8 w-full" {...fadeUpAnimation}>
            <div className="flex flex-col gap-8">
              <div className="flex max-w-3xl flex-col gap-5 text-base leading-8 text-zinc-300 drop-shadow-[0_1px_18px_rgba(0,0,0,0.85)]">
                <RichText content={description.raw} />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex w-full flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <TechBadge
                      key={index}
                      name={tech.name}
                      {...techBadgeAnimation}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="min-w-[190px]">
                        <TbBrandGithub size={20} />
                        Repositório
                      </Button>
                    </a>
                  )}
                  {liveProjectUrl && (
                    <a
                      href={liveProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="min-w-[190px] bg-zinc-900/90 text-zinc-100 hover:bg-zinc-800">
                        <FiGlobe size={20} />
                        Projeto Online
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectDetails
