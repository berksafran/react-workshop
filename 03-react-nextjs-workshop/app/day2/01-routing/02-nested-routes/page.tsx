import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { NestedRoutesDemo } from './components/NestedRoutesDemo';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function NestedRoutesPage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day2/01-routing/02-nested-routes/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Nested Routes & Outlet"
            description="İç içe rotalar ve Layout yönetimi"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎮 Canlı Demo</h2>
                <p>
                    Aşağıdaki demo'da React Router'ın <code>Outlet</code> özelliğini görebilirsiniz.
                    Sol taraftaki menü (Layout) sabit kalırken, sağ taraftaki içerik URL'e göre değişir.
                </p>
                <div className="mt-6">
                    <NestedRoutesDemo />
                </div>
            </section>
        </PageContainer>
    );
}
