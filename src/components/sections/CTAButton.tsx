import Link from 'next/link';
import { type ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
}

/**
 * CTAButton Component
 * Accessible call-to-action button with proper link semantics
 */
export function CTAButton({ children, href, onClick, className = '' }: CTAButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`cta-button ${className}`}
      aria-label={typeof children === 'string' ? children : 'Call to action'}
    >
      {children}
    </Link>
  );
}


