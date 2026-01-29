'use client';

import { FavoritesProvider } from './contexts/FavoritesContext';

export default function SolutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <FavoritesProvider>{children}</FavoritesProvider>;
}
