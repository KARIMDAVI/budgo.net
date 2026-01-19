import React from 'react';
import { cn } from '@/lib/utils';
import { Terminal } from 'lucide-react';

export type MessageType = 'user' | 'system' | 'error' | 'success';

export interface TerminalMessageProps {
  type: MessageType;
  content: React.ReactNode;
  timestamp?: string;
}

export const TerminalMessage: React.FC<TerminalMessageProps> = ({
  type,
  content,
  timestamp,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col mb-2 font-mono text-sm md:text-base animate-in fade-in slide-in-from-bottom-1 duration-200',
        type === 'error' && 'text-red-600 dark:text-red-400',
        type === 'success' && 'text-emerald-600 dark:text-green-400',
        type === 'system' && 'text-blue-600 dark:text-blue-300',
        type === 'user' && 'text-slate-900 dark:text-gray-100 font-medium'
      )}
    >
      <div className="flex items-start">
        <span className="mr-3 mt-1 shrink-0 select-none">
          {type === 'user' ? (
            <span className="text-rose-600 dark:text-rose-400 font-bold drop-shadow-sm">{'>'}</span>
          ) : (
            <Terminal size={14} className="text-slate-600 dark:text-gray-400" />
          )}
        </span>
        <div className="whitespace-pre-wrap break-words">{content}</div>
      </div>
      {timestamp && (
        <span className="ml-7 text-[10px] text-slate-500 dark:text-gray-600 mt-1 select-none">
          {timestamp}
        </span>
      )}
    </div>
  );
};
