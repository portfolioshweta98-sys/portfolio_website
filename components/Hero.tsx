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
          <Spotlight className="h-[500vh] w-[100vw] left-full" fill="#0077b6" />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="#0077b6"
          />
        </div>
      )}

      {/* Background */}
      <div className="relative flex flex-col min-h-screen w-full justify-center">
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
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#212121] tracking-wider">
                    <span className="bg-gradient-to-r from-[#0077B6] to-[#005B8D] bg-clip-text text-transparent">
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
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 text-center lg:text-left text-[#212121]">
                  What I Bring to the Table
                </h2>

                <div className="space-y-4 lg:space-y-6 text-[#212121] text-base sm:text-lg lg:text-xl">
                  <div>
                    <span className="text-[#0077B6] font-semibold">
                      I turn AI ideas into working systems
                    </span>
                    <span className="text-[#212121]">
                      {" "}
                      — from building contract-review pipelines that saved teams
                      hours at GEP to anomaly detectors that caught what humans
                      missed.
                    </span>
                  </div>

                  <div>
                    <span className="text-[#0077B6] font-semibold">
                      I make data easy to trust and act on
                    </span>
                    <span className="text-[#212121]">
                      {" "}
                      — mixing causal reasoning with interactive visuals so
                      people don&apos;t just see numbers, they understand the
                      story behind them.
                    </span>
                  </div>

                  <div>
                    <span className="text-[#0077B6] font-semibold">
                      I engineer for scale
                    </span>
                    <span className="text-[#212121]">
                      {" "}
                      — whether it&apos;s streamlining CI/CD pipelines,
                      optimizing queries, or tuning Elasticsearch, I like making
                      things faster, more reliable, and less painful.
                    </span>
                  </div>

                  <div>
                    <span className="text-[#0077B6] font-semibold">
                      I grow with people
                    </span>
                    <span className="text-[#212121]">
                      {" "}
                      — I&apos;ve mentored engineers, built peer mentorship
                      programs, and believe teams do their best work when
                      they&apos;re learning from each other.
                    </span>
                  </div>

                  <div>
                    <span className="text-[#0077B6] font-semibold">
                      Above all, I focus on impact
                    </span>
                    <span className="text-[#212121]">
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
                  className="bg-gradient-to-b from-[#0077B6] to-[#005B8D] relative group/card 
                  hover:shadow-2xl hover:shadow-[#0077B6]/40 
                  w-full min-h-[450px] sm:min-h-[520px] lg:min-h-[580px] 
                  rounded-2xl border-2 border-white/10 backdrop-blur-sm transform-gpu 
                  flex flex-col justify-start overflow-hidden"
                >
                  {/* Image */}
                  {/* Full width image at the top */}
                  <CardItem
                    translateZ="100"
                    className="w-full h-64 sm:h-72 lg:h-96"
                  >
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={profile}
                        alt="Shweta Shekhar"
                        fill
                        className="object-cover object-center transform-gpu group-hover/card:scale-110 transition-all duration-700"
                        priority
                      />
                    </div>
                  </CardItem>

                  {/* Content overlay */}
                  <CardItem
                    translateZ="50"
                    className="relative px-6 sm:px-8 lg:px-10 pt-4 pb-8 text-center transform-gpu"
                  >
                    <div className="relative space-y-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mt-2">
                        Software Engineer + Innovator
                      </h3>

                      <p className="text-lg sm:text-xl text-white/90 font-medium">
                        Academic Topper (Silver Medalist + 4.0 GPA)
                      </p>

                      <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-md mx-auto">
                        Blending{" "}
                        <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded-md">
                          creativity
                        </span>{" "}
                        and{" "}
                        <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded-md">
                          logic
                        </span>{" "}
                        to transform AI & data into solutions that work.
                      </p>

                      {/* Additional decorative element */}
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
