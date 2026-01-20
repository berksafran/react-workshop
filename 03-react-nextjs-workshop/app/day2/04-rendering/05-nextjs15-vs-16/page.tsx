import styles from '../../../day1/02-react-core/page.module.scss';

export default function NextjsComparisonPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Next.js 15 vs 16 Comparison</h1>
                <p>Yeni versiyonla gelen performans ve geliştirici deneyimi iyileştirmeleri.</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>1. Caching & Rendering</h2>
                    <div className={styles.card}>
                        <h3>Next.js 15</h3>
                        <ul>
                            <li><strong>fetch() Behavior:</strong> Varsayılan olarak cachelenmez (no-store).</li>
                            <li><strong>Route Handlers:</strong> GET metodları varsayılan olarak dinamiktir.</li>
                            <li><strong>Client Router Cache:</strong> 30s (static) veya 0s (dynamic/refresh) varsayılan süreler.</li>
                        </ul>
                    </div>
                    <div className={styles.card} style={{ marginTop: '1rem' }}>
                        <h3>Next.js 16</h3>
                        <ul>
                            <li><strong>Dynamic IO:</strong> "use cache" ve "use cache-control" direktifleri ile daha granüler kontrol.</li>
                            <li><strong>Simplified Caching:</strong> Karmaşık revalidate configleri yerine daha net API'lar.</li>
                            <li><strong>Partial Prerendering (PPR):</strong> Stable duruma yaklaştı/geçti. Statik shell + dinamik içerik.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>2. Turbopack</h2>
                    <div className={styles.comparisonGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.card}>
                            <h3>Next.js 15</h3>
                            <p>Dev server için stable oldu. Webpack'e göre %53 daha hızlı startup, %94 daha hızlı HMR.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Next.js 16</h3>
                            <p>Build komutu için de varsayılan/önerilen hale geldi. Tree-shaking ve minification optimizasyonları iyileştirildi.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>3. React Compiler (React 19)</h2>
                    <div className={styles.card}>
                        <h3>React 19 & Compiler</h3>
                        <p>
                            Next.js 15 ile React 19 RC desteği geldi. Next.js 16 ile React 19 stable entegrasyonu tamamlandı.
                        </p>
                        <br />
                        <strong>React Compiler (Next.js 16 ile):</strong>
                        <ul>
                            <li><code>useMemo</code> ve <code>useCallback</code> gibi hooklara olan ihtiyacı ortadan kaldırır.</li>
                            <li>Kodunuzu otomatik olarak memoize eder.</li>
                            <li>Component ve hook renderlarını optimize eder.</li>
                            <li><code>next.config.js</code> içinde <code>experimental.reactCompiler: true</code> ile aktif edilir (15'te), 16'da daha native destek.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
