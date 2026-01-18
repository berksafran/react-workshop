'use client';

import { useState, useEffect } from 'react';
import styles from '../../day1-react-core/01-declarative-vs-imperative/page.module.scss';

// useEffect Temel Kullanım
export function EffectBasicDemo() {
    const [count, setCount] = useState(0);

    // Her render'da çalışır (dependency array yok)
    useEffect(() => {
        console.log('Effect çalıştı - her render');
    });

    // Sadece mount'ta çalışır (boş dependency array)
    useEffect(() => {
        console.log('Effect çalıştı - sadece mount');
    }, []);

    // count değişince çalışır
    useEffect(() => {
        console.log('Effect çalıştı - count değişti:', count);
    }, [count]);

    return (
        <div className={styles.demo}>
            <h3>useEffect Dependency Array</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className={styles.button}>
                Artır (Console'a bak)
            </button>
        </div>
    );
}

// useEffect Cleanup
export function EffectCleanupDemo() {
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup function
        return () => {
            console.log('Cleanup: Timer temizlendi');
            clearInterval(interval);
        };
    }, [isRunning]);

    return (
        <div className={styles.demo}>
            <h3>useEffect Cleanup</h3>
            <p>Saniye: {seconds}</p>
            <button
                onClick={() => setIsRunning(!isRunning)}
                className={styles.button}
            >
                {isRunning ? 'Durdur' : 'Başlat'}
            </button>
            <button
                onClick={() => setSeconds(0)}
                className={styles.button}
                style={{ marginLeft: '0.5rem' }}
            >
                Sıfırla
            </button>
        </div>
    );
}

// useEffect Data Fetching
export function EffectFetchDemo() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError('Veri çekilemedi');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Sadece mount'ta çalışır

    if (loading) return <div className={styles.demo}>Yükleniyor...</div>;
    if (error) return <div className={styles.demo}>Hata: {error}</div>;

    return (
        <div className={styles.demo}>
            <h3>Data Fetching</h3>
            <ul style={{ textAlign: 'left' }}>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
