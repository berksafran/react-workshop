import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { StatePropsDemo } from './components/StatePropsDemo';
import styles from '../01-declarative-vs-imperative/page.module.scss';

export default async function StateAndPropsPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/02-react-core/02-state-and-props/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="State & Props"
            description="Component state yönetimi ve props ile veri aktarımı"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎯 Canlı Demo</h2>
                <p className={styles.description}>
                    State ve Props'un nasıl çalıştığını görmek için aşağıdaki demo'yu inceleyin.
                </p>
                <StatePropsDemo />
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Önemli Noktalar</h3>
                <ul>
                    <li><strong>State:</strong> Component'in kendi verisi, değişince re-render olur</li>
                    <li><strong>Props:</strong> Parent'tan child'a veri aktarımı, read-only</li>
                    <li><strong>Tek yönlü veri akışı:</strong> Parent → Child (props ile)</li>
                    <li><strong>State yukarı taşınabilir:</strong> Lifting state up pattern</li>
                </ul>
            </section>
        </PageContainer>
    );
}
