// Central export file for all static data
// This makes importing data cleaner throughout the application

export { profile } from './profile';
export { 
  projects, 
  getFeaturedProjects, 
  getProjectsByCategory, 
  getProjectBySlug 
} from './projects';
export { 
  skills, 
  getSkillsByCategory, 
  getSkillsGroupedByCategory 
} from './skills';
export { 
  experiences, 
  getCurrentExperience, 
  getTotalYearsOfExperience 
} from './experiences';
