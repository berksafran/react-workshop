import path from 'path';
import { promises as fs } from 'fs';
import { PageContainer } from '@/app/components/PageContainer';
import { LifecycleContainer } from './components/LifecycleContainer';
import styles from '../01-declarative-vs-imperative/page.module.scss';

export default async function LifecyclePage() {
    const notesPath = path.join(process.cwd(), 'app/day1/02-react-core/03-lifecycle/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Component Lifecycle"
            description="React component yaşam döngüsü - Mount, Update, Unmount"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🔄 Lifecycle Demo</h2>
                <p className={styles.description}>
                    Component'in mount, update ve unmount aşamalarını görmek için demo'yu kullanın.
                </p>
                <LifecycleContainer />
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Üç Aşama</h3>
                <ul>
                    <li><strong>Mount:</strong> Component ilk kez DOM'a eklenir</li>
                    <li><strong>Update:</strong> State veya props değişince re-render olur</li>
                    <li><strong>Unmount:</strong> Component DOM'dan kaldırılır</li>
                    <li><strong>useEffect:</strong> Her aşamada farklı işlemler yapabilirsin</li>
                </ul>
            </section>
        </PageContainer>
    );
}
