'use client';

import { useState, useEffect } from 'react';
import styles from '../../../01-react-core/01-declarative-vs-imperative/page.module.scss';

export function EffectCleanupDemo() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup function
        return () => {
            console.log('Cleanup: Timer temizlendi');
            clearInterval(interval);
        };
    }, [isRunning]);

    return (
        <div className={styles.demo}>
            <h3>Cleanup Function</h3>
            <p>Seconds: {seconds}</p>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={styles.button}
                >
                    {isRunning ? 'Durdur' : 'Başlat'}
                </button>
                <button
                    onClick={() => setSeconds(0)}
                    className={styles.button}
                >
                    Sıfırla
                </button>
            </div>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  // Cleanup
  return () => {
    clearInterval(interval);
  };
}, [isRunning]);`}</pre>
            </div>
        </div>
    );
}
