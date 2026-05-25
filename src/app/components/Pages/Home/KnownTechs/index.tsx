'use client'

import SectionTitle from '@/app/components/SectionTitle'
import { KnownTech as IKnownTech } from '@/types/Projects'
import { motion } from 'framer-motion'
import KnownTech from './KnownTech'

type KnownTechsProps = {
  techs: IKnownTech[]
}

const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-20 md:py-28">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="mt-12 grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default KnownTechs
