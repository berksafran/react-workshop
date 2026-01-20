import { PageContainer } from '@/app/components/PageContainer';
import { StateBasicDemo } from './components/StateBasicDemo';
import { StateFunctionalDemo } from './components/StateFunctionalDemo';
import { StateLazyDemo } from './components/StateLazyDemo';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function UseStatePage() {
    // Read notes content at build time
    const notesPath = join(process.cwd(), 'app/day1/03-hooks/01-useState-useEffect/NOTES.md');
    const notesContent = readFileSync(notesPath, 'utf-8');

    return (
        <PageContainer
            title="useState Hook"
            description="Component state yönetimi"
            notesContent={notesContent}
        >
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>📦 useState Nedir?</h2>
                    <p className={styles.description}>
                        Component'te state tutmak için kullanılır. State değişince component re-render edilir.
                    </p>

                    <div className={styles.code}>
                        <pre>{`const [state, setState] = useState(initialValue);

// State güncelleme
setState(newValue);

// Functional update
setState(prev => prev + 1);`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>🎮 Temel Kullanım</h2>
                    <StateBasicDemo />
                </section>

                <section className={styles.section}>
                    <h2>🔄 Functional Updates</h2>
                    <p className={styles.description}>
                        State'i önceki değerine göre güncellemek için functional update kullan.
                    </p>
                    <StateFunctionalDemo />
                </section>

                <section className={styles.section}>
                    <h2>⚡ Lazy Initialization</h2>
                    <p className={styles.description}>
                        Pahalı hesaplamalar için lazy initialization kullan. Sadece ilk render'da çalışır.
                    </p>
                    <StateLazyDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Re-render:</strong> State değişince component yeniden render edilir
                        </li>
                        <li>
                            <strong>Functional Updates:</strong> Async işlemlerde prev =&gt; prev + 1 kullan
                        </li>
                        <li>
                            <strong>Lazy Init:</strong> useState(() =&gt; expensiveCalc()) şeklinde
                        </li>
                        <li>
                            <strong>Immutability:</strong> Object/array'leri direkt değiştirme, yeni oluştur
                        </li>
                    </ul>
                </section>
            </div>
        </PageContainer>
    );
}
