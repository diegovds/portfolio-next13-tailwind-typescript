'use client'

import Link from '@/app/components/Link'
import SectionTitle from '@/app/components/SectionTitle'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const PageIntroduction = () => {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden border-b border-white/10 px-5 pb-16 pt-32 lg:min-h-[580px] lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(148,163,184,0.22),transparent_28rem)]" />

      <div className="container relative z-[1]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionTitle
            subtitle="projetos"
            title="Meus Projetos"
            className="[&>h3]:text-5xl"
          />

          <motion.div
            className="max-w-2xl lg:justify-self-end"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-8 text-zinc-400">
              Aqui você poderá ver alguns dos projetos que eu desenvolvi.
              Navegue à vontade e explore como foram criados, as tecnologias
              utilizadas e as funcionalidades implementadas.
            </p>

            <Link
              href="/"
              className="mt-7 w-max rounded-full border border-white/10 px-4 py-2"
            >
              <HiArrowNarrowLeft size={20} />
              Voltar para Home
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PageIntroduction
