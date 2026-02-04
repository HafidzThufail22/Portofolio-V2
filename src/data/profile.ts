import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  tagline: 'Building digital experiences with passion and precision',
  bio: 'Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam mengembangkan aplikasi web dan mobile. Saya passionate dalam menciptakan solusi digital yang user-friendly dan performant. Spesialisasi saya meliputi React, Next.js, Node.js, dan berbagai teknologi modern lainnya.',
  avatar: '/images/avatar.jpg',
  location: 'Jakarta, Indonesia',
  email: 'john.doe@email.com',
  phone: '+62 812 3456 7890',
  resumeUrl: '/resume.pdf',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/johndoe',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/johndoe',
      label: 'LinkedIn',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/johndoe',
      label: 'Twitter',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/johndoe',
      label: 'Instagram',
    },
    {
      platform: 'email',
      url: 'mailto:john.doe@email.com',
      label: 'Email',
    },
  ],
};
