import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from '../../../day1/02-react-core/page.module.scss';

// Statik veri çekme (Default behavior)
async function getStaticData() {
    // Gerçek bir API isteğini simüle ediyoruz
    // Next.js varsayılan olarak bu isteği cache'ler (dedupe eder)

    // Not: fetch olmadığı için Next.js bunu tamamen statik veri olarak algılayacaktır.
    // Ancak fetch kullansaydık da 'force-cache' default olacaktı.

    return {
        title: 'Static Blog Post',
        content: 'Bu içerik build zamanında oluşturuldu.',
        buildTime: new Date().toISOString(),
    };
}

export default async function SSGPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/04-rendering/03-ssg/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    const data = await getStaticData();

    return (
        <PageContainer
            title="Static Site Generation (SSG)"
            description="Build zamanında oluşturulan statik sayfalar"
            notesContent={notesContent}
        >
            <div className={styles.section}>
                <h2>📦 Statik Render Sonucu</h2>
                <p>
                    Bu sayfa, projeniz <code>npm run build</code> ile derlendiğinde bir kez oluşturulur.
                    Kullanıcılar sayfayı her açtığında aynı HTML dosyasını görür.
                </p>

                <div style={{ margin: '1rem 0', padding: '1rem', backgroundColor: '#fff7ed', border: '1px solid #fdba74', borderRadius: '8px' }}>
                    <strong>⚠️ Önemli Not (Development Mode):</strong>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                        Şu an geliştirme ortamında (npm run dev) olduğunuz için Next.js her sayfayı istek üzerine (SSR gibi) render eder.
                        Bu sayfanın gerçekten statik olduğunu görmek için uygulamayı build edip (npm run build && npm start) çalıştırmanız gerekir.
                    </p>
                </div>

                <div style={{
                    padding: '2rem',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '12px',
                    marginTop: '1rem',
                    border: '1px solid #e5e7eb'
                }}>
                    <h3 style={{ borderBottom: '1px solid #d1d5db', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                        Build Time Data
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Başlık:</strong> {data.title}
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Build Zamanı:</strong> {data.buildTime}
                        </li>
                        <li style={{ color: '#059669', fontWeight: 'bold' }}>
                            <strong>Cache Status:</strong> HIT (from build)
                        </li>
                    </ul>
                </div>
            </div>
        </PageContainer>
    );
}
