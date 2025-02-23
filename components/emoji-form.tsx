'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function EmojiForm({ onSubmit }: { onSubmit: (prompt: string) => Promise<void> }) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    try {
      await onSubmit(prompt);
      setPrompt('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto flex flex-row-reverse gap-3">
      <Input
        placeholder="أدخل وصفاً لإنشاء رمز تعبيري..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-1 h-12 px-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-right"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="h-12 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
      >
        {isLoading ? 'جارٍ الإنشاء...' : 'إنشاء'}
      </Button>
    </form>
  );
} 