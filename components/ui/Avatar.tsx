"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useState, useEffect } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  linkedinUrl?: string;
}

export const Avatar = ({ src, alt, linkedinUrl }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);
  const [useProxy, setUseProxy] = useState(false);

  useEffect(() => {
    if (src && src.trim() !== "") {
      // Check if it's a local image (starts with /)
      if (src.startsWith("/")) {
        // Local image from public folder
        setImageSrc(src);
        setUseProxy(false);
      } else if (src.startsWith("https://media.licdn.com")) {
        // LinkedIn image URL - try direct first, fallback to proxy
        setImageSrc(src);
        setUseProxy(false);
      } else {
        // Other external URL
        setImageSrc(src);
        setUseProxy(false);
      }
    } else if (!src && linkedinUrl && linkedinUrl.includes("linkedin.com/in/")) {
      // If no image URL but we have LinkedIn profile URL, try to get image from profile
      setImageSrc(`/api/image-proxy?profile=${encodeURIComponent(linkedinUrl)}`);
      setUseProxy(true);
      setImageError(false); // Reset error state
    } else {
      // No image URL and no LinkedIn URL - show placeholder
      setImageSrc(undefined);
      setUseProxy(false);
      setImageError(true);
    }
  }, [src, linkedinUrl]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.log("Image error:", target.src, "useProxy:", useProxy, "src:", src);
    
    if (src?.startsWith("https://media.licdn.com") && !useProxy) {
      // Try proxy on error
      console.log("Trying proxy for:", src);
      setImageSrc(`/api/image-proxy?url=${encodeURIComponent(src)}`);
      setUseProxy(true);
      setImageError(false); // Reset error to try proxy
    } else if (imageSrc?.startsWith("/api/image-proxy")) {
      // Profile extraction or proxy failed, show placeholder
      console.log("Proxy failed, showing placeholder");
      setImageError(true);
      setImageSrc(undefined);
    } else {
      // All attempts failed, show placeholder
      console.log("All attempts failed, showing placeholder");
      setImageError(true);
    }
  };

  // Generate initials from name for fallback
  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  if (!imageSrc || imageError) {
    // Show initials instead of generic icon if we have a name
    const initials = alt && alt !== "avatar" ? getInitials(alt.replace(" avatar", "")) : null;
    
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
        {initials ? (
          <span className="text-white text-xs sm:text-sm font-semibold">{initials}</span>
        ) : (
          <User className="text-white w-6 h-6" />
        )}
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
          loading="lazy"
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
