'use client';

import Link from 'next/link';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { CallbackDemo, MemoDemo, WhenNotToUseDemo } from './components/PerformanceDemo';

export default function UseCallbackUseMemoPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Memoization</h1>
                <p>useCallback, useMemo ve React.memo ile performans optimizasyonu</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🔄 useCallback</h2>
                    <p className={styles.description}>
                        Fonksiyonları memoize eder. Child component'e props olarak geçerken kullan.
                    </p>

                    <CallbackDemo />
                </section>

                <section className={styles.section}>
                    <h2>💾 useMemo</h2>
                    <p className={styles.description}>
                        Pahalı hesaplamaları memoize eder. Sadece dependency değişince yeniden hesaplar.
                    </p>

                    <MemoDemo />
                </section>

                <section className={styles.section}>
                    <h2>🎭 React.memo</h2>
                    <p className={styles.description}>
                        Component'i memoize eder. Props değişmedikçe re-render olmaz. useCallback ile birlikte kullan.
                    </p>

                    <div className={styles.code}>
                        <pre>{`// Component'i React.memo ile sar
const MemoizedChild = memo(({ data, onClick }) => {
  console.log('Render!');
  return <div onClick={onClick}>{data}</div>;
});

// Parent'ta useCallback kullan
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

// Props değişmediği için child re-render olmaz
<MemoizedChild data="test" onClick={handleClick} />`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>⚠️ Ne Zaman Kullanmamak?</h2>
                    <p className={styles.description}>
                        Her yerde kullanma! Gereksiz kullanım performansı düşürür.
                    </p>

                    <WhenNotToUseDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>useCallback:</strong> Fonksiyonları memoize et (child component'e geçerken)
                        </li>
                        <li>
                            <strong>useMemo:</strong> Pahalı hesaplamaları memoize et
                        </li>
                        <li>
                            <strong>React.memo:</strong> Component'i memoize et (props değişmezse re-render yok)
                        </li>
                        <li>
                            <strong>Gereksiz kullanma:</strong> Basit işlemler için kullanma
                        </li>
                        <li>
                            <strong>React Compiler:</strong> Next.js 16'da otomatik memoization var!
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
