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
    <section className="container my-16 flex flex-col gap-12 md:my-28 md:gap-24">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-6 md:gap-8"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-zinc-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="text-2xl font-semibold text-zinc-200 md:text-3xl">
              {section.title}
            </h2>
          </div>
          <div className="bg-zinc-900/45 overflow-hidden rounded-lg border border-white/10 p-2 shadow-2xl shadow-black/30">
            <Image
              src={section.image.url}
              width={1080}
              height={672}
              className="aspect-auto w-full rounded-md object-cover"
              alt={`Imagem da sessão ${section.title}`}
              unoptimized
            />
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default ProjectSections
