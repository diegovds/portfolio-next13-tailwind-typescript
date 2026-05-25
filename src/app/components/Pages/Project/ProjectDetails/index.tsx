'use client'

import Button from '@/app/components/Button'
import Link from '@/app/components/Link'
import RichText from '@/app/components/RichText'
import SectionTitle from '@/app/components/SectionTitle'
import TechBadge from '@/app/components/TechBadge'
import { fadeUpAnimation, techBadgeAnimation } from '@/libs/animations'
import { Project } from '@/types/Projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
    <section className="relative overflow-hidden border-b border-white/10 px-6 pb-14 pt-32 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(148,163,184,0.2),transparent_28rem)]" />

      <div className="container relative z-[1] grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          className="flex flex-col items-start"
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

          <motion.div
            className="my-6 flex max-w-2xl flex-col gap-5 text-base leading-8 text-zinc-400"
            {...fadeUpAnimation}
          >
            <RichText content={description.raw} />
          </motion.div>

          <div className="flex w-full max-w-[560px] flex-wrap gap-2">
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
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
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
              <a
                href={liveProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="min-w-[190px] bg-zinc-900 text-zinc-100 hover:bg-zinc-800">
                  <FiGlobe size={20} />
                  Projeto Online
                </Button>
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="absolute -inset-4 rounded-2xl bg-slate-300/10 blur-3xl" />
          <div className="bg-zinc-950/45 shadow-black/35 relative overflow-hidden rounded-2xl border border-white/10 p-2 shadow-2xl">
            <Image
              src={pageThumbnail.url}
              width={880}
              height={620}
              alt={`Imagem principal do projeto ${title}`}
              className="saturate-110 aspect-[4/3] w-full rounded-xl object-cover"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectDetails
