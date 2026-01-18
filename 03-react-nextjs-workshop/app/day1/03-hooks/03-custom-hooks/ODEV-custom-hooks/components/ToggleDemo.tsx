'use client';

import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import { useToggle } from '../hooks/useToggle';

export function ToggleDemo() {
    const { value: isOpen, toggle, setTrue, setFalse } = useToggle();

    return (
        <div className={styles.demo}>
            <h3>useToggle Demo</h3>
            <p>Modal durumu: {isOpen ? 'Açık' : 'Kapalı'}</p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button onClick={toggle} className={styles.button}>
                    Toggle
                </button>
                <button onClick={setTrue} className={styles.button}>
                    Aç
                </button>
                <button onClick={setFalse} className={styles.button}>
                    Kapat
                </button>
            </div>

            {isOpen && (
                <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '8px'
                }}>
                    <h4>Modal İçeriği</h4>
                    <p>Bu bir modal örneğidir!</p>
                    <button onClick={setFalse} className={styles.buttonSecondary}>
                        Kapat
                    </button>
                </div>
            )}
        </div>
    );
}
