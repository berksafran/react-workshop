import { promises as fs } from 'fs';
import path from 'path';
import Link from "next/link";
import { PageContainer } from '@/app/components/PageContainer';
import styles from "./middleware.module.scss";

export default async function MiddlewarePage() {
  const notesPath = path.join(process.cwd(), 'app/day2/02-nextjs-router/04-middleware/NOTES.md');
  const notesContent = await fs.readFile(notesPath, 'utf-8');

  return (
    <PageContainer
      title="Next.js 16 Middleware (Proxy)"
      description="Next.js'de request manüpülasyonu ve authentication"
      notesContent={notesContent}
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <p>
            Proxy (eski adıyla Middleware), Next.js'te request'ler tamamlanmadan önce kod çalıştırmanıza olanak tanır.
            Request'e müdahale edebilir, yönlendirme (redirect) yapabilir veya header ekleyebilirsiniz.
          </p>
          <p>
            <strong>Next.js 16'da proxy:</strong> Edge Runtime'da çalışır ve son derece hızlıdır. "middleware" dosya ismi deprecated olmuştur.
          </p>
        </div>

        <div className={styles.examples}>
          <div className={styles.card}>
            <h2>🔐 Authentication Proxy</h2>
            <p>Protected routes için authentication kontrolü</p>
            <div className={styles.codeBlock}>
              <pre>{`// proxy.ts (root level)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  if (!token) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*'
};`}</pre>
            </div>
            <div className={styles.demoLinks}>
              <Link href="/day2/02-nextjs-router/04-middleware/auth-demo" className={styles.demoLink}>
                Demo'yu Görüntüle →
              </Link>
              <Link href="/day2/02-nextjs-router/04-middleware/auth-demo/protected" className={styles.tryProtectedLink}>
                🔒 Try Protected Route (No Login)
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.keyPoints}>
          <h2>🎯 Önemli Noktalar</h2>
          <ul>
            <li><strong>Edge Runtime:</strong> Proxy Edge Runtime'da çalışır (Node.js değil)</li>
            <li><strong>Matcher Config:</strong> Hangi route'larda çalışacağını belirleyin</li>
            <li><strong>Performance:</strong> Proxy her request'te çalışır, hafif tutun</li>
            <li><strong>Next.js 16:</strong> Turbopack ile daha hızlı hot reload</li>
            <li><strong>Limitations:</strong> Node.js API'leri kullanılamaz (fs, path vb.)</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}
