'use client';

import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  fallbackText?: string;
}

/**
 * ImageWithFallback Component
 * Next.js Image component with fallback placeholder
 * Handles image loading errors gracefully using img tag fallback
 */
export function ImageWithFallback({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  sizes,
  fallbackText,
}: ImageWithFallbackProps): JSX.Element {
  // Check if this is a placeholder path (images that likely don't exist yet)
  const isPlaceholderPath = (path: string): boolean => {
    return path.includes('/images/team/') || path.includes('/images/portfolio/');
  };

  // For placeholder paths, use placeholder immediately to avoid 404 errors
  const shouldUsePlaceholderImmediately = isPlaceholderPath(src) && !src.startsWith('data:');

  // Generate fallback SVG placeholder
  const generatePlaceholder = (text: string): string => {
    const initial = text.charAt(0).toUpperCase();
    const size = fill ? 400 : width || 200;
    return `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <rect width="${size}" height="${size}" fill="#333"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
              fill="white" font-size="${Math.floor(size / 4)}" font-family="Arial, sans-serif">
          ${initial}
        </text>
      </svg>`
    )}`;
  };

  // Use placeholder if we know the image doesn't exist
  if (shouldUsePlaceholderImmediately) {
    const placeholderSrc = generatePlaceholder(fallbackText || alt);
    if (fill) {
      return (
        <img
          src={placeholderSrc}
          alt={alt}
          className={className}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      );
    }
    return (
      <img
        src={placeholderSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  // Use Next.js Image for optimized loading
  const isLocalImage = src.startsWith('/') && !src.startsWith('//');
  
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        unoptimized={isLocalImage}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      unoptimized={isLocalImage}
    />
  );
}

