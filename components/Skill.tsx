"use client";
import React from "react";
import { cn } from "@/lib/utils";

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

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
}

interface SkillIconProps {
  skill: Skill;
  index: number;
}

const Skills = () => {
  // Skills list
  const skills: Skill[] = [
    { name: "Python", icon: PythonOriginal },
    { name: "R", icon: ROriginal },
    { name: "Java", icon: JavaOriginal },
    { name: "SQL", icon: MysqlOriginal },
    { name: "Git", icon: GitOriginal },
    { name: "GitHub", icon: GithubOriginal },
    { name: "Azure DevOps", icon: AzureOriginal },
    { name: "Selenium", icon: SeleniumOriginal },
    { name: "WebDriver", icon: JavascriptOriginal },
    { name: "REST APIs", icon: Html5Original },
    { name: "MVC", icon: DotnetcoreOriginal },
    { name: "WCF", icon: DotnetcoreOriginal },
    { name: "Web API", icon: ReactOriginal },
    { name: "Database Engineering", icon: MysqlOriginal },
    { name: "Spark", icon: ApachesparkOriginal },
    { name: "Elasticsearch", icon: ElasticsearchOriginal },
    { name: "Kibana", icon: ElasticsearchOriginal },
    { name: "NumPy", icon: NumpyOriginal },
    { name: "TensorFlow", icon: TensorflowOriginal },
    { name: "PyMC", icon: PythonOriginal },
    { name: "LangChain", icon: PythonOriginal },
    { name: "Streamlit", icon: PythonOriginal },
    { name: "Dash", icon: PythonOriginal },
    { name: "D3.js", icon: D3jsOriginal },
    { name: "Matplotlib", icon: PythonOriginal },
  ];

  const SkillIcon: React.FC<SkillIconProps> = ({ skill, index }) => {
    const IconComponent = skill.icon;

    return (
      <div
        className="flex flex-col items-center space-y-3 p-2"
        style={{
          animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
          animationDelay: `${index * 0.2}s`,
        }}
      >
        {/* Animated icon container */}
        <div
          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center 
          rounded-full bg-gray-900/60 backdrop-blur-sm 
          transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
            <IconComponent
              size="100%"
              color="currentColor"
              className="w-full h-full text-blue-300"
            />
          </div>
        </div>

        {/* Skill name */}
        <span className="text-xs sm:text-sm font-medium text-blue-200 text-center leading-tight">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black-100">
      {/* Float animation */}
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
      `}</style>

      {/* Background grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.05)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating glow orbs */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/8 rounded-full blur-2xl md:blur-3xl animate-pulse" />
      <div
        className="absolute bottom-16 right-20 md:bottom-32 md:right-40 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-blue-500/8 to-purple-500/6 rounded-full blur-2xl md:blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-8 md:left-16 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-purple-400/8 to-blue-400/6 rounded-full blur-xl md:blur-2xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      {/* Title */}
      <div className="relative z-10 py-10 md:py-16 lg:py-20 px-4">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm scale-105 opacity-60" />
            <span className="relative bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
              Skills and Technologies
            </span>
          </h1>
        </div>

        {/* Skills grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl">
            {skills.map((skill, index) => (
              <SkillIcon key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
