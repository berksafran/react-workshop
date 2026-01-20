import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from '../../../day1/02-react-core/page.module.scss'; // Ortak stilleri kullanabiliriz

// Veri çekme simülasyonu (Server-side)
async function getDynamicData() {
    // Yapay gecikme
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        timestamp: new Date().toISOString(),
        randomNumber: Math.floor(Math.random() * 1000),
        source: 'Server Side Rendering'
    };
}

// Bu sayfayı dynamic yapmaya zorluyoruz (SSR)
export const dynamic = 'force-dynamic';

export default async function SSRPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/04-rendering/01-ssr/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    // Her request'te çalışır
    const data = await getDynamicData();

    return (
        <PageContainer
            title="Server Side Rendering (SSR)"
            description="Her istekte (request) sunucuda render edilen sayfalar"
            notesContent={notesContent}
        >
            <div className={styles.section}>
                <h2>🔄 Dinamik Render Sonucu</h2>
                <p>Bu sayfa her yenilendiğinde (refresh) sunucuda tekrar oluşturulur ve yeni veriler gösterilir.</p>

                <div style={{
                    padding: '2rem',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '12px',
                    marginTop: '1rem',
                    border: '1px solid #e5e7eb'
                }}>
                    <h3 style={{ borderBottom: '1px solid #d1d5db', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                        Server Data
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Zaman Damgası:</strong> {data.timestamp}
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Rastgele Sayı:</strong> {data.randomNumber}
                        </li>
                        <li style={{ color: '#059669', fontWeight: 'bold' }}>
                            <strong>Kaynak:</strong> {data.source}
                        </li>
                    </ul>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <p>
                        Sayfayı yenilediğinizde (F5), "Rastgele Sayı" ve "Zaman Damgası"nın değiştiğini göreceksiniz.
                        Bu, sayfanın statik olarak build edilmediğini, her istekte yeniden oluşturulduğunu kanıtlar.
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}
