// =============================================================================
// Navigation Types
// =============================================================================

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

// =============================================================================
// Profile Types
// =============================================================================

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'youtube' | 'email';
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

// =============================================================================
// Project Types
// =============================================================================

export type ProjectCategory = 'web' | 'mobile' | 'ui-ux' | 'backend' | 'fullstack' | 'other';
export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface ProjectLink {
  type: 'live' | 'github' | 'figma' | 'documentation' | 'demo';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  links: ProjectLink[];
  featured: boolean;
  startDate: string;
  endDate?: string;
  highlights?: string[];
}

// =============================================================================
// Skill Types
// =============================================================================

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'tools' | 'language';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  yearsOfExperience?: number;
}

// =============================================================================
// Experience Types
// =============================================================================

export type ExperienceType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';

export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  position: string;
  type: ExperienceType;
  location: string;
  isRemote: boolean;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

// =============================================================================
// Education Types
// =============================================================================

export interface Education {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  gpa?: string;
  achievements?: string[];
}

// =============================================================================
// Certificate Types
// =============================================================================

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// =============================================================================
// Testimonial Types
// =============================================================================

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  content: string;
  rating?: number;
}

// =============================================================================
// Contact Form Types
// =============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// =============================================================================
// SEO Types
// =============================================================================

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
