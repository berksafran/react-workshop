import { PageContainer } from '@/app/components/PageContainer';
import { RefDomDemo } from './components/RefDomDemo';
import { RefValueDemo } from './components/RefValueDemo';
import { RefReact19Demo } from './components/RefReact19Demo';
import { RefCommonMistakes } from './components/RefCommonMistakes';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function UseRefPage() {
    // Read notes content at build time
    const notesPath = join(process.cwd(), 'app/day1/03-hooks/01-useState-useEffect/NOTES.md');
    const notesContent = readFileSync(notesPath, 'utf-8');

    return (
        <PageContainer
            title="useRef Hook"
            description="DOM referansları ve değer saklama"
            notesContent={notesContent}
        >
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🎯 useRef Nedir?</h2>
                    <p className={styles.description}>
                        useRef, iki ana kullanım alanı olan bir React hook'udur:
                    </p>
                    <ul className={styles.description}>
                        <li><strong>DOM Referansları:</strong> DOM elementlerine direkt erişim</li>
                        <li><strong>Değer Saklama:</strong> Re-render tetiklemeyen değer saklama</li>
                    </ul>

                    <div className={styles.code}>
                        <pre>{`const ref = useRef(initialValue);

// DOM referansı
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} />
inputRef.current?.focus();

// Değer saklama
const countRef = useRef(0);
countRef.current += 1; // Re-render yok!`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>🎮 DOM Referansları</h2>
                    <p className={styles.description}>
                        DOM elementlerine erişmek ve manipüle etmek için useRef kullanılır.
                    </p>
                    <RefDomDemo />
                </section>

                <section className={styles.section}>
                    <h2>💾 Değer Saklama</h2>
                    <p className={styles.description}>
                        Re-render tetiklemeden değer saklamak için useRef kullanılır.
                        useState'ten farkı: ref değişince component re-render olmaz.
                    </p>
                    <RefValueDemo />
                </section>

                <section className={styles.section}>
                    <h2>🆕 React 19 Değişiklikleri</h2>
                    <p className={styles.description}>
                        React 19 ile birlikte ref kullanımı daha basit hale geldi.
                        forwardRef artık gerekmiyor, ref direkt prop olarak kullanılabilir.
                    </p>
                    <RefReact19Demo />
                </section>

                <section className={styles.section}>
                    <h2>⚠️ Yaygın Hatalar</h2>
                    <p className={styles.description}>
                        useRef kullanırken dikkat edilmesi gereken noktalar ve yaygın hatalar.
                    </p>
                    <RefCommonMistakes />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Re-render Yok:</strong> ref.current değişince component re-render olmaz
                        </li>
                        <li>
                            <strong>DOM Erişimi:</strong> useRef ile DOM elementlerine direkt erişebilirsin
                        </li>
                        <li>
                            <strong>Değer Saklama:</strong> UI'da gösterilmeyecek değerler için kullan
                        </li>
                        <li>
                            <strong>React 19:</strong> forwardRef artık gerekmiyor, ref direkt prop
                        </li>
                        <li>
                            <strong>Cleanup:</strong> React 19'da ref cleanup fonksiyonu destekler
                        </li>
                    </ul>
                </section>

                <section className={styles.highlights}>
                    <h3>✅ Kullanım Avantajları</h3>
                    <ul>
                        <li>
                            <strong>Performans:</strong> Re-render tetiklemeden değer saklama
                        </li>
                        <li>
                            <strong>DOM Kontrolü:</strong> Imperative DOM işlemleri için gerekli
                        </li>
                        <li>
                            <strong>Timer/Interval:</strong> ID'leri saklamak için ideal
                        </li>
                        <li>
                            <strong>Önceki Değer:</strong> Previous state pattern için kullanışlı
                        </li>
                        <li>
                            <strong>Third-party:</strong> Kütüphane entegrasyonları için gerekli
                        </li>
                    </ul>
                </section>
            </div>
        </PageContainer>
    );
}
