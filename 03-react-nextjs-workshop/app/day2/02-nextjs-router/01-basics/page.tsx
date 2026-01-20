import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
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
        <h2>🎯 File-Based Routing</h2>
        <p>Klasör yapısı = Route yapısı</p>
        <div className={styles.code}>
          <pre>{`app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
└── blog/
    ├── page.tsx      → /blog
    └── [id]/
        └── page.tsx  → /blog/:id`}</pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2>📄 Özel Dosyalar</h2>

        <h3>1. page.tsx</h3>
        <p>Her route için gerekli ana dosya.</p>
        <div className={styles.code}>
          <pre>{`// app/about/page.tsx
export default function AboutPage() {
  return <h1>Hakkımızda</h1>;
}`}</pre>
        </div>

        <h3>2. layout.tsx</h3>
        <p>Birden fazla sayfa için ortak layout.</p>
        <div className={styles.code}>
          <pre>{`// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>{/* Navigation */}</nav>
        {children}
        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}`}</pre>
        </div>

        <h3>3. loading.tsx</h3>
        <p>Route yüklenirken gösterilecek UI.</p>
        <div className={styles.code}>
          <pre>{`// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Yükleniyor...</div>;
}`}</pre>
        </div>

        <h3>4. error.tsx</h3>
        <p>Hata durumunda gösterilecek UI.</p>
        <div className={styles.code}>
          <pre>{`'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Bir hata oluştu!</h2>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
}`}</pre>
        </div>

        <h3>5. not-found.tsx</h3>
        <p>404 sayfası.</p>
        <div className={styles.code}>
          <pre>{`// app/not-found.tsx
export default function NotFound() {
  return <h1>404 - Sayfa Bulunamadı</h1>;
}`}</pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2>🔗 Navigation</h2>

        <h3>Link Component</h3>
        <div className={styles.code}>
          <pre>{`import Link from 'next/link';

<Link href="/">Ana Sayfa</Link>
<Link href="/about">Hakkımızda</Link>`}</pre>
        </div>

        <h3>useRouter Hook</h3>
        <div className={styles.code}>
          <pre>{`'use client';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/dashboard');
  };
  
  return <button onClick={handleClick}>Dashboard'a Git</button>;
}`}</pre>
        </div>
      </section>

      <section className={styles.highlights}>
        <h3>💡 Avantajlar</h3>
        <ul>
          <li><strong>Otomatik Code Splitting</strong> - Her route otomatik olarak ayrı chunk'lara bölünür</li>
          <li><strong>SSR Desteği</strong> - Server-side rendering built-in</li>
          <li><strong>Kolay Setup</strong> - Route tanımlamaya gerek yok</li>
          <li><strong>Optimized Prefetching</strong> - Link'ler otomatik olarak prefetch edilir</li>
          <li><strong>Streaming</strong> - React 18 Suspense ile streaming SSR</li>
        </ul>
      </section>
    </PageContainer>
  );
}
