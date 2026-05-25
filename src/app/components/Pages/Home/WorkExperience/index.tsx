import SectionTitle from '@/app/components/SectionTitle'
import { WorkExperience as IWorkExperience } from '@/types/WorkExperience'
import ExperienceItem from './ExperienceItem'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="mt-6 leading-8 text-zinc-500">
          Estou sempre aberto a novos desafios e projetos. Vamos trabalhar
          juntos para criar soluções bem acabadas para sua empresa.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
