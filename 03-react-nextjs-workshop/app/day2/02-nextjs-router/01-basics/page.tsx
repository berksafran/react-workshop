import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { RouterDemo } from './components/RouterDemo';
import styles from '../../../day1/02-react-core/page.module.scss';

export default async function NextjsRouterBasicsPage() {
  // Read NOTES.md file
  const notesPath = path.join(process.cwd(), 'app/day2/02-nextjs-router/01-basics/NOTES.md');
  const notesContent = await fs.readFile(notesPath, 'utf-8');

  return (
    <PageContainer
      title="▲ Next.js Router Basics"
      description="File-based routing ve App Router yapısı"
      notesContent={notesContent}
    >
      <section className={styles.section}>
        <h2>🎮 Canlı Demo</h2>
        <p>
          Aşağıdaki demo'da Next.js Router'ın temel özelliklerini test edebilirsiniz.
          Current route, useRouter hook ve Link component kullanımını görebilirsiniz.
        </p>
        <RouterDemo />
      </section>
    </PageContainer>
  );
}
