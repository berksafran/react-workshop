import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { TodoProvider } from './contexts/TodoContext';
import { TodoApp } from './components/TodoApp';

export default async function TodoAppPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/03-state-management/03-todo-app/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Mini Ödev: To-Do App"
            description="Context + useReducer ile To-Do List uygulaması"
            notesContent={notesContent}
        >
            <div style={{ padding: '20px', backgroundColor: '#f3f4f6', minHeight: '400px', borderRadius: '12px' }}>
                <TodoProvider>
                    <TodoApp />
                </TodoProvider>
            </div>
        </PageContainer>
    );
}
