'use client';

import { useState } from 'react';
import styles from '../../../01-react-core/01-declarative-vs-imperative/page.module.scss';

export function StateBasicDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.demo}>
            <h3>Temel Kullanım</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className={styles.button}>
                Artır
            </button>
            <button onClick={() => setCount(0)} className={styles.button}>
                Sıfırla
            </button>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`const [count, setCount] = useState(0);

// State güncelleme
setCount(count + 1);
setCount(0);`}</pre>
            </div>
        </div>
    );
}
