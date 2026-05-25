'use client'

import { fadeUpAnimation } from '@/libs/animations'
import { ProjectSection } from '@/types/Projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col gap-12 md:gap-20">
        {sections.map((section, index) => (
          <motion.article
            key={index}
            className="grid gap-5 md:gap-7"
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-zinc-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-semibold text-zinc-200 md:text-3xl">
                  {section.title}
                </h2>
              </div>
            </div>

            <div className="bg-zinc-950/45 overflow-hidden rounded-2xl border border-white/10 p-2 shadow-2xl shadow-black/25">
              <Image
                src={section.image.url}
                width={1080}
                height={672}
                className="saturate-110 aspect-auto w-full rounded-xl object-cover"
                alt={`Imagem da seção ${section.title}`}
                unoptimized
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ProjectSections
