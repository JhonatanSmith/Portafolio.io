import { Project } from "@/data/types";

export const projects: Project[] = [
  {
    title: "Currency Converter",
    description:
      "A practical tool centered on web data collection and price comparison logic, framed as a lightweight application with clear utility and an engineering-first implementation style.",
    category: "Automation",
    image: "/images/project-1.png",
    imageAlt: "Preview of the Currency Converter project interface",
    githubUrl: "https://github.com/JhonatanSmith/Currency-Converter.git",
    stack: ["Python", "Web scraping", "Data transformation"],
  },
  {
    title: "Certifications and Notes",
    description:
      "A structured knowledge base for certifications, study material, and technical notes across data engineering, cloud, analytics, and AI topics.",
    category: "Knowledge Hub",
    image: "/images/project-2.png",
    imageAlt: "Preview representing certifications and technical notes",
    githubUrl: "https://github.com/JhonatanSmith/Certificates",
    stack: ["Cloud learning", "Technical notes", "Documentation"],
  },
  {
    title: "DP-100 Study App",
    description:
      "A focused study application for Azure Machine Learning certification preparation, turning exam material into a more interactive review workflow.",
    category: "Learning Product",
    image: "/images/project-3.png",
    imageAlt: "Preview of the DP-100 Study App project",
    githubUrl: "https://github.com/JhonatanSmith/DP-100-Exam-Question-App",
    stack: ["Azure ML", "Study app", "Frontend logic"],
  },
  {
    title: "Housing Analytics",
    description:
      "An analytics project exploring housing prices and gentrification-related patterns in Colombia through data analysis and contextual interpretation.",
    category: "Analytics",
    image: "/images/project-4.png",
    imageAlt: "Preview of the Housing Analytics project",
    githubUrl: "https://github.com/JhonatanSmith/House-renting-prices",
    stack: ["Python", "EDA", "Statistical analysis"],
  },
];
