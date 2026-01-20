import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ClientDataFetcher } from './components/ClientDataFetcher';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function CSRPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/04-rendering/02-csr/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Client Side Rendering (CSR)"
            description="use client ve useEffect ile veri çekme"
            notesContent={notesContent}
        >
            <div className={styles.section}>
                <h2>🖥️ Tarayıcı Tabanlı Render</h2>
                <p>
                    Aşağıdaki bileşen, sunucuda oluşturulmaz. Tarayıcıya JavaScript kodu olarak gönderilir
                    ve tarayıcıda çalışarak (hydrate) veriyi çeker.
                </p>

                <ClientDataFetcher />
            </div>
        </PageContainer>
    );
}
