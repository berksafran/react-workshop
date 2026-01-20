import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { DynamicRoutesDemo } from './components/DynamicRoutesDemo';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function DynamicRoutesPage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day2/01-routing/03-dynamic-routes/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Dynamic Routes"
            description="URL parametreleri ve useParams hook'u"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎮 Canlı Demo</h2>
                <p>
                    Aşağıdaki demo'da React Router'ın dinamik route özelliğini görebilirsiniz.
                    Bir ürüne tıkladığınızda URL değişir ve <code>useParams</code> hook'u ile ID okunur.
                </p>
                <div className="mt-6">
                    <DynamicRoutesDemo />
                </div>
            </section>
        </PageContainer>
    );
}
