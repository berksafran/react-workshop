import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ImperativeCounter, DeclarativeCounter } from './components/Counters';
import styles from './page.module.scss';

export default async function DeclarativeVsImperativePage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day1/02-react-core/01-declarative-vs-imperative/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Declarative vs Imperative"
            description="React'in declarative yaklaşımı ve imperative yaklaşımla farkları"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>❌ Imperative (Nasıl Yapılacak)</h2>
                <p className={styles.description}>
                    DOM'u direkt manipüle ederiz. "Nasıl yapılacağını" adım adım söyleriz.
                </p>

                <ImperativeCounter />

                <div className={styles.code}>
                    <pre>{`// Imperative - DOM'u direkt değiştir
const element = document.getElementById('count');
element.textContent = newCount.toString();`}</pre>
                </div>
            </section>

            <section className={styles.section}>
                <h2>✅ Declarative (Ne Olması Gerektiği)</h2>
                <p className={styles.description}>
                    State'i değiştiririz, React UI'ı günceller. "Ne olması gerektiğini" söyleriz.
                </p>

                <DeclarativeCounter />

                <div className={styles.code}>
                    <pre>{`// Declarative - State'i değiştir, React halleder
setCount(count + 1);`}</pre>
                </div>
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Önemli Noktalar</h3>
                <ul>
                    <li>
                        <strong>Imperative:</strong> "Nasıl" yapılacağını adım adım söyleriz
                    </li>
                    <li>
                        <strong>Declarative:</strong> "Ne" olması gerektiğini söyleriz, React halleder
                    </li>
                    <li>
                        React declarative'dir → Daha az kod, daha az hata
                    </li>
                    <li>
                        Virtual DOM sayesinde performanslı güncelleme
                    </li>
                </ul>
            </section>
        </PageContainer>
    );
}
