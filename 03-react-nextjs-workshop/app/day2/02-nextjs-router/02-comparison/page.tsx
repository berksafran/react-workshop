import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from './comparison.module.scss';

export default async function ComparisonPage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day2/02-nextjs-router/02-comparison/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="⚖️ React Router vs Next.js Router"
            description="İki routing çözümünün detaylı karşılaştırması"
            notesContent={notesContent}
        >
            <div className={styles.comparisonPage}>
                <section>
                    <h2>🎯 Özet</h2>
                    <div className={styles.summarySection}>
                        <div className={styles.comparisonCard}>
                            <h3>React Router</h3>
                            <ul>
                                <li>Code-based routing</li>
                                <li>Client-side rendering odaklı</li>
                                <li>Maksimum esneklik</li>
                                <li>Pure SPA'lar için ideal</li>
                            </ul>
                        </div>
                        <div className={styles.comparisonCard}>
                            <h3>Next.js Router</h3>
                            <ul>
                                <li>File-based routing</li>
                                <li>SSR/SSG built-in</li>
                                <li>Convention over configuration</li>
                                <li>Full-stack uygulamalar için ideal</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>📊 Karar Matrisi</h2>
                    <div className={styles.decisionMatrix}>
                        <pre>{`Proje Gereksinimleri:
                    
1. SEO kritik mi?
   → Evet: Next.js Router ✅
   → Hayır: Her ikisi de ✓

2. Server-side rendering gerekli mi?
   → Evet: Next.js Router ✅
   → Hayır: React Router ✅

3. API endpoints gerekli mi?
   → Evet: Next.js Router ✅
   → Hayır: Her ikisi de ✓

4. Mevcut React projesi mi?
   → Evet: React Router ✅
   → Hayır: Next.js Router ✅

5. Hızlı prototipleme mi?
   → Evet: Next.js Router ✅
   → Hayır: Her ikisi de ✓`}</pre>
                    </div>
                </section>

                <section className={styles.examplesSection}>
                    <h2>💡 Gerçek Dünya Örnekleri</h2>

                    <div className={styles.reactRouterExamples}>
                        <h3>React Router Kullanan Projeler:</h3>
                        <ul>
                            <li><strong>Admin Panelleri</strong> - Tamamen client-side, SEO gereksiz</li>
                            <li><strong>Dashboard Uygulamaları</strong> - Karmaşık client-side routing</li>
                            <li><strong>Internal Tools</strong> - Sadece authenticated kullanıcılar</li>
                        </ul>
                    </div>

                    <div className={styles.nextjsExamples}>
                        <h3>Next.js Router Kullanan Projeler:</h3>
                        <ul>
                            <li><strong>E-ticaret Siteleri</strong> - SEO kritik, ürün sayfaları SSG</li>
                            <li><strong>Blog/İçerik Siteleri</strong> - Static generation, SEO</li>
                            <li><strong>Marketing Siteleri</strong> - Landing pages, SEO optimizasyonu</li>
                            <li><strong>SaaS Uygulamaları</strong> - Hem public hem authenticated sayfalar</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageContainer>
    );
}
