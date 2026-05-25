'use client'

import Button from '@/app/components/Button'
import CMSIcon from '@/app/components/CMSIcon'
import RichText from '@/app/components/RichText'
import TechBadge from '@/app/components/TechBadge'
import { techBadgeAnimation } from '@/libs/animations'
import { HomePageInfo } from '@/types/PageInfo'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex w-full flex-col justify-end overflow-hidden border-b border-white/10 pb-14 pt-32 sm:pb-24 lg:min-h-[760px] lg:pt-40">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,7,18,0.94),rgba(9,9,11,0.82)_48%,rgba(30,41,59,0.7))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(148,163,184,0.26),transparent_25rem),radial-gradient(circle_at_18%_75%,rgba(100,116,139,0.14),transparent_24rem)]" />

      <div className="container relative z-[1] grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="w-full lg:max-w-[610px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Olá, meu nome é
          </p>
          <h2 className="mt-4 max-w-[12ch] text-5xl font-semibold leading-none text-zinc-50 sm:text-6xl lg:text-7xl">
            Diego Viana
          </h2>

          <div className="my-7 max-w-xl text-base leading-8 text-zinc-400">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[430px]">
            {homeInfo.technologies.map((tech, index) => (
              <TechBadge
                key={index}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max" onClick={() => handleContact()}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-zinc-600">
              {homeInfo.socials.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-zinc-900/70 p-2 transition-colors hover:text-zinc-100"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative order-first mx-auto w-full max-w-[430px] origin-center lg:order-none lg:mx-0 lg:justify-self-end"
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -inset-5 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.28),transparent_16rem)] blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(39,39,42,0.88),rgba(3,7,18,0.92)_52%,rgba(15,23,42,0.86))] p-6 shadow-2xl shadow-black/50">
            <div className="via-white/35 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-slate-200/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-slate-300/10 blur-3xl" />

            <div className="relative flex min-h-[340px] flex-col justify-between lg:min-h-[440px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-zinc-500">
                <span>portfolio.tsx</span>
                <span>2026</span>
              </div>

              <div className="py-10">
                <p className="font-mono text-sm text-slate-300/70">
                  const developer =
                </p>
                <strong className="mt-4 block text-[6.5rem] font-semibold leading-none tracking-normal text-zinc-50 sm:text-[8rem]">
                  DV
                </strong>
                <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-zinc-100 via-slate-300 to-slate-500" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    foco
                  </span>
                  <p className="mt-2 text-sm text-zinc-200">interfaces</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    stack
                  </span>
                  <p className="mt-2 text-sm text-zinc-200">web apps</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
