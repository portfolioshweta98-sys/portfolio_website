"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight-new";
import { TextRevealCard } from "./ui/text-reveal-card";
import HighlightItem from "./ui/HighlightItem";
import Image from "next/image";

import profile from "@/public/SHWETA.jpg";
import { highlights } from "@/data/highlights";
import { ArrowRightIcon } from "lucide-react";

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const animatedTexts = useMemo(
    () => [
      "AI Intern @ GEP",
      "Graduate Course Assistant @ New York University",
      "MS in Computer Science @ New York University",
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

  const rotatingSections = useMemo(
    () => [
      {
        title: "About Me",
        paragraphs: [
          "I’m Shweta Shekhar — an engineer with a curious mind and a creative approach to solving real-world problems.",
          "Right now, I’m pursuing my Master’s in Computer Science at NYU, maintaining a 4.0 GPA and an ever-growing passion for building AI systems that actually work in the real world.",
        ],
      },
      {
        title: "What I’m Building",
        paragraphs: [
          "By day (and often by night), I’m an AI Intern at GEP Worldwide, working across both Summer and Fall terms.",
          "I build LangChain-powered LLM pipelines, design telemetry systems that help AI explain its decisions, and create agentic workflows that make enterprise data more transparent and scalable.",
          "My focus is on making AI not just smart, but trustworthy.",
        ],
      },
      {
        title: "Before This",
        paragraphs: [
          "Before moving to New York, I spent four years at GEP India as a Senior Software Engineer, leading automation, search analytics, and CI/CD initiatives that made enterprise platforms faster, cleaner, and more reliable.",
          "It’s where I learned that great systems aren’t just coded — they’re crafted.",
        ],
      },
      {
        title: "What I’m Proud Of",
        paragraphs: [
          "Silver Medalist from the University of Mumbai.",
          "Co-author of an IEEE research paper on Machine Learning–Based Detection of Learning Disabilities, exploring how NLP can make education more inclusive.",
          "Certified in Deep Learning, Generative AI, and Big Data Systems — because curiosity doesn’t clock out.",
        ],
      },
      {
        title: "What Drives Me",
        paragraphs: [
          "I love solving problems that sit between machine learning and human design — building systems that are auditable, explainable, and scalable.",
          "If AI is a black box, I’m the kind of person who wants to build the light inside it.",
        ],
      },
      {
        title: "Beyond the Code",
        paragraphs: [
          "When I’m not designing AI workflows or writing telemetry logs, you’ll probably find me dancing, singing, or chasing sunsets across Brooklyn rooftops.",
          "I believe creativity in rhythm is the same as creativity in logic — both need flow.",
          "TL;DR — I build AI that earns trust, design systems that scale, and live by one rule — if it’s worth building, make it beautiful.",
        ],
      },
    ],
    []
  );

  useEffect(() => {
    if (!isMounted) return;
    const sectionInterval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % rotatingSections.length);
    }, 5000);
    return () => clearInterval(sectionInterval);
  }, [isMounted, rotatingSections.length]);

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
              text="Shweta Shekhar"
              revealText="Shweta Shekhar"
              className="hidden lg:block text-center"
            />
            <div className="text-center">
              {isMounted && (
                <div className="block lg:hidden mt-6 mb-2">
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#212121] tracking-wider">
                    <span className="bg-gradient-to-r from-[#0077B6] to-[#005B8D] bg-clip-text text-transparent">
                     Shweta Shekhar
                    </span>
                  </h1>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-5 flex-col items-center">
            <h3 className="mb-5 text-xl sm:text-2xl lg:text-3xl font-bold text-[#212121] leading-tight text-center">
              Engineer by{" "}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#005B8D] bg-clip-text text-transparent">
                logic
              </span>
              , researcher by{" "}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#005B8D] bg-clip-text text-transparent">
                curiosity
              </span>
              , creator at{" "}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#005B8D] bg-clip-text text-transparent">
                heart
              </span>{" "}
              — shaping dependable AI where rigor meets design and serves
              people.
            </h3>

            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#212121] leading-tight text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077B6]/10 text-[#005B8D]">
                {animatedTexts[currentText]}
                <ArrowRightIcon />
              </span>
            </p>
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

          {/* Rotating bio sections (unstyled like previous) */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="mx-auto max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#212121] mb-2">
                {rotatingSections[currentSection].title}
              </h3>

              <div className="space-y-3">
                {rotatingSections[currentSection].paragraphs.map(
                  (para, idx) => (
                    <p
                      key={idx}
                      className="text-base sm:text-lg text-[#212121]/80 leading-relaxed max-w-2xl mx-auto"
                    >
                      {para}
                    </p>
                  )
                )}
              </div>
              <div className="hidden sm:flex items-center justify-center gap-1 mb-3">
                {rotatingSections.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-2 w-2 rounded-full",
                      i === currentSection ? "bg-[#0077B6]" : "bg-[#0077B6]/20"
                    )}
                    aria-label={
                      i === currentSection ? "current section" : "section"
                    }
                  />
                ))}
              </div>
            </div>
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
