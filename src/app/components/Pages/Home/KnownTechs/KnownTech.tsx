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
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="flex items-center justify-between ">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      {relativeTime && <span>{relativeTime} de experiência</span>}
    </div>
  )
}

export default KnownTech
