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
        <span className="mr-3 text-rose-600 dark:text-rose-400 font-bold select-none drop-shadow-sm">
          {prefix}
        </span>
        <input
          ref={ref}
          type="text"
          className={cn(
            'flex-1 bg-transparent border-none outline-none',
            'text-slate-900 dark:text-gray-100 font-medium',
            'placeholder:text-slate-500 dark:placeholder:text-gray-500',
            'focus:ring-0 p-0 caret-rose-600 dark:caret-rose-400',
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
