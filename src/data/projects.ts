import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    tags: ['Social Media Strategy', 'Community Management', 'Content Creation'],
    thumbnail: null,
    description: 'Placeholder description for project one.',
    media: { type: 'youtube', videoId: 'dQw4w9WgXcQ' },
  },
  {
    id: 'project-two',
    title: 'Project Two',
    tags: ['Social Media Strategy', 'Influencer Management', 'Content Creation'],
    thumbnail: null,
    description: 'Placeholder description for project two.',
    media: { type: 'instagram', url: 'https://www.instagram.com/p/placeholder/' },
  },
  {
    id: 'project-three',
    title: 'Project Three',
    tags: ['Content Creation', 'Project Management'],
    thumbnail: null,
    description: 'Placeholder description for project three.',
    media: { type: 'tiktok', url: 'https://www.tiktok.com/@placeholder/video/0' },
  },
  {
    id: 'project-four',
    title: 'Project Four',
    tags: ['Brand Strategy'],
    thumbnail: null,
    description: 'Placeholder description for project four.',
    media: { type: 'link', url: 'https://example.com' },
  },
]
