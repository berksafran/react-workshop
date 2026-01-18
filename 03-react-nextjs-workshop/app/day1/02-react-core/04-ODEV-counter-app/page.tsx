'use client';

import Link from 'next/link';
import styles from './page.module.scss';

export default function CounterAppPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Counter App - Mini Ödev</h1>
                <p>State ve props ilişkisini gösteren sayaç uygulaması</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>� Ödev Açıklaması</h2>

                    <div className={styles.homework}>
                        <h3>Görev:</h3>
                        <p>
                            Aşağıdaki component yapısını kullanarak bir Counter (Sayaç) uygulaması oluşturun.
                            Tüm component'leri <code>components/</code> klasörü içinde oluşturun.
                        </p>

                        <h4>Component Yapısı:</h4>
                        <ul>
                            <li><strong>CounterApp.tsx</strong> - Ana component (state burada tutulacak)</li>
                            <li><strong>CounterDisplay.tsx</strong> - Sayacı gösteren component</li>
                            <li><strong>CounterControls.tsx</strong> - Artır/Azalt butonları</li>
                            <li><strong>CounterHistory.tsx</strong> - Geçmiş değerleri listeleyen component</li>
                            <li><strong>CounterStats.tsx</strong> - İstatistikleri gösteren component</li>
                        </ul>

                        <h4>Özellikler:</h4>
                        <ul>
                            <li>Sayacı artırma ve azaltma</li>
                            <li>Sayacı sıfırlama</li>
                            <li>Geçmiş değerleri kaydetme</li>
                            <li>Min/Max/Ortalama değerleri gösterme</li>
                        </ul>
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

            <Link href="/day1/02-react-core" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
