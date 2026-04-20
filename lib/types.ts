export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  siteLink?: string;
  tags: string[];
  order: number;
}

export interface ExperienceRole {
  title: string;
  duration: string;
  locationType: string;
  bulletPoints?: string[];
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  employmentType: string;
  totalDuration: string;
  location: string;
  roles: ExperienceRole[];
  skills: string;
  link?: string;
  linkLabel?: string;
  order: number;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
  order: number;
}
