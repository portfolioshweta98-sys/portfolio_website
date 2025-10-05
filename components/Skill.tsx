"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { skills } from "@/data/skills";


interface SkillIconProps {
  skill: Skill;
  index: number;
  isSelected: boolean;
  isVisible: boolean;
}

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  category: string;
  description: string;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  // Enhanced skills list with categories and descriptions


  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  // Animate skills on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimatedSkills(filteredSkills);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const SkillIcon: React.FC<SkillIconProps> = ({
    skill,
    index,
    isSelected,
    isVisible,
  }) => {
    const IconComponent = skill.icon;

    return (
      <div
        className={cn(
          "flex flex-col items-center space-y-4 p-3 group transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{
          animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
          animationDelay: `${index * 0.1}s`,
          transitionDelay: `${index * 0.05}s`,
        }}
      >
        {/* Clean icon container with blue background for selected */}
        <div
          className={cn(
            "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center rounded-2xl transition-all duration-300 transform",
            isSelected
              ? "bg-secondary scale-110"
              : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-[#0077B6]/20 group-hover:border-[#0077B6]/30"
          )}
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
            <IconComponent
              size="100%"
              color="currentColor"
              className={cn(
                "w-full h-full transition-colors duration-300",
                isSelected
                  ? "text-white"
                  : "text-[#0077B6] group-hover:text-[#0056b3]"
              )}
            />
          </div>
        </div>

        {/* Skill name with enhanced styling */}
        <span
          className={cn(
            "text-xs sm:text-sm font-medium text-center leading-tight transition-all duration-300 px-2 py-1 rounded-md",
            
          )}
        >
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        @keyframes skill-enter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Enhanced background grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.05)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        )}
      />

      {/* Enhanced floating glow orbs */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/8 rounded-full blur-2xl md:blur-3xl animate-pulse" />
      <div
        className="absolute bottom-16 right-20 md:bottom-32 md:right-40 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-[#0077B6]/8 to-[#B0BEC5]/6 rounded-full blur-2xl md:blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-8 md:left-16 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-[#0077B6]/8 to-[#B0BEC5]/6 rounded-full blur-xl md:blur-2xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      {/* Main content */}
      <div className="relative z-10 py-10 md:py-16 lg:py-20 px-4">
        {/* Enhanced title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
            Skills & Technologies
          </h2>
        </div>

        {/* Category filter - responsive */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex flex-wrap gap-2 md:gap-4 bg-white/10 rounded-full p-3 max-w-full overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsVisible(false);
                  setTimeout(() => setIsVisible(true), 100);
                }}
                className={cn(
                  "px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0",
                  selectedCategory === category
                    ? "bg-secondary text-white shadow-lg"
                    : "text-primary dark:text-gray-300 hover:bg-white/20 hover:text-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid with enhanced animations */}
        <div className="flex justify-start">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl">
            {filteredSkills.map((skill, index) => (
              <SkillIcon
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
                isSelected={false}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
