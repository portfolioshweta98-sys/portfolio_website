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
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Research-Net: Community Detection in Academic Papers",
      description:
        "Developed a Spark-based framework using semantic embeddings + weighted PageRank to analyze 5M+ academic papers, improving topic clustering accuracy by 35%. This comprehensive solution involved implementing advanced machine learning algorithms, distributed computing techniques, and sophisticated data processing pipelines to handle massive datasets efficiently.",
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
      url: "https://github.com/shwetashekhar98/Foundation-of-Data-Science-Project.git",
      image: "/project 2.jpg",
    },
    {
      id: 3,
      title: "Advanced Information Visualization for Stock Market Analysis",
      description:
        "Streamlit, Dash, D3.js, and Matplotlib tool for NYSE analysis; sentiment-based insights improved decision-making by 30%. The project involved creating interactive dashboards, real-time data visualization, comprehensive market analysis tools, and integration with multiple data sources to provide actionable insights for traders and analysts.",
      timeline: "Sept 2024 – Nov 2024",
      tags: ["Streamlit", "Dash", "D3.js", "Matplotlib"],
      url: "https://github.com/shwetashekhar98/InfoVizProject",
      image: "/project 3.jpg",
    },
  ];

  // Responsive character limit based on screen size
  const getDescriptionLimit = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 80; // sm
      if (window.innerWidth < 768) return 100; // md
      return 120; // lg+
    }
    return 120;
  };

  const [descriptionLimit, setDescriptionLimit] = useState(120);

  // Update description limit on resize
  useEffect(() => {
    const handleResize = () => {
      setDescriptionLimit(getDescriptionLimit());
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle card expansion
  const toggleCardExpansion = (cardId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  // Function to get truncated or full description
  const getDisplayDescription = (project: Project) => {
    const isExpanded = expandedCards.has(project.id);
    const needsTruncation = project.description.length > descriptionLimit;

    if (!needsTruncation || isExpanded) {
      return project.description;
    }

    return project.description.substring(0, descriptionLimit) + "...";
  };

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
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#212121] text-[#F5F5F5] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 rounded-full bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/10 blur-xl animate-pulse" />
        <div className="absolute bottom-8 sm:bottom-20 right-8 sm:right-20 w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/10 blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-12 sm:w-24 h-12 sm:h-24 rounded-full bg-gradient-to-r from-[#0077B6]/10 to-[#B0BEC5]/10 blur-xl animate-pulse delay-2000" />
      </div>

      <div className="px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-[#0077B6] via-[#B0BEC5] to-[#0077B6] bg-clip-text text-transparent blur-sm scale-105 opacity-60" />
            <span className="relative bg-gradient-to-r from-[#0077B6] via-[#B0BEC5] to-[#0077B6] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,119,182,0.5)]">
              Projects
            </span>
          </h2>
        </div>

        <div className="relative flex items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 flex-col lg:flex-row">
          {/* Circular progress with enhanced animations */}
          <div
            className={`relative w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 flex-shrink-0 mx-auto lg:mx-0 mb-4 sm:mb-6 lg:mb-0
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
                strokeWidth="6"
                className="stroke-[#1a2440]"
              />
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="transparent"
                strokeWidth="6"
                strokeLinecap="round"
                className="stroke-[#0077B6] drop-shadow-[0_0_8px_rgba(0,119,182,0.6)]
                          transition-all duration-300"
                strokeDasharray={C}
                strokeDashoffset={C - (animated / 100) * C}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          {/* Scrollable project cards with enhanced responsive design */}
          <div
            ref={scrollRef}
            onScroll={updateProgress}
            className={`w-full flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 
                       cursor-grab active:cursor-grabbing transition-all duration-1000 delay-500
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-12 opacity-0"
                       }`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,119,182, 0.3) transparent",
            }}
          >
            {projects.map((p, index) => (
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={p.id}
                className="group flex-shrink-0"
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px] 
                           ${
                             expandedCards.has(p.id)
                               ? "h-auto min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] xl:min-h-[480px]"
                               : "h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[480px]"
                           }
                           snap-start rounded-xl sm:rounded-2xl
                           bg-[#2C2C2C]/65 backdrop-blur-xl
                           border border-[#0077B6]/20 shadow-[0_0_20px_rgba(0,119,182,0.15)]
                           overflow-hidden hover:shadow-[0_0_40px_rgba(0,119,182,0.35)] 
                           transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col
                           ${
                             hoveredCard === p.id
                               ? "scale-[1.02] sm:scale-105"
                               : "scale-100"
                           }
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
                  {/* Project Image - Fixed height with consistent ratios */}
                  <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 overflow-hidden flex-shrink-0">
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
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 380px, 420px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Animated timeline badge */}
                    <div
                      className={`absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full
                                   bg-[#212121]/60 backdrop-blur-md border border-[#0077B6]/40
                                   transition-all duration-300 transform
                                   ${
                                     hoveredCard === p.id
                                       ? "translate-y-0 opacity-100"
                                       : "translate-y-2 opacity-90"
                                   }`}
                    >
                      <p className="text-[10px] sm:text-xs text-[#0077B6] font-medium">
                        {p.timeline}
                      </p>
                    </div>
                  </div>

                  {/* Content - Fixed height with controlled overflow */}
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 relative flex-1 flex flex-col justify-between min-h-0">
                    <h3
                      className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#F5F5F5]
                                  transition-all duration-300 transform flex-shrink-0 leading-tight
                                  ${
                                    hoveredCard === p.id
                                      ? "translate-x-1 sm:translate-x-2 text-[#B0BEC5]"
                                      : "translate-x-0"
                                  }`}
                    >
                      {p.title}
                    </h3>

                    {/* Description with expandable functionality */}
                    <div
                      className={`flex-1 mb-2 ${
                        expandedCards.has(p.id)
                          ? "overflow-visible"
                          : "overflow-hidden"
                      }`}
                    >
                      <p
                        className={`text-[#B0BEC5] text-xs sm:text-sm leading-relaxed 
                                   ${
                                     expandedCards.has(p.id)
                                       ? ""
                                       : "line-clamp-3 sm:line-clamp-4 md:line-clamp-5"
                                   }
                                   transition-all duration-300
                                   ${
                                     hoveredCard === p.id
                                       ? "text-[#F5F5F5]"
                                       : ""
                                   }`}
                      >
                        {expandedCards.has(p.id)
                          ? p.description
                          : getDisplayDescription(p)}
                      </p>

                      {/* Read More/Less button */}
                      {p.description.length > descriptionLimit && (
                        <button
                          onClick={(e) => toggleCardExpansion(p.id, e)}
                          className="mt-1 text-[#0077B6] hover:text-[#005B8D] text-xs sm:text-sm 
                                   font-medium transition-colors duration-200 underline underline-offset-2
                                   hover:underline-offset-4 block"
                        >
                          {expandedCards.has(p.id) ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>

                    {/* Animated tags - Fixed at bottom with flex-shrink-0 */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto flex-shrink-0">
                      {p.tags.map((t, i) => (
                        <span
                          key={i}
                          className={`px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-full
                                   bg-gradient-to-r from-[#0077B6]/20 to-[#B0BEC5]/20
                                   text-[#F5F5F5] border border-[#0077B6]/30
                                   transition-all duration-300 transform hover:scale-105
                                   ${
                                     hoveredCard === p.id
                                       ? "bg-gradient-to-r from-[#0077B6]/30 to-[#B0BEC5]/30 border-[#0077B6]/40"
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

                    {/* Hover arrow indicator - Responsive sizing */}
                    <div
                      className={`absolute bottom-3 sm:bottom-4 right-3 sm:right-4 transition-all duration-300 transform
                                   ${
                                     hoveredCard === p.id
                                       ? "translate-x-0 opacity-100"
                                       : "translate-x-4 opacity-0"
                                   }`}
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#0077B6]/20 flex items-center justify-center">
                        <svg
                          className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#0077B6]"
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
