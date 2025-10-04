"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("shwetashekhar2016@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center bg-black-100 text-white overflow-hidden">
      {/* Spotlights (render after mount to prevent hydration issues) */}
      {isMounted && (
        <>
          {/* <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-[60vh]"
            fill="white"
          />
          <Spotlight
            className="top-20 right-0 h-[70vh] w-[50vw]"
            fill="purple"
          /> */}
          {/* <Spotlight
            className="left-40 bottom-0 h-[60vh] w-[40vw]"
            fill="blue"
          /> */}
        </>
      )}

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.05)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        )}
      />
      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-primary">Contact Me</h2>
        <p className="text-primary mb-8">
          I&apos;d love to connect! Reach out via any of the platforms below.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-8 text-3xl mb-6 justify-center">
          <Link
            href="https://www.instagram.com/shweta0898/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Instagram className="w-8 h-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shwetashekhar98/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Linkedin className="w-8 h-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
          <Link
            href="https://github.com/shwetashekhar98"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Github className="w-8 h-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
          <button onClick={copyEmail}>
            <Mail className="w-8 h-8 text-primary hover:text-secondary transition-colors duration-300" />
          </button>
        </div>

        {/* Email */}
        <p className="text-primary text-sm">
          Or email me directly at{" "}
          <a
            href="mailto:ss19623@nyu.edu"
            className="text-secondary underline hover:text-secondary/80"
          >
            ss19623@nyu.edu
          </a>
        </p>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl -z-10 group-hover/card:blur-2xl transition-all duration-500 will-change-transform" />
      </div>
    </section>
  );
};

export default ContactSection;
