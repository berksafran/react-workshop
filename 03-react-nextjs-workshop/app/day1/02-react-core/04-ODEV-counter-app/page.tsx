import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from './page.module.scss';

export default async function CounterAppHomeworkPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/02-react-core/04-ODEV-counter-app/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="📚 Ödev: Counter App"
            description="State yönetimi pratiği - Sayaç uygulaması"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎯 Ödev Açıklaması</h2>
                <p className={styles.description}>
                    Bu ödevde, useState hook'unu kullanarak basit bir sayaç uygulaması yapacaksınız.
                    Artırma, azaltma ve sıfırlama fonksiyonları olacak.
                </p>

                <div className={styles.highlights}>
                    <h3>📋 Gereksinimler</h3>
                    <ul>
                        <li><strong>useState:</strong> Sayaç değerini state'te tut</li>
                        <li><strong>Artır butonu:</strong> Sayacı 1 artır</li>
                        <li><strong>Azalt butonu:</strong> Sayacı 1 azalt</li>
                        <li><strong>Sıfırla butonu:</strong> Sayacı 0'a döndür</li>
                    </ul>
                </div>

                <div className={styles.code}>
                    <pre>{`// Örnek başlangıç
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      {/* Diğer butonlar */}
    </div>
  );
}`}</pre>
                </div>
            </section>
        </PageContainer>
    );
}
