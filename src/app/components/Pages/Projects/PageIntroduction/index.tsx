'use client'

import Link from '@/app/components/Link'
import SectionTitle from '@/app/components/SectionTitle'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const PageIntroduction = () => {
  return (
    <section className="relative flex min-h-[520px] w-full flex-col items-center justify-center overflow-hidden border-b border-white/10 px-5 pt-24 lg:min-h-[620px]">
      <div className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(113,113,122,0.22),transparent_30rem)]" />

      <div className="relative z-[1] flex flex-col items-center">
        <SectionTitle
          subtitle="projetos"
          title="Meus Projetos"
          className="items-center text-center [&>h3]:text-5xl"
        />
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="my-7 max-w-[680px] text-center text-base leading-8 text-zinc-400">
            Aqui você poderá ver alguns dos projetos que eu desenvolvi. Navegue
            à vontade e explore como foram criados, as tecnologias utilizadas e
            as funcionalidades implementadas.
          </p>
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2"
          >
            <HiArrowNarrowLeft size={20} />
            Voltar para Home
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PageIntroduction
