"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  timeline: string;
  tags: string[];
  url: string;
}

const ProjectsSection = () => {
  const [progress, setProgress] = useState(0);
  const [animated, setAnimated] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Research-Net: Community Detection in Academic Papers",
      description:
        "Developed a Spark-based framework using semantic embeddings + weighted PageRank to analyze 5M+ academic papers, improving topic clustering accuracy by 35%.",
      timeline: "Jan 2025 – May 2025",
      tags: ["Apache Spark", "Embeddings", "PageRank", "Data Science"],
      url: "https://github.com/shwetashekhar98/Big-Data-Project-Research-Net",
    },
    {
      id: 2,
      title: "Causal Impact of Weather on Food Delivery",
      description:
        "Bayesian modeling with PyMC + DAGs to study how weather/traffic affect delivery times; patterns informed logistics decisions and improved efficiency.",
      timeline: "Sept 2024 – Nov 2024",
      tags: ["PyMC", "Bayesian", "Pandas", "Causal Inference"],
      url: "https://github.com/shwetashekhar98",
    },
    {
      id: 3,
      title: "Advanced Information Visualization for Stock Market Analysis",
      description:
        "Streamlit, Dash, D3.js, and Matplotlib tool for NYSE analysis; sentiment-based insights improved decision-making by 30%.",
      timeline: "Sept 2024 – Nov 2024",
      tags: ["Streamlit", "Dash", "D3.js", "Matplotlib"],
      url: "https://github.com/shwetashekhar98/InfoVizProject",
    },
  ];

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
        return Math.abs(diff) < 0.1 ? progress : prev + diff * 0.08;
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
    <section className="w-full py-16 sm:py-20 bg-black-100 text-white">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl -z-10 group-hover/card:blur-2xl transition-all duration-500 will-change-transform" />
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="relative flex items-start sm:items-center gap-4 sm:gap-8 flex-col sm:flex-row">
          {/* Circular progress */}
          <div className="relative w-12 h-12 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0 mb-6 sm:mb-0">
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
                className="stroke-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                strokeDasharray={C}
                strokeDashoffset={C - (animated / 100) * C}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          {/* Scrollable project cards */}
          <div
            ref={scrollRef}
            onScroll={updateProgress}
            className="w-full flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                       cursor-grab active:cursor-grabbing"
          >
            {projects.map((p) => (
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={p.id}
              >
                <div
                  className="min-w-[260px] sm:min-w-[320px] md:min-w-[420px] snap-start rounded-2xl
                           bg-[rgba(20,26,41,0.65)] backdrop-blur-xl
                           border border-purple-500/20 shadow-[0_0_20px_rgba(88,28,135,0.15)]
                           p-4 sm:p-6 hover:shadow-[0_0_40px_rgba(88,28,135,0.35)] transition-shadow"
                >
                  <p className="text-xs sm:text-sm text-purple-300 mb-1 sm:mb-2">
                    {p.timeline}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-200">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-F1 sm:gap-2">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full
                                 bg-gradient-to-r from-blue-900/40 to-purple-900/40
                                 text-blue-200"
                      >
                        {t}
                      </span>
                    ))}
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
