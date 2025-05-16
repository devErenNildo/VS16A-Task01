// components/Gallery.tsx
"use client";

import React from 'react';
import styles from './photo.module.scss';
import { usePhoto, ImageItem } from "@/app/hooks/usePhoto";

interface GalleryProps {
    data: ImageItem[];
}

export default function Photos({ data }: GalleryProps) {
    const { current, currentIndex, total, next, prev, select } = usePhoto(data);

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImage}>
                <img src={current.url} alt={current.title} />
                <h2>{current.title}</h2>
            </div>

            <div className={styles.controls}>
                <button onClick={prev}>Anterior</button>
                <span>{currentIndex + 1} / {total}</span>
                <button onClick={next}>Próxima</button>
            </div>

            <div className={styles.thumbnails}>
                {data.map((item, i) => (
                    <img
                        key={item.id}
                        src={item.url}
                        alt={item.title}
                        className={i === currentIndex ? styles.active : ''}
                        onClick={() => select(i)}
                    />
                ))}
            </div>
        </div>
    );
}
