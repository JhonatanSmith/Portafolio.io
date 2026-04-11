export const expertiseItems = [
  {
    icon: "data",
    label: "Data Engineering",
    title: "Scalable data foundations",
    description:
      "Design of ETL and ELT pipelines, data platform structure, ingestion patterns, medallion-style architectures, and analytical models that support serious downstream consumption.",
    focus: ["ETL / ELT", "PySpark", "Databricks", "Data modeling"],
  },
  {
    icon: "ml",
    label: "Machine Learning",
    title: "Analytics and ML systems",
    description:
      "Classical ML, statistical analysis, forecasting, and model-backed analytics delivered with an emphasis on reproducibility, validation, and operational usefulness.",
    focus: ["Applied ML", "Statistics", "Forecasting", "Model evaluation"],
  },
  {
    icon: "genai",
    label: "GenAI",
    title: "LLM and retrieval applications",
    description:
      "Development of GenAI workflows, prompt and retrieval pipelines, and enterprise-oriented assistant patterns where architecture and governance matter as much as the model interface.",
    focus: ["LLM apps", "RAG", "Embeddings", "Prompt workflows"],
  },
  {
    icon: "cloud",
    label: "Cloud and MLOps",
    title: "Operational delivery on cloud",
    description:
      "Deployment-minded architecture across Azure and AWS, with attention to orchestration, CI and CD, MLflow-style tracking, and maintainable platform practices.",
    focus: ["Azure", "AWS", "MLflow", "CI / CD"],
  },
] as const;
