"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Me", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const options = {
      root: null,
      rootMargin: "-10% 0px -10% 0px", // Adjusted for better visibility detection
      threshold: [0.15, 0.3, 0.5], // Lower thresholds for earlier detection
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            // Check if the section is more than 50% visible in the viewport
            // const viewportRatio = entry.intersectionRatio;
            const boundingRect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;

            // Calculate how much of the section is in the viewport
            const visibleHeight =
              Math.min(boundingRect.bottom, windowHeight) -
              Math.max(boundingRect.top, 0);
            const sectionVisibility = visibleHeight / boundingRect.height;

            // Update active section based on visibility
            if (sectionVisibility > 0.3) {
              // If more than 30% of the section is visible
              setActiveSection(id);
            }
          } else {
            // Only remove active state if this section was active
            setActiveSection((prev) => (prev === id ? "" : prev));
          }
        });
      },
      options
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll with offset
  const handleNavClick = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);

    setIsOpen(false);

    if (element) {
      // Adjust offset based on section
      const yOffset =
        targetId === "experience" || targetId === "testimonials" ? -100 : -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      // Force active section update
      setActiveSection(targetId);

      // Smooth scroll with a brief delay to ensure UI updates
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-6"
    >
      <div
        className={`rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F5F5] backdrop-blur-xl border-[#B0BEC5]/30 shadow-2xl"
            : "bg-[#F5F5F5]/80 backdrop-blur-lg border-[#B0BEC5]/20"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Home Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => handleNavClick("#about")}
                className="flex items-center space-x-2 text-[#212121] hover:text-[#0077B6] transition-colors"
              >
                <Home size={24} />
              </button>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                      activeSection === item.href.slice(1)
                        ? "text-[#0077B6]"
                        : "text-[#212121] hover:text-[#0077B6]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0077B6]"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* ✅ Resume Button */}
              <motion.a
                href="Shweta Shekhar Resume Final Version.pdf"
                download
                className="px-4 py-2 text-xs font-medium text-[#F5F5F5] 
             bg-[#0077B6] hover:bg-[#005B8D]
             rounded-full shadow-md hover:shadow-lg 
             transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#212121] hover:text-[#0077B6] focus:outline-none focus:text-[#0077B6]"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#F5F5F5]/90 backdrop-blur-xl rounded-b-2xl border-t border-[#B0BEC5]/30 mt-0.5"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-[#0077B6] bg-[#B0BEC5]/20"
                        : "text-[#212121] hover:text-[#0077B6] hover:bg-[#B0BEC5]/10"
                    }`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* ✅ Resume Button in Mobile */}
                <motion.a
                  href="/S. Shekhar Resume WORD_V2.docx"
                  download
                  className="px-4 py-2 text-xs font-medium text-[#F5F5F5] 
             bg-[#0077B6] hover:bg-[#005B8D]
             rounded-full shadow-md hover:shadow-lg 
             transition-all duration-300"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
