'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { User, Album } from '../../types/user';
import UserDetails from '../../components/UserDetails';
import styles from './page.module.scss';

export default function UserDetailPage() {
    const params = useParams();
    const router = useRouter();
    const userId = params.id as string;

    // Ayrı state'ler - her veri kaynağı için bağımsız
    const [user, setUser] = useState<User | null>(null);
    const [albums, setAlbums] = useState<Album[]>([]);

    // Ayrı loading state'leri
    const [userLoading, setUserLoading] = useState(true);
    const [albumsLoading, setAlbumsLoading] = useState(true);

    // Ayrı error state'leri
    const [userError, setUserError] = useState<string | null>(null);
    const [albumsError, setAlbumsError] = useState<string | null>(null);

    // Kullanıcı verilerini çeken fonksiyon
    const fetchUser = useCallback(async (id: string) => {
        try {
            setUserLoading(true);
            setUserError(null);

            console.log('🔵 Fetching user data...');

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            if (!response.ok) {
                throw new Error('Kullanıcı bulunamadı');
            }

            const userData = await response.json();
            setUser(userData);
            console.log('✅ User data loaded');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Kullanıcı yüklenemedi';
            setUserError(errorMessage);
            console.error('❌ User fetch error:', errorMessage);
        } finally {
            setUserLoading(false);
        }
    }, []);

    // Albüm verilerini çeken fonksiyon
    const fetchAlbums = useCallback(async (id: string) => {
        try {
            setAlbumsLoading(true);
            setAlbumsError(null);

            console.log('🔵 Fetching albums data...');

            const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);

            if (!response.ok) {
                throw new Error('Albümler yüklenemedi');
            }

            const albumsData = await response.json();
            setAlbums(albumsData);
            console.log('✅ Albums data loaded');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Albümler yüklenemedi';
            setAlbumsError(errorMessage);
            console.error('❌ Albums fetch error:', errorMessage);
        } finally {
            setAlbumsLoading(false);
        }
    }, []);

    // Her iki veriyi paralel olarak çeken ana fonksiyon
    // Promise.allSettled kullanarak bir hata diğerini engellemez
    useEffect(() => {
        console.log('🚀 Starting parallel data fetching with Promise.allSettled...');

        // Her iki fetch'i paralel olarak başlat
        // Promise.allSettled sayesinde biri başarısız olsa bile diğeri devam eder
        Promise.allSettled([
            fetchUser(userId),
            fetchAlbums(userId)
        ]).then((results) => {
            console.log('📊 All fetch operations completed:', results);
        });
    }, [userId, fetchUser, fetchAlbums]);

    // Sayfa layout'u hemen render et, her bölüm kendi loading state'ini göstersin
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button onClick={() => router.back()} className={styles.backButton}>
                    ← Kullanıcı Listesine Dön
                </button>
            </header>

            {/* User Details Section - Bağımsız loading state */}
            {userLoading ? (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>Kullanıcı bilgileri yükleniyor...</p>
                </div>
            ) : userError ? (
                <div className={styles.error}>
                    <h1>Hata!</h1>
                    <p>{userError}</p>
                </div>
            ) : user ? (
                <UserDetails user={user} />
            ) : null}

            {/* Albums Section - Bağımsız loading state */}
            <div className={styles.albumsSection}>
                <h2 className={styles.albumsTitle}>
                    Albümler {!albumsLoading && `(${albums.length})`}
                </h2>

                {albumsLoading ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Albümler yükleniyor...</p>
                    </div>
                ) : albumsError ? (
                    <div className={styles.error}>
                        <p>❌ {albumsError}</p>
                    </div>
                ) : albums.length > 0 ? (
                    <div className={styles.albumsGrid}>
                        {albums.map((album) => (
                            <div key={album.id} className={styles.albumCard}>
                                <span className={styles.albumIcon}>📷</span>
                                <h3 className={styles.albumTitle}>{album.title}</h3>
                                <span className={styles.albumId}>Album #{album.id}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Bu kullanıcının albümü bulunmuyor.</p>
                )}
            </div>

            <div className={styles.info}>
                <p>💡 Bu sayfa <strong>Client Side Rendering (CSR)</strong> kullanıyor.</p>
                <p>Veriler tarayıcıda useEffect ile çekiliyor. Tarayıcı konsoluna bakın!</p>
                <p>🚀 <strong>Promise.allSettled</strong> kullanarak user ve albums verileri <strong>bağımsız</strong> olarak çekiliyor.</p>
                <p>✨ Her veri kaynağı için <strong>ayrı loading state</strong> var - kullanıcı bilgisi yüklenince sayfa render edilir, albümler arka planda yüklenmeye devam eder!</p>
                <p>🛡️ Bir fetch başarısız olsa bile diğeri etkilenmez (fault tolerance).</p>
            </div>
        </div>
    );
}
