'use client';

import { useState } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export function StateFunctionalDemo() {
    const [count, setCount] = useState(0);

    const handleBadIncrement = () => {
        // ❌ Yanlış - Birden fazla güncelleme çalışmaz
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    const handleGoodIncrement = () => {
        // ✅ Doğru - Functional update
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    };

    return (
        <div className={styles.demo}>
            <h3>Functional Updates</h3>
            <p>Count: {count}</p>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <button onClick={handleBadIncrement} className={styles.button}>
                    ❌ +3 (Yanlış)
                </button>
                <button onClick={handleGoodIncrement} className={styles.button}>
                    ✅ +3 (Doğru)
                </button>
                <button onClick={() => setCount(0)} className={styles.button}>
                    Sıfırla
                </button>
            </div>

            <div className={styles.code}>
                <pre>{`// ❌ Yanlış
setCount(count + 1);
setCount(count + 1); // count hala aynı!

// ✅ Doğru
setCount(prev => prev + 1);
setCount(prev => prev + 1); // Çalışır!`}</pre>
            </div>
        </div>
    );
}
