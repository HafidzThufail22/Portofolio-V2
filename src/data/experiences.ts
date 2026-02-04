import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-001',
    company: 'Tech Startup Indonesia',
    companyLogo: '/images/companies/tech-startup.png',
    companyUrl: 'https://techstartup.id',
    position: 'Senior Frontend Developer',
    type: 'full-time',
    location: 'Jakarta, Indonesia',
    isRemote: false,
    startDate: '2023-01-01',
    endDate: undefined,
    isCurrent: true,
    description: 'Memimpin tim frontend dalam pengembangan platform SaaS untuk manajemen bisnis UMKM.',
    responsibilities: [
      'Memimpin tim 5 orang frontend developer',
      'Mengembangkan arsitektur frontend menggunakan Next.js dan TypeScript',
      'Melakukan code review dan mentoring junior developer',
      'Berkolaborasi dengan tim product dan design untuk fitur baru',
      'Optimasi performa aplikasi web untuk mencapai Lighthouse score 90+',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'React Query'],
  },
  {
    id: 'exp-002',
    company: 'Digital Agency XYZ',
    companyLogo: '/images/companies/agency-xyz.png',
    companyUrl: 'https://agencyxyz.com',
    position: 'Full Stack Developer',
    type: 'full-time',
    location: 'Bandung, Indonesia',
    isRemote: true,
    startDate: '2021-06-01',
    endDate: '2022-12-31',
    isCurrent: false,
    description: 'Mengembangkan berbagai proyek web untuk klien dari berbagai industri.',
    responsibilities: [
      'Membangun website dan aplikasi web untuk klien',
      'Implementasi REST API dan integrasi third-party services',
      'Maintenance dan bug fixing untuk proyek existing',
      'Dokumentasi teknis dan knowledge transfer',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-003',
    company: 'Freelance',
    position: 'Web Developer',
    type: 'freelance',
    location: 'Remote',
    isRemote: true,
    startDate: '2020-01-01',
    endDate: '2021-05-31',
    isCurrent: false,
    description: 'Mengerjakan berbagai proyek freelance untuk klien lokal dan internasional.',
    responsibilities: [
      'Membangun landing page dan company profile',
      'Pengembangan e-commerce menggunakan WordPress/WooCommerce',
      'Custom web application development',
      'Konsultasi teknis dan maintenance',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL'],
  },
  {
    id: 'exp-004',
    company: 'PT. Software House',
    companyLogo: '/images/companies/sw-house.png',
    position: 'Junior Web Developer',
    type: 'internship',
    location: 'Surabaya, Indonesia',
    isRemote: false,
    startDate: '2019-07-01',
    endDate: '2019-12-31',
    isCurrent: false,
    description: 'Program magang 6 bulan untuk mempelajari pengembangan web profesional.',
    responsibilities: [
      'Assist senior developer dalam pengembangan fitur',
      'Belajar best practices dalam software development',
      'Mengerjakan bug fixing dan testing',
      'Membuat dokumentasi user manual',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Vue.js', 'MySQL'],
  },
];

// Helper function to get current experience
export const getCurrentExperience = (): Experience | undefined => {
  return experiences.find((exp) => exp.isCurrent);
};

// Helper function to calculate total years of experience
export const getTotalYearsOfExperience = (): number => {
  const now = new Date();
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : now;
    totalMonths += (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  });

  return Math.round(totalMonths / 12);
};
