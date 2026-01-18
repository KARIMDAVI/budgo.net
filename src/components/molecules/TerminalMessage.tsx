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
        type === 'error' && 'text-red-400',
        type === 'success' && 'text-green-400',
        type === 'system' && 'text-blue-300',
        type === 'user' && 'text-slate-800 dark:text-gray-100'
      )}
    >
      <div className="flex items-start">
        <span className="mr-3 mt-1 shrink-0 select-none">
          {type === 'user' ? (
            <span className="text-accent-red font-bold">{'>'}</span>
          ) : (
            <Terminal size={14} className="text-slate-500 dark:text-gray-500" />
          )}
        </span>
        <div className="whitespace-pre-wrap break-words">{content}</div>
      </div>
      {timestamp && (
        <span className="ml-7 text-[10px] text-gray-700 mt-1 select-none">
          {timestamp}
        </span>
      )}
    </div>
  );
};
