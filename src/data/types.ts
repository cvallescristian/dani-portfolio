export type ButtonIconName = 'mail' | 'linkedin' | 'download' | 'external'

export type Contact = {
  label: string
  url: string
  icon: ButtonIconName
}

export type Photo = {
  src: string
  alt: string
}

export type Experience = {
  role: string
  company: string
  dates: string
  location: string
  highlight: string
}

export type Education = {
  title: string
  school: string
  dates: string
}

export type ToolIconName = 'design' | 'video' | 'photo' | 'ads' | 'analytics' | 'website' | 'ai'

export type Tool = {
  name: string
  use: string
  icon: ToolIconName
}

export type Stat = {
  value: string
  label: string
  source: string
}

export type Profile = {
  name: string
  headline: {
    intro: string
    keywords: string[]
  }
  bio: string
  photo: string | null
  heroImages: [Photo | null, Photo | null]
  availability: string
  aboutLead: string
  aboutSub: string
  stats: Stat[]
  about: string[]
  services: string[]
  experience: Experience[]
  education: Education[]
  tools: Tool[]
  contacts: Contact[]
}

export type ProjectMedia =
  | { type: 'image'; src: string }
  | { type: 'youtube'; videoId: string }
  | { type: 'vimeo'; videoId: string }
  | { type: 'instagram'; url: string }
  | { type: 'tiktok'; url: string }
  | { type: 'link'; url: string }

export type Project = {
  id: string
  title: string
  tags: string[]
  thumbnail: string | null
  description: string
  media: ProjectMedia | null
}

export type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  thumbnail: string | null
  url: string
}
