"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight-new";
import { TextRevealCard } from "./ui/text-reveal-card";
import HighlightItem from "./ui/HighlightItem";
import Image from "next/image";

import profile from "@/public/SHWETA.jpg";
import { highlights } from "@/data/highlights";

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const animatedTexts = useMemo(
    () => [
      "AI Intern @GEP",
      "MSCS @NYU",
      "Ex–Software Engineer",
      "Machine Learning & Data Science",
    ],
    []
  );

  const handleTextRotation = useCallback(() => {
    setCurrentText((prev) => (prev + 1) % animatedTexts.length);
  }, [animatedTexts.length]);

  useEffect(() => {
    setIsMounted(true);

    // Text rotation effect
    const interval = setInterval(handleTextRotation, 2000);

    return () => clearInterval(interval);
  }, [handleTextRotation]);

  const spotlightElements = useMemo(
    () =>
      isMounted && (
        <div>
          <Spotlight className="h-[500vh] w-[100vw] left-full" fill="#0077b6" />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="#0077b6"
          />
        </div>
      ),
    [isMounted]
  );

  const cardContent = useMemo(
    () => (
      <div className="relative space-y-4">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mt-2">
          {animatedTexts[currentText]}
        </h3>

        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-md mx-auto">
          Fusing inventive thinking with
          <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded-md">
            analytical precision
          </span>
          and to craft AI ,
          <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded-md">
            data solutions
          </span>{" "}
          that drive real-world results.
        </p>
      </div>
    ),
    [animatedTexts, currentText]
  );

  return (
    <div className="pb-10 pt-10 min-h-screen">
      {/* Spotlight */}
      {spotlightElements}

      {/* Background */}
      <div className="relative flex flex-col min-h-screen w-full justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(0,119,182,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,119,182,0.05)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          )}
          aria-hidden="true"
        />
        {/* Radial fade */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Top heading */}
          <div className="flex items-center justify-center sm:mb-6 lg:mb-8">
            <TextRevealCard
              text="Hi, I’m Shweta "
              revealText="Hi, I’m Shweta "
              className="hidden lg:block text-center"
            />
            <div className="text-center">
              {isMounted && (
                <div className="block lg:hidden mt-6 mb-2">
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#212121] tracking-wider">
                    <span className="bg-gradient-to-r from-[#0077B6] to-[#005B8D] bg-clip-text text-transparent">
                    Hi, I’m Shweta 
                    </span>
                  </h1>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-5">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212121] leading-tight">
              {animatedTexts[currentText]}
            </h3>
          </div>

          {/* Middle image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[600px] lg:h-[400px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
              <Image
                src={profile}
                alt="Shweta Shekhar"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Animated texts + fusing text */}
          <div className="mt-6 sm:mt-8 text-center">
           
          <p className="mt-3 text-base sm:text-lg text-[#212121]/80 leading-relaxed max-w-2xl mx-auto">
          I’m Shweta Shekhar, a Graduate Student in Computer Science at New York University (NYU) with a 4.0 GPA, passionate about turning AI ideas into systems that make data useful, trusted, and actionable.
          </p>
          <p className="mt-3 text-base sm:text-lg text-[#212121]/80 leading-relaxed max-w-2xl mx-auto">
  Currently, I’m an AI Intern at GEP Worldwide (New Jersey), where I build LangChain-powered LLM pipelines, automate contract insight retrieval, and design telemetry monitoring systems that enhance performance and reliability. Alongside, I work as a Graduate Assistant at NYU, collaborating with faculty on academic research and mentorship programs.
    </p>
    <p className="mt-3 text-base sm:text-lg text-[#212121]/80 leading-relaxed max-w-2xl mx-auto">
  Before NYU, I spent four years as a <span className="text-[#212121] font-semibold bg-[#0077B6]/10 px-2 py-0.5 rounded-md ml-1 mr-1">Senior Software Engineer </span> at GEP India, leading CI/CD automation, API integrations, and search analytics that improved efficiency and deployment reliability across enterprise platforms.
  </p>
  <p className="mt-3 text-base sm:text-lg text-[#212121]/80 leading-relaxed max-w-2xl mx-auto">
  I’m also a  <span className="text-[#212121] font-semibold bg-[#0077B6]/10 px-2 py-0.5 rounded-md ml-1 mr-1">Silver Medalist </span> from the University of Mumbai and a co-author of an IEEE research paper on Machine Learning–Based Detection of Learning Disabilities, which explored how NLP and AI can make education more inclusive.
          </p>
          <p className="mt-3 text-base sm:text-lg text-[#212121]/80 leading-relaxed max-w-2xl mx-auto">
            Across my projects — from Spark-based research graph analysis to Bayesian modeling for delivery optimization — my goal remains constant: build scalable, human-centered AI that solves real problems with clarity and impact.
          </p>

        </div>

          {/* What I bring to the table */}
          <div className="mt-10 lg:mt-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center text-[#212121]">
              What I Bring to the Table
            </h2>

            {/* Infinite scrolling highlights */}
            <div
              className="relative overflow-hidden"
              aria-label="Professional highlights and capabilities"
            >
              <div
                className="flex items-center gap-8 will-change-transform"
                style={{
                  animation: "var(--animate-scroll)",
                  ["--animation-duration" as any]: "5s",
                  ["--animation-direction" as any]: "forwards",
                }}
                role="list"
              >
                {[...highlights, ...highlights].map((highlight, index) => (
                  <HighlightItem
                    key={`${highlight.id}-${index}`}
                    highlight={highlight}
                    index={index}
                    className="inline-flex items-center whitespace-nowrap pr-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
