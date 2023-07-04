'use client'

import CMSIcon from '@/app/components/CMSIcon'
import { KnownTech as IKnownTech } from '@/types/Projects'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type KnownTechProps = ComponentProps<typeof motion.div> & {
  tech: IKnownTech
}

const KnownTech = ({ tech, ...props }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '')

  return (
    <motion.div
      className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500"
      {...props}
    >
      <div className="flex items-center justify-between ">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </motion.div>
  )
}

export default KnownTech
