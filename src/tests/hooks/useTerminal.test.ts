import { renderHook, act } from '@testing-library/react';
import { useTerminal } from '../../hooks/useTerminal';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('useTerminal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize with welcome message', () => {
    const { result } = renderHook(() => useTerminal());
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].type).toBe('system');
  });

  it('should process a valid command', async () => {
    const { result } = renderHook(() => useTerminal());

    await act(async () => {
      const promise = result.current.processCommand('help');
      vi.runAllTimers();
      await promise;
    });

    // History should have: Init + User Input + System Response
    expect(result.current.history).toHaveLength(3);
    expect(result.current.history[1].type).toBe('user');
    expect(result.current.history[1].content).toBe('help');
    expect(result.current.history[2].type).toBe('system');
  });

  it('should handle invalid commands', async () => {
    const { result } = renderHook(() => useTerminal());

    await act(async () => {
      const promise = result.current.processCommand('invalid_command');
      vi.runAllTimers();
      await promise;
    });

    const lastMsg = result.current.history[result.current.history.length - 1];
    expect(lastMsg.type).toBe('error');
    expect(lastMsg.content).toContain('Command not found');
  });

  it('should clear history', async () => {
    const { result } = renderHook(() => useTerminal());

    await act(async () => {
      const promise = result.current.processCommand('clear');
      vi.runAllTimers();
      await promise;
    });

    expect(result.current.history).toHaveLength(0);
  });
});
