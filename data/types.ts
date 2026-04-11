export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  githubUrl: string;
  stack: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
};
