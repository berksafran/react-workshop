'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

export function ImperativeCounter() {
    const [count, setCount] = useState(0);

    // Imperative yaklaşım - DOM'u direkt manipüle et
    const handleClick = () => {
        const element = document.getElementById('imperative-count');
        if (element) {
            const newCount = count + 1;
            element.textContent = newCount.toString();
            setCount(newCount);
        }
    };

    return (
        <div className={styles.demo}>
            <div className={styles.counter}>
                <span>Sayaç: </span>
                <span id="imperative-count" className={styles.count}>
                    {count}
                </span>
            </div>
            <button onClick={handleClick} className={styles.button}>
                Artır
            </button>
        </div>
    );
}

export function DeclarativeCounter() {
    const [count, setCount] = useState(0);

    // Declarative yaklaşım - State'i değiştir, React halleder
    return (
        <div className={styles.demo}>
            <div className={styles.counter}>
                <span>Sayaç: </span>
                <span className={styles.count}>{count}</span>
            </div>
            <button onClick={() => setCount(count + 1)} className={styles.button}>
                Artır
            </button>
        </div>
    );
}
