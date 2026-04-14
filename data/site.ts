import { NavItem } from "@/data/types";

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "expertise", label: "Expertise", href: "#expertise" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "education", label: "Education", href: "#education" },
  { id: "stack", label: "Stack", href: "#stack" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Jhonatan Smith Garcia",
  shortRole: "Data Engineer | Data Scientist | GenAI Engineer",
  email: "jhsgarciamu@outlook.com",
  location: "Medellin, Colombia",
  github: "https://github.com/JhonatanSmith",
  githubLabel: "github.com/JhonatanSmith",
  linkedin: "https://www.linkedin.com/in/jhsgarciamu/",
  linkedinLabel: "linkedin.com/in/jhsgarciamu",
  resumeHref: "/Jhonatan-Smith-Resume.html",
  heroSummary:
    "Statistician and Senior Data Engineer focused on scalable data platforms, applied machine learning, cloud-native architecture, and LLM-powered systems across enterprise and financial environments.",
  shortBio:
    "Bridging engineering, analytics, and AI delivery with a preference for clean systems, maintainable pipelines, and product-grade execution.",
  heroHighlights: [
    "Enterprise and financial environments",
    "Azure, AWS, Databricks, Spark",
    "ETL / ELT and analytics platforms",
    "LLM apps and MLOps foundations",
  ],
  profileSignals: [
    {
      title: "Current role",
      value: "Data Engineer / GenAI Engineer at BBVA",
    },
    {
      title: "Primary tools",
      value: "Python, SQL, Databricks, Spark, Azure, AWS",
    },
    {
      title: "Operating mode",
      value: "Architecture-minded execution with strong production constraints",
    },
    {
      title: "Academic base",
      value: "BSc in Statistics and Master in Analytics in progress",
    },
  ],
  aboutParagraphs: [
    "I work at the intersection of data engineering, analytics, applied machine learning, and generative AI. My focus is less about isolated models and more about building the technical systems that make data products reliable, scalable, and useful in practice.",
    "That means designing ETL and ELT pipelines, shaping cloud-native architectures, supporting MLOps workflows, and building LLM-enabled applications with the same care I would expect from any production system.",
    "The result is a profile that can translate statistical depth into engineering decisions, and engineering constraints into solutions that teams can actually operate.",
  ],
} as const;
