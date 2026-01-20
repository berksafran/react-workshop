import styles from './page.module.scss';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { PageContainer } from '../../components/PageContainer';
import { MarkdownViewer } from '../../components/MarkdownViewer';

export default async function MiniProjectPage() {
    // Requirements dosyasını okuyalım
    const filePath = path.join(process.cwd(), 'app/day2/05-mini-project/NOTES.md');
    const content = fs.readFileSync(filePath, 'utf-8');

    return (
        <PageContainer
            title="Mini Proje: Kullanıcı Rehberi"
            description="Rendering Patterns, Routing ve State Management pratiği"
        >
            <MarkdownViewer content={content} />

            <div className={styles.ctas}>
                <Link href="/day2" className={`${styles.button} ${styles.secondary}`}>
                    ← Geri Dön
                </Link>
                <Link href="/day2/05-mini-project/users" className={`${styles.button} ${styles.primary}`}>
                    Önizlemeyi Başlat →
                </Link>
            </div>
        </PageContainer>
    );
}
