'use client'

import Link from '@/app/components/Link'
import SectionTitle from '@/app/components/SectionTitle'
import { Project } from '@/types/Projects'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

type PageIntroductionProps = {
  projects: Project[]
}

const PageIntroduction = ({ projects }: PageIntroductionProps) => {
  const orderedProjects = [...projects].sort((a, b) => a.order - b.order)
  const featuredProjects = orderedProjects.slice(0, 3)

  return (
    <section className="relative flex min-h-[620px] w-full items-center overflow-hidden border-b border-zinc-100/10 bg-[linear-gradient(135deg,#070709_0%,#0c1017_52%,#111113_100%)] pb-16 pt-32 lg:min-h-[680px] lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(161,161,170,0.16),transparent_28rem),radial-gradient(circle_at_18%_70%,rgba(125,211,252,0.07),transparent_24rem)]" />

      <div className="container relative z-[1]">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="mb-8 rounded-full border border-zinc-100/10 bg-zinc-100/[0.03] px-4 py-2 backdrop-blur transition-colors hover:border-zinc-100/20 hover:bg-zinc-100/[0.06]"
            >
              <HiArrowNarrowLeft size={20} />
              Voltar para Home
            </Link>

            <SectionTitle
              subtitle="projetos"
              title="Meus projetos"
              className="[&>h3]:max-w-2xl [&>h3]:text-5xl lg:[&>h3]:text-6xl"
            />

            <motion.div
              className="mt-7 max-w-2xl"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                Uma seleção de interfaces, APIs e aplicações completas que
                mostram decisões de arquitetura, experiência de uso e cuidado
                com entrega.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden min-h-[430px] lg:block"
            initial={{ opacity: 0, y: 56, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute left-10 top-8 h-72 w-[78%] rounded-2xl border border-zinc-100/10 bg-zinc-100/[0.035] shadow-2xl shadow-black/30 backdrop-blur-sm" />

            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="absolute overflow-hidden rounded-2xl border border-zinc-100/10 bg-zinc-950 shadow-2xl shadow-black/40"
                style={{
                  backgroundImage: `url(${project.thumbnail.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  height: index === 0 ? 270 : 190,
                  left: index === 0 ? '8%' : index === 1 ? '48%' : '0%',
                  top: index === 0 ? 64 : index === 1 ? 0 : 260,
                  width: index === 0 ? '62%' : '42%',
                  zIndex: 3 - index,
                }}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/86 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="line-clamp-1 text-sm font-medium text-zinc-100">
                    {project.title}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-7 right-0 rounded-xl border border-zinc-100/10 bg-zinc-950/72 px-5 py-4 shadow-xl shadow-black/30 backdrop-blur-md">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200/45">
                acervo
              </p>
              <p className="mt-1 text-2xl font-semibold text-zinc-100">
                {orderedProjects.length.toString().padStart(2, '0')} projetos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PageIntroduction
