import HorizonalDivider from '@/app/components/Divider/HorizonalDivider'
import SectionTitle from '@/app/components/SectionTitle'
import ProjectCard from './ProjectCard'

const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizonalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default HighlightedProjects
