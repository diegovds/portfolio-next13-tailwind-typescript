'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="border-zinc-300/12 rounded-full border bg-[linear-gradient(135deg,rgba(30,30,34,0.92),rgba(8,10,14,0.76))] px-3 py-1 text-xs font-medium text-zinc-300 shadow-sm shadow-black/20 backdrop-blur"
      {...props}
    >
      {name}
    </motion.span>
  )
}

export default TechBadge
