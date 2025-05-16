// hooks/useGallery.ts
import { useState } from 'react';

export interface ImageItem {
  id: number;
  title: string;
  url: string;
}

export function usePhoto(images: ImageItem[]) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const select = (i: number) => setIndex(i);

  return {
    current: images[index],
    currentIndex: index,
    total: images.length,
    next,
    prev,
    select
  };
}
