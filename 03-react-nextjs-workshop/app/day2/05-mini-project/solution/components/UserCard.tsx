'use client';

import Link from 'next/link';
import { User } from '../types/user';
import styles from './UserCard.module.scss';

interface UserCardProps {
    user: User;
    isFavorite?: boolean;
    onToggleFavorite?: (userId: number) => void;
}

export default function UserCard({ user, isFavorite = false, onToggleFavorite }: UserCardProps) {
    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite?.(user.id);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.headerContent}>
                    <div>
                        <h3 className={styles.userName}>{user.name}</h3>
                        <span className={styles.username}>@{user.username}</span>
                    </div>
                    {onToggleFavorite && (
                        <button
                            onClick={handleFavoriteClick}
                            className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
                            aria-label={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                            title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                        >
                            {isFavorite ? '❤️' : '🤍'}
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.cardBody}>
                <p className={styles.email}>
                    <span className={styles.icon}>✉️</span>
                    {user.email}
                </p>
                <p className={styles.company}>
                    <span className={styles.icon}>🏢</span>
                    {user.company.name}
                </p>
            </div>

            <div className={styles.cardFooter}>
                <Link href={`/day2/05-mini-project/solution/users/${user.id}`} className={styles.detailsButton}>
                    Detayları Gör
                </Link>
            </div>
        </div>
    );
}
