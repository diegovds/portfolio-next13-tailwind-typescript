import { cn } from '@/libs/utils'

type HorizonalDividerProps = {
  className?: string
}

const HorizonalDivider = ({ className }: HorizonalDividerProps) => {
  return (
    <div className={cn('my-8 w-full border-b border-b-gray-800', className)} />
  )
}

export default HorizonalDivider
