'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../../01-react-core/01-declarative-vs-imperative/page.module.scss';
import { useLocalStorage } from './useLocalStorage';

function UseLocalStorageDemo() {
    const [name, setName] = useLocalStorage('user-name', '');
    const [count, setCount] = useLocalStorage('counter', 0);

    return (
        <div className={styles.demo}>
            <div style={{ marginBottom: '1rem' }}>
                <label>İsim: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="İsim gir"
                    style={{ padding: '0.5rem', width: '100%', marginTop: '0.5rem' }}
                />
            </div>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)} className={styles.button}>
                    Artır
                </button>
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                    💡 Sayfayı yenile, veriler kalıcı!
                </p>
            </div>
        </div>
    );
}

export default function UseLocalStoragePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>useLocalStorage Hook</h1>
                <p>LocalStorage ile state senkronizasyonu</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>💾 useLocalStorage Nedir?</h2>
                    <p className={styles.description}>
                        State'i localStorage ile senkronize eder. Sayfa yenilendiğinde veriler kaybolmaz.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>📝 Implementasyon</h2>
                    <div className={styles.code}>
                        <pre>{`function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function 
      ? value(storedValue) 
      : value;
    
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>🎮 Demo</h2>
                    <UseLocalStorageDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Lazy Initialization:</strong> useState(() =&gt; ...) ile
                        </li>
                        <li>
                            <strong>Persistence:</strong> Sayfa yenilendiğinde veriler kalır
                        </li>
                        <li>
                            <strong>Functional Updates:</strong> setValue(prev =&gt; prev + 1)
                        </li>
                        <li>
                            <strong>Error Handling:</strong> Try-catch ile güvenli
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
