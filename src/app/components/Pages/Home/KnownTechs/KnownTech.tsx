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
    <div className="group flex w-full flex-col justify-between rounded-lg border border-zinc-100/10 bg-zinc-950/45 p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300/35 hover:bg-zinc-900/60">
      <div className="flex items-center justify-between gap-4">
        <p className="font-medium text-zinc-100">{tech.name}</p>

        <span className="text-3xl text-sky-200/35 transition-colors duration-300 group-hover:text-zinc-100">
          <CMSIcon icon={tech.iconSvg} />
        </span>
      </div>

      {relativeTime && (
        <div className="mt-6 border-t border-zinc-100/10 pt-4">
          <span className="text-sm text-zinc-500">
            {relativeTime.trim()} de experiência
          </span>
        </div>
      )}
    </div>
  )
}

export default KnownTech
