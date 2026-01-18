'use client';

import { useState } from 'react';
import styles from '../../day1-react-core/01-declarative-vs-imperative/page.module.scss';

// useState Temel Kullanım
export function StateBasicDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
        <div className={styles.demo}>
            <h3>Temel useState</h3>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)} className={styles.button}>
                    Artır
                </button>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="İsim gir"
                />
                <p>Merhaba, {name || 'misafir'}!</p>
            </div>
        </div>
    );
}

// useState Functional Updates
export function StateFunctionalDemo() {
    const [count, setCount] = useState(0);

    const handleMultipleUpdates = () => {
        // ❌ Yanlış - Sadece 1 artırır
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // ✅ Doğru - 3 artırır
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    };

    return (
        <div className={styles.demo}>
            <h3>Functional Updates</h3>
            <p>Count: {count}</p>
            <button onClick={handleMultipleUpdates} className={styles.button}>
                +3 Artır (Functional)
            </button>
            <button onClick={() => setCount(0)} className={styles.button} style={{ marginLeft: '0.5rem' }}>
                Sıfırla
            </button>
        </div>
    );
}

// useState Lazy Initialization
export function StateLazyDemo() {
    // ❌ Her render'da çalışır
    // const [data, setData] = useState(expensiveCalculation());

    // ✅ Sadece ilk render'da çalışır
    const [data, setData] = useState(() => {
        console.log('Lazy initialization çalıştı');
        return Array.from({ length: 1000 }, (_, i) => i);
    });

    return (
        <div className={styles.demo}>
            <h3>Lazy Initialization</h3>
            <p>Array uzunluğu: {data.length}</p>
            <p>Console'a bak - sadece ilk render'da çalışır</p>
        </div>
    );
}
