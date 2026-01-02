"use client";

import Image from "next/image";
import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => {
  if (!src) {
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
        <User className="text-white w-6 h-6" />
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
        unoptimized={src?.startsWith("https://media.licdn.com")}
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.style.display = "none";
          imgElement.parentElement!.innerHTML = `
            <div class="w-full h-full bg-secondary rounded-full flex items-center justify-center">
              <svg class="text-white w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
              </svg>
            </div>`;
        }}
      />
    </div>
  );
};
