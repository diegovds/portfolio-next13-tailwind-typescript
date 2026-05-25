import CMSIcon from '@/app/components/CMSIcon'
import { KnownTech as IKnownTech } from '@/types/Projects'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

type KnownTechProps = {
  tech: IKnownTech
}

const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = tech.startDate
    ? getRelativeTimeString(new Date(tech.startDate), 'pt-BR').replace('há', '')
    : undefined

  return (
    <div className="group flex min-h-[150px] flex-col justify-between rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(39,39,42,0.72),rgba(3,7,18,0.78))] p-5 text-zinc-500 shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:border-zinc-400/50 hover:bg-zinc-900/80 hover:text-zinc-100">
      <div className="flex items-center justify-between gap-4">
        <p className="font-medium text-zinc-200">{tech.name}</p>
        <span className="text-3xl text-zinc-600 transition-colors group-hover:text-zinc-200">
          <CMSIcon icon={tech.iconSvg} />
        </span>
      </div>

      {relativeTime && (
        <span className="mt-6 text-sm text-zinc-500">
          {relativeTime} de experiência
        </span>
      )}
    </div>
  )
}

export default KnownTech
