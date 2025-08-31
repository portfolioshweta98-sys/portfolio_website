"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Timeline } from "./ui/timeline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reusable decorative objects configuration
  const decorativeObjects = [
    {
      id: 1,
      className:
        "absolute -top-10 left-1/4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse",
      delay: 0,
    },
    {
      id: 2,
      className:
        "absolute -top-16 right-1/3 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rotate-45 blur-lg animate-pulse",
      delay: 1000,
    },
    {
      id: 3,
      className:
        "absolute top-5 left-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-lg blur-md animate-pulse",
      delay: 2000,
    },
    {
      id: 4,
      className:
        "absolute top-32 left-10 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 blur-3xl animate-pulse",
      delay: 0,
    },
    {
      id: 5,
      className:
        "absolute bottom-32 right-16 w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-r from-purple-600/8 to-pink-500/8 blur-3xl animate-pulse",
      delay: 1000,
    },
    {
      id: 6,
      className:
        "absolute top-1/2 right-1/4 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-purple-400/8 to-blue-400/8 blur-2xl animate-pulse",
      delay: 2000,
    },
  ];

  const data = [
    {
      title: "Feb 2025 – Present",
      content: (
        <div key={1} className="group relative w-full">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
                       border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                       p-3 sm:p-4 md:p-6 transition-all duration-500 
                       hover:-translate-y-1 hover:border-purple-400/50 w-full"
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
              {/* Company Image */}
              <div
                className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl overflow-hidden 
                            bg-gradient-to-br from-purple-500/30 to-violet-500/30 flex-shrink-0 mx-auto sm:mx-0
                            shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105
                            border-2 border-purple-400/40"
              >
                <Image
                  src="/Exp 1.png"
                  alt="New York University"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1024px) 64px, 80px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 mb-2">
                  <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                  <h3
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white 
                               group-hover:text-purple-300 transition-colors duration-300 break-words"
                  >
                    Graduate Assistant
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 mb-1">
                  <MapPinIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-purple-200 break-words">
                    New York University, New York, NY
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <CalendarIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-purple-300 bg-purple-900/40 px-2 py-1 rounded-full">
                    Feb 2025 – Present
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 px-2 sm:px-0 sm:pl-0 md:pl-20">
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 text-center sm:text-left">
                Assist faculty with academic tasks and partner with Graduate
                Advising Manager on student projects...
              </p>
            </div>

            {/* Show More Button */}
            <button
              onClick={() => toggleExpanded(1)}
              className="w-full flex items-center justify-between p-2 sm:p-3 rounded-lg
                       bg-purple-900/30 hover:bg-purple-900/40 border border-purple-500/30
                       transition-all duration-300 group/btn"
            >
              <span className="text-xs sm:text-sm font-medium text-purple-300 group-hover/btn:text-purple-200">
                {expandedItems.includes(1) ? "Show Less" : "Show More Details"}
              </span>
              {expandedItems.includes(1) ? (
                <ChevronUpIcon className="w-4 h-4 text-purple-400 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover/btn:translate-y-1" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedItems.includes(1)
                  ? "max-h-96 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-4 space-y-3">
                <div
                  className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                              hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span>
                    Assist faculty with academic tasks including proofreading
                    research, presentations, managing course content, and
                    grading
                  </span>
                </div>
                <div
                  className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                              hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span>
                    Partner with the Graduate Advising Manager on student
                    projects, such as peer mentorship programs and academic
                    workshops
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2025 – Aug 2025",
      content: (
        <div key={2} className="group relative">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
                       border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                       p-3 sm:p-4 md:p-6 transition-all duration-500 
                       hover:-translate-y-1 hover:border-purple-400/50 w-full"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
              {/* Company Image */}
              <div
                className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden 
                            bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex-shrink-0
                            shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105
                            border-2 border-purple-400/40"
              >
                <Image
                  src="/Exp 2.jpg"
                  alt="GEP Worldwide"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex items-center gap-2 mb-2">
                  <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <h3
                    className="text-base sm:text-lg lg:text-xl font-bold text-white 
                               group-hover:text-purple-300 transition-colors duration-300 truncate"
                  >
                    AI Intern (Summer Internship)
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <MapPinIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-purple-200 truncate">
                    GEP Worldwide, Clark, NJ
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-purple-300 bg-purple-900/40 px-2 py-1 rounded-full">
                    May 2025 – Aug 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 pl-0 sm:pl-16 lg:pl-24">
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                Integrated LLM solutions through LangChain and agentic AI
                workflows, automated contract insights retrieval...
              </p>
            </div>

            {/* Show More Button */}
            <button
              onClick={() => toggleExpanded(2)}
              className="w-full flex items-center justify-between p-2 sm:p-3 rounded-lg
                       bg-purple-900/30 hover:bg-purple-900/40 border border-purple-500/30
                       transition-all duration-300 group/btn"
            >
              <span className="text-xs sm:text-sm font-medium text-purple-300 group-hover/btn:text-purple-200">
                {expandedItems.includes(2) ? "Show Less" : "Show More Details"}
              </span>
              {expandedItems.includes(2) ? (
                <ChevronUpIcon className="w-4 h-4 text-purple-400 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover/btn:translate-y-1" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedItems.includes(2)
                  ? "max-h-[500px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-4 space-y-3">
                <div
                  className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                              hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span>
                    Integrated LLM solutions through LangChain and agentic AI
                    workflows by designing modular pipelines and test cases
                    aimed at improving contract lifecycle management
                    functionality in the GEP SMART procurement platform
                  </span>
                </div>
                <div
                  className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                              hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span>
                    Built monitoring pipelines for telemetry data by collecting
                    performance logs, setting up dashboards, and configuring
                    alert triggers to establish more reliable feedback loops for
                    compliance and system stability
                  </span>
                </div>
                <div
                  className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                              hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span>
                    Automated contract insights retrieval using parsing logic
                    and NLP models to reduce manual review time by 40%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2020 – Aug 2024",
      content: (
        <div key={3} className="group relative">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
                       border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                       p-3 sm:p-4 md:p-6 transition-all duration-500 
                       hover:-translate-y-1 hover:border-purple-400/50 w-full"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
              {/* Company Image */}
              <div
                className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden 
                            bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex-shrink-0
                            shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105
                            border-2 border-purple-400/40"
              >
                <Image
                  src="/Exp 2.jpg"
                  alt="GEP Worldwide"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex items-center gap-2 mb-2">
                  <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <h3
                    className="text-base sm:text-lg lg:text-xl font-bold text-white 
                               group-hover:text-purple-300 transition-colors duration-300 truncate"
                  >
                    Senior Software Engineer
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <MapPinIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-purple-200 truncate">
                    GEP Worldwide, India
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-purple-300 bg-purple-900/40 px-2 py-1 rounded-full">
                    Aug 2020 – Aug 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 pl-0 sm:pl-16 lg:pl-24">
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                Mentored junior engineers, integrated APIs, spearheaded
                Git/GitHub workflows and CI/CD pipelines...
              </p>
            </div>

            {/* Show More Button */}
            <button
              onClick={() => toggleExpanded(3)}
              className="w-full flex items-center justify-between p-2 sm:p-3 rounded-lg
                       bg-purple-900/30 hover:bg-purple-900/40 border border-purple-500/30
                       transition-all duration-300 group/btn"
            >
              <span className="text-xs sm:text-sm font-medium text-purple-300 group-hover/btn:text-purple-200">
                {expandedItems.includes(3) ? "Show Less" : "Show More Details"}
              </span>
              {expandedItems.includes(3) ? (
                <ChevronUpIcon className="w-4 h-4 text-purple-400 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover/btn:translate-y-1" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedItems.includes(3)
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-4 space-y-3">
                {[
                  "Mentored junior engineers in building solutions for GEP SMART on Azure via sprint-based coaching sessions and code reviews that improved processing efficiency by 10% and cut operational costs by 10% based on quarterly system usage",
                  "Integrated APIs across REST, MVC, WCF, and Web API frameworks, and optimized SQL queries for 30% faster responses",
                  "Spearheaded the implementation of Git/GitHub workflows and automated Azure CI/CD pipelines that led to a reduction in manual deployment steps, increased release productivity by 25%, and cut deployment errors tracked in JIRA",
                  "Enhanced search and analytics with Elasticsearch and Kibana by tuning index mappings and query structures, thus delivering gains in system responsiveness and a 5% efficiency increase in operational dashboards used by client teams",
                  "Received a Kudos Certificate for enhancements such as shortening release cycles by 25% and improving satisfaction by 20%",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                                           hover:bg-purple-900/30 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2019 – June 2019",
      content: (
        <div key={4} className="group relative">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
                       border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                       p-3 sm:p-4 md:p-6 transition-all duration-500 
                       hover:-translate-y-1 hover:border-purple-400/50 w-full"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
              {/* Company Image */}
              <div
                className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden 
                            bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex-shrink-0
                            shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105
                            border-2 border-purple-400/40"
              >
                <Image
                  src="/Exp 3.png"
                  alt="BARC & Study League"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex items-center gap-2 mb-2">
                  <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <h3
                    className="text-base sm:text-lg lg:text-xl font-bold text-white 
                               group-hover:text-purple-300 transition-colors duration-300 truncate"
                  >
                    Machine Learning Intern
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <MapPinIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-purple-200 truncate">
                    BARC & Study League IT Solutions, India
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-3 h-3 text-purple-400 flex-shrink-0" />
                  <span className="text-xs text-purple-300 bg-purple-900/40 px-2 py-1 rounded-full">
                    May 2019 – June 2019
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 pl-0 sm:pl-16 lg:pl-24">
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                Designed ML models for network anomaly detection, developed
                automated WhatsApp broadcasting systems...
              </p>
            </div>

            {/* Show More Button */}
            <button
              onClick={() => toggleExpanded(4)}
              className="w-full flex items-center justify-between p-2 sm:p-3 rounded-lg
                       bg-purple-900/30 hover:bg-purple-900/40 border border-purple-500/30
                       transition-all duration-300 group/btn"
            >
              <span className="text-xs sm:text-sm font-medium text-purple-300 group-hover/btn:text-purple-200">
                {expandedItems.includes(4) ? "Show Less" : "Show More Details"}
              </span>
              {expandedItems.includes(4) ? (
                <ChevronUpIcon className="w-4 h-4 text-purple-400 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover/btn:translate-y-1" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedItems.includes(4)
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-4 space-y-3">
                {[
                  "Designed machine learning models for network anomaly detection using Python and R with Elasticsearch for data storage, followed by validating results against historical log files to increase detection accuracy by 15%",
                  "Optimized algorithms by tuning hyperparameters and experimenting with Isolation Forest, Support Vector Machines, and K-Means Clustering, bringing about a 20% reduction in false positives as measured against benchmark datasets",
                  "Developed an automated WhatsApp broadcasting system using Selenium scripts that handled multimedia messages/attachments",
                  "Utilized Python and Selenium WebDriver to automate broadcasting workflows that cut manual sending time by 50%",
                  "Designed Python scripts for contact management that increased messaging efficiency by 40% and reduced delays by 50%",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-2 sm:p-3 rounded-lg bg-purple-900/20
                                           hover:bg-purple-900/30 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-clip bg-black-100"
    >
      {/* Decorative Objects - Future Proof */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {decorativeObjects.map((obj) => (
          <div
            key={obj.id}
            className={obj.className}
            style={{ animationDelay: `${obj.delay}ms` }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="mx-2 sm:mx-3 md:mx-4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-purple-500 rounded-full animate-pulse" />
            <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4
                       bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 bg-clip-text text-transparent
                       leading-tight"
          >
            Education and Experience
          </h2>
        </div>
      </div>

      {/* Timeline Component */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experience;
