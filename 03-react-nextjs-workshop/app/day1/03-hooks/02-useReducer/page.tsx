'use client';

import Link from 'next/link';
import styles from '../../01-react-core/01-declarative-vs-imperative/page.module.scss';
import { ReducerBasicDemo, TodoReducerDemo } from './components/ReducerDemo';

export default function UseReducerPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>useReducer</h1>
                <p>Complex state management (Redux benzeri)</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🔄 useReducer Nedir?</h2>
                    <p className={styles.description}>
                        useState'e alternatif. Complex state logic için kullanılır. Redux pattern'i ile aynı mantık.
                    </p>

                    <div className={styles.code}>
                        <pre>{`const [state, dispatch] = useReducer(reducer, initialState);

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Dispatch action
dispatch({ type: 'INCREMENT' });`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>📊 Temel Örnek</h2>
                    <ReducerBasicDemo />
                </section>

                <section className={styles.section}>
                    <h2>✅ Todo List Örneği</h2>
                    <p className={styles.description}>
                        Birden fazla action type, complex state management
                    </p>
                    <TodoReducerDemo />
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>useState vs useReducer:</strong> Basit state → useState, complex → useReducer
                        </li>
                        <li>
                            <strong>Redux benzeri:</strong> Action, reducer pattern
                        </li>
                        <li>
                            <strong>Immutability:</strong> State'i direkt değiştirme, yeni obje döndür
                        </li>
                        <li>
                            <strong>TypeScript:</strong> Action ve state için type tanımla
                        </li>
                        <li>
                            <strong>Context ile:</strong> Global state management için Context + useReducer
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1/03-hooks" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
