'use client';

import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { useCounter } from '../hooks/useCounter';

export function CounterDemo() {
    const { count, increment, decrement, reset, setValue } = useCounter(0, {
        min: 0,
        max: 10,
        step: 1
    });

    return (
        <div className={styles.demo}>
            <h3>useCounter Demo</h3>
            <p>Count: {count}</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Min: 0, Max: 10, Step: 1
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <button
                    onClick={increment}
                    disabled={count >= 10}
                    className={styles.button}
                >
                    + Artır
                </button>
                <button
                    onClick={decrement}
                    disabled={count <= 0}
                    className={styles.button}
                >
                    - Azalt
                </button>
                <button onClick={reset} className={styles.button}>
                    🔄 Sıfırla
                </button>
                <button onClick={() => setValue(5)} className={styles.button}>
                    5 Yap
                </button>
                <button onClick={() => setValue(10)} className={styles.button}>
                    Max
                </button>
            </div>
        </div>
    );
}
