interface Project {
  id: number;
  title: string;
  description: string;
  timeline: string;
  tags: string[];
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Research-Net: Community Detection in Academic Papers",
    description:
      "Developed a Spark-based framework using semantic embeddings + weighted PageRank to analyze 5M+ academic papers, improving topic clustering accuracy by 35%. This comprehensive solution involved implementing advanced machine learning algorithms, distributed computing techniques, and sophisticated data processing pipelines to handle massive datasets efficiently.",
    timeline: "Jan 2025 – May 2025",
    tags: ["Apache Spark", "Embeddings", "PageRank", "Data Science"],
    url: "https://github.com/shwetashekhar98/Big-Data-Project-Research-Net",
    image: "/project 1.jpg",
  },
  {
    id: 2,
    title: "Causal Impact of Weather on Food Delivery",
    description:
      "Bayesian modeling with PyMC + DAGs to study how weather/traffic affect delivery times; patterns informed logistics decisions and improved efficiency.",
    timeline: "Sept 2024 – Nov 2024",
    tags: ["PyMC", "Bayesian", "Pandas", "Causal Inference"],
    url: "https://github.com/shwetashekhar98/Foundation-of-Data-Science-Project.git",
    image: "/project 2.jpg",
  },
  {
    id: 3,
    title: "Advanced Information Visualization for Stock Market Analysis",
    description:
      "Streamlit, Dash, D3.js, and Matplotlib tool for NYSE analysis; sentiment-based insights improved decision-making by 30%. The project involved creating interactive dashboards, real-time data visualization, comprehensive market analysis tools, and integration with multiple data sources to provide actionable insights for traders and analysts.",
    timeline: "Sept 2024 – Nov 2024",
    tags: ["Streamlit", "Dash", "D3.js", "Matplotlib"],
    url: "https://github.com/shwetashekhar98/InfoVizProject",
    image: "/project 3.jpg",
  },
];
