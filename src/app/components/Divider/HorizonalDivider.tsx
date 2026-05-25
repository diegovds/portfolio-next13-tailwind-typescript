import { cn } from '@/libs/utils'

type HorizonalDividerProps = {
  className?: string
}

const HorizonalDivider = ({ className }: HorizonalDividerProps) => {
  return (
    <div className={cn('my-8 w-full border-b border-b-white/10', className)} />
  )
}

export default HorizonalDivider
