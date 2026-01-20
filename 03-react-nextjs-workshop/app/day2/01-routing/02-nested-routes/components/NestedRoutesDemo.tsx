'use client';

import { MemoryRouter, Route, Routes, Navigate } from 'react-router-dom';
import { DashboardLayout, DashboardHome } from './DashboardLayout';
import { ProfileSettings } from './ProfileSettings';
import { AccountSettings } from './AccountSettings';
import { useState, useEffect } from 'react';
import styles from '../nested.module.scss';

export function NestedRoutesDemo() {
    // Client-side only rendering to avoid hydration mismatch with MemoryRouter
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={styles.demoWrapper}>
            <div style={{ marginBottom: '1rem' }}>
                <div className={styles.browserHeader}>
                    <div className={`${styles.dot} ${styles.red}`}></div>
                    <div className={`${styles.dot} ${styles.yellow}`}></div>
                    <div className={`${styles.dot} ${styles.green}`}></div>
                    <span>Simulated Browser (MemoryRouter)</span>
                </div>
            </div>

            {/* 
                MemoryRouter kullanıyoruz çünkü Next.js'in kendi router'ı ile çakışmasını istemiyoruz.
                Gerçek bir React projesinde genellikle BrowserRouter kullanılır.
            */}
            <MemoryRouter initialEntries={['/dashboard']}>
                <Routes>
                    {/* Parent Route: /dashboard */}
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        {/* Index Route: /dashboard adresine gidildiğinde çalışır */}
                        <Route index element={<DashboardHome />} />

                        {/* Nested Routes: /dashboard/profile ve /dashboard/account */}
                        <Route path="profile" element={<ProfileSettings />} />
                        <Route path="account" element={<AccountSettings />} />
                    </Route>

                    {/* Redirect root to dashboard */}
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </MemoryRouter>
        </div>
    );
}
