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
  const [useProxy, setUseProxy] = useState(false);

  useEffect(() => {
    if (src?.startsWith("https://media.licdn.com")) {
      // Try direct URL first, if it fails, use proxy
      setImageSrc(src);
      setUseProxy(false);
    } else {
      setImageSrc(src);
      setUseProxy(false);
    }
  }, [src]);

  const handleError = () => {
    if (src?.startsWith("https://media.licdn.com") && !useProxy) {
      // Try proxy on error
      setImageSrc(`/api/image-proxy?url=${encodeURIComponent(src)}`);
      setUseProxy(true);
      setImageError(false); // Reset error to try proxy
    } else {
      setImageError(true);
    }
  };

  if (!imageSrc || imageError) {
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
        <User className="text-white w-6 h-6" />
      </div>
    );
  }

  // Use regular img tag for proxy URLs to avoid Next.js Image issues
  if (imageSrc.startsWith("/api/image-proxy")) {
    return (
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <img
          src={imageSrc}
          alt={alt}
          width={48}
          height={48}
          className="rounded-full object-cover bg-gray-700 w-full h-full"
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
      <img
        src={imageSrc}
        alt={alt}
        width={48}
        height={48}
        className="rounded-full object-cover bg-gray-700 w-full h-full"
        onError={handleError}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
