'use client';

import { useRef } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import refStyles from './RefDemo.module.scss';

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
            <div className={refStyles.section}>
                <h4>1. Input Focus</h4>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Bu input'a focus yapılacak"
                    className={refStyles.inputField}
                />
                <button onClick={handleFocus} className={styles.button}>
                    Focus Input
                </button>
            </div>

            {/* Scroll Example */}
            <div className={refStyles.section}>
                <h4>2. Scroll Kontrolü</h4>
                <div
                    ref={scrollRef}
                    className={refStyles.scrollContainer}
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
            <div className={refStyles.sectionSmall}>
                <h4>3. Video Kontrolü</h4>
                <video
                    ref={videoRef}
                    width="300"
                    className={refStyles.videoPlayer}
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <button onClick={handlePlayPause} className={styles.button}>
                    Play / Pause
                </button>
            </div>

            <div className={`${styles.code} ${refStyles.codeBlock}`}>
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
