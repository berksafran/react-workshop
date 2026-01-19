import { promises as fs } from 'fs';
import path from 'path';
import { MarkdownViewer } from '@/app/components/MarkdownViewer';
import Link from 'next/link';
import styles from '../../../../day1/02-react-core/page.module.scss';

export default async function NotesPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/01-routing/01-react-router-basics/NOTES.md');
    const content = await fs.readFile(notesPath, 'utf-8');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>📚 React Router Basics - Notlar</h1>
                <p>Detaylı açıklamalar ve örnekler</p>
            </header>

            <div className={styles.content}>
                <MarkdownViewer content={content} />
            </div>
        </div>
    );
}
