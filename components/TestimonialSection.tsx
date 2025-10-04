import React from "react";
import { LinkedinIcon, ExternalLinkIcon } from "lucide-react";
import { Avatar } from "./ui/Avatar";
import { CompanyLogo } from "./ui/CompanyLogo";

import { testimonials } from "../data/testimonials";

const TestimonialSection = () => {
  return (
    <section className="bg-black-100 py-12 px-4 sm:px-6">
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
            Stories and perspectives from people who’ve journeyed with me
            professionally and academically
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-black-200 rounded-2xl p-5 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
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
              <p className=" leading-relaxed text-sm sm:text-base mb-5">
                “{testimonial.testimonial}”
              </p>

              {/* Person Info */}
              <div className="flex items-center space-x-3 mb-4">
                <Avatar
                  src={testimonial.personAvatar}
                  alt={`${testimonial.title}'s avatar`}
                />
                <div>
                  <div className=" font-medium text-sm sm:text-base">
                    {testimonial.title}
                  </div>
                  <div className="text-xs sm:text-sm">
                    {testimonial.company}
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
