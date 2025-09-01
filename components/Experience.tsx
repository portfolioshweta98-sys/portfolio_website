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
  GraduationCapIcon,
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

  // data for timeline
  const data = [
    {
      title: "Graduate Assistant",
      image: "/Exp 1.png",
      content: (
        <div key={0} className="group relative w-full">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-lg sm:rounded-2xl 
                   border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                   p-3 sm:p-5 md:p-6 transition-all duration-500 
                   hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(147,51,234,0.25)] w-full"
          >
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <MapPinIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <p className="text-[10px] sm:text-sm font-medium text-purple-200 break-words">
                      New York University, New York, NY
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <CalendarIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-purple-300 bg-gradient-to-r from-purple-900/60 to-purple-800/40 px-2 sm:px-3 py-1 rounded-full border border-purple-500/30">
                      Feb 2025 – Present
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 sm:mb-6 px-1 sm:px-2">
              <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left leading-relaxed">
                Assist faculty with academic tasks and partner with Graduate
                Advising Manager on student projects.
              </p>
            </div>

            {/* Enhanced Show More Button - Full width on mobile */}
            <div className="flex justify-center">
              <button
                onClick={() => toggleExpanded(1)}
                className="group/btn flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full
                     bg-gradient-to-r from-purple-600/20 to-purple-700/20 
                     hover:from-purple-600/30 hover:to-purple-700/30 
                     border border-purple-500/40 hover:border-purple-400/60
                     transition-all duration-300 hover:scale-105 
                     shadow-[0_4px_12px_rgba(147,51,234,0.2)] hover:shadow-[0_6px_16px_rgba(147,51,234,0.3)]
                     w-full sm:w-auto"
              >
                <span className="text-xs sm:text-sm font-medium text-purple-300 group-hover/btn:text-purple-200 transition-colors duration-300">
                  {expandedItems.includes(1) ? "Show Less" : "Show Details"}
                </span>
                <div className="p-1 rounded-full bg-purple-500/30 group-hover/btn:bg-purple-500/40 transition-all duration-300">
                  {expandedItems.includes(1) ? (
                    <ChevronUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110" />
                  ) : (
                    <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110 group-hover/btn:translate-y-0.5" />
                  )}
                </div>
              </button>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-y-auto transition-all duration-700 ease-in-out custom-scrollbar ${
                expandedItems.includes(1)
                  ? "max-h-96 opacity-100 mt-4 sm:mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <div
                  className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 p-3 sm:p-4 rounded-xl 
                          bg-gradient-to-r from-purple-900/30 to-purple-800/20
                          hover:from-purple-900/40 hover:to-purple-800/30 
                          transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                  <span className="leading-relaxed">
                    Assist faculty with academic tasks including proofreading
                    research, presentations, managing course content, and
                    grading
                  </span>
                </div>
                <div
                  className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 p-3 sm:p-4 rounded-xl 
                          bg-gradient-to-r from-purple-900/30 to-purple-800/20
                          hover:from-purple-900/40 hover:to-purple-800/30 
                          transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                  <span className="leading-relaxed">
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
      title: "Master of Computer Science",
      image: "/Exp 1.png",
      content: (
        <div key={1} className="group relative w-full">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-lg sm:rounded-2xl 
                   border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] 
                   p-3 sm:p-5 md:p-6 transition-all duration-500 
                   hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] w-full"
          >
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                      <MapPinIcon className="w-3 h-3 text-blue-400" />
                    </div>
                    <p className="text-[10px] sm:text-sm font-medium text-blue-200 break-words">
                      New York University, New York, NY
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                      <CalendarIcon className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-blue-300 bg-gradient-to-r from-blue-900/60 to-blue-800/40 px-2 sm:px-3 py-1 rounded-full border border-blue-500/30">
                      2024 – 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 sm:mb-6 px-1 sm:px-2">
              <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left leading-relaxed">
                Currently pursuing Master&apos;s degree in Computer Science with
                a focus on AI/ML and software engineering.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI Intern (Summer Internship)",
      image: "/Exp 2.jpg",
      content: (
        <div key={2} className="group relative w-full">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-lg sm:rounded-2xl 
                   border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                   p-3 sm:p-5 md:p-6 transition-all duration-500 
                   hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(147,51,234,0.25)] w-full"
          >
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <MapPinIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <p className="text-[10px] sm:text-sm font-medium text-purple-200 break-words">
                      GEP Worldwide, Clark, NJ
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <CalendarIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-purple-300 bg-gradient-to-r from-purple-900/60 to-purple-800/40 px-2 sm:px-3 py-1 rounded-full border border-purple-500/30">
                      May 2025 – Aug 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-4 sm:mb-6 px-1 sm:px-2">
              <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left leading-relaxed">
                Integrated LLM solutions through LangChain and agentic AI
                workflows, automated contract insights retrieval.
              </p>
            </div>

            {/* Show More Button */}
            <div className="flex justify-center">
              <button
                onClick={() => toggleExpanded(3)}
                className="group/btn flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full
                     bg-gradient-to-r from-purple-600/20 to-purple-700/20 
                     hover:from-purple-600/30 hover:to-purple-700/30 
                     border border-purple-500/40 hover:border-purple-400/60
                     transition-all duration-300 hover:scale-105 
                     shadow-[0_4px_12px_rgba(147,51,234,0.2)] hover:shadow-[0_6px_16px_rgba(147,51,234,0.3)]
                     w-full sm:w-auto"
              >
                <span className="text-xs sm:text-sm font-medium text-purple-300 group-hover/btn:text-purple-200 transition-colors duration-300">
                  {expandedItems.includes(3) ? "Show Less" : "Show Details"}
                </span>
                <div className="p-1 rounded-full bg-purple-500/30 group-hover/btn:bg-purple-500/40 transition-all duration-300">
                  {expandedItems.includes(3) ? (
                    <ChevronUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110" />
                  ) : (
                    <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110 group-hover/btn:translate-y-0.5" />
                  )}
                </div>
              </button>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-y-auto transition-all duration-700 ease-in-out custom-scrollbar ${
                expandedItems.includes(3)
                  ? "max-h-[600px] opacity-100 mt-4 sm:mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <div
                  className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 p-3 sm:p-4 rounded-xl 
                          bg-gradient-to-r from-purple-900/30 to-purple-800/20
                          hover:from-purple-900/40 hover:to-purple-800/30 
                          transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                  <span className="leading-relaxed">
                    Integrated LLM solutions through LangChain and agentic AI
                    workflows by designing modular pipelines and test cases
                    aimed at improving contract lifecycle management
                    functionality in the GEP SMART procurement platform
                  </span>
                </div>
                <div
                  className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 p-3 sm:p-4 rounded-xl 
                          bg-gradient-to-r from-purple-900/30 to-purple-800/20
                          hover:from-purple-900/40 hover:to-purple-800/30 
                          transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                  <span className="leading-relaxed">
                    Built monitoring pipelines for telemetry data by collecting
                    performance logs, setting up dashboards, and configuring
                    alert triggers to establish more reliable feedback loops for
                    compliance and system stability
                  </span>
                </div>
                <div
                  className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 p-3 sm:p-4 rounded-xl 
                          bg-gradient-to-r from-purple-900/30 to-purple-800/20
                          hover:from-purple-900/40 hover:to-purple-800/30 
                          transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
                  <span className="leading-relaxed">
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
      title: "Senior Software Engineer",
      image: "/Exp 2.jpg",
      content: (
        <div key={3} className="group relative">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
               border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
               p-4 sm:p-5 md:p-6 transition-all duration-500 
               hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(147,51,234,0.25)] w-full"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
              <div className="flex-1 min-w-0 text-center sm:text-left">
                {/* Location */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-3 justify-center sm:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <MapPinIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-purple-200 break-words text-center sm:text-left">
                      GEP Worldwide, India
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 justify-center sm:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <CalendarIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-xs text-purple-300 bg-gradient-to-r from-purple-900/60 to-purple-800/40 px-3 py-1.5 rounded-full border border-purple-500/30">
                      Aug 2020 – Aug 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-6 px-2">
              <p className="text-sm text-gray-300 leading-relaxed text-center sm:text-left">
                Mentored junior engineers, integrated APIs, and spearheaded
                Git/GitHub workflows with CI/CD pipelines.
              </p>
            </div>

            {/* Show More Button */}
            <div className="flex justify-center">
              <button
                onClick={() => toggleExpanded(4)}
                className="group/btn flex items-center gap-3 px-6 py-3 rounded-full
                   bg-gradient-to-r from-purple-600/20 to-purple-700/20 
                   hover:from-purple-600/30 hover:to-purple-700/30 
                   border border-purple-500/40 hover:border-purple-400/60
                   transition-all duration-300 hover:scale-105 
                   shadow-[0_4px_15px_rgba(147,51,234,0.2)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.3)]"
              >
                <span className="text-sm font-medium text-purple-300 group-hover/btn:text-purple-200 transition-colors duration-300">
                  {expandedItems.includes(4) ? "Show Less" : "Show Details"}
                </span>
                <div className="p-1 rounded-full bg-purple-500/30 group-hover/btn:bg-purple-500/40 transition-all duration-300">
                  {expandedItems.includes(4) ? (
                    <ChevronUpIcon className="w-4 h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110 group-hover/btn:translate-y-0.5" />
                  )}
                </div>
              </button>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-y-auto transition-all duration-700 ease-in-out custom-scrollbar ${
                expandedItems.includes(4)
                  ? "max-h-[600px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-purple-500/30 pt-6 space-y-4">
                {[
                  "Mentored junior engineers in building solutions for GEP SMART on Azure via sprint-based coaching and code reviews, improving processing efficiency by 10% and reducing operational costs by 10%.",
                  "Integrated APIs across REST, MVC, WCF, and Web API frameworks while optimizing SQL queries for 30% faster responses.",
                  "Spearheaded Git/GitHub workflows and automated Azure CI/CD pipelines, cutting manual deployment steps and boosting release productivity by 25%.",
                  "Enhanced search and analytics with Elasticsearch and Kibana by tuning index mappings and query structures, improving responsiveness and dashboard efficiency by 5%.",
                  "Earned a Kudos Certificate for shortening release cycles by 25% and raising client satisfaction by 20%.",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 text-sm text-gray-300 p-4 rounded-xl 
                      bg-gradient-to-r from-purple-900/30 to-purple-800/20
                      hover:from-purple-900/40 hover:to-purple-800/30 
                      transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30 text-left sm:text-left"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
                    <span className="leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Machine Learning Intern",
      image: "/Exp 3.png",
      content: (
        <div key={4} className="group relative">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
               border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] 
               p-4 sm:p-5 md:p-6 transition-all duration-500 
               hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(147,51,234,0.25)] w-full"
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-3">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <div className="p-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <MapPinIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-purple-200 break-words">
                      BARC & Study League IT Solutions, India
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <div className="p-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <CalendarIcon className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-xs text-purple-300 bg-gradient-to-r from-purple-900/60 to-purple-800/40 px-3 py-1.5 rounded-full border border-purple-500/30">
                      May 2019 – June 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-6 px-2 text-center sm:text-left">
              <p className="text-sm text-gray-300 leading-relaxed">
                Designed ML models for network anomaly detection, developed
                automated WhatsApp broadcasting systems.
              </p>
            </div>

            {/* Enhanced Show More Button - Centered */}
            <div className="flex justify-center">
              <button
                onClick={() => toggleExpanded(4)}
                className="group/btn flex items-center gap-3 px-6 py-3 rounded-full
                   bg-gradient-to-r from-purple-600/20 to-purple-700/20 
                   hover:from-purple-600/30 hover:to-purple-700/30 
                   border border-purple-500/40 hover:border-purple-400/60
                   transition-all duration-300 hover:scale-105 
                   shadow-[0_4px_15px_rgba(147,51,234,0.2)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.3)]"
              >
                <span className="text-sm font-medium text-purple-300 group-hover/btn:text-purple-200 transition-colors duration-300">
                  {expandedItems.includes(4) ? "Show Less" : "Show Details"}
                </span>
                <div className="p-1 rounded-full bg-purple-500/30 group-hover/btn:bg-purple-500/40 transition-all duration-300">
                  {expandedItems.includes(4) ? (
                    <ChevronUpIcon className="w-4 h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-purple-300 transition-all duration-300 transform group-hover/btn:scale-110 group-hover/btn:translate-y-0.5" />
                  )}
                </div>
              </button>
            </div>

            {/* Expandable Content */}
            <div
              className={` ${expandedItems.includes(
                4
              )} ?overflow-y-auto:overflow-hidden transition-all duration-700 ease-in-out custom-scrollbar ${
                expandedItems.includes(4)
                  ? "max-h-[600px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* Scrollable section */}
              <div className="border-t border-purple-500/30 pt-6 space-y-4 max-h-[400px] overflow-y-auto px-3 sm:px-2 custom-scrollbar text-center sm:text-left">
                {[
                  "Designed machine learning models for network anomaly detection using Python and R with Elasticsearch for data storage, followed by validating results against historical log files to increase detection accuracy by 15%",
                  "Optimized algorithms by tuning hyperparameters and experimenting with Isolation Forest, Support Vector Machines, and K-Means Clustering, bringing about a 20% reduction in false positives as measured against benchmark datasets",
                  "Developed an automated WhatsApp broadcasting system using Selenium scripts that handled multimedia messages/attachments",
                  "Utilized Python and Selenium WebDriver to automate broadcasting workflows that cut manual sending time by 50%",
                  "Designed Python scripts for contact management that increased messaging efficiency by 40% and reduced delays by 50%",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 text-sm text-gray-300 p-4 rounded-xl 
                      bg-gradient-to-r from-purple-900/30 to-purple-800/20
                      hover:from-purple-900/40 hover:to-purple-800/30 
                      transition-all duration-300 border border-purple-500/20 hover:border-purple-500/30 text-center sm:text-left"
                  >
                    <div className="mx-auto sm:mx-0 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
                    <span className="leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Bachelor of Computer Engineering",
      image: "/Exp 4.jpg",
      content: (
        <div key={5} className="group relative w-full">
          {/* Main Card */}
          <div
            className="bg-black-200 backdrop-blur-xl rounded-xl sm:rounded-2xl 
                   border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] 
                   p-4 sm:p-5 md:p-6 transition-all duration-500 
                   hover:-translate-y-2 hover:border-green-400/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] 
                   w-full max-h-[300px] overflow-y-auto"
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                      <MapPinIcon className="w-3 h-3 text-green-400" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-green-200 break-words">
                      SIES Graduate School of Technology, University of Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                      <CalendarIcon className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-xs text-green-300 bg-gradient-to-r from-green-900/60 to-green-800/40 px-3 py-1.5 rounded-full border border-green-500/30">
                      2016 – 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-6 px-2">
              <p className="text-sm text-gray-300 text-center sm:text-left leading-relaxed">
                Completed Bachelor&apos;s degree in Computer Engineering with
                strong foundation in software development.
              </p>
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
