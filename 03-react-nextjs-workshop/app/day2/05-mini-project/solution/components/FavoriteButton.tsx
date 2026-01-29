'use client';

import { useFavorites } from '../contexts/FavoritesContext';
import styles from './FavoriteButton.module.scss';

interface FavoriteButtonProps {
    userId: number;
}

export default function FavoriteButton({ userId }: FavoriteButtonProps) {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(userId);

    const handleToggle = () => {
        if (favorite) {
            removeFavorite(userId);
        } else {
            addFavorite(userId);
        }
    };

    return (
        <button
            onClick={handleToggle}
            className={`${styles.favoriteButton} ${favorite ? styles.active : ''}`}
        >
            <span className={styles.icon}>{favorite ? '❤️' : '🤍'}</span>
            {favorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
        </button>
    );
}
