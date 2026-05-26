'use client'

import { fadeUpAnimation } from '@/libs/animations'
import { Project } from '@/types/Projects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

type ProjectsListProps = {
  projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const orderedProjects = [...projects].sort((a, b) => a.order - b.order)

  return (
    <section
      id="projects-list"
      className="container grid grid-cols-1 gap-4 py-16 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:py-24"
    >
      {orderedProjects.map((project, index) => (
        <motion.div
          key={index}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}

export default ProjectsList
