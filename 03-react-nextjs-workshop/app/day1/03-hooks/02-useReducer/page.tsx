import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ReducerDemo } from './components/ReducerDemo';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default async function UseReducerPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/03-hooks/02-useReducer/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="useReducer"
            description="Kompleks state yönetimi için reducer pattern"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🔄 useReducer Demo</h2>
                <p className={styles.description}>
                    useReducer ile kompleks state yönetimini görmek için demo'yu inceleyin.
                </p>
                <ReducerDemo />
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Ne Zaman Kullan?</h3>
                <ul>
                    <li><strong>Çok fazla state var:</strong> useState ile karmaşık hale geldi</li>
                    <li><strong>State'ler birbirine bağlı:</strong> Bir state değişince diğeri de değişiyor</li>
                    <li><strong>Kompleks güncelleme mantığı:</strong> State güncellemesi karmaşık</li>
                    <li><strong>Test edilebilirlik:</strong> Reducer fonksiyonu pure, test kolay</li>
                </ul>
            </section>
        </PageContainer>
    );
}
