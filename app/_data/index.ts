import type { NavigationItem } from '@/types';

/**
 * Navigation Menu Items
 * Used by Navbar component
 */
export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

/**
 * Social Links for Footer
 */
export const socialLinks = [
  {
    platform: 'github',
    url: 'https://github.com/username',
    label: 'GitHub',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/username',
    label: 'LinkedIn',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/username',
    label: 'Twitter',
  },
];
