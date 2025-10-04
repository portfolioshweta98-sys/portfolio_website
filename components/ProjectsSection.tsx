"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "@/data/projects";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Empty the scroll progress code as we're using Swiper now

  return (
    <section
      ref={sectionRef}
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20 text-[#F5F5F5] relative overflow-hidden"
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-[#212121]">
            Projects
          </h2>
        </div>

        <div className="relative">
          <style>{`
            .swiper {
              padding-bottom: 50px !important;
            }
            .swiper-slide {
              height: auto !important;
            }
            .swiper-slide > a {
              height: 100%;
            }
            .swiper-pagination {
              bottom: 0 !important;
            }
            .swiper-pagination-bullet {
              background: #B0BEC5;
              width: 8px;
              height: 8px;
              opacity: 0.5;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              background: #0077B6;
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>

          {/* Projects Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className={`w-full transition-all duration-1000 delay-500 pb-16}`}
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  onMouseEnter={() => setHoveredCard(p.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-full h-full
                             rounded-xl sm:rounded-2xl
                             bg-[#0077B6] backdrop-blur-xl
                             border-2 border-white/10 
                             overflow-hidden hover:shadow-xl
                             transition-all duration-500 transform hover:-translate-y-2 flex flex-col
                             ${
                               hoveredCard === p.id
                                 ? "scale-[1.02]"
                                 : "scale-100"
                             }`}
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 lg:h-60">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-all duration-700 "
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Timeline badge */}
                      <div
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full
                                   bg-secondary backdrop-blur-md border border-secondary/20"
                      >
                        <p className="text-xs text-white/90 font-medium">
                          {p.timeline}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-white">
                        {p.title}
                      </h3>

                      <p className="text-white/90 text-sm sm:text-base leading-relaxed line-clamp-4 mb-4">
                        {getDisplayDescription(p)}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tags.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full
                                     bg-white/10 backdrop-blur-sm
                                     text-white border border-white/20
                                     transition-all duration-300 hover:bg-white/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-8"></div>
            <div className="swiper-pagination mt-8"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
