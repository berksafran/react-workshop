import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from '../../../../day1/02-react-core/page.module.scss';

// 10 Saniyede bir revalidate et (ISR)
export const revalidate = 10;

async function getData() {
    return {
        time: new Date().toLocaleTimeString('tr-TR'),
        randomNumber: Math.floor(Math.random() * 10000)
    };
}

export default async function ISRPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/04-rendering/04-isr/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    const data = await getData();

    return (
        <PageContainer
            title="Incremental Static Regeneration (ISR)"
            description="Statik sayfaların belirli aralıklarla güncellenmesi"
            notesContent={notesContent}
        >
            <div className={styles.section}>
                <h2>⏱️ Yarı-Dinamik İçerik</h2>
                <p>
                    Bu sayfa statik olarak oluşturulmuştur (SSG), ancak <strong>10 saniyelik</strong> bir ömrü vardır.
                    Süre dolduktan sonra gelen ilk istekte, Next.js arka planda sayfayı yenilemeye çalışır.
                </p>

                <div style={{
                    padding: '2rem',
                    backgroundColor: '#eff6ff',
                    borderRadius: '12px',
                    marginTop: '1rem',
                    border: '1px solid #dbeafe'
                }}>
                    <h3 style={{ borderBottom: '1px solid #bfdbfe', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#1e3a8a' }}>
                        ISR Data (Revalidate: 10s)
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                            <strong>Oluşturulma Saati:</strong> {data.time}
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>ID:</strong> {data.randomNumber}
                        </li>
                        <li style={{ color: '#2563eb', fontWeight: 'bold' }}>
                            <strong>Status:</strong> Stale-While-Revalidate
                        </li>
                    </ul>
                </div>

                <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                    <strong>Nasıl Test Edilir?</strong>
                    <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <li>Sayfayı yenileyin.</li>
                        <li>10 saniye içinde tekrar yenilerseniz saatin <strong>değişmediğini</strong> göreceksiniz.</li>
                        <li>10 saniye geçtikten sonra yenilerseniz, arka planda tetiklenir (hala eskiyi görebilirsiniz).</li>
                        <li>Bir sonraki yenilemede yeni saati göreceksiniz.</li>
                    </ol>
                    <p>Not: Development modunda (npm run dev) bu cache davranışı devre dışı olabilir.</p>
                </div>
            </div>
        </PageContainer>
    );
}
