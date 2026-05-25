'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(39,39,42,0.9),rgba(15,23,42,0.72))] px-3 py-1 text-xs font-medium text-zinc-300 shadow-sm shadow-black/20 backdrop-blur"
      {...props}
    >
      {name}
    </motion.span>
  )
}

export default TechBadge
