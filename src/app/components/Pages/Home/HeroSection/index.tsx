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

  const featuredTechs = homeInfo.technologies.slice(0, 8)

  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden border-b border-white/10 pb-14 pt-32 sm:pb-24 lg:min-h-[760px] lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(148,163,184,0.22),transparent_25rem),radial-gradient(circle_at_18%_75%,rgba(100,116,139,0.1),transparent_24rem)]" />

      <div className="container relative z-[1]">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Olá, meu nome é
          </p>
          <h2 className="mt-4 max-w-[14ch] text-5xl font-semibold leading-none text-zinc-50 sm:text-6xl lg:text-8xl">
            Diego Viana
          </h2>

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,42rem)_minmax(18rem,1fr)] lg:items-start">
            <div className="max-w-2xl text-base leading-8 text-zinc-400">
              <RichText content={homeInfo.introduction.raw} />
            </div>

            <div className="lg:border-l lg:border-white/10 lg:pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
                stack principal
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredTechs.map((tech, index) => (
                  <TechBadge
                    key={index}
                    name={tech.name}
                    {...techBadgeAnimation}
                    transition={{ duration: 0.2, delay: index * 0.08 }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button className="w-max" onClick={() => handleContact()}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex items-center gap-3 text-2xl text-zinc-600">
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
      </div>
    </section>
  )
}

export default HeroSection
