'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavoritesContextType {
    favorites: number[];
    addFavorite: (userId: number) => void;
    removeFavorite: (userId: number) => void;
    toggleFavorite: (userId: number) => void;
    isFavorite: (userId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = 'userFavorites';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const savedFavorites = localStorage.getItem(STORAGE_KEY);
        if (savedFavorites) {
            try {
                const parsed = JSON.parse(savedFavorites);
                setFavorites(parsed);
            } catch (err) {
                console.error('Error loading favorites from localStorage:', err);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        }
    }, [favorites, isLoaded]);

    const addFavorite = (userId: number) => {
        setFavorites((prev) => {
            if (!prev.includes(userId)) {
                return [...prev, userId];
            }
            return prev;
        });
    };

    const removeFavorite = (userId: number) => {
        setFavorites((prev) => prev.filter((id) => id !== userId));
    };

    const toggleFavorite = (userId: number) => {
        if (isFavorite(userId)) {
            removeFavorite(userId);
        } else {
            addFavorite(userId);
        }
    };

    const isFavorite = (userId: number) => {
        return favorites.includes(userId);
    };

    return (
        <FavoritesContext
            value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext>
    );
};

// Custom hook to use the favorites context
export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
