"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
        <User className="text-white w-6 h-6" />
      </div>
    );
  }

  // Use regular img tag for LinkedIn images to avoid Next.js optimization issues
  if (src.startsWith("https://media.licdn.com")) {
    return (
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <img
          src={src}
          alt={alt}
          width={48}
          height={48}
          className="rounded-full object-cover bg-gray-700 w-full h-full"
          onError={() => setImageError(true)}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
        onError={() => setImageError(true)}
      />
    </div>
  );
};
