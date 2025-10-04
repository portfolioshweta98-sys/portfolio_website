"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight-new";
import { TextRevealCard } from "./ui/text-reveal-card";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

import profile from "@/public/SHWETA.jpg";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-10 pt-10 min-h-screen">
      {/* Spotlight */}
      {isMounted && (
        <div>
          {/* <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="blue"
          />
          <Spotlight
            className="-top-80 -left-10 md:-left-52 md:-top-40 h-screen"
            fill="blue"
          /> */}
          <Spotlight className="h-[500vh] w-[100vw] left-full" fill="blue" />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
      )}

      {/* Background */}
      <div className="relative flex flex-col min-h-screen w-full justify-center bg-[#212121]">
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

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Name */}
          <div className="flex items-center justify-center  sm:mb-6 lg:mb-8">
            <TextRevealCard
              text="SHWETA SHEKHAR"
              revealText="SHWETA SHEKHAR"
              className="hidden lg:block"
            />
            <div className="text-center">
              {isMounted && (
                <div className="block lg:hidden mt-6 mb-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F5] tracking-wider">
                    <span className="bg-gradient-to-r from-[#F5F5F5] to-[#0077B6] bg-clip-text text-transparent">
                      SHWETA SHEKHAR
                    </span>
                  </h1>
                </div>
              )}
            </div>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left text */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#F5F5F5] mb-6 lg:mb-8 text-center lg:text-left">
                  What I Bring to the Table
                </h2>

                <div className="space-y-4 lg:space-y-6 text-[#B0BEC5] text-sm sm:text-base">
                  <div>
                    <span className="text-[#0077B6] font-semibold">
                      I turn AI ideas into working systems
                    </span>
                    <span className="text-[#B0BEC5]">
                      {" "}
                      — from building contract-review pipelines that saved teams
                      hours at GEP to anomaly detectors that caught what humans
                      missed.
                    </span>
                  </div>

                  <div>
                    <span className="text-blue-400 font-semibold">
                      I make data easy to trust and act on
                    </span>
                    <span className="text-gray-400">
                      {" "}
                      — mixing causal reasoning with interactive visuals so
                      people don&apos;t just see numbers, they understand the
                      story behind them.
                    </span>
                  </div>

                  <div>
                    <span className="text-purple-300 font-semibold">
                      I engineer for scale
                    </span>
                    <span className="text-gray-400">
                      {" "}
                      — whether it&apos;s streamlining CI/CD pipelines,
                      optimizing queries, or tuning Elasticsearch, I like making
                      things faster, more reliable, and less painful.
                    </span>
                  </div>

                  <div>
                    <span className="text-blue-400 font-semibold">
                      I grow with people
                    </span>
                    <span className="text-gray-400">
                      {" "}
                      — I&apos;ve mentored engineers, built peer mentorship
                      programs, and believe teams do their best work when
                      they&apos;re learning from each other.
                    </span>
                  </div>

                  <div>
                    <span className="text-purple-300 font-semibold">
                      Above all, I focus on impact
                    </span>
                    <span className="text-gray-400">
                      {" "}
                      — if something I build doesn&apos;t save time, cut effort,
                      or make decisions clearer, I&apos;m not done yet.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="flex justify-center order-1 lg:order-2">
              <CardContainer
                className="inter-var w-full max-w-sm"
                containerClassName="py-0"
              >
                <CardBody
                  className="bg-[#2C2C2C] relative group/card hover:shadow-2xl 
                  hover:shadow-[#0077B6]/20 border-[#B0BEC5]/20
                  w-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] 
                  rounded-xl p-4 sm:p-6 lg:p-8 border backdrop-blur-sm transform-gpu 
                  flex flex-col justify-center"
                >
                  {/* Image */}
                  <CardItem
                    translateZ="100"
                    rotateX={5}
                    rotateY={5}
                    className="w-full flex justify-center mb-6 sm:mb-8 "
                  >
                    <div className="relative transform-gpu flex justify-center -mx-8">
                      <div className="w-full h-50 lg:h-72 overflow-hidden rounded-2xl border-2 border-[#0077B6]/30 shadow-xl">
                        <Image
                          src={profile}
                          alt="Shweta Shekhar"
                          width={500}
                          height={400}
                          className="w-full h-full object-cover "
                          priority
                        />
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0077B6]/20 to-[#005B8D]/20 blur-xl -z-10 group-hover/card:blur-2xl transition-all duration-500 will-change-transform"></div>
                    </div>
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ="60"
                    rotateX={5}
                    rotateY={5}
                    className="text-center transform-gpu"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-medium text-[#F5F5F5] leading-relaxed">
                        <span className="text-[#0077B6] font-semibold">
                          Software Engineer + Innovator
                        </span>
                      </h3>

                      <p className="text-sm sm:text-base text-[#0077B6] font-medium">
                        Academic Topper (Silver Medalist + 4.0 GPA)
                      </p>

                      <p className="text-sm sm:text-base text-[#B0BEC5] leading-relaxed">
                        Where{" "}
                        <span className="text-[#0077B6] font-medium">creativity</span>{" "}
                        meets{" "}
                        <span className="text-[#0077B6] font-medium">code</span>{" "}
                        — building AI that works in the real world.
                      </p>

                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
