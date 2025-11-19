
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface ProjectCategory {
  id: string;
  category: string;
  items: string[];
  link: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  concentration: string;
}

export interface PublicationItem {
  citation: string;
  link: string;
  description?: string;
}
