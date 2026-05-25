'use client'

import Button from '@/app/components/Button'
import CMSIcon from '@/app/components/CMSIcon'
import RichText from '@/app/components/RichText'
import TechBadge from '@/app/components/TechBadge'
import { techBadgeAnimation } from '@/libs/animations'
import { HomePageInfo } from '@/types/PageInfo'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
      <div className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(113,113,122,0.24),transparent_28rem)]" />

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
          className="relative order-first mx-auto w-full max-w-[420px] origin-center lg:order-none lg:mx-0 lg:justify-self-end"
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -inset-4 rounded-2xl border border-white/10 bg-zinc-900/30 shadow-2xl shadow-black/40" />
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil do Diego Viana"
            priority
            className="relative h-[320px] w-full rounded-lg border border-white/10 object-cover grayscale transition-all duration-500 hover:grayscale-0 lg:h-[440px]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
