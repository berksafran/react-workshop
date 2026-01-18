'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export default function DeclarativeVsImperativePage() {
    const [count, setCount] = useState(0);
    const [imperativeCount, setImperativeCount] = useState(0);

    // Imperative yaklaşım - DOM'u direkt manipüle et
    const handleImperativeClick = () => {
        const element = document.getElementById('imperative-count');
        if (element) {
            const newCount = imperativeCount + 1;
            element.textContent = newCount.toString();
            setImperativeCount(newCount);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Declarative vs Imperative</h1>
                <p>React'in declarative yaklaşımı ve imperative yaklaşımla farkları</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>❌ Imperative (Nasıl Yapılacak)</h2>
                    <p className={styles.description}>
                        DOM'u direkt manipüle ederiz. "Nasıl yapılacağını" adım adım söyleriz.
                    </p>

                    <div className={styles.demo}>
                        <div className={styles.counter}>
                            <span>Sayaç: </span>
                            <span id="imperative-count" className={styles.count}>
                                {imperativeCount}
                            </span>
                        </div>
                        <button onClick={handleImperativeClick} className={styles.button}>
                            Artır (Imperative)
                        </button>
                    </div>

                    <div className={styles.code}>
                        <pre>{`// Imperative - DOM'u direkt değiştir
const element = document.getElementById('count');
element.textContent = newCount.toString();`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>✅ Declarative (Ne Olması Gerektiği)</h2>
                    <p className={styles.description}>
                        State'i değiştiririz, React UI'ı günceller. "Ne olması gerektiğini" söyleriz.
                    </p>

                    <div className={styles.demo}>
                        <div className={styles.counter}>
                            <span>Sayaç: </span>
                            <span className={styles.count}>{count}</span>
                        </div>
                        <button onClick={() => setCount(count + 1)} className={styles.button}>
                            Artır (Declarative)
                        </button>
                    </div>

                    <div className={styles.code}>
                        <pre>{`// Declarative - State'i değiştir, React halleder
setCount(count + 1);`}</pre>
                    </div>
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Imperative:</strong> "Nasıl" yapılacağını adım adım söyleriz
                        </li>
                        <li>
                            <strong>Declarative:</strong> "Ne" olması gerektiğini söyleriz, React halleder
                        </li>
                        <li>
                            React declarative'dir → Daha az kod, daha az hata
                        </li>
                        <li>
                            Virtual DOM sayesinde performanslı güncelleme
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1-react-core" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
