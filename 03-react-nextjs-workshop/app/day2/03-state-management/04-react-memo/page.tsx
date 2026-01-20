import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { MemoDemo } from './components/MemoDemo';

export default async function ReactMemoPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/03-state-management/04-react-memo/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="React.memo & Performance"
            description="Gereksiz render'ları önleme ve optimizasyon"
            notesContent={notesContent}
        >
            <MemoDemo />
        </PageContainer>
    );
}
