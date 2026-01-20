import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeDemo } from './components/ThemeDemo';

export default async function ContextApiPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/03-state-management/01-context-api/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Basic Context API"
            description="Global state yönetimi ve prop drilling çözümü"
            notesContent={notesContent}
        >
            <div style={{ padding: '20px' }}>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                    Bu örnekte, bir <strong>ThemeContext</strong> oluşturduk. Bu context, uygulamanın
                    herhangi bir yerinden (derinlikten bağımsız) tema bilgisine (light/dark)
                    erişmemizi ve onu değiştirmemizi sağlar.
                </p>

                {/* 
            Provider'ı burada kullanıyoruz. Normalde ThemeProvider tüm uygulamayı (_app.tsx veya layout.tsx) 
            sarmalayabilir, ancak burada sadece bu demo için lokal olarak kullanıyoruz.
        */}
                <ThemeProvider>
                    <ThemeDemo />
                </ThemeProvider>

                <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>💡 Nasıl Çalışıyor?</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563' }}>
                        <li><strong>ThemeContext.tsx:</strong> Context'i ve Provider'ı tanımladık.</li>
                        <li><strong>Page.tsx:</strong> ThemeProvider ile, ThemeDemo bileşenini sarmaladık.</li>
                        <li><strong>ThemeDemo.tsx:</strong> useTheme() hook'u ile veriyi tükettik (consume).</li>
                    </ul>
                </div>
            </div>
        </PageContainer>
    );
}
