'use client';

import { useReducer } from 'react';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { counterReducer } from './counter/reducer';

// useReducer Demo - Basic Counter Example
export function ReducerBasicDemo() {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        history: [0]
    });

    return (
        <div className={styles.demo}>
            <h3>useReducer Temel Kullanım</h3>
            <p>Count: {state.count}</p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button onClick={() => dispatch({ type: 'INCREMENT' })} className={styles.button}>
                    +1
                </button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })} className={styles.button}>
                    -1
                </button>
                <button onClick={() => dispatch({ type: 'RESET' })} className={styles.button}>
                    Sıfırla
                </button>
                <button onClick={() => dispatch({ type: 'SET', payload: 10 })} className={styles.button}>
                    10 Yap
                </button>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <p>İşlem Geçmişi: {state.history.join(' → ')}</p>
            </div>
        </div>
    );
}

// Re-export TodoReducerDemo from todo-example directory
export { TodoReducerDemo } from './todo-example/TodoReducerDemo';
