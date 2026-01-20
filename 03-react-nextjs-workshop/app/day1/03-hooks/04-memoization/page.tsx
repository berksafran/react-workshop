import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { CallbackDemo, UseMemoDemo, WhenNotToUseDemo } from './components/PerformanceDemo';
import { MemoDemo } from './components/MemoDemo';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default async function MemoizationPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/03-hooks/04-memoization/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Memoization"
            description="useCallback, useMemo ve React.memo ile performans optimizasyonu"
            notesContent={notesContent}
        >
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
                <UseMemoDemo />
            </section>

            <section className={styles.section}>
                <h2>🎭 React.memo</h2>
                <p className={styles.description}>
                    Component'i memoize eder. Props değişmedikçe re-render olmaz.
                </p>
                <MemoDemo />
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
                    <li><strong>useCallback:</strong> Fonksiyonları memoize et</li>
                    <li><strong>useMemo:</strong> Pahalı hesaplamaları memoize et</li>
                    <li><strong>React.memo:</strong> Component'i memoize et</li>
                    <li><strong>Gereksiz kullanma:</strong> Basit işlemler için kullanma</li>
                    <li><strong>React Compiler:</strong> Next.js 16'da otomatik memoization!</li>
                </ul>
            </section>
        </PageContainer>
    );
}
