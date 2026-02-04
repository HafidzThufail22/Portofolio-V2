import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan dashboard admin.',
    longDescription: 'Sebuah platform e-commerce full-featured yang dibangun menggunakan Next.js dan Node.js. Fitur utama meliputi sistem autentikasi, keranjang belanja, integrasi payment gateway (Midtrans & Xendit), manajemen inventori real-time, dan dashboard admin yang komprehensif.',
    thumbnail: '/images/projects/ecommerce-thumb.jpg',
    images: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
      '/images/projects/ecommerce-3.jpg',
    ],
    category: 'fullstack',
    status: 'completed',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    links: [
      { type: 'live', url: 'https://example-ecommerce.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/johndoe/ecommerce', label: 'Source Code' },
    ],
    featured: true,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    highlights: [
      'Increased sales conversion by 40%',
      'Handles 10,000+ daily active users',
      'Sub-second page load times',
    ],
  },
  {
    id: 'proj-002',
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time collaboration dan Kanban board.',
    longDescription: 'Aplikasi manajemen proyek modern dengan Kanban board, real-time updates menggunakan WebSocket, dan fitur kolaborasi tim. Mendukung file attachment, komentar, dan notifikasi.',
    thumbnail: '/images/projects/taskapp-thumb.jpg',
    images: [
      '/images/projects/taskapp-1.jpg',
      '/images/projects/taskapp-2.jpg',
    ],
    category: 'web',
    status: 'completed',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux Toolkit', 'Material UI'],
    links: [
      { type: 'live', url: 'https://taskapp-demo.com', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/johndoe/taskapp', label: 'Source Code' },
    ],
    featured: true,
    startDate: '2023-08-01',
    endDate: '2023-12-15',
    highlights: [
      'Real-time collaboration for 50+ concurrent users',
      'Integrated with Slack and Discord',
    ],
  },
  {
    id: 'proj-003',
    title: 'Personal Finance Tracker',
    slug: 'personal-finance-tracker',
    description: 'Aplikasi mobile untuk tracking keuangan pribadi dengan visualisasi data dan reminder.',
    thumbnail: '/images/projects/finance-thumb.jpg',
    category: 'mobile',
    status: 'completed',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'FL Chart'],
    links: [
      { type: 'github', url: 'https://github.com/johndoe/finance-app', label: 'Source Code' },
    ],
    featured: false,
    startDate: '2024-03-01',
    endDate: '2024-05-15',
  },
  {
    id: 'proj-004',
    title: 'Restaurant Landing Page',
    slug: 'restaurant-landing-page',
    description: 'Desain UI/UX modern untuk landing page restoran dengan animasi smooth dan responsive design.',
    thumbnail: '/images/projects/restaurant-thumb.jpg',
    category: 'ui-ux',
    status: 'completed',
    technologies: ['Figma', 'Adobe Photoshop', 'Framer Motion', 'Next.js'],
    links: [
      { type: 'figma', url: 'https://figma.com/file/xxx', label: 'Figma Design' },
      { type: 'live', url: 'https://restaurant-demo.com', label: 'Live Site' },
    ],
    featured: true,
    startDate: '2024-02-01',
    endDate: '2024-02-28',
  },
  {
    id: 'proj-005',
    title: 'REST API Microservices',
    slug: 'rest-api-microservices',
    description: 'Arsitektur microservices untuk sistem booking dengan message queue dan containerization.',
    thumbnail: '/images/projects/api-thumb.jpg',
    category: 'backend',
    status: 'in-progress',
    technologies: ['Go', 'gRPC', 'RabbitMQ', 'Docker', 'Kubernetes', 'PostgreSQL'],
    links: [
      { type: 'github', url: 'https://github.com/johndoe/booking-api', label: 'Source Code' },
      { type: 'documentation', url: 'https://docs.booking-api.com', label: 'API Docs' },
    ],
    featured: false,
    startDate: '2024-07-01',
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((project) => project.category === category);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
