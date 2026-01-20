"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./auth-demo.module.scss";

function AuthContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Check if redirected with error
        const errorParam = searchParams.get('error');
        if (errorParam === 'unauthorized') {
            setError("⚠️ You must login to access protected content!");
        }
    }, [searchParams]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Basit demo authentication
        if (username === "demo" && password === "password") {
            setIsAuthenticated(true);
            setError("");

            // Cookie'ye user data'yı kaydet
            const userData = {
                username,
                loginTime: new Date().toLocaleString()
            };

            document.cookie = `auth-demo-token=${encodeURIComponent(JSON.stringify(userData))}; path=/; max-age=3600`;

            // Protected sayfaya yönlendir
            setTimeout(() => {
                router.push('/day2/02-nextjs-router/04-middleware/auth-demo/protected');
            }, 1000);
        } else {
            setError("Invalid credentials! Try: demo / password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername("");
        setPassword("");
        // Cookie'yi temizle
        document.cookie = "auth-demo-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    };

    return (
        <div className={styles.container}>
            <h1>🔐 Authentication Proxy Demo</h1>

            <div className={styles.explanation}>
                <h2>Nasıl Çalışır?</h2>
                <p>
                    Proxy, protected route'lara yapılan her request'i kontrol eder.
                    Eğer kullanıcı authenticate olmamışsa, login sayfasına yönlendirir.
                </p>
            </div>

            <div className={styles.demoArea}>
                {!isAuthenticated ? (
                    <div className={styles.loginForm}>
                        <h2>Login Required</h2>
                        <p className={styles.hint}>Demo credentials: <strong>demo</strong> / <strong>password</strong></p>

                        <form onSubmit={handleLogin}>
                            <div className={styles.formGroup}>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    required
                                />
                            </div>

                            {error && <div className={styles.error}>{error}</div>}

                            <button type="submit" className={styles.loginButton}>
                                Login
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className={styles.protectedContent}>
                        <h2>✅ Authentication Successful!</h2>
                        <p>Redirecting to protected page...</p>

                        <div className={styles.userInfo}>
                            <h3>User Information</h3>
                            <p><strong>Username:</strong> {username}</p>
                            <p><strong>Status:</strong> Authenticated</p>
                            <p><strong>Token:</strong> Stored in cookie (auth-demo-token)</p>
                            <p><strong>Note:</strong> Protected by proxy.ts</p>
                        </div>

                        <div className={styles.actions}>
                            <Link href="/day2/02-nextjs-router/04-middleware/auth-demo/protected" className={styles.protectedLink}>
                                🔐 Go to Protected Page
                            </Link>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.codeExample}>
                <h2>📝 Proxy Implementation</h2>
                <div className={styles.codeBlock}>
                    <pre>{`// proxy.ts (root level)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Cookie'den auth token'ı al
  const token = request.cookies.get('auth-token');
  
  // Token yoksa login'e yönlendir
  if (!token) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    );
  }
  
  // Token varsa devam et
  return NextResponse.next();
}

// Sadece /dashboard ile başlayan route'larda çalış
export const config = {
  matcher: '/dashboard/:path*'
};`}</pre>
                </div>
            </div>

            <div className={styles.features}>
                <h2>🎯 Özellikler</h2>
                <ul>
                    <li>✓ Cookie-based authentication</li>
                    <li>✓ Automatic redirect to login</li>
                    <li>✓ Protected routes with matcher</li>
                    <li>✓ Edge Runtime performance</li>
                    <li>✓ JWT token validation (production'da)</li>
                </ul>
            </div>

            <div className={styles.navigation}>
                <Link href="/day2/02-nextjs-router/04-middleware">← Proxy Examples</Link>
            </div>
        </div>
    );
}

export default function AuthDemoPage() {
    return (
        <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading auth demo...</div>}>
            <AuthContent />
        </Suspense>
    );
}
