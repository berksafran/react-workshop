import styles from './Comparison.module.scss';

export default function NextjsComparisonPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Next.js 15 vs 16 Comparison</h1>
                <p>Yeni versiyonla gelen performans ve geliştirici deneyimi iyileştirmeleri.</p>
            </header>

            <div className={styles.content}>
                {/* Caching & Rendering */}
                <section className={styles.section}>
                    <h2>1. Caching & Rendering</h2>

                    <div className={`${styles.card} ${styles.nextjs15}`}>
                        <h3>Next.js 15</h3>
                        <ul>
                            <li><strong>fetch() Behavior:</strong> Varsayılan olarak cachelenmez (no-store).</li>
                            <li><strong>Route Handlers:</strong> GET metodları varsayılan olarak dinamiktir.</li>
                            <li><strong>Client Router Cache:</strong> 30s (static) veya 0s (dynamic/refresh) varsayılan süreler.</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.nextjs16}`} style={{ marginTop: '24px' }}>
                        <h3>Next.js 16</h3>
                        <ul>
                            <li><strong>Dynamic IO:</strong> <code>use cache</code> ve <code>use cache-control</code> direktifleri ile daha granüler kontrol.</li>
                            <li><strong>Simplified Caching:</strong> Karmaşık revalidate configleri yerine daha net API'lar.</li>
                            <li><strong>Partial Prerendering (PPR):</strong> Stable duruma yaklaştı/geçti. Statik shell + dinamik içerik.</li>
                        </ul>
                    </div>
                </section>

                {/* Turbopack */}
                <section className={styles.section}>
                    <h2>2. Turbopack ⚡</h2>

                    <div className={styles.comparisonGrid}>
                        <div className={`${styles.card} ${styles.nextjs15}`}>
                            <h3>Next.js 15</h3>
                            <p>Dev server için stable oldu. Webpack'e göre:</p>
                            <ul>
                                <li><strong>%53 daha hızlı</strong> startup</li>
                                <li><strong>%94 daha hızlı</strong> HMR (Hot Module Replacement)</li>
                            </ul>
                        </div>

                        <div className={`${styles.card} ${styles.nextjs16}`}>
                            <h3>Next.js 16</h3>
                            <p>Build komutu için de varsayılan/önerilen hale geldi:</p>
                            <ul>
                                <li><strong>Tree-shaking</strong> optimizasyonları iyileştirildi</li>
                                <li><strong>Minification</strong> performansı artırıldı</li>
                                <li><strong>Production builds</strong> daha hızlı</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* React Compiler */}
                <section className={styles.section}>
                    <h2>3. React Compiler (React 19) 🎯</h2>

                    <div className={styles.card}>
                        <h3>React 19 & Compiler</h3>
                        <p>
                            Next.js 15 ile React 19 RC desteği geldi. Next.js 16 ile React 19 stable entegrasyonu tamamlandı.
                        </p>

                        <div className={styles.highlight}>
                            <strong>React Compiler (Next.js 16 ile):</strong>
                            <ul>
                                <li><code>useMemo</code> ve <code>useCallback</code> gibi hooklara olan ihtiyacı ortadan kaldırır.</li>
                                <li>Kodunuzu otomatik olarak memoize eder.</li>
                                <li>Component ve hook renderlarını optimize eder.</li>
                                <li><code>next.config.js</code> içinde <code>experimental.reactCompiler: true</code> ile aktif edilir.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Key Features Summary */}
                <section className={styles.section}>
                    <h2>4. Öne Çıkan Özellikler 🌟</h2>

                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>⚡</div>
                            <h4>Daha Hızlı Build</h4>
                            <p>Turbopack ile production build süreleri dramatik şekilde azaldı</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🎯</div>
                            <h4>Otomatik Optimizasyon</h4>
                            <p>React Compiler ile manuel memoization'a gerek kalmadı</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🔄</div>
                            <h4>Gelişmiş Caching</h4>
                            <p>Daha basit ve anlaşılır cache yönetimi API'ları</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🚀</div>
                            <h4>PPR Stable</h4>
                            <p>Partial Prerendering ile hibrit rendering stratejileri</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.icon}>📦</div>
                            <h4>Daha İyi DX</h4>
                            <p>Geliştirici deneyimi iyileştirmeleri ve daha iyi error messages</p>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🎨</div>
                            <h4>React 19</h4>
                            <p>Server Components, Actions ve yeni hooklarla tam entegrasyon</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
