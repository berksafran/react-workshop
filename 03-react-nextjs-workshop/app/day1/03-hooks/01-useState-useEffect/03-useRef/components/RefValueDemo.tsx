'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export function RefValueDemo() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Önceki değeri sakla
    const prevCountRef = useRef<number | undefined>(undefined);

    // Render sayısını takip et (re-render tetiklemeyen)
    const renderCount = useRef(0);

    // Timer ID'yi sakla
    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        // Her render'da render sayısını artır
        renderCount.current += 1;

        // Önceki count değerini sakla
        prevCountRef.current = count;
    });

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setCount(0);
    };

    return (
        <div className={styles.demo}>
            <h3>Değer Saklama (Re-render Tetiklemeden)</h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4>1. Önceki Değeri Saklama</h4>
                <p><strong>Mevcut Count:</strong> {count}</p>
                <p><strong>Önceki Count:</strong> {prevCountRef.current ?? 'Henüz yok'}</p>
                <button onClick={() => setCount(c => c + 1)} className={styles.button}>
                    Count Artır
                </button>
                <button onClick={() => setCount(0)} className={styles.button}>
                    Sıfırla
                </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4>2. Render Sayısını Takip Etme</h4>
                <p><strong>Render Sayısı:</strong> {renderCount.current}</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    ℹ️ renderCount bir ref olduğu için değiştiğinde re-render tetiklenmez
                </p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <h4>3. Timer ID Saklama</h4>
                <p><strong>Timer Durumu:</strong> {isRunning ? '🟢 Çalışıyor' : '🔴 Durdu'}</p>
                <p><strong>Count:</strong> {count}</p>
                <button onClick={startTimer} className={styles.button} disabled={isRunning}>
                    Başlat
                </button>
                <button onClick={stopTimer} className={styles.button} disabled={!isRunning}>
                    Durdur
                </button>
                <button onClick={resetTimer} className={styles.button}>
                    Sıfırla
                </button>
            </div>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`// Önceki değeri sakla
const prevCountRef = useRef<number>();
useEffect(() => {
  prevCountRef.current = count;
});

// Render sayısını takip et
const renderCount = useRef(0);
renderCount.current += 1; // Re-render yok!

// Timer ID sakla
const timerRef = useRef<NodeJS.Timeout>();
timerRef.current = setInterval(() => {...}, 1000);
clearInterval(timerRef.current);`}</pre>
            </div>

            <div className={styles.highlights} style={{ marginTop: '1rem' }}>
                <h4>🎯 useRef vs useState</h4>
                <ul>
                    <li><strong>useState:</strong> Değer değişince re-render tetiklenir</li>
                    <li><strong>useRef:</strong> Değer değişince re-render tetiklenmez</li>
                    <li><strong>Kullanım:</strong> UI'da gösterilmeyecek değerler için useRef</li>
                </ul>
            </div>
        </div>
    );
}
