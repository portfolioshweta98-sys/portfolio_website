"use client";

import React, { useState, useRef, useEffect } from "react";
import { Timeline } from "./ui/timeline";
import { experienceData, ExperienceItem } from "../data/experience";
import {
  MapPinIcon,
  CalendarIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "lucide-react";

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  exp,
  index,
  isExpanded,
  onToggle,
}) => {
  return (
    <div key={index} className="group relative w-full">
      <div
        className="bg-[#F5F5F5] backdrop-blur-xl rounded-lg sm:rounded-2xl 
                   border border-[#0077B6]/30 shadow-[0_0_20px_rgba(0,119,182,0.15)] 
                   p-3 sm:p-5 md:p-6 transition-all duration-500 
                   hover:-translate-y-2 hover:border-[#0077B6]/60 hover:shadow-[0_0_30px_rgba(0,119,182,0.25)] w-full"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
            {/* Location */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#0077B6]/20 border border-[#0077B6]/30">
                  <MapPinIcon className="w-3 h-3 text-[#0077B6]" />
                </div>
                <p className="text-[10px] sm:text-sm font-medium text-[#212121] break-words">
                  {exp.location}
                </p>
              </div>
            </div>
            {/* Date */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#0077B6]/20 border border-[#0077B6]/30">
                  <CalendarIcon className="w-3 h-3 text-[#0077B6]" />
                </div>
                <span className="text-[10px] sm:text-xs text-[#212121] bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/10 px-2 sm:px-3 py-1 rounded-full border border-[#0077B6]/30">
                  {exp.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4 sm:mb-6 px-1 sm:px-2">
          <p className="text-xs sm:text-sm text-[#212121] text-center sm:text-left leading-relaxed">
            {exp.description}
          </p>
        </div>

        {/* Show More Button (if there are details) */}
        {exp.details && (
          <div className="flex justify-center">
            <button
              onClick={() => onToggle(index)}
              className="group/btn flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full
                     bg-gradient-to-r from-[#0077B6]/20 to-[#B0BEC5]/20 
                     hover:from-[#0077B6]/30 hover:to-[#B0BEC5]/30 
                     border border-[#0077B6]/40 hover:border-[#0077B6]/60
                     transition-all duration-300 hover:scale-105 
                     shadow-[0_4px_12px_rgba(0,119,182,0.2)] hover:shadow-[0_6px_16px_rgba(0,119,182,0.3)]
                     w-full sm:w-auto"
            >
              <span className="text-xs sm:text-sm font-medium text-[#212121] group-hover/btn:text-[#0077B6] transition-colors duration-300">
                {isExpanded ? "Show Less" : "Show Details"}
              </span>
              <div className="p-1 rounded-full bg-[#0077B6]/30 group-hover/btn:bg-[#0077B6]/40 transition-all duration-300">
                {isExpanded ? (
                  <ChevronUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#212121] transition-all duration-300 transform group-hover/btn:scale-110" />
                ) : (
                  <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#212121] transition-all duration-300 transform group-hover/btn:scale-110 group-hover/btn:translate-y-0.5" />
                )}
              </div>
            </button>
          </div>
        )}

        {/* Expandable Content */}
        {exp.details && (
          <div
            className={`overflow-y-auto transition-all duration-700 ease-in-out custom-scrollbar ${
              isExpanded
                ? "max-h-96 opacity-100 mt-4 sm:mt-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-[#0077B6]/30 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              {exp.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm text-[#212121] p-3 sm:p-4 rounded-xl 
                          bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/10
                          hover:from-[#0077B6]/20 hover:to-[#B0BEC5]/20 
                          transition-all duration-300 border border-[#0077B6]/20 hover:border-[#0077B6]/30"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[#0077B6] to-[#B0BEC5] rounded-full mt-1 sm:mt-1.5 flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(0,119,182,0.6)]" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  // @ts-nocheck
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
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
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Reusable decorative objects configuration
  const decorativeObjects = [
    {
      id: 1,
      className:
        "absolute -top-10 left-1/4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#0077B6]/20 to-[#B0BEC5]/20 rounded-full blur-xl animate-pulse",
      delay: 0,
    },
    {
      id: 2,
      className:
        "absolute -top-16 right-1/3 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#0077B6]/20 to-[#B0BEC5]/20 rotate-45 blur-lg animate-pulse",
      delay: 1000,
    },
    {
      id: 3,
      className:
        "absolute top-5 left-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#0077B6]/20 to-[#B0BEC5]/20 rounded-lg blur-md animate-pulse",
      delay: 2000,
    },
  ];

  // Prepare timeline data
  const data = experienceData.map((exp, index) => ({
    title: exp.title,
    image: exp.image,
    content: (
      <ExperienceCard
        exp={exp}
        index={index}
        isExpanded={expandedItems.has(index)}
        onToggle={toggleExpanded}
      />
    ),
  }));

  return (
    <div
      ref={sectionRef}
      style={{ fontFamily: "var(--font-montserrat)" }}
      className="relative w-full"
    >
      {/* Decorative Objects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {decorativeObjects.map((obj) => (
          <div
            key={obj.id}
            className={obj.className}
            style={{ animationDelay: `${obj.delay}ms` }}
          />
        ))}
      </div>



      {/* Title */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
          Education and Experience
        </h2>
      </div>

      {/* Timeline Component */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experience;
