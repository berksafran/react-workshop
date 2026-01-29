'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User } from '../types/user';
import UserCard from './UserCard';
import { useFavorites } from '../contexts/FavoritesContext';
import styles from '../users/page.module.scss';

type FilterType = 'all' | 'favorites';

interface UsersClientProps {
    initialUsers: User[];
}

export default function UsersClient({ initialUsers }: UsersClientProps) {
    const [filter, setFilter] = useState<FilterType>('all');

    // Use favorites from context
    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    // Filter users
    const filteredUsers = filter === 'favorites'
        ? initialUsers.filter(user => isFavorite(user.id))
        : initialUsers;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Kullanıcı Rehberi</h1>
                    <p className={styles.subtitle}>
                        Toplam {initialUsers.length} kullanıcı bulundu
                        {favorites.length > 0 && ` • ${favorites.length} favori`}
                    </p>
                </div>
                <Link href="/day2/05-mini-project/solution" className={styles.backLink}>
                    ← Geri Dön
                </Link>
            </header>

            {/* Filter Tabs */}
            <div className={styles.filterTabs}>
                <button
                    className={`${styles.filterTab} ${filter === 'all' ? styles.active : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Tümü ({initialUsers.length})
                </button>
                <button
                    className={`${styles.filterTab} ${filter === 'favorites' ? styles.active : ''}`}
                    onClick={() => setFilter('favorites')}
                >
                    Favoriler ({favorites.length})
                </button>
            </div>

            {filteredUsers.length === 0 ? (
                <div className={styles.emptyState}>
                    <p className={styles.emptyIcon}>❤️</p>
                    <p className={styles.emptyText}>
                        {filter === 'favorites'
                            ? 'Henüz favori kullanıcınız yok. Kalp ikonuna tıklayarak kullanıcıları favorilere ekleyebilirsiniz!'
                            : 'Kullanıcı bulunamadı.'
                        }
                    </p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            isFavorite={isFavorite(user.id)}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}

            <div className={styles.info}>
                <p>💡 Bu sayfa <strong>Server Side Rendering (SSR)</strong> kullanıyor.</p>
                <p>Veriler sunucuda çekilip HTML olarak tarayıcıya gönderiliyor. Filtreleme ve favori yönetimi client-side!</p>
                <p>❤️ Kullanıcıları favorilere eklemek için kalp ikonuna tıklayın.</p>
                <p>🔄 Favoriler localStorage'da saklanıyor ve tüm sayfalarda paylaşılıyor.</p>
            </div>
        </div>
    );
}
