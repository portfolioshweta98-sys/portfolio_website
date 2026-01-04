"use client";

import { useState, useRef } from "react";
import { LinkedinIcon, ExternalLinkIcon } from "lucide-react";
import { Avatar } from "./ui/Avatar";
import { CompanyLogo } from "./ui/CompanyLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { testimonials } from "../data/testimonials";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = testimonial.testimonial.split(/\s+/);
  const shouldShowReadMore = words.length > 30;
  const displayedContent = isExpanded
    ? testimonial.testimonial
    : words.slice(0, 30).join(" ");

  return (
    <div className="bg-black-200 rounded-2xl p-5 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
      {/* Top Row (Company logo + LinkedIn) */}
      <div className="flex justify-between items-center mb-4">
        <CompanyLogo
          src={testimonial.companyUrl}
          alt={`${testimonial.company} logo`}
        />
        {testimonial.linkedinUrl && (
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 hover:text-blue-300 transition-colors" />
          </a>
        )}
      </div>

      {/* Testimonial */}
      <div>
        <p className="leading-relaxed text-sm sm:text-base mb-2">
          &quot;{displayedContent}
          {!isExpanded && shouldShowReadMore ? "..." : ""}&quot;
        </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-bold underline hover:text-secondary text-sm transition-colors mb-3"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Person Info */}
      <div className="flex items-center space-x-3 mb-4">
        <Avatar
          src={testimonial.personAvatar}
          alt={`${testimonial.title}'s avatar`}
        />
        <div>
          <div className="font-medium text-sm sm:text-base">
            {testimonial.title}
          </div>
          <div className="text-xs sm:text-sm">{testimonial.company}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-3"></div>

      {/* Bottom Link */}
      {testimonial.linkedinUrl && (
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-xs sm:text-sm hover:text-secondary transition-colors"
        >
          <span>Click to view on LinkedIn</span>
          <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      )}
    </div>
  );
};

const TestimonialSection = () => {
  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));
  const swiper1Ref = useRef<SwiperType | null>(null);
  const swiper2Ref = useRef<SwiperType | null>(null);

  return (
    <section className="bg-black-100 py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
              LinkedIn Recommendations
            </h2>
          </div>
          <p className="text-primary text-base sm:text-lg max-w-2xl mx-auto">
            Stories and perspectives from people who&apos;ve journeyed with me
            professionally and academically
          </p>
        </div>

        {/* Infinite Scroll Testimonials */}
        <div className="space-y-8">
          {/* First row - moving left */}
          <div
            onMouseEnter={() => swiper1Ref.current?.autoplay.stop()}
            onMouseLeave={() => swiper1Ref.current?.autoplay.start()}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: false,
              }}
              onSwiper={(swiper) => {
                swiper1Ref.current = swiper;
              }}
              className="!overflow-visible"
            >
              {firstHalf.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="!w-[300px] sm:!w-[350px] lg:!w-[400px]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second row - moving right */}
          <div
            onMouseEnter={() => swiper2Ref.current?.autoplay.stop()}
            onMouseLeave={() => swiper2Ref.current?.autoplay.start()}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: true,
              }}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
              }}
              className="!overflow-visible"
            >
              {secondHalf.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="!w-[300px] sm:!w-[350px] lg:!w-[400px]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
