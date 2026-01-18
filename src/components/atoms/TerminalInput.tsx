import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TerminalInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ className, prefix = '>', ...props }, ref) => {
    return (
      <div className="flex items-center w-full font-mono text-sm md:text-base">
        <span className="mr-3 text-accent-red font-bold select-none">
          {prefix}
        </span>
        <input
          ref={ref}
          type="text"
          className={cn(
            'flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-gray-100 placeholder:text-slate-400 dark:placeholder:text-gray-600',
            'focus:ring-0 p-0',
            className
          )}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          {...props}
        />
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';
