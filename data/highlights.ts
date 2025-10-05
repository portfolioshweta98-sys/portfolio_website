export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const highlights: Highlight[] = [
  {
    id: "ai-systems",
    title: "I turn AI ideas into working systems",
    description:
      "from building contract-review pipelines that saved teams hours at GEP to anomaly detectors that caught what humans missed.",
  },
  {
    id: "data-trust",
    title: "I make data easy to trust and act on",
    description:
      "mixing causal reasoning with interactive visuals so people don't just see numbers, they understand the story behind them.",
  },
  {
    id: "engineering-scale",
    title: "I engineer for scale",
    description:
      "whether it's streamlining CI/CD pipelines, optimizing queries, or tuning Elasticsearch, I like making things faster, more reliable, and less painful.",
  },
  {
    id: "people-growth",
    title: "I grow with people",
    description:
      "I've mentored engineers, built peer mentorship programs, and believe teams do their best work when they're learning from each other.",
  },
  {
    id: "impact-focus",
    title: "Above all, I focus on impact",
    description:
      "if something I build doesn't save time, cut effort, or make decisions clearer, I'm not done yet.",
  },
];
