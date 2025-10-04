import {
  ChevronDownIcon,
  ChevronUpIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  GraduationCapIcon,
} from "lucide-react";

export interface ExperienceItem {
  title: string;
  image: string;
  location: string;
  date: string;
  description: string;
  details?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Graduate Assistant",
    image: "/Exp 1.png",
    location: "New York University, New York, NY",
    date: "Feb 2025 – Present",
    description:
      "Assist faculty with academic tasks and partner with Graduate Advising Manager on student projects.",
    details: [
      "Assist faculty with academic tasks including proofreading research, presentations, managing course content, and grading",
      "Partner with the Graduate Advising Manager on student projects, such as peer mentorship programs and academic workshops",
    ],
  },
  {
    title: "Master of Computer Science",
    image: "/Exp 1.png",
    location: "New York University, New York, NY",
    date: "2024 – 2026",
    description:
      "Currently pursuing Master's degree in Computer Science with a focus on AI/ML and software engineering.",
  },
  {
    title: "AI Intern (Summer Internship)",
    image: "/Exp 2.jpg",
    location: "GEP Worldwide, Clark, NJ",
    date: "May 2025 – Aug 2025",
    description:
      "Integrated LLM solutions through LangChain and agentic AI workflows, automated contract insights retrieval.",
    details: [
      "Integrated LLM solutions through LangChain and agentic AI workflows by designing modular pipelines and test cases aimed at improving contract lifecycle management functionality in the GEP SMART procurement platform",
      "Built monitoring pipelines for telemetry data by collecting performance logs, setting up dashboards, and configuring alert triggers to establish more reliable feedback loops for compliance and system stability",
      "Automated contract insights retrieval using parsing logic and NLP models to reduce manual review time by 40%",
    ],
  },
  {
    title: "Senior Software Engineer",
    image: "/Exp 2.jpg",
    location: "GEP Worldwide, India",
    date: "Aug 2020 – Aug 2024",
    description:
      "Mentored junior engineers, integrated APIs, and spearheaded Git/GitHub workflows with CI/CD pipelines.",
    details: [
      "Mentored junior engineers in building solutions for GEP SMART on Azure via sprint-based coaching and code reviews, improving processing efficiency by 10% and reducing operational costs by 10%.",
      "Integrated APIs across REST, MVC, WCF, and Web API frameworks while optimizing SQL queries for 30% faster responses.",
      "Spearheaded Git/GitHub workflows and automated Azure CI/CD pipelines, cutting manual deployment steps and boosting release productivity by 25%.",
      "Enhanced search and analytics with Elasticsearch and Kibana by tuning index mappings and query structures, improving responsiveness and dashboard efficiency by 5%.",
      "Earned a Kudos Certificate for shortening release cycles by 25% and raising client satisfaction by 20%.",
    ],
  },
  {
    title: "Machine Learning Intern",
    image: "/Exp 3.png",
    location: "BARC & Study League IT Solutions, India",
    date: "May 2019 – June 2019",
    description:
      "Designed ML models for network anomaly detection, developed automated WhatsApp broadcasting systems.",
    details: [
      "Designed machine learning models for network anomaly detection using Python and R with Elasticsearch for data storage, followed by validating results against historical log files to increase detection accuracy by 15%",
      "Optimized algorithms by tuning hyperparameters and experimenting with Isolation Forest, Support Vector Machines, and K-Means Clustering, bringing about a 20% reduction in false positives as measured against benchmark datasets",
      "Developed an automated WhatsApp broadcasting system using Selenium scripts that handled multimedia messages/attachments",
      "Utilized Python and Selenium WebDriver to automate broadcasting workflows that cut manual sending time by 50%",
      "Designed Python scripts for contact management that increased messaging efficiency by 40% and reduced delays by 50%",
    ],
  },
  {
    title: "Bachelor of Computer Engineering",
    image: "/Exp 4.jpg",
    location: "SIES Graduate School of Technology, University of Mumbai",
    date: "2016 – 2020",
    description:
      "Completed Bachelor's degree in Computer Engineering with strong foundation in software development.",
  },
];
