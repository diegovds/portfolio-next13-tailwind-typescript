'use client'

import Button from '@/app/components/Button'
import TechBadge from '@/app/components/TechBadge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: '/',
    icon: <TbBrandGithub />,
  },
  {
    url: '/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: '/',
    icon: <TbBrandYoutube />,
  },
  {
    url: '/',
    icon: <TbBrandWhatsapp />,
  },
]

const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:min-h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Diego Viana</h2>

          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Olá, meu nome é Gabriel Borges e sou um desenvolvedor front-end
            apaixonado por tecnologia. Com mais de 2 anos de experiência. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais, além de
            liderar equipes técnicas em projetos desafiadores. Estou sempre
            aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge key={index} name="Next.js" />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button
              className="w-max shadow-button"
              onClick={() => handleContact()}
            >
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600 ">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gray-100"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/IMG_2041.png"
          alt="Foto de peril do Diego Viana"
          priority
          className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  )
}

export default HeroSection
