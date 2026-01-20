'use client';

import { MemoryRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ProductList } from './ProductList';
import { ProductDetail } from './ProductDetail';
import { useState, useEffect } from 'react';
import styles from '../dynamic.module.scss';

export function DynamicRoutesDemo() {
    // Client-side only rendering to avoid hydration mismatch
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

            <MemoryRouter initialEntries={['/products']}>
                <div className={styles.container}>
                    <Routes>
                        {/* Ürün listesi */}
                        <Route path="/products" element={<ProductList />} />

                        {/* 
                            Dynamic Route: :id parametresi URL'den okunur
                            /products/1, /products/2, /products/abc gibi tüm URL'ler bu route ile eşleşir
                        */}
                        <Route path="/products/:id" element={<ProductDetail />} />

                        {/* Redirect root to products */}
                        <Route path="*" element={<Navigate to="/products" replace />} />
                    </Routes>
                </div>
            </MemoryRouter>
        </div>
    );
}
