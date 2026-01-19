import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ReactRouterDemo } from './components/ReactRouterDemo';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function ReactRouterBasicsPage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day2/01-routing/01-react-router-basics/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="React Router Basics"
            description="Client-side routing temel kavramları"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎮 Canlı Demo</h2>
                <p>
                    Aşağıdaki demo'da React Router'ın temel özelliklerini görebilirsiniz.
                    Sayfalar arası geçiş yaparken tarayıcının yenilenmediğine dikkat edin!
                </p>
                <ReactRouterDemo />
            </section>
        </PageContainer>
    );
}
