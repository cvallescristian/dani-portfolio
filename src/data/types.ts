export type Contact = {
  label: string
  url: string
}

export type Profile = {
  name: string
  tagline: string
  bio: string
  photo: string | null
  heroImages: [string | null, string | null]
  about: string[]
  services: string[]
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
