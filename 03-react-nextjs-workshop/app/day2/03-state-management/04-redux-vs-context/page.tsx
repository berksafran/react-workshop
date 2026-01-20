
import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';

export default async function ReduxVsContextPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/03-state-management/04-redux-vs-context/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Redux vs Context API"
            description="Hangi durumlarda hangisi seçilmeli?"
            notesContent={notesContent}
        >
            <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#111827' }}>Hızlı Karşılaştırma</h2>
                <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', backgroundColor: '#ffffff' }}>
                        <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                            <tr>
                                <th style={{ padding: '1rem', fontWeight: '600', color: '#374151', width: '20%' }}>Özellik</th>
                                <th style={{ padding: '1rem', fontWeight: '600', color: '#2563eb', width: '40%' }}>Context API</th>
                                <th style={{ padding: '1rem', fontWeight: '600', color: '#7c3aed', width: '40%' }}>Redux (Toolkit)</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '0.95rem' }}>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem', fontWeight: '500', color: '#111827' }}>Yerleşiklik</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>React Built-in (Ekstra paket yok)</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Harici Kütüphane (npm install)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem', fontWeight: '500', color: '#111827' }}>Karmaşıklık</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Düşük (Basit Provider/Hook)</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Orta/Yüksek (Store, Slice)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem', fontWeight: '500', color: '#111827' }}>Performans</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Context değişirse tüm consumer'lar render olur.</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Selector'lar ile optimize edilebilir.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem', fontWeight: '500', color: '#111827' }}>Kullanım</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Theme, Auth, Dil (Statik Veriler)</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Karmaşık State, Yüksek Frekanslı Veri</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '500', color: '#111827' }}>Debug</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>React DevTools</td>
                                <td style={{ padding: '1rem', color: '#4b5563' }}>Redux DevTools (Time Travel)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#eff6ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                    <h3 style={{ marginTop: 0, color: '#1e40af', fontSize: '1.2rem' }}>💡 Özet</h3>
                    <p style={{ margin: 0, color: '#1e3a8a' }}>
                        Detaylı açıklamalar için yukarıdaki <strong>"📚 Notlar"</strong> sekmesine geçebilirsiniz.
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}
