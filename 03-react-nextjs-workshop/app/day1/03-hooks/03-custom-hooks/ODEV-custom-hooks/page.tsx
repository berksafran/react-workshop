import Link from 'next/link';
import styles from '../../../01-react-core/page.module.scss';

export default function CustomHooksHomeworkPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Ödev: Custom Hooks</h1>
                <p>useToggle ve daha fazla custom hook oluştur</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>📚 Görevler</h2>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>1. useToggle Hook ⭐</h3>
                        <p>Boolean state toggle için bir custom hook oluştur.</p>
                        <div className={styles.code}>
                            <pre>{`function Modal() {
  const { value, toggle, setTrue, setFalse } = useToggle();
  
  return (
    <>
      <button onClick={setTrue}>Open</button>
      {value && <div>Modal Content</div>}
    </>
  );
}`}</pre>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>2. useCounter Hook</h3>
                        <p>Sayaç işlemleri için hook (min/max limitli).</p>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>3. useAsync Hook</h3>
                        <p>Async işlemler için hook (loading, error, data).</p>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>4. useForm Hook</h3>
                        <p>Form yönetimi ve validation için hook.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>📖 Detaylı Açıklama</h2>
                    <p>
                        Tüm görev detayları için <code>ODEV-README.md</code> dosyasına bakın.
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                        <Link
                            href="/day1/03-hooks/03-custom-hooks/ODEV-custom-hooks/ODEV-README.md"
                            style={{ color: '#667eea', textDecoration: 'underline' }}
                        >
                            ODEV-README.md dosyasını aç →
                        </Link>
                    </div>
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Gereksinimler</h3>
                    <ul>
                        <li>
                            <strong>TypeScript kullan</strong> → Generic types ile tip güvenliği
                        </li>
                        <li>
                            <strong>Hook kurallarına uy</strong> → "use" ile başla
                        </li>
                        <li>
                            <strong>Cleanup yap</strong> → useEffect cleanup function'ları
                        </li>
                        <li>
                            <strong>Test et</strong> → Her hook için demo component
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
