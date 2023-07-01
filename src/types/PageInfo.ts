import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech } from './Projects'

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
}

export type HomePageData = {
  page: HomePageInfo
}
