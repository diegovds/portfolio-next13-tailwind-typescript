import { MotionProps } from 'framer-motion'

export const techBadgeAnimation: MotionProps = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
}
