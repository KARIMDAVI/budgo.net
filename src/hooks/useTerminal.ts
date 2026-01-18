import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { MessageType } from '@/components/molecules/TerminalMessage';

// Zod schema for input validation
const inputSchema = z.string().min(1).max(100).trim();

export interface Message {
  id: string;
  type: MessageType;
  content: React.ReactNode;
  timestamp: string;
}

interface CommandResponse {
  type: MessageType;
  content: string;
}

const COMMANDS: Record<string, CommandResponse> = {
  help: {
    type: 'system',
    content: `Available commands:
  • ios      - Mobile App Development
  • web      - High-performance Web Platforms
  • design   - UI/UX & Brand Identity
  • contact  - Initialize a project
  • clear    - Clear terminal history`,
  },
  ios: {
    type: 'success',
    content: `[iOS Development Module Loaded]
• Swift / SwiftUI Native Development
• App Store Optimization (ASO) included
• Offline-first architecture
> Type 'contact' to start your iOS project.`,
  },
  web: {
    type: 'success',
    content: `[Web Platform Module Loaded]
• Next.js / React Enterprise Scalability
• SEO & Performance Optimization (Core Web Vitals)
• Responsive Glassmorphism UI
> Type 'contact' to start your Web project.`,
  },
  design: {
    type: 'success',
    content: `[Design System Module Loaded]
• Figma High-Fidelity Prototyping
• User Journey Mapping
• Accessible (WCAG 2.1) Color Systems
> Type 'contact' to start your Design project.`,
  },
  contact: {
    type: 'system',
    content: `Initializing project sequence...
[REDIRECTING] Opening project configuration wizard...`,
  },
};

export const useTerminal = () => {
  const router = useRouter();
  const [history, setHistory] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration fix: Only populate initial history after mount
  useEffect(() => {
    setMounted(true);
    setHistory([
      {
        id: 'init',
        type: 'system',
        content: 'BudGo.Net Terminal [Version 2.0.0]\n(c) 2024 BudGo LLC. All rights reserved.\n\nType "help" to see available commands.',
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, []);

  const processCommand = useCallback(async (input: string) => {
    // ... existing processCommand logic ...
    // 1. Validate Input
    const validation = inputSchema.safeParse(input);
    if (!validation.success) {
      return; // Ignore empty/invalid inputs
    }

    const cleanInput = validation.data;
    const command = cleanInput.toLowerCase();

    // 2. Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: cleanInput,
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prev) => [...prev, userMsg]);
    setIsProcessing(true);

    // 3. Simulate Network/Processing Delay (Humanize)
    const delay = Math.random() * 500 + 300; // 300-800ms
    await new Promise((resolve) => setTimeout(resolve, delay));

    // 4. Process Command
    let response: CommandResponse;

    if (command === 'clear') {
      setHistory([]);
      setIsProcessing(false);
      return;
    } else if (COMMANDS[command]) {
      response = COMMANDS[command];
    } else {
      // Fuzzy match or default error
      response = {
        type: 'error',
        content: `Command not found: '${cleanInput}'. Type 'help' for a list of commands.`,
      };
    }

    // 5. Add System Response
    const sysMsg: Message = {
      id: (Date.now() + 1).toString(),
      type: response.type,
      content: response.content,
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prev) => [...prev, sysMsg]);
    setIsProcessing(false);

    // Special Action: Navigate to contact page
    if (command === 'contact') {
      setTimeout(() => {
        router.push('/contact');
      }, 1000); // 1 second delay to show the redirect message
    }
  }, [router]);

  return {
    history,
    processCommand,
    isProcessing,
    mounted,
  };
};
