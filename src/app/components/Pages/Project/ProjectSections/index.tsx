import Image from 'next/image'

const sections = [
  {
    title: 'Login',
    image: 'https://media.graphassets.com/ZsK2GK0HTru6pi0WwEpc',
  },
  {
    title: 'Home',
    image: 'https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
  },
]

const ProjectSections = () => {
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}

export default ProjectSections
