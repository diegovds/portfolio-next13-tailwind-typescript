import SectionTitle from '@/app/components/SectionTitle'
import { KnownTech as IKnownTech } from '@/types/Projects'
import KnownTech from './KnownTech'

type KnownTechsProps = {
  techs: IKnownTech[]
}

const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs.map((tech, index) => (
          <KnownTech
            key={index}
            tech={tech}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          />
        ))}
      </div>
    </section>
  )
}

export default KnownTechs
