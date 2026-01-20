import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ProfilePageDemo } from './components/ProfilePageDemo';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function ProfilePage() {
    // Read NOTES.md file
    const notesPath = path.join(process.cwd(), 'app/day2/01-routing/04-profile-page/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Profile Page - Nested + Dynamic Routes"
            description="İç içe ve dinamik rotaların birlikte kullanımı"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎮 Canlı Demo</h2>
                <p>
                    Bu demo, hem <strong>dynamic routes</strong> (<code>:userId</code>) hem de{' '}
                    <strong>nested routes</strong> (tabs) kullanır. Farklı kullanıcılar seçip,
                    tab'lar arasında geçiş yaparak her iki konseptin birlikte nasıl çalıştığını görebilirsiniz.
                </p>
                <div className="mt-6">
                    <ProfilePageDemo />
                </div>
            </section>
        </PageContainer>
    );
}
