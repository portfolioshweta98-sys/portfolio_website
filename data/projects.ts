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
  {
    id: 4,
    title: "CheckMe-AI / EvalMate - AI-Powered Answer Paper Evaluator",
    description:
      "An intelligent automated evaluation system that uses AI to grade student answer papers with complete observability. Features a split-screen interface with PDF viewer for answer papers and real-time evaluation results. Leverages OpenAI GPT-5.1 models and Marker OCR API to extract handwritten text from PDFs, evaluate answers against model answer keys using AI-powered keyword matching, and generate detailed scores (with percentage breakdowns), feedback, and matched/missing concepts per question. The system provides question-level analysis with matched elements highlighting, processing information tracking, and comprehensive evaluation summaries. Features complete traceability through Galileo tracing, multiple storage options (SQLite, Tigris cloud storage), and RESTful API for easy integration. Built with FastAPI backend and React frontend with Tailwind CSS. Submitted to Daytona HackSprint - NYC, November 2025.",
    timeline: "Nov 2025",
    tags: ["FastAPI", "OpenAI GPT-5.1", "React", "Tailwind CSS", "OCR", "TypeScript", "Galileo", "Tigris", "PDF Processing"],
    url: "https://devpost.com/software/checkme-ai-powered-complete-analysis",
    image: "/project 2.jpg", // TODO: Replace with project-4-evalmate.jpg (CheckMe-AI/EvalMate screenshot)
  },
  {
    id: 5,
    title: "HC3 Adversarial Analysis",
    description:
      "Research project focused on adversarial analysis and robustness evaluation of AI classifiers. The pipeline processes the HC3 dataset through data splitting (train/validation/test), fine-tunes RoBERTa-based classifiers on training and validation splits, and generates out-of-distribution (OOD) adversarial responses using Llama 3.3 70B Instruct model with both regular and human-style prompts. The fine-tuned RoBERTa classifiers are then evaluated against original HC3 test data and adversarial/OOD responses to assess model robustness and identify vulnerabilities. The comprehensive evaluation framework provides insights into classifier performance under adversarial conditions and contributes to understanding model resilience against distribution shifts.",
    timeline: "2024",
    tags: ["RoBERTa", "Llama 3.3", "Adversarial AI", "OOD Detection", "Research", "Python", "NLP"],
    url: "https://github.com/shwetashekhar98/hc3-adversarial-analysis",
    image: "/research.png", // TODO: Replace with project-5-hc3.jpg (HC3 pipeline flowchart)
  },
];
