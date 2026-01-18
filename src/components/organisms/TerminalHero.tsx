import React, { useRef, useEffect, useState } from 'react';
import { TerminalInput } from '@/components/atoms/TerminalInput';
import { TerminalMessage } from '@/components/molecules/TerminalMessage';
import { useTerminal } from '@/hooks/useTerminal';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const TerminalHero: React.FC = () => {
  const { history, processCommand, isProcessing, mounted } = useTerminal();
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isProcessing) return;

    const cmd = inputValue;
    setInputValue(''); // Clear immediately
    await processCommand(cmd);
  };

  if (!mounted) {
    return (
      <div className="w-full max-w-3xl mx-auto h-[500px] glass-container rounded-lg border border-glass-border shadow-2xl backdrop-blur-xl bg-glass-dark flex items-center justify-center">
        <span className="text-slate-700 dark:text-gray-500 font-mono text-sm">Initializing terminal...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div
        className={cn(
          'glass-container rounded-lg overflow-hidden border border-glass-border',
          'flex flex-col h-[500px] shadow-2xl backdrop-blur-xl bg-glass-dark'
        )}
        onClick={handleContainerClick}
      >
        {/* Header / Mac Traffic Lights */}
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 text-xs text-slate-600 dark:text-gray-400 font-mono flex items-center">
            <span className="mr-2">budgo-cli</span>
            <span className="text-slate-400 dark:text-gray-600">—</span>
            <span className="ml-2">zsh</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
          <AnimatePresence initial={false}>
            {history.map((msg) => (
              <TerminalMessage
                key={msg.id}
                type={msg.type}
                content={msg.content}
                timestamp={msg.timestamp}
              />
            ))}
          </AnimatePresence>

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="mt-2">
            <TerminalInput
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isProcessing ? 'Processing...' : 'Type a command...'}
              disabled={isProcessing}
              autoFocus
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
};
