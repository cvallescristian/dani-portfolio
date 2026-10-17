import type { Profile } from './types'

export const profile: Profile = {
  name: 'Dani',
  tagline:
    'Brand strategist, social media manager and content creator crafting campaigns that drive growth.',
  bio: 'Check out a few of my favorite projects below!',
  photo: null,
  heroImages: [null, null],
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
