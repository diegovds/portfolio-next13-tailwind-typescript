'use client'

import RichText from '@/app/components/RichText'
import TechBadge from '@/app/components/TechBadge'
import { fadeUpAnimation, techBadgeAnimation } from '@/libs/animations'
import { WorkExperience } from '@/types/WorkExperience'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ExperienceItemProps = {
  experience: WorkExperience
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyLogo,
    companyName,
    companyUrl,
    description,
    role,
    technologies,
  } = experience

  const startDate = new Date(experience.startDate)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const end = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      className="bg-zinc-900/45 grid grid-cols-[44px,1fr] gap-4 rounded-lg border border-white/10 p-5 shadow-xl shadow-black/20 md:gap-8"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-white/10 bg-neutral-950 p-1">
          <Image
            width={40}
            height={40}
            src={companyLogo.url}
            alt={`Logo da empresa ${companyName}`}
            className="rounded-full grayscale"
          />
        </div>
        <div className="h-full w-px bg-white/10" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
          >
            @ {companyName}
          </a>
          <h4 className="font-medium text-zinc-200">{role}</h4>
          <span className="text-zinc-600">
            {formattedStartDate} - {formattedEndDate} ({formattedDuration})
          </span>
          <div className="leading-7 text-zinc-400">
            <RichText content={description.raw} />
          </div>
        </div>

        <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Competências
        </p>
        <div className="mb-2 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[420px]">
          {technologies.map((tech, index) => (
            <TechBadge
              key={index}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceItem
