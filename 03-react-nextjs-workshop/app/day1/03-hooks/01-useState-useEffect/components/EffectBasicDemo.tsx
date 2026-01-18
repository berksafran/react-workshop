'use client';

import { useState, useEffect } from 'react';
import styles from '../../../01-react-core/01-declarative-vs-imperative/page.module.scss';

export function EffectBasicDemo() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    // Her render'da çalışır (dependency array yok)
    useEffect(() => {
        setMessage(`Component rendered ${count} times`);
    });

    return (
        <div className={styles.demo}>
            <h3>Dependency Array</h3>
            <p>Count: {count}</p>
            <p>Message: {message}</p>

            <button onClick={() => setCount(count + 1)} className={styles.button}>
                Artır
            </button>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`// Her render'da çalışır
useEffect(() => { ... });

// Sadece mount/unmount
useEffect(() => { ... }, []);

// count değişince
useEffect(() => { ... }, [count]);`}</pre>
            </div>
        </div>
    );
}
