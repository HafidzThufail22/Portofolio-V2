import type { Skill, SkillCategory } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { id: 'skill-001', name: 'React', category: 'frontend', level: 'expert', yearsOfExperience: 4 },
  { id: 'skill-002', name: 'Next.js', category: 'frontend', level: 'expert', yearsOfExperience: 3 },
  { id: 'skill-003', name: 'TypeScript', category: 'frontend', level: 'advanced', yearsOfExperience: 3 },
  { id: 'skill-004', name: 'Tailwind CSS', category: 'frontend', level: 'expert', yearsOfExperience: 3 },
  { id: 'skill-005', name: 'Vue.js', category: 'frontend', level: 'intermediate', yearsOfExperience: 2 },
  
  // Backend
  { id: 'skill-006', name: 'Node.js', category: 'backend', level: 'advanced', yearsOfExperience: 4 },
  { id: 'skill-007', name: 'Express.js', category: 'backend', level: 'advanced', yearsOfExperience: 4 },
  { id: 'skill-008', name: 'Go', category: 'backend', level: 'intermediate', yearsOfExperience: 1 },
  { id: 'skill-009', name: 'Python', category: 'backend', level: 'intermediate', yearsOfExperience: 2 },
  
  // Database
  { id: 'skill-010', name: 'PostgreSQL', category: 'database', level: 'advanced', yearsOfExperience: 3 },
  { id: 'skill-011', name: 'MongoDB', category: 'database', level: 'advanced', yearsOfExperience: 3 },
  { id: 'skill-012', name: 'Redis', category: 'database', level: 'intermediate', yearsOfExperience: 2 },
  { id: 'skill-013', name: 'Prisma', category: 'database', level: 'advanced', yearsOfExperience: 2 },
  
  // DevOps
  { id: 'skill-014', name: 'Docker', category: 'devops', level: 'advanced', yearsOfExperience: 2 },
  { id: 'skill-015', name: 'GitHub Actions', category: 'devops', level: 'intermediate', yearsOfExperience: 2 },
  { id: 'skill-016', name: 'AWS', category: 'devops', level: 'intermediate', yearsOfExperience: 2 },
  { id: 'skill-017', name: 'Vercel', category: 'devops', level: 'advanced', yearsOfExperience: 3 },
  
  // Design
  { id: 'skill-018', name: 'Figma', category: 'design', level: 'advanced', yearsOfExperience: 3 },
  { id: 'skill-019', name: 'Adobe XD', category: 'design', level: 'intermediate', yearsOfExperience: 2 },
  
  // Tools
  { id: 'skill-020', name: 'Git', category: 'tools', level: 'expert', yearsOfExperience: 5 },
  { id: 'skill-021', name: 'VS Code', category: 'tools', level: 'expert', yearsOfExperience: 5 },
  { id: 'skill-022', name: 'Postman', category: 'tools', level: 'advanced', yearsOfExperience: 4 },
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

// Helper function to get all skill categories with their skills
export const getSkillsGroupedByCategory = (): Record<SkillCategory, Skill[]> => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);
};
