
interface Skill {
    name: string;
    icon: React.ComponentType<any>;
    category: string;
    description: string;
  }

  // Import devicons
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import ROriginal from "devicons-react/icons/ROriginal";
import JavaOriginal from "devicons-react/icons/JavaOriginal";
import MysqlOriginal from "devicons-react/icons/MysqlOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import AzureOriginal from "devicons-react/icons/AzureOriginal";
import SeleniumOriginal from "devicons-react/icons/SeleniumOriginal";
import DotnetcoreOriginal from "devicons-react/icons/DotnetcoreOriginal";
import ApachesparkOriginal from "devicons-react/icons/ApachesparkOriginal";
import ElasticsearchOriginal from "devicons-react/icons/ElasticsearchOriginal";
import NumpyOriginal from "devicons-react/icons/NumpyOriginal";
import TensorflowOriginal from "devicons-react/icons/TensorflowOriginal";
import D3jsOriginal from "devicons-react/icons/D3jsOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import ReactOriginal from "devicons-react/icons/ReactOriginal";

export const skills: Skill[] = [
    {
      name: "Python",
      icon: PythonOriginal,
      category: "Programming",
      description:
        "Advanced Python developer with expertise in data science, web development, and automation",
    },
    {
      name: "R",
      icon: ROriginal,
      category: "Data Science",
      description: "Statistical analysis and data visualization using R",
    },
    {
      name: "Java",
      icon: JavaOriginal,
      category: "Programming",
      description:
        "Object-oriented programming and enterprise application development",
    },
    {
      name: "SQL",
      icon: MysqlOriginal,
      category: "Database",
      description:
        "Database design, optimization, and complex query development",
    },
    {
      name: "Git",
      icon: GitOriginal,
      category: "DevOps",
      description: "Version control and collaborative development workflows",
    },
    {
      name: "GitHub",
      icon: GithubOriginal,
      category: "DevOps",
      description: "Repository management and collaborative development",
    },
    {
      name: "Azure DevOps",
      icon: AzureOriginal,
      category: "Cloud",
      description: "Cloud deployment and CI/CD pipeline management",
    },
    {
      name: "Selenium",
      icon: SeleniumOriginal,
      category: "Testing",
      description: "Automated web testing and quality assurance",
    },
    {
      name: "WebDriver",
      icon: JavascriptOriginal,
      category: "Testing",
      description: "Browser automation and testing frameworks",
    },
    {
      name: "REST APIs",
      icon: Html5Original,
      category: "Web Development",
      description: "API design, development, and integration",
    },
    {
      name: "MVC",
      icon: DotnetcoreOriginal,
      category: "Web Development",
      description: "Model-View-Controller architecture and patterns",
    },
    {
      name: "WCF",
      icon: DotnetcoreOriginal,
      category: "Web Development",
      description: "Windows Communication Foundation services",
    },
    {
      name: "Web API",
      icon: ReactOriginal,
      category: "Web Development",
      description: "RESTful API development and integration",
    },
    {
      name: "Database Engineering",
      icon: MysqlOriginal,
      category: "Database",
      description:
        "Database architecture, optimization, and performance tuning",
    },
    {
      name: "Spark",
      icon: ApachesparkOriginal,
      category: "Big Data",
      description: "Distributed data processing and analytics",
    },
    {
      name: "Elasticsearch",
      icon: ElasticsearchOriginal,
      category: "Search",
      description: "Search engine and data indexing",
    },
    {
      name: "Kibana",
      icon: ElasticsearchOriginal,
      category: "Visualization",
      description: "Data visualization and dashboard creation",
    },
    {
      name: "NumPy",
      icon: NumpyOriginal,
      category: "Data Science",
      description: "Numerical computing and array operations",
    },
    {
      name: "TensorFlow",
      icon: TensorflowOriginal,
      category: "Machine Learning",
      description: "Deep learning and neural network development",
    },
    {
      name: "PyMC",
      icon: PythonOriginal,
      category: "Statistics",
      description: "Bayesian statistical modeling and inference",
    },
    {
      name: "LangChain",
      icon: PythonOriginal,
      category: "AI/ML",
      description: "LLM application development and AI integration",
    },
    {
      name: "Streamlit",
      icon: PythonOriginal,
      category: "Web Development",
      description: "Rapid web application development for data science",
    },
    {
      name: "Dash",
      icon: PythonOriginal,
      category: "Visualization",
      description: "Interactive web applications for data visualization",
    },
    {
      name: "D3.js",
      icon: D3jsOriginal,
      category: "Visualization",
      description: "Data-driven document manipulation and visualization",
    },
    {
      name: "Matplotlib",
      icon: PythonOriginal,
      category: "Data Science",
      description: "Python plotting and data visualization library",
    },
  ];