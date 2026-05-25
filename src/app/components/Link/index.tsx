import { cn } from '@/libs/utils'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

type linkProps = ComponentProps<typeof NextLink>

const Link = ({ className, children, ...props }: linkProps) => {
  return (
    <NextLink
      className={cn(
        'inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default Link
