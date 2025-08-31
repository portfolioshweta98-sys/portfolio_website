"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  timeline: string;
  tags: string[];
  url: string;
  image: string;
}

const ProjectsSection = () => {
  const [progress, setProgress] = useState(0);
  const [animated, setAnimated] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Research-Net: Community Detection in Academic Papers",
      description:
        "Developed a Spark-based framework using semantic embeddings + weighted PageRank to analyze 5M+ academic papers, improving topic clustering accuracy by 35%.",
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
      url: "https://github.com/shwetashekhar98",
      image: "/project 2.jpg",
    },
    {
      id: 3,
      title: "Advanced Information Visualization for Stock Market Analysis",
      description:
        "Streamlit, Dash, D3.js, and Matplotlib tool for NYSE analysis; sentiment-based insights improved decision-making by 30%.",
      timeline: "Sept 2024 – Nov 2024",
      tags: ["Streamlit", "Dash", "D3.js", "Matplotlib"],
      url: "https://github.com/shwetashekhar98/InfoVizProject",
      image: "/project 3.jpg",
    },
  ];

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

  // calculate raw scroll progress
  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    const pct = (el.scrollLeft / max) * 100;
    setProgress(pct);
  };

  // easing animation: smoothly interpolate animated → progress
  useEffect(() => {
    const animate = () => {
      setAnimated((prev) => {
        const diff = progress - prev;
        return Math.abs(diff) < 0.05 ? progress : prev + diff * 0.12;
      });
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current || 0);
  }, [progress]);

  useEffect(() => {
    updateProgress();
  }, []);

  const R = 40;
  const C = 2 * Math.PI * R;

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 bg-black-100 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2
          className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12 
                      bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent
                      transition-all duration-1000 transform ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
        >
          Projects
        </h2>

        <div className="relative flex items-start sm:items-center gap-4 sm:gap-8 flex-col sm:flex-row">
          {/* Circular progress with enhanced animations */}
          <div
            className={`relative w-12 h-12 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0 mb-6 sm:mb-0
                          transition-all duration-1000 delay-300 transform ${
                            isVisible
                              ? "translate-y-0 opacity-100 scale-100"
                              : "translate-y-8 opacity-0 scale-90"
                          }`}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="transparent"
                strokeWidth="8"
                className="stroke-[#1a2440]"
              />
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="transparent"
                strokeWidth="8"
                strokeLinecap="round"
                className="stroke-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]
                          transition-all duration-300"
                strokeDasharray={C}
                strokeDashoffset={C - (animated / 100) * C}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          {/* Scrollable project cards with staggered entrance animations */}
          <div
            ref={scrollRef}
            onScroll={updateProgress}
            className={`w-full flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                       cursor-grab active:cursor-grabbing transition-all duration-1000 delay-500 ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-12 opacity-0"
                       }`}
          >
            {projects.map((p, index) => (
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={p.id}
                className="group"
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`min-w-[280px] sm:min-w-[340px] md:min-w-[440px] snap-start rounded-2xl
                           bg-[rgba(20,26,41,0.65)] backdrop-blur-xl
                           border border-purple-500/20 shadow-[0_0_20px_rgba(88,28,135,0.15)]
                           overflow-hidden hover:shadow-[0_0_40px_rgba(88,28,135,0.35)] 
                           transition-all duration-500 transform hover:-translate-y-2
                           ${hoveredCard === p.id ? "scale-105" : "scale-100"}
                           ${
                             isVisible
                               ? "translate-y-0 opacity-100"
                               : "translate-y-16 opacity-0"
                           }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${600 + index * 200}ms`
                      : "0ms",
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={`object-cover transition-all duration-700 transform
                                ${
                                  hoveredCard === p.id
                                    ? "scale-110 brightness-110"
                                    : "scale-100 brightness-90"
                                }`}
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 440px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Animated timeline badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-full
                                   bg-black/60 backdrop-blur-md border border-purple-500/40
                                   transition-all duration-300 transform
                                   ${
                                     hoveredCard === p.id
                                       ? "translate-y-0 opacity-100"
                                       : "translate-y-2 opacity-90"
                                   }`}
                    >
                      <p className="text-xs text-purple-300 font-medium">
                        {p.timeline}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 relative">
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-200
                                  transition-all duration-300 transform
                                  ${
                                    hoveredCard === p.id
                                      ? "translate-x-2 text-blue-100"
                                      : "translate-x-0"
                                  }`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed
                                 transition-all duration-300
                                 ${
                                   hoveredCard === p.id ? "text-gray-200" : ""
                                 }`}
                    >
                      {p.description}
                    </p>

                    {/* Animated tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {p.tags.map((t, i) => (
                        <span
                          key={i}
                          className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full
                                   bg-gradient-to-r from-blue-900/40 to-purple-900/40
                                   text-blue-200 border border-blue-800/30
                                   transition-all duration-300 transform hover:scale-105
                                   ${
                                     hoveredCard === p.id
                                       ? "bg-gradient-to-r from-blue-800/50 to-purple-800/50 border-blue-700/40"
                                       : ""
                                   }`}
                          style={{
                            transitionDelay:
                              hoveredCard === p.id ? `${i * 50}ms` : "0ms",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Hover arrow indicator */}
                    <div
                      className={`absolute bottom-4 right-4 transition-all duration-300 transform
                                   ${
                                     hoveredCard === p.id
                                       ? "translate-x-0 opacity-100"
                                       : "translate-x-4 opacity-0"
                                   }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
