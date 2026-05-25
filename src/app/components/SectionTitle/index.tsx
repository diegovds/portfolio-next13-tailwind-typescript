'use client'

import { cn } from '@/libs/utils'
import { motion } from 'framer-motion'

type SectionTitleProps = {
  title: string
  subtitle: string
  className?: string
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500"
        {...animProps}
        transition={{ duration: 0.5 }}
      >{`../${subtitle}`}</motion.span>
      <motion.h3
        className="max-w-3xl text-3xl font-semibold leading-tight text-zinc-100 sm:text-4xl"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}

export default SectionTitle
