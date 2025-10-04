"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { certificates } from "../data/certificate";
import { cn } from "@/lib/utils";

const CertificatesSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 relative">
  
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative text-primary">
            Certificates
          </h2>
        </div>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="w-full py-8"
          >
            {certificates.map((c) => (
              <SwiperSlide key={c.id}>
                <Link
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div
                    className="rounded-2xl backdrop-blur-xl
                                border border-secondary/20 shadow-lg hover:shadow-secondary/20
                                transition-all duration-300 h-full"
                  >
                    <div className="relative w-full h-40 sm:h-64 rounded-lg overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>
                    <h3 className="text-lg text-center mt-4 sm:text-xl font-semibold mb-3 text-secondary">
                      {c.title}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
