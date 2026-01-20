import { PageContainer } from '@/app/components/PageContainer';
import { EffectBasicDemo } from './components/EffectBasicDemo';
import { EffectCleanupDemo } from './components/EffectCleanupDemo';
import { EffectFetchDemo } from './components/EffectFetchDemo';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function UseEffectPage() {
    // Read notes content at build time
    const notesPath = join(process.cwd(), 'app/day1/03-hooks/01-useState-useEffect/NOTES.md');
    const notesContent = readFileSync(notesPath, 'utf-8');

    return (
        <PageContainer
            title="useEffect Hook"
            description="Side effects ve lifecycle yönetimi"
            notesContent={notesContent}
        >
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>⚡ useEffect Nedir?</h2>
                    <p className={styles.description}>
                        Side effect'ler için kullanılır: API çağrıları, subscriptions, timers, DOM manipülasyonu.
                    </p>

                    <div className={styles.code}>
                        <pre>{`useEffect(() => {
  // Effect kodu
  
  return () => {
    // Cleanup kodu
  };
}, [dependencies]);`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>📊 Dependency Array</h2>
                    <div className={styles.code}>
                        <pre>{`// Her render'da çalışır
useEffect(() => { ... });

// Sadece mount/unmount
useEffect(() => { ... }, []);

// Dependency değişince
useEffect(() => { ... }, [count]);`}</pre>
                    </div>
                    <EffectBasicDemo />
                </section>

                <section className={styles.section}>
                    <h2>🧹 Cleanup Function</h2>
                    <p className={styles.description}>
                        Timer, subscription, event listener temizlemek için cleanup function kullan.
                    </p>
                    <EffectCleanupDemo />
                </section>

                <section className={styles.section}>
                    <h2>🌐 Data Fetching</h2>
                    <p className={styles.description}>
                        API çağrıları için useEffect kullanımı. useEffect async olamaz, içinde async function tanımla.
                    </p>
                    <EffectFetchDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Dependency Array:</strong> Kullandığın tüm state ve props'ları ekle
                        </li>
                        <li>
                            <strong>Cleanup:</strong> Her zaman yap! Memory leak önler
                        </li>
                        <li>
                            <strong>Async:</strong> useEffect async olamaz, içinde async function tanımla
                        </li>
                        <li>
                            <strong>Infinite Loop:</strong> Dependency array'i doğru kullan
                        </li>
                    </ul>
                </section>
            </div>
        </PageContainer>
    );
}
