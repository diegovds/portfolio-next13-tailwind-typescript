import SectionTitle from '@/app/components/SectionTitle'
import { TbBrandNextjs } from 'react-icons/tb'
import KnownTech from './KnownTech'

const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
              startDate: '2021-01-01',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default KnownTechs
