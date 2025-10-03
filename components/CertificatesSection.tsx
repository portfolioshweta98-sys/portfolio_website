"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Certificate {
  id: number;
  title: string;
  url: string;
  image: string;
}

const CertificatesSection = () => {
  const [progress, setProgress] = useState(0);
  const [animated, setAnimated] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Work Smarter with Microsoft Word",
      url: "https://www.coursera.org/account/accomplishments/verify/VNVN68L0M2X3",
      image: "/certificate1.jpeg",
    },
    {
      id: 2,
      title: "Python Practice: Operations",
      url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://media.licdn.com/dms/document/media/v2/D562DAQHNRbLpS_hGhQ/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1719314280808?e=1757548800&v=beta&t=cjxtEf_L7H7jGb0RJtV7TSXBTo8UJ4GHy7ohYdMtSJo",
      image: "/certificate2.jpeg",
    },
    {
      id: 3,
      title: "SQL Practice: Intermediate Queries",
      url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://media.licdn.com/dms/document/media/v2/D4D2DAQF0JpjdDdyTuA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1719310673604?e=1757548800&v=beta&t=5Y1Y_GqI8zhbY9mh9zTn4e3erT6x4L1vQF97NdYw28g",
      image: "/certificate3.jpeg",
    },
    {
      id: 4,
      title: "Microsoft 365 Fundamentals",
      url: "https://www.coursera.org/account/accomplishments/specialization/3SZBM7TMOIIX",
      image: "/certificate4.jpeg",
    },
    {
      id: 5,
      title: "Microsoft 365 Fundamentals",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/3SZBM7TMOIIX",
      image: "/certificate5.jpeg",
    },
  ];

  // calculate raw scroll progress
  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    const pct = (el.scrollLeft / max) * 100;
    setProgress(pct);
  };

  // easing animation: smoothly interpolate animated → progress
  useEffect(() => {
    const animate = () => {
      setAnimated((prev) => {
        const diff = progress - prev;
        return Math.abs(diff) < 0.1 ? progress : prev + diff * 0.08;
      });
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current || 0);
  }, [progress]);

  useEffect(() => {
    updateProgress();
  }, []);

  const R = 40;
  const C = 2 * Math.PI * R;

  return (
    <section className="w-full py-16 sm:py-20 bg-black-100 text-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-[#0077B6] via-[#B0BEC5] to-[#0077B6] bg-clip-text text-transparent blur-sm scale-105 opacity-60" />
            <span className="relative bg-gradient-to-r from-[#0077B6] via-[#B0BEC5] to-[#0077B6] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,119,182,0.5)]">
              Certificates
            </span>
          </h2>
        </div>

        <div className="relative flex items-start sm:items-center gap-4 sm:gap-8 flex-col sm:flex-row">
          {/* Circular progress */}
          <div className="relative w-12 h-12 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0 mb-6 sm:mb-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="transparent"
                strokeWidth="8"
                className="stroke-[#1a2440]"
              />
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="transparent"
                strokeWidth="8"
                strokeLinecap="round"
                className="stroke-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                strokeDasharray={C}
                strokeDashoffset={C - (animated / 100) * C}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          {/* Scrollable certificates */}
          <div
            ref={scrollRef}
            onScroll={updateProgress}
            className="w-full flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 custom-scrollbar
                       cursor-grab active:cursor-grabbing"
          >
            {certificates.map((c) => (
              <Link
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="min-w-[260px] sm:min-w-[320px] md:min-w-[420px] snap-start rounded-2xl
                           bg-[rgba(20,26,41,0.65)] backdrop-blur-xl
                           border border-secondary-500/20 shadow-[0_0_20px_rgba(88,28,135,0.15)]
                           p-4 sm:p-6 hover:shadow-[0_0_40px_rgba(20,184,166,0.35)] transition-shadow"
                >
                  <div className="relative w-full h-40 sm:h-56 rounded-lg overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-center mt-4 sm:text-xl font-semibold mb-3 text-secondary-300">
                    {c.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
