import React from "react";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Feb 2025 – Present",
      content: (
        <div key={1}>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Graduate Assistant
          </h3>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            New York University, New York, NY
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-blue-500 mt-1">•</span>
              <span>Assist faculty with academic tasks including proofreading research, presentations, managing course content, and grading</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-blue-500 mt-1">•</span>
              <span>Partner with the Graduate Advising Manager on student projects, such as peer mentorship programs and academic workshops</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2025 – Aug 2025",
      content: (
        <div key={2}>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            AI Intern (Summer Internship)
          </h3>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            GEP Worldwide, Clark, NJ
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-green-500 mt-1">•</span>
              <span>Integrated LLM solutions through LangChain and agentic AI workflows by designing modular pipelines and test cases aimed at improving contract lifecycle management functionality in the GEP SMART procurement platform</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-green-500 mt-1">•</span>
              <span>Built monitoring pipelines for telemetry data by collecting performance logs, setting up dashboards, and configuring alert triggers to establish more reliable feedback loops for compliance and system stability</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-green-500 mt-1">•</span>
              <span>Automated contract insights retrieval using parsing logic and NLP models to reduce manual review time by 40%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2020 – Aug 2024",
      content: (
        <div key={3}>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Senior Software Engineer/Software Engineer/Associate Software Engineer
          </h3>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            GEP Worldwide, India
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Mentored junior engineers in building solutions for GEP SMART on Azure via sprint-based coaching sessions and code reviews that improved processing efficiency by 10% and cut operational costs by 10% based on quarterly system usage</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Integrated APIs across REST, MVC, WCF, and Web API frameworks, and optimized SQL queries for 30% faster responses</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Spearheaded the implementation of Git/GitHub workflows and automated Azure CI/CD pipelines that led to a reduction in manual deployment steps, increased release productivity by 25%, and cut deployment errors tracked in JIRA</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Enhanced search and analytics with Elasticsearch and Kibana by tuning index mappings and query structures, thus delivering gains in system responsiveness and a 5% efficiency increase in operational dashboards used by client teams</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Received a Kudos Certificate for enhancements such as shortening release cycles by 25% and improving satisfaction by 20%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2019 – June 2019",
      content: (
        <div key={4}>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Machine Learning Intern
          </h3>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            Bhabha Atomic Research Center (BARC), India
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-orange-500 mt-1">•</span>
              <span>Designed machine learning models for network anomaly detection using Python and R with Elasticsearch for data storage, followed by validating results against historical log files to increase detection accuracy by 15%</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-orange-500 mt-1">•</span>
              <span>Optimized algorithms by tuning hyperparameters and experimenting with Isolation Forest, Support Vector Machines, and K-Means Clustering, bringing about a 20% reduction in false positives as measured against benchmark datasets</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2 mt-6">
            Machine Learning Intern
          </h3>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            Study League IT Solutions Pvt Ltd, India
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-red-500 mt-1">•</span>
              <span>Developed an automated WhatsApp broadcasting system using Selenium scripts that handled multimedia messages/attachments</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-red-500 mt-1">•</span>
              <span>Utilized Python and Selenium WebDriver to automate broadcasting workflows that cut manual sending time by 50%</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <span className="text-red-500 mt-1">•</span>
              <span>Designed Python scripts for contact management that increased messaging efficiency by 40% and reduced delays by 50%</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip bg-b">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;