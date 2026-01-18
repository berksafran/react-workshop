'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

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

export default function CounterAppPage() {
    // Parent component - State management
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
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Counter App - Mini Ödev</h1>
                <p>State ve props ilişkisini gösteren sayaç uygulaması</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🔢 Counter Uygulaması</h2>

                    <div className={styles.app}>
                        {/* Child Component - Props ile veri alır */}
                        <CounterDisplay count={count} title="Mevcut Sayaç" />

                        {/* Child Component - Callback ile parent'ı günceller */}
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
                </section>

                <section className={styles.section}>
                    <h2>📊 İşlem Geçmişi</h2>
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
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Bu Örnekte Öğrenilenler</h3>
                    <ul>
                        <li>
                            <strong>State Management:</strong> Parent component'te state tutma
                        </li>
                        <li>
                            <strong>Props:</strong> Child component'lere veri aktarma
                        </li>
                        <li>
                            <strong>Callback Functions:</strong> Child'dan parent'ı güncelleme
                        </li>
                        <li>
                            <strong>Component Composition:</strong> Küçük component'lerden büyük uygulama
                        </li>
                        <li>
                            <strong>Immutability:</strong> State'i spread operator ile güncelleme
                        </li>
                        <li>
                            Array metodları: map, Math.max, Math.min
                        </li>
                    </ul>
                </section>

                <section className={styles.codeSection}>
                    <h3>💻 Kod Yapısı</h3>
                    <div className={styles.code}>
                        <pre>{`// Parent Component (State)
const [count, setCount] = useState(0);

// Child Component (Props)
<CounterDisplay count={count} title="Sayaç" />

// Child Component (Callback)
<CounterControls 
  onIncrement={() => setCount(count + 1)}
  onDecrement={() => setCount(count - 1)}
/>`}</pre>
                    </div>
                </section>
            </div>

            <Link href="/day1-react-core" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
