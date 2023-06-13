import { cn } from '@/libs/utils'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

type linkProps = ComponentProps<typeof NextLink>

const Link = ({ className, children, ...props }: linkProps) => {
  return (
    <Link
      className={cn(
        'flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-emerald-500',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default Link
