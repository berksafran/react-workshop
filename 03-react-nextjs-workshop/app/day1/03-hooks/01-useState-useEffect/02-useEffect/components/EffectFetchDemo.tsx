'use client';

import { useState, useEffect } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

type User = {
    id: number;
    name: string;
    email: string;
};

export function EffectFetchDemo() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
                const data = await response.json();
                setUsers(data);
                setError(null);
            } catch (err) {
                setError('Veri yüklenirken hata oluştu');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Sadece mount'ta bir kez

    if (loading) return <div className={styles.demo}>Yükleniyor...</div>;
    if (error) return <div className={styles.demo}>Hata: {error}</div>;

    return (
        <div className={styles.demo}>
            <h3>Data Fetching</h3>
            <ul style={{ textAlign: 'left' }}>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            <div className={styles.code} style={{ marginTop: '1rem' }}>
                <pre>{`useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  fetchData();
}, []); // Mount'ta bir kez`}</pre>
            </div>
        </div>
    );
}
