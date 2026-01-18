'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { CounterApp } from './components/CounterApp';

export default function CounterAppPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Counter App - Mini Ödev</h1>
                <p>State ve props ilişkisini gösteren sayaç uygulaması</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🔢 Counter Uygulaması</h2>

                    <CounterApp />
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

            <Link href="/day1/01-react-core" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
