import type { SEOMetadata } from '@/types';

// Default SEO configuration for the portfolio
export const siteConfig = {
  name: 'John Doe Portfolio',
  description: 'Full Stack Developer passionate about building digital experiences with modern technologies.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://johndoe.dev',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  author: {
    name: 'John Doe',
    email: 'john.doe@email.com',
  },
};

// Default metadata for pages
export const defaultMetadata: SEOMetadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'Indonesia',
    'Portfolio',
  ],
  ogImage: siteConfig.ogImage,
  canonical: siteConfig.url,
};

// Page-specific metadata
export const pageMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'Home | John Doe - Full Stack Developer',
    description: 'Welcome to my portfolio. I am a Full Stack Developer specializing in React, Next.js, and Node.js.',
  },
  projects: {
    title: 'Projects | John Doe',
    description: 'Explore my portfolio of web and mobile development projects.',
  },
  about: {
    title: 'About | John Doe',
    description: 'Learn more about my background, skills, and experience as a Full Stack Developer.',
  },
  contact: {
    title: 'Contact | John Doe',
    description: 'Get in touch with me for collaboration, job opportunities, or just to say hello.',
  },
};
