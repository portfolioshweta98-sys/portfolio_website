"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";

interface CompanyLogoProps {
  src?: string;
  alt: string;
}

export const CompanyLogo = ({ src, alt }: CompanyLogoProps) => {
  if (!src) {
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
        <Building2 className="text-white w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="rounded-full object-cover bg-gray-700"
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.style.display = "none";
          imgElement.parentElement!.innerHTML = `
            <div class="w-full h-full bg-secondary rounded-full flex items-center justify-center text-white">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-icon lucide-building"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
            </div>`;
        }}
      />
    </div>
  );
};
