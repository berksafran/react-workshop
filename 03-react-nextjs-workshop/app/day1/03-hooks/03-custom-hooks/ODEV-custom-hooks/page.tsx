import Link from 'next/link';
import styles from '../../../02-react-core/page.module.scss';

export default function CustomHooksHomeworkPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Ödev: Custom Hooks</h1>
                <p>useToggle ve useCounter hook'larını oluştur</p>
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
      <button onClick={setTrue}>Open Modal</button>
      {value && (
        <div className="modal">
          <h2>Modal Content</h2>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </>
  );
}`}</pre>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>2. useCounter Hook ⭐</h3>
                        <p>Sayaç işlemleri için hook (min/max limitli, step parametresi).</p>
                        <div className={styles.code}>
                            <pre>{`function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, { 
    min: 0, 
    max: 10,
    step: 1 
  });
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} disabled={count >= 10}>+</button>
      <button onClick={decrement} disabled={count <= 0}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}</pre>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>📖 Detaylı Açıklama</h2>
                    <p>
                        Tüm görev detayları, gereksinimler ve ipuçları için <code>ODEV-README.md</code> dosyasına bakın.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>✅ Çözüm</h2>
                    <p>
                        Ödevini bitirdikten sonra çözümleri görmek için:
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                        <Link
                            href="/day1/03-hooks/03-custom-hooks/ODEV-custom-hooks/solution"
                            className={styles.button}
                            style={{ display: 'inline-block', textDecoration: 'none' }}
                        >
                            📝 Çözümleri Gör
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
                            <strong>Hook kurallarına uy</strong> → "use" ile başla, üst seviyede çağır
                        </li>
                        <li>
                            <strong>Test et</strong> → Her hook için demo component oluştur
                        </li>
                        <li>
                            <strong>Kod kalitesi</strong> → Temiz, okunabilir kod yaz
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
