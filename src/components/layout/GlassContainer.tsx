import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * GlassContainer Component
 * Provides glassmorphism effect with browser fallback support
 */
export function GlassContainer({ children, className }: GlassContainerProps): JSX.Element {
  return (
    <div className={cn('glass-container rounded-lg p-8', className)}>
      {children}
    </div>
  );
}


