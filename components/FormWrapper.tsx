'use client';

import { useState } from 'react';
import { EmojiForm } from './emoji-form';
import { EmojiGrid } from './emoji-grid';
import { ApiModeSwitch } from './api-mode-switch';
import { useApiMode } from '@/store/provider';
import { useStore } from 'zustand';

export default function FormWrapper() {
  const [images, setImages] = useState<Array<{ id: string; url: string; prompt: string; likes: number }>>([]);
  const [error, setError] = useState<string | null>(null);
  const store = useApiMode();
  const { useRealApi } = useStore(store);

  const handleSubmit = async (prompt: string) => {
    try {
      setError(null);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, useRealApi })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate emoji');
      }

      if (Array.isArray(data.images)) {
        const newImages = data.images.filter(Boolean).map((url: string) => ({
          id: `${Date.now()}-${Math.random()}`,
          url,
          prompt,
          likes: 0
        }));
        setImages(prev => [...newImages, ...prev]);
      }
    } catch (err) {
      console.error('Error generating emoji:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate emoji');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <ApiModeSwitch />
      </div>
      <EmojiForm onSubmit={handleSubmit} />
      {error && (
        <p className="text-red-500 text-center" dir="rtl">{error}</p>
      )}
      {images.length > 0 && <EmojiGrid images={images} />}
    </div>
  );
} 