import styles from '../../day1/02-react-core/page.module.scss';
import Markdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

export default async function MiniProjectPage() {
    // Requirements dosyasını okuyalım
    const filePath = path.join(process.cwd(), 'app/day2/05-mini-project/REQUIREMENTS.md');
    const content = fs.readFileSync(filePath, 'utf-8');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Markdown içeriğini render edelim */}
                <div style={{ backgroundColor: '#fff', color: '#333', padding: '2rem', borderRadius: '8px', lineHeight: '1.6' }}>
                    <Markdown>{content}</Markdown>
                </div>
            </div>
        </div>
    );
}
