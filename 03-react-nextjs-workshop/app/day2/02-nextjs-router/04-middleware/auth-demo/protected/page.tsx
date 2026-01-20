"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./protected.module.scss";

function ProtectedContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<{ username: string; loginTime: string } | null>(null);

    useEffect(() => {
        // Cookie'den auth token'ı kontrol et
        const checkAuth = () => {
            const cookies = document.cookie.split(';');
            const authCookie = cookies.find(c => c.trim().startsWith('auth-demo-token='));

            if (!authCookie) {
                // Token yoksa login sayfasına yönlendir
                router.push('/day2/02-nextjs-router/04-middleware/auth-demo?error=unauthorized');
                return;
            }

            // Token varsa user data'yı al
            const token = authCookie.split('=')[1];
            const decoded = JSON.parse(decodeURIComponent(token));

            setUserData(decoded);
            setLoading(false);
        };

        checkAuth();
    }, [router]);

    const handleLogout = () => {
        // Cookie'yi temizle
        document.cookie = "auth-demo-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        // Login sayfasına yönlendir
        router.push('/day2/02-nextjs-router/04-middleware/auth-demo');
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>Verifying authentication...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.protectedContent}>
                <div className={styles.header}>
                    <h1>🔐 Protected Area</h1>
                    <p className={styles.subtitle}>This page is protected by Next.js Middleware</p>
                </div>

                <div className={styles.successBanner}>
                    <span className={styles.icon}>✅</span>
                    <div>
                        <h2>Authentication Successful!</h2>
                        <p>Middleware verified your token and allowed access to this protected route.</p>
                    </div>
                </div>

                <div className={styles.userCard}>
                    <h3>User Information</h3>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Username:</span>
                            <span className={styles.value}>{userData?.username}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Login Time:</span>
                            <span className={styles.value}>{userData?.loginTime}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Auth Method:</span>
                            <span className={styles.value}>Cookie-based (HTTP-only recommended)</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Middleware Status:</span>
                            <span className={styles.value}>✓ Active</span>
                        </div>
                    </div>
                </div>

                <div className={styles.flowDiagram}>
                    <h3>🔄 Authentication Flow</h3>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>1</span>
                            <div className={styles.stepContent}>
                                <strong>User Login</strong>
                                <p>Credentials validated, token generated</p>
                            </div>
                        </div>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>2</span>
                            <div className={styles.stepContent}>
                                <strong>Token Stored</strong>
                                <p>Cookie set with auth token</p>
                            </div>
                        </div>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>3</span>
                            <div className={styles.stepContent}>
                                <strong>Middleware Check</strong>
                                <p>Token verified on each request</p>
                            </div>
                        </div>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>4</span>
                            <div className={styles.stepContent}>
                                <strong>Access Granted</strong>
                                <p>Protected content served</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.codeExample}>
                    <h3>📝 Middleware Code</h3>
                    <div className={styles.codeBlock}>
                        <pre>{`// middleware.ts (root level)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/protected')) {
    const authToken = request.cookies.get('auth-demo-token');
    
    if (!authToken) {
      // Redirect to login
      return NextResponse.redirect(
        new URL('/login', request.url)
      );
    }
    
    // Add auth headers
    const response = NextResponse.next();
    response.headers.set('X-Auth-Status', 'authenticated');
    
    return response;
  }
  
  return NextResponse.next();
}`}</pre>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button onClick={handleLogout} className={styles.logoutButton}>
                        🚪 Logout
                    </button>
                    <Link href="/day2/02-nextjs-router/04-middleware/auth-demo" className={styles.backButton}>
                        ← Back to Auth Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ProtectedPage() {
    return (
        <Suspense fallback={<div className={styles.loading}>Loading protected content...</div>}>
            <ProtectedContent />
        </Suspense>
    );
}
