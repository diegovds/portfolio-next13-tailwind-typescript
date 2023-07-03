import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech } from './Projects'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: KnownTech[]
  description: {
    raw: RichTextContent
  }
}
