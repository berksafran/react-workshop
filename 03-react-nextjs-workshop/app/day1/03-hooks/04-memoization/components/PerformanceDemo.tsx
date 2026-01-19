'use client';

import { useState, useCallback, useMemo, memo } from 'react';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

// 1. useCallback Demo
export function CallbackDemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Fonksiyon her render'da yeniden oluşturulur
    // const handleClick = () => console.log('clicked');

    // Fonksiyon memoize edilir
    const handleClick = useCallback(() => {
        console.log('clicked');
    }, []); // Dependency array boş -> fonksiyon hiç değişmez

    return (
        <div className={styles.demo}>
            <div style={{ marginBottom: '1rem' }}>
                <p>Count: {count}</p>
                <button onClick={() => setCount(c => c + 1)} className={styles.button}>
                    Artır
                </button>
            </div>

            <div>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Yazın..."
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>

            <MemoizedButton onClick={handleClick} label="Child Button (Check Console)" />
        </div>
    );
}

const MemoizedButton = memo(({ onClick, label }: { onClick: () => void, label: string }) => {
    console.log('Child Render:', label);
    return (
        <button onClick={onClick} className={styles.button} style={{ marginTop: '1rem', background: '#e2e8f0', color: '#333' }}>
            {label}
        </button>
    );
});
MemoizedButton.displayName = 'MemoizedButton';

// 2. useMemo Demo
export function MemoDemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // Pahalı hesaplama
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]); // Sadece number değişince çalışır

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '1rem'
    };

    return (
        <div className={styles.demo}>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>

            <button
                onClick={() => setDark(prev => !prev)}
                className={styles.button}
                style={{ marginTop: '1rem' }}
            >
                Temayı Değiştir
            </button>

            <div style={themeStyles}>
                Double Number: {doubleNumber}
            </div>
        </div>
    );
}

function slowFunction(num: number) {
    console.log('Calling Slow Function');
    for (let i = 0; i <= 10000000; i++) { } // Yapay gecikme
    return num * 2;
}

// 3. When Not To Use Demo
export function WhenNotToUseDemo() {
    return (
        <div className={styles.demo}>
            <div style={{ padding: '1rem', background: '#fee2e2', borderRadius: '8px', color: '#991b1b' }}>
                <h4>Gereksiz Memoization Maliyeti</h4>
                <p>
                    Basit işlemler için useMemo kullanmak, hesaplamanın kendisinden daha maliyetli olabilir.
                    React'in karşılaştırma algoritması ve bellek kullanımı da bir maliyettir.
                </p>
            </div>
        </div>
    );
}
