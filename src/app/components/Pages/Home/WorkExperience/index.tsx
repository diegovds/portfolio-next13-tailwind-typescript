import SectionTitle from '@/app/components/SectionTitle'
import { WorkExperience as IWorkExperience } from '@/types/workExperience'
import ExperienceItem from './ExperienceItem'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="mt-6 text-gray-400">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
