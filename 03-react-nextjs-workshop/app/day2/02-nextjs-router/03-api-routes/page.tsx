import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ApiDemo } from './components/ApiDemo';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function ApiRoutesPage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day2/02-nextjs-router/03-api-routes/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="🔌 Next.js API Routes"
            description="Backend API endpoints oluşturma"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎮 Canlı Demo</h2>
                <p>
                    Aşağıdaki demo'da Next.js API Routes'u test edebilirsiniz.
                    Her buton, ilgili API endpoint'ini çağırır ve response'u gösterir.
                </p>
                <ApiDemo />
            </section>
        </PageContainer>
    );
}
