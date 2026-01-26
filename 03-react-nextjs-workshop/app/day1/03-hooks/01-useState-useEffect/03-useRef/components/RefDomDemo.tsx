'use client';

import { useRef } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export function RefDomDemo() {
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleScrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    const handleMeasure = () => {
        if (scrollRef.current) {
            const { width, height } = scrollRef.current.getBoundingClientRect();
            alert(`Element boyutları:\nGenişlik: ${width}px\nYükseklik: ${height}px`);
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className={styles.demo}>
            <h3>DOM Referansları</h3>

            {/* Input Focus Example */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h4>1. Input Focus</h4>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Bu input'a focus yapılacak"
                    style={{
                        padding: '0.5rem',
                        marginRight: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                <button onClick={handleFocus} className={styles.button}>
                    Focus Input
                </button>
            </div>

            {/* Scroll Example */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h4>2. Scroll Kontrolü</h4>
                <div
                    ref={scrollRef}
                    style={{
                        height: '100px',
                        overflow: 'auto',
                        border: '1px solid #ccc',
                        padding: '1rem',
                        marginBottom: '0.5rem',
                        borderRadius: '4px'
                    }}
                >
                    <p>Scroll edilebilir içerik...</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Daha fazla içerik...</p>
                    <p>Ve daha fazla...</p>
                    <p>Son satır!</p>
                </div>
                <button onClick={handleScrollToBottom} className={styles.button}>
                    Scroll to Bottom
                </button>
                <button onClick={handleMeasure} className={styles.button}>
                    Measure Element
                </button>
            </div>

            {/* Video Control Example */}
            <div style={{ marginBottom: '1rem' }}>
                <h4>3. Video Kontrolü</h4>
                <video
                    ref={videoRef}
                    width="300"
                    style={{ display: 'block', marginBottom: '0.5rem', borderRadius: '4px' }}
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <button onClick={handlePlayPause} className={styles.button}>
                    Play / Pause
                </button>
            </div>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`const inputRef = useRef<HTMLInputElement>(null);

// DOM elementine erişim
inputRef.current?.focus();

// Element ölçümleri
const { width, height } = 
  element.current?.getBoundingClientRect();

// Video kontrolü
videoRef.current?.play();`}</pre>
            </div>
        </div>
    );
}
