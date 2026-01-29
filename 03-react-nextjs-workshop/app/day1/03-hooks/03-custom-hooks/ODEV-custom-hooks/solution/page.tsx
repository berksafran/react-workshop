'use client';

import Link from 'next/link';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { ToggleDemo } from '../components/ToggleDemo';
import { CounterDemo } from '../components/CounterDemo';

export default function CustomHooksSolutionPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Custom Hooks - Çözümler</h1>
                <p>useToggle ve useCounter hook implementasyonları</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🔀 useToggle Hook</h2>
                    <p className={styles.description}>
                        Boolean state toggle için custom hook. Modal, dropdown, accordion gibi UI elementleri için kullanışlı.
                    </p>

                    <div className={styles.code}>
                        <pre>{`function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}`}</pre>
                    </div>

                    <ToggleDemo />
                </section>

                <section className={styles.section}>
                    <h2>🔢 useCounter Hook</h2>
                    <p className={styles.description}>
                        Sayaç işlemleri için custom hook. Min/max limitleri ve step desteği ile.
                    </p>

                    <div className={styles.code}>
                        <pre>{`function useCounter(initialValue = 0, options = {}) {
  const { min, max, step = 1 } = options;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prev => {
      const newValue = prev + step;
      if (max !== undefined && newValue > max) return prev;
      return newValue;
    });
  };

  const decrement = () => {
    setCount(prev => {
      const newValue = prev - step;
      if (min !== undefined && newValue < min) return prev;
      return newValue;
    });
  };

  const reset = () => setCount(initialValue);
  const setValue = (value) => { /* ... */ };

  return { count, increment, decrement, reset, setValue };
}`}</pre>
                    </div>

                    <CounterDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>useState:</strong> Her iki hook da useState kullanıyor
                        </li>
                        <li>
                            <strong>Functional Updates:</strong> prev =&gt; !prev pattern'i
                        </li>
                        <li>
                            <strong>Options Pattern:</strong> useCounter'da flexible options
                        </li>
                        <li>
                            <strong>Return Object:</strong> Tutarlı API için object döndür
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1/03-hooks/03-custom-hooks/ODEV-custom-hooks" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
