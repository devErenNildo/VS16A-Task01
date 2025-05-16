"use client";

import React from 'react';
import { useTanWindow } from '@/app/hooks/useTamWindow';

export default function WindowInfo() {
  const { width, height } = useTanWindow();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Tamanho da Janela</h2>
      <p>Largura: {width}px</p>
      <p>Altura: {height}px</p>
    </div>
  );
}
