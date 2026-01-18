'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '../layout/ThemeProvider';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch
  const { theme } = useTheme();

  // Motion values for mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation for the trailing ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const checkDevice = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsMobile(!hasFinePointer);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect clickable elements
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseover', handleMouseOver);
      
      // Hide the default cursor only when our custom cursor is active
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main Dot - Direct tracking */}
      <motion.div
        className={cn(
          "absolute h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]",
          "transition-transform duration-100 ease-out",
          theme === 'dark' ? "bg-primary" : "bg-[#0ea5e9]"
        )}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
      />
      
      {/* Trailing Ring - Spring physics */}
      <motion.div
        className={cn(
          "absolute rounded-full border",
          "transition-[height,width,background-color,border-color] duration-300 ease-out"
        )}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          height: isHovering ? 48 : 24,
          width: isHovering ? 48 : 24,
          backgroundColor: isHovering 
            ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(14, 165, 233, 0.05)') 
            : 'transparent',
          borderColor: isHovering 
            ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.5)') 
            : (theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : 'rgba(14, 165, 233, 0.3)'),
        }}
      />
    </div>
  );
};
