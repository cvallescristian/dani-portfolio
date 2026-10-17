import heroMain from '../assets/daniela-hero-main.jpg'
import heroSide from '../assets/daniela-hero-side.jpg'
import type { Profile } from './types'

export const profile: Profile = {
  name: 'Daniela',
  headline: {
    intro: 'Digital marketing through',
    keywords: ['strategy', 'content', 'storytelling', 'data', 'campaigns'],
  },
  bio: 'Check out a few of my favorite projects below!',
  photo: null,
  heroImages: [
    { src: heroMain, alt: 'Portrait of Daniela by the sea' },
    { src: heroSide, alt: 'Daniela standing on the rocks by the sea' },
  ],
  about: [
    'Placeholder bio. A short introduction about who Dani is, where she is based and what drives her work.',
    'Placeholder paragraph about experience: brands worked with, types of campaigns and results achieved.',
    'Placeholder paragraph about approach: how she plans strategy, builds communities and creates content.',
  ],
  services: [
    'Brand Strategy',
    'Social Media Strategy',
    'Community Management',
    'Content Creation',
    'Influencer Management',
    'Project Management',
  ],
  contacts: [
    { label: 'Email', url: 'mailto:hello@example.com' },
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
  ],
}
