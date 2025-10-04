import { useState } from "react";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  CalendarIcon,
  MapPinIcon,
} from "lucide-react";
import type { ExperienceItem } from "../data/experience";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div key={index} className="group relative w-full">
      <div
        className="bg-[#F5F5F5] backdrop-blur-xl rounded-lg sm:rounded-2xl 
               border border-[#0077B6]/30 shadow-[0_0_20px_rgba(0,119,182,0.15)] 
               p-3 sm:p-5 md:p-6 transition-all duration-500 
               hover:-translate-y-2 hover:border-[#0077B6]/60 hover:shadow-[0_0_30px_rgba(0,119,182,0.25)] w-full"
      >
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#0077B6]/20 border border-[#0077B6]/30">
                  <MapPinIcon className="w-3 h-3 text-[#0077B6]" />
                </div>
                <p className="text-[10px] sm:text-sm font-medium text-[#212121] break-words">
                  {experience.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#0077B6]/20 border border-[#0077B6]/30">
                  <CalendarIcon className="w-3 h-3 text-[#0077B6]" />
                </div>
                <span className="text-[10px] sm:text-xs text-[#212121] bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/10 px-2 sm:px-3 py-1 rounded-full border border-[#0077B6]/30">
                  {experience.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 px-1 sm:px-2">
          <p className="text-xs sm:text-sm text-[#212121] text-center sm:text-left leading-relaxed">
            {experience.description}
          </p>
        </div>

        {experience.details && (
          <>
            <div className="flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
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

            <div
              className={`overflow-y-auto transition-all duration-700 ease-in-out custom-scrollbar ${
                isExpanded
                  ? "max-h-[600px] opacity-100 mt-4 sm:mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-[#0077B6]/30 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                {experience.details.map((detail, detailIndex) => (
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
          </>
        )}
      </div>
    </div>
  );
};
