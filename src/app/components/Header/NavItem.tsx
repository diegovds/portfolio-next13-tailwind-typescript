import { cn } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 rounded-full px-3 py-2 font-mono text-xs font-medium text-zinc-400 transition-all hover:bg-zinc-100/5 hover:text-zinc-50 sm:px-4 sm:text-sm',
        isActive &&
          'bg-zinc-100 text-zinc-950 shadow-lg shadow-zinc-100/10 hover:bg-zinc-100 hover:text-zinc-950',
      )}
    >
      <span className={cn('text-sky-200/35', isActive && 'text-zinc-500')}>
        #
      </span>
      {label}
    </Link>
  )
}

export default NavItem
