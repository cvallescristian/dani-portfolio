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
  availability: 'Available part-time now · full-time from graduation',
  aboutLead: 'Journalist turned digital marketer, based in Auckland.',
  aboutSub: 'Completing a Postgraduate Diploma in Applied Business (Digital Marketing) at Unitec.',
  stats: [
    { value: '+60%', label: 'Instagram reach in 10 weeks', source: 'Hiraya Studio (internship)' },
    { value: '+123%', label: 'Views in 10 weeks', source: 'Hiraya Studio (internship)' },
    { value: '+90%', label: 'Social engagement year on year', source: 'SM Group' },
    { value: '450+', label: 'Employees reached by internal comms', source: 'Metrogas' },
  ],
  // ==text== is rendered with a light blue marker highlight.
  about: [
    "Since 2018 I've led communications in Chile for a publishing group, a non-profit and the country's largest natural gas company, from social media and SEO content to newsletters, events and a new intranet.",
    'Now in Auckland, I plan content calendars, create reels and run Meta Ads campaigns, combining ==storytelling== with ==data-driven strategy==.',
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
    { name: 'Canva', use: 'Social graphics & design', icon: 'design' },
    { name: 'CapCut', use: 'Reels & video editing', icon: 'video' },
    { name: 'Adobe Creative Suite', use: 'Photo editing & print', icon: 'photo' },
    { name: 'Meta Business Suite', use: 'Scheduling & paid ads', icon: 'ads' },
    { name: 'Google Analytics', use: 'Web & campaign insights', icon: 'analytics' },
    { name: 'CMS', use: 'Website content & SEO', icon: 'website' },
    { name: 'AI tools', use: 'Ideas, copy & research', icon: 'ai' },
  ],
  contacts: [
    { label: 'Email', url: 'mailto:danielaiprzs@gmail.com', icon: 'mail' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danielaips/', icon: 'linkedin' },
    {
      label: 'Download CV',
      url: `${import.meta.env.BASE_URL}Daniela-Perez-Sanchez-CV.pdf`,
      icon: 'download',
    },
  ],
}
