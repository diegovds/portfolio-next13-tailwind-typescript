import { IoMdHeart } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center justify-center border-t border-white/10 bg-neutral-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 sm:text-sm">
        Made with
        <IoMdHeart size={13} className="text-zinc-300" />
        by
        <strong className="font-medium text-zinc-300">Diego Viana</strong>
      </span>
    </footer>
  )
}

export default Footer
