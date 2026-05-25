import { cn } from '@/libs/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'min-h-12 border-white/15 inline-flex items-center justify-center gap-2 rounded-md border bg-[linear-gradient(135deg,#fafafa,#cbd5e1)] px-5 py-3 text-sm font-medium text-zinc-950 shadow-xl shadow-black/30 transition-all hover:-translate-y-0.5 hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
