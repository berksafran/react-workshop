'use client';

import Link from 'next/link';
import styles from '../../day1-react-core/01-declarative-vs-imperative/page.module.scss';
import { StateBasicDemo, StateFunctionalDemo, StateLazyDemo } from './components/StateDemo';
import { EffectBasicDemo, EffectCleanupDemo, EffectFetchDemo } from './components/EffectDemo';

export default function UseStateUseEffectPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>useState & useEffect</h1>
                <p>React'in en temel hooks'ları</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🎣 useState</h2>
                    <p className={styles.description}>
                        Component'te state tutmak için kullanılır. State değişince component re-render edilir.
                    </p>

                    <StateBasicDemo />
                    <StateFunctionalDemo />
                    <StateLazyDemo />
                </section>

                <section className={styles.section}>
                    <h2>⚡ useEffect</h2>
                    <p className={styles.description}>
                        Side effect'ler için kullanılır: API çağrıları, subscriptions, timers, DOM manipülasyonu.
                    </p>

                    <EffectBasicDemo />
                    <EffectCleanupDemo />
                    <EffectFetchDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>useState:</strong> State değişince component re-render edilir
                        </li>
                        <li>
                            <strong>Functional Updates:</strong> Önceki state'e göre güncelleme için kullan
                        </li>
                        <li>
                            <strong>Lazy Initialization:</strong> Pahalı hesaplamalar için
                        </li>
                        <li>
                            <strong>useEffect Dependency:</strong> Boş [] = mount, [dep] = dep değişince
                        </li>
                        <li>
                            <strong>Cleanup:</strong> Timer, subscription temizlemek için mutlaka kullan
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1/03-hooks" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
