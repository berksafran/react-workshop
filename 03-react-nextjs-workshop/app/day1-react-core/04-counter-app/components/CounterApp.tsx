'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

// Counter Display Component (Child)
type CounterDisplayProps = {
    count: number;
    title: string;
};

function CounterDisplay({ count, title }: CounterDisplayProps) {
    return (
        <div className={styles.display}>
            <h3>{title}</h3>
            <div className={styles.count}>{count}</div>
        </div>
    );
}

// Counter Controls Component (Child)
type CounterControlsProps = {
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
};

function CounterControls({ onIncrement, onDecrement, onReset }: CounterControlsProps) {
    return (
        <div className={styles.controls}>
            <button onClick={onDecrement} className={styles.button}>
                - Azalt
            </button>
            <button onClick={onReset} className={styles.buttonSecondary}>
                🔄 Sıfırla
            </button>
            <button onClick={onIncrement} className={styles.button}>
                + Artır
            </button>
        </div>
    );
}

// Main Counter App Component (Parent)
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

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.label}>Toplam İşlem:</span>
                    <span className={styles.value}>{history.length - 1}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.label}>En Yüksek:</span>
                    <span className={styles.value}>{Math.max(...history)}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.label}>En Düşük:</span>
                    <span className={styles.value}>{Math.min(...history)}</span>
                </div>
            </div>

            <div className={styles.history}>
                {history.map((value, index) => (
                    <div key={index} className={styles.historyItem}>
                        <span className={styles.historyIndex}>#{index}</span>
                        <span className={styles.historyValue}>{value}</span>
                        {index > 0 && (
                            <span className={styles.historyChange}>
                                {value > history[index - 1] ? '↑' : value < history[index - 1] ? '↓' : '='}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
