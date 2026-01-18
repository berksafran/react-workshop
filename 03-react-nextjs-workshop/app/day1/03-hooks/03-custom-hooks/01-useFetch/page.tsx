'use client';

import Link from 'next/link';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { useFetch } from './useFetch';

type User = { id: number; name: string; email: string };

function UseFetchDemo() {
    const { data, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users?_limit=5');

    if (loading) return <div className={styles.demo}>Yükleniyor...</div>;
    if (error) return <div className={styles.demo}>Hata: {error}</div>;

    return (
        <div className={styles.demo}>
            <h3>Kullanıcılar</h3>
            <ul style={{ textAlign: 'left' }}>
                {data?.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default function UseFetchPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>useFetch Hook</h1>
                <p>API çağrıları için custom hook</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🌐 useFetch Nedir?</h2>
                    <p className={styles.description}>
                        API çağrılarını kolaylaştıran bir custom hook. Loading, error ve data state'lerini otomatik yönetir.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>📝 Implementasyon</h2>
                    <div className={styles.code}>
                        <pre>{`function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>🎮 Demo</h2>
                    <UseFetchDemo />
                </section>

                <section className={styles.section}>
                    <h2>💻 Kullanım</h2>
                    <div className={styles.code}>
                        <pre>{`function UserList() {
  const { data, loading, error } = useFetch<User[]>('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {data.map(user => <li>{user.name}</li>)}
    </ul>
  );
}`}</pre>
                    </div>
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Generic Type:</strong> {'<T>'} ile tip güvenliği
                        </li>
                        <li>
                            <strong>Loading State:</strong> Otomatik loading yönetimi
                        </li>
                        <li>
                            <strong>Error Handling:</strong> Try-catch ile hata yakalama
                        </li>
                        <li>
                            <strong>useEffect:</strong> URL değişince yeniden fetch
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1/03-hooks/03-custom-hooks" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
