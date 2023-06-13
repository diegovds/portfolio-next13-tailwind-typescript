import Link from '@/app/components/Link'
import TechBadge from '@/app/components/TechBadge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          width={420}
          height={304}
          src="/images/profile-pic.png"
          alt=""
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          BookWise
        </h3>

        <p className="my-6 text-gray-400">
          BookWise é uma plataforma de avaliação de livros que foi desenvolvida
          durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
          precisávamos desenvolver essa aplicação completa Full Stack com
          Next.js.
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
        {/** parei em 14:50 */}
      </div>
    </div>
  )
}

export default ProjectCard
