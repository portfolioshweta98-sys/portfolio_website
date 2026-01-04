"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { useState, useEffect } from "react";

interface CompanyLogoProps {
  src?: string;
  alt: string;
  linkedinUrl?: string;
}

export const CompanyLogo = ({ src, alt, linkedinUrl }: CompanyLogoProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);
  const [useProxy, setUseProxy] = useState(false);

  useEffect(() => {
    if (src?.startsWith("https://media.licdn.com")) {
      // Try direct URL first, if it fails, use proxy
      setImageSrc(src);
      setUseProxy(false);
    } else if (!src && linkedinUrl && linkedinUrl.includes("linkedin.com/in/")) {
      // If no image URL but we have LinkedIn profile URL, try to get company logo from profile
      setImageSrc(`/api/image-proxy?profile=${encodeURIComponent(linkedinUrl)}`);
      setUseProxy(true);
    } else {
      setImageSrc(src);
      setUseProxy(false);
    }
  }, [src, linkedinUrl]);

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
        <Building2 className="text-white w-6 h-6" />
      </div>
    );
  }

  // Use regular img tag for all LinkedIn images
  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
      <img
        src={imageSrc}
        alt={alt}
        width={48}
        height={48}
        className="rounded-full object-cover bg-gray-700 w-full h-full"
        onError={handleError}
        crossOrigin={imageSrc.startsWith("/api/image-proxy") ? undefined : "anonymous"}
        referrerPolicy={imageSrc.startsWith("/api/image-proxy") ? undefined : "no-referrer"}
      />
    </div>
  );
};
