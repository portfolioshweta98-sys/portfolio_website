"use client";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: string; // Optional image URL
  icon?: React.ReactNode; // Optional icon as fallback
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-[#212121] font-sans md:px-10 mt-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isLeft = index % 2 !== 0; // alternate sides for lg+

          return (
            <div key={index} className="relative flex md:py-12">
              {/* Icon */}
              <div
                className={`
                  absolute z-40
                  lg:left-1/2 lg:transform lg:-translate-x-1/2
                  left-0  /* 📱 mobile + md → line on left */
                `}
              >
                <div className="h-12 w-12 rounded-full bg-[#2C2C2C] flex items-center justify-center shadow-lg border-2 border-[#B0BEC5]/30">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`Timeline ${item.title}`}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  ) : item.icon ? (
                    <div className="h-6 w-6 flex items-center justify-center text-[#B0BEC5]">
                      {item.icon}
                    </div>
                  ) : (
                    <div className="h-4 w-4 rounded-full bg-[#B0BEC5]/20 border border-[#B0BEC5]/40" />
                  )}
                </div>
              </div>

              {/* Content Box */}
              <div
                className={`
                  w-full lg:w-1/2 px-4
                  lg:${isLeft ? "pr-12 text-right" : "pl-12 text-left ml-auto"}
                  pl-16 text-left /* 📱 mobile + md → always right side */
                `}
              >
                <h3 className="text-2xl text-left mb-4 font-bold text-[#F5F5F5]">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Vertical Line */}
        <div
          style={{
            height: height + "px",
          }}
          className={`
            absolute top-0 transform overflow-hidden w-[2px]
            lg:left-1/2 lg:-translate-x-1/2
            left-6  /* 📱 mobile + md → line on left */
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent from-[0%] via-[#B0BEC5]/30 to-transparent to-[99%]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          `}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#0077B6] via-[#B0BEC5] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
