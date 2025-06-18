// Streaming LLMChatModal with ChatGPT-like experience
// - Professional UI polish
// - Streaming response
// - Hidden scrollbars
// - Locked GPT-4o + 3-message limit for guests

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LLMChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LLMChatModal = ({ isOpen, onClose }: LLMChatModalProps) => {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [lastQuestion, setLastQuestion] = useState('');
  const [model, setModel] = useState<'gemini' | 'gpt4o'>('gemini');
  const [interactionCount, setInteractionCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const maxInteractions = 3;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput('');
      setInteractionCount(0);
      setUnlocked(false);
      setModel('gemini');
      setStreamingText('');
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streamingText]);

  const sendMessage = async (question: string) => {
    if (!question.trim()) return;
    if (!unlocked && interactionCount >= maxInteractions) {
      alert('Max interactions reached. Devs may unlock.');
      return;
    }
    if (model === 'gpt4o' && !unlocked) {
      alert('GPT-4o is only available for devs.');
      return;
    }

    const newMessage = { role: 'user', text: question };
    setMessages((prev) => [...prev, newMessage]);
    setLastQuestion(question);
    setLoading(true);
    setStreamingText('');

    const res = await fetch('/api/chat/stream', {
      method: 'POST',
      body: JSON.stringify({ question, model }),
    });

    if (!res.body) {
      setMessages((prev) => [...prev, { role: 'llm', text: '[No response from LLM.]' }]);
      setLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let accumulated = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      accumulated += decoder.decode(value);
      setStreamingText(accumulated);
    }

    setMessages((prev) => [...prev, { role: 'llm', text: accumulated }]);
    setStreamingText('');
    setInput('');
    setLoading(false);
    setInteractionCount((count) => count + 1);
  };

  const regenerate = () => {
    if (lastQuestion) sendMessage(lastQuestion);
  };

  const unlock = () => {
    const inputPassword = prompt('Enter dev password');
    if (inputPassword === process.env.NEXT_PUBLIC_DEV_CHAT_PASSWORD) {
      setUnlocked(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[var(--background)] text-[var(--foreground)] border border-stone-200 dark:border-stone-700 rounded-2xl p-6 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold mb-3">Ask Yaffa (LLM)</h2>

            <div className="mb-3">
              <label className="text-sm font-medium">Choose Model:</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value as 'gemini' | 'gpt4o')}
                className="ml-2 px-2 py-1 border rounded text-sm dark:bg-stone-800"
              >
                <option value="gemini">Gemini Flash</option>
                <option value="gpt4o">GPT-4o Mini (dev only)</option>
              </select>
            </div>

            <div
              ref={scrollRef}
              className="h-64 overflow-y-auto space-y-3 mb-4 text-sm modal-content-area"
              style={{ scrollbarWidth: 'none' }}
            >
              {messages.map((msg, i) => (
                <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                  <div className={`inline-block px-3 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-stone-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && streamingText && (
                <div className="text-left">
                  <div className="inline-block px-3 py-2 rounded-lg bg-gray-100 dark:bg-stone-700">
                    {streamingText}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg dark:bg-stone-800"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              />
              <button
                onClick={() => sendMessage(input)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={loading}
              >
                Send
              </button>
            </div>

            <div className="flex justify-between items-center text-xs">
              {lastQuestion && !loading && (
                <button onClick={regenerate} className="underline text-blue-600 hover:text-blue-800 transition">
                  🔁 Regenerate
                </button>
              )}
              {!unlocked && (
                <button onClick={unlock} className="underline text-amber-600 hover:text-amber-800 ml-auto">
                  🔓 Dev Unlock
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LLMChatModal;