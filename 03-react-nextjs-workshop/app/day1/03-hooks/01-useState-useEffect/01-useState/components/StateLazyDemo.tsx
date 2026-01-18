'use client';

import { useState } from 'react';
import styles from '../../../01-react-core/01-declarative-vs-imperative/page.module.scss';

// Pahalı hesaplama simülasyonu
function expensiveCalculation() {
    console.log('Pahalı hesaplama çalışıyor...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += i;
    }
    return result;
}

export function StateLazyDemo() {
    // ❌ Her render'da çalışır
    // const [data, setData] = useState(expensiveCalculation());

    // ✅ Sadece ilk render'da çalışır
    const [data, setData] = useState(() => expensiveCalculation());
    const [renderCount, setRenderCount] = useState(0);

    return (
        <div className={styles.demo}>
            <h3>Lazy Initialization</h3>
            <p>Data: {data}</p>
            <p>Render Count: {renderCount}</p>

            <button
                onClick={() => setRenderCount(renderCount + 1)}
                className={styles.button}
            >
                Re-render (Console'a bak)
            </button>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`// ❌ Her render'da çalışır
const [data, setData] = useState(expensiveCalculation());

// ✅ Sadece ilk render'da çalışır
const [data, setData] = useState(() => expensiveCalculation());`}</pre>
            </div>
        </div>
    );
}
