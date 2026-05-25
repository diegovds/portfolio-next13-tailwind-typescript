'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 z-30 flex h-20 w-full items-center justify-center border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={48}
            height={41}
            src="/images/icons/project-title-icon.svg"
            alt="Logo Diego Dev"
            priority
            className="drop-shadow-[0_0_18px_rgba(16,185,129,0.18)]"
          />
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 p-1 shadow-2xl shadow-black/30 sm:gap-1">
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
