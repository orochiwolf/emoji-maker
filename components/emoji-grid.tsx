'use client';

import Image from 'next/image';
import { Download, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface EmojiImage {
  id: string;
  url: string;
  prompt: string;
  likes: number;
}

export function EmojiGrid({ images }: { images: EmojiImage[] }) {
  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `emoji-${Date.now()}.png`; // Give a unique name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {images.map((image) => (
        <div key={image.id} className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-white relative">
            {image.url && (
              <Image
                src={image.url}
                alt={image.prompt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                unoptimized // Add this for external images
              />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDownload(image.url)}
                className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
                title="تحميل"
                disabled={!image.url}
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
                title="إعجاب"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 