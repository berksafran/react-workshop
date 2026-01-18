'use client';

import { useState } from 'react';
import styles from '../page.module.scss';
import { CounterDisplay } from './CounterDisplay';
import { CounterControls } from './CounterControls';
import { CounterStats } from './CounterStats';
import { CounterHistory } from './CounterHistory';

export function CounterApp() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([0]);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        setHistory([...history, newCount]);
    };

    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        setHistory([...history, newCount]);
    };

    const handleReset = () => {
        setCount(0);
        setHistory([...history, 0]);
    };

    return (
        <>
            <div className={styles.app}>
                <CounterDisplay count={count} title="Mevcut Sayaç" />
                <CounterControls
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onReset={handleReset}
                />
            </div>

            <CounterStats history={history} />
            <CounterHistory history={history} />
        </>
    );
}
