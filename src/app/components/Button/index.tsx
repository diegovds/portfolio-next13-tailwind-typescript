import { cn } from '@/libs/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'min-h-12 inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300/25 bg-[linear-gradient(135deg,#fafafa,#a1a1aa_48%,#52525b)] px-5 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-black/30 transition-all hover:-translate-y-0.5 hover:shadow-zinc-200/10 focus:outline-none focus:ring-2 focus:ring-zinc-300/60 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
