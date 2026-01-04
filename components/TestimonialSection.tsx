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
    <div className="bg-black-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] h-full flex flex-col min-h-0 w-full" style={{ minWidth: 0, maxWidth: '100%' }}>
      {/* Top Row (Company logo + LinkedIn) */}
      <div className="flex justify-between items-center mb-3 sm:mb-4 flex-shrink-0">
        <CompanyLogo
          src={testimonial.companyUrl}
          alt={`${testimonial.company} logo`}
          linkedinUrl={testimonial.linkedinUrl}
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
      <div className="flex-grow min-h-0 mb-3 sm:mb-4">
        <p className="leading-relaxed text-sm sm:text-base mb-2 break-words">
          &quot;{displayedContent}
          {!isExpanded && shouldShowReadMore ? "..." : ""}&quot;
        </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-bold underline hover:text-secondary text-xs sm:text-sm transition-colors mb-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Person Info */}
      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 flex-shrink-0">
        <Avatar
          src={testimonial.personAvatar}
          alt={testimonial.name ? `${testimonial.name} avatar` : `${testimonial.title} avatar`}
          linkedinUrl={testimonial.linkedinUrl}
        />
        <div className="flex-1 min-w-0">
          {testimonial.name && testimonial.name.trim() !== "" ? (
            <>
              <div className="font-semibold text-sm sm:text-base text-white mb-0.5">
                {testimonial.name}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                {testimonial.title}
                {testimonial.company && ` • ${testimonial.company}`}
              </div>
            </>
          ) : (
            <>
              <div className="font-semibold text-sm sm:text-base text-white mb-0.5">
                {testimonial.title}
              </div>
              {testimonial.company && (
                <div className="text-xs sm:text-sm text-gray-400">{testimonial.company}</div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-2 sm:my-3 flex-shrink-0"></div>

      {/* Bottom Link */}
      {testimonial.linkedinUrl && (
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-xs sm:text-sm hover:text-secondary transition-colors flex-shrink-0"
        >
          <span className="truncate">Click to view on LinkedIn</span>
          <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
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
    <section className="bg-black-100 py-8 sm:py-12 px-4 sm:px-6 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 relative">
              LinkedIn Recommendations
            </h2>
          </div>
          <p className="text-primary text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Stories and perspectives from people who&apos;ve journeyed with me
            professionally and academically
          </p>
        </div>

        {/* Infinite Scroll Testimonials */}
        <div className="space-y-6 sm:space-y-8 overflow-hidden w-full">
          {/* First row - moving left */}
          <div
            onMouseEnter={() => swiper1Ref.current?.autoplay.stop()}
            onMouseLeave={() => swiper1Ref.current?.autoplay.start()}
            className="overflow-hidden w-full"
            style={{ isolation: 'isolate' }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView="auto"
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  spaceBetween: 16,
                },
                640: {
                  spaceBetween: 20,
                },
                768: {
                  spaceBetween: 24,
                },
              }}
              onSwiper={(swiper) => {
                swiper1Ref.current = swiper;
              }}
              className="!overflow-hidden w-full"
              style={{ width: '100%', isolation: 'isolate', position: 'relative' }}
            >
              {firstHalf.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="!w-[280px] sm:!w-[320px] md:!w-[350px] lg:!w-[400px] !flex-shrink-0"
                  style={{ flexShrink: 0, minWidth: 0, maxWidth: '100%', position: 'relative', isolation: 'isolate' }}
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
            className="overflow-hidden w-full"
            style={{ isolation: 'isolate' }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView="auto"
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  spaceBetween: 16,
                },
                640: {
                  spaceBetween: 20,
                },
                768: {
                  spaceBetween: 24,
                },
              }}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
              }}
              className="!overflow-hidden w-full"
              style={{ width: '100%', isolation: 'isolate', position: 'relative' }}
            >
              {secondHalf.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="!w-[280px] sm:!w-[320px] md:!w-[350px] lg:!w-[400px] !flex-shrink-0"
                  style={{ flexShrink: 0, minWidth: 0, maxWidth: '100%', position: 'relative', isolation: 'isolate' }}
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
