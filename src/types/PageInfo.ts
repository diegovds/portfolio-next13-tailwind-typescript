import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech, Project } from './Projects'
import { WorkExperience } from './workExperience'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTech[]
  highlightProjects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}
