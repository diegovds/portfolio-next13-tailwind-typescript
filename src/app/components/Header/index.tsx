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
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logo Diego Dev"
            priority
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10 ">
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
