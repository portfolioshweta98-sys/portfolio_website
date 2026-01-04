"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useState, useEffect } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);

  useEffect(() => {
    // For LinkedIn images, use the proxy API route
    if (src?.startsWith("https://media.licdn.com")) {
      setImageSrc(`/api/image-proxy?url=${encodeURIComponent(src)}`);
    } else {
      setImageSrc(src);
    }
  }, [src]);

  if (!imageSrc || imageError) {
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
        <User className="text-white w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
      <Image
        src={imageSrc}
        alt={alt}
        width={48}
        height={48}
        className="rounded-full object-cover bg-gray-700"
        onError={() => setImageError(true)}
        unoptimized={imageSrc.startsWith("/api/image-proxy")}
      />
    </div>
  );
};
