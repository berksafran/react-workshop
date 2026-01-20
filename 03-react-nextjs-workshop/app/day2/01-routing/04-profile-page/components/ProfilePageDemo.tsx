'use client';

import { MemoryRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { ProfileLayout, users } from './ProfileLayout';
import { ProfileOverview } from './ProfileOverview';
import { ProfilePosts } from './ProfilePosts';
import { ProfileSettings } from './ProfileSettings';
import { useState, useEffect } from 'react';
import styles from '../profile.module.scss';

function UserSelector() {
    const navigate = useNavigate();
    const [selectedUserId, setSelectedUserId] = useState('1');

    const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userId = e.target.value;
        setSelectedUserId(userId);
        navigate(`/users/${userId}`);
    };

    return (
        <div className={styles.userSelector}>
            <label>Kullanıcı Seç:</label>
            <select value={selectedUserId} onChange={handleUserChange}>
                {users.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name} ({user.username})
                    </option>
                ))}
            </select>
        </div>
    );
}

export function ProfilePageDemo() {
    // Client-side only rendering to avoid hydration mismatch
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={styles.demoWrapper}>
            <div className={styles.browserHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
                <span>Simulated Browser (MemoryRouter)</span>
            </div>

            <MemoryRouter initialEntries={['/users/1']}>
                <UserSelector />

                <Routes>
                    {/* 
                        Dynamic + Nested Routes:
                        - :userId parametresi ile hangi kullanıcı
                        - Nested routes ile hangi tab
                    */}
                    <Route path="/users/:userId" element={<ProfileLayout />}>
                        {/* Index route: /users/:userId */}
                        <Route index element={<ProfileOverview />} />

                        {/* Nested routes: /users/:userId/posts ve /users/:userId/settings */}
                        <Route path="posts" element={<ProfilePosts />} />
                        <Route path="settings" element={<ProfileSettings />} />
                    </Route>

                    {/* Redirect root to first user */}
                    <Route path="*" element={<Navigate to="/users/1" replace />} />
                </Routes>
            </MemoryRouter>
        </div>
    );
}
