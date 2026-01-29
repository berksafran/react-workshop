import Link from 'next/link';
import { User } from '../types/user';
import UsersClient from '../components/UsersClient';
import styles from './page.module.scss';

// Server Component - SSR
export default async function UsersPage() {
    let users: User[] = [];
    let error: string | null = null;

    try {
        console.log('🚀 Fetching users on SERVER...');

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            cache: 'no-store', // Force SSR - fetch on every request
        });

        if (!response.ok) {
            throw new Error('Kullanıcılar yüklenirken bir hata oluştu');
        }

        users = await response.json();
        console.log('✅ Users loaded on SERVER:', users.length);
    } catch (err) {
        error = err instanceof Error ? err.message : 'Bir hata oluştu';
        console.error('❌ Error fetching users on SERVER:', err);
    }

    // Error state
    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>
                    <h1>Hata!</h1>
                    <p>{error}</p>
                    <Link href="/day2/05-mini-project/solution" className={styles.backLink}>
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        );
    }

    // Pass server-fetched data to client component
    return <UsersClient initialUsers={users} />;
}
