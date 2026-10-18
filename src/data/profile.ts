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
  photo: heroMain,
  heroImages: [
    { src: heroMain, alt: 'Portrait of Daniela by the sea' },
    { src: heroSide, alt: 'Daniela taking a photo with her phone' },
  ],
  about: [
    "I'm a journalist and communications professional based in Auckland, New Zealand, currently completing a Postgraduate Diploma in Applied Business (Digital Marketing) at Unitec.",
    "Since 2018 I've led external and internal communications in Chile, growing social media engagement by more than 90% year on year and improving employee satisfaction with internal communications by 40% across 450+ employees.",
    'Most recently at Hiraya Studio, I grew Instagram reach by 60% and views by 123% in 10 weeks for a boutique Pilates studio. I love combining storytelling with data-driven strategy.',
    "I'm available part-time now and full-time from graduation, and looking for a long-term team to grow with.",
  ],
  services: [
    'Content Strategy',
    'Social Media Management',
    'Content Creation',
    'Copywriting',
    'Meta & Google Ads',
    'Video Editing',
    'Google Analytics',
    'Email Marketing',
  ],
  experience: [
    {
      role: 'Digital Marketing & Content Strategy Intern',
      company: 'Hiraya Studio',
      dates: 'Jul 2026 – Oct 2026',
      location: 'Auckland',
      highlight:
        'Grew Instagram reach by 60% and views by 123% in 10 weeks, with a 7.3% engagement rate.',
    },
    {
      role: 'Internal Communications Coordinator',
      company: 'Metrogas',
      dates: 'Sep 2022 – Mar 2024',
      location: 'Santiago',
      highlight:
        'Improved employee satisfaction with internal communications by 40% across 450+ employees.',
    },
    {
      role: 'External & Internal Communications Manager',
      company: 'SM Group & SM Foundation',
      dates: 'Sep 2018 – Sep 2022',
      location: 'Santiago',
      highlight: 'Grew social media engagement by 90%+ year on year with data-driven content strategies.',
    },
  ],
  education: [
    {
      title: 'Postgraduate Diploma in Applied Business (Digital Marketing)',
      school: 'Unitec Institute of Technology',
      dates: '2026 – present',
    },
    {
      title: 'Bachelor in Social Communication (Journalism)',
      school: 'Universidad Diego Portales',
      dates: '2011 – 2016',
    },
  ],
  tools: [
    { name: 'Canva', use: 'Social graphics & design', initials: 'Ca', color: '#00c4cc', textColor: '#111111' },
    { name: 'CapCut', use: 'Reels & video editing', initials: 'Cc', color: '#111111', textColor: '#ffffff' },
    { name: 'Adobe Creative Suite', use: 'Photo editing & print', initials: 'Ad', color: '#da1f26', textColor: '#ffffff' },
    { name: 'Meta Business Suite', use: 'Scheduling & paid ads', initials: 'Me', color: '#0467df', textColor: '#ffffff' },
    { name: 'Google Analytics', use: 'Web & campaign insights', initials: 'GA', color: '#e37400', textColor: '#111111' },
    { name: 'CMS', use: 'Website content & SEO', initials: 'CMS', color: '#cfe3f5', textColor: '#111111' },
    { name: 'AI tools', use: 'Ideas, copy & research', initials: 'AI', color: '#6b4eff', textColor: '#ffffff' },
  ],
  contacts: [
    { label: 'Email', url: 'mailto:danielaiprzs@gmail.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danielaips/' },
    { label: 'Download CV', url: `${import.meta.env.BASE_URL}Daniela-Perez-Sanchez-CV.pdf` },
  ],
}
