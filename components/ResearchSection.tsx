"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative z-10 py-10 md:py-16 lg:py-20 px-4">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-[#212121]">
        Research & papers
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content - Slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Machine Learning–Driven Diagnosis of Learning Disabilities
            </h3>
            <p className="text-lg md:text-xl  leading-relaxed">
              As a co-author of the IEEE paper “Machine Learning based Learning
              Disability Detection using LMS,” I contributed to developing an
              AI-powered system that leverages data from Learning Management
              Systems to identify potential learning disabilities such as
              dyslexia. The project integrates natural language processing,
              feature engineering, and classification algorithms to enhance
              early detection and promote inclusive education through
              data-driven insights.
            </p>
          </div>

          <motion.a
            href="https://ieeexplore.ieee.org/document/9250761"
            target="_blank"
            rel="noopener noreferrer nofollow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-3xl transition-all duration-300"
          >
            <span>View Paper</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Image - Slides from right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative order-first lg:order-last "
        >
          <div className="relative w-full h-72 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/research.png"
              alt="IEEE Research Paper Certificate"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating elements for visual interest */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 blur-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ResearchSection;
