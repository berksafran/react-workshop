'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export function RefCommonMistakes() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [renderTrigger, setRenderTrigger] = useState(0);

    // ❌ YANLIŞ: Render sırasında ref.current'i değiştirme
    // countRef.current = count; // Bu kötü bir pratik!

    // ✅ DOĞRU: useEffect içinde değiştir
    useEffect(() => {
        countRef.current = count;
    }, [count]);

    const incrementState = () => {
        setCount(c => c + 1);
    };

    const incrementRef = () => {
        countRef.current += 1;
        // Ref değişince re-render olmaz, bu yüzden UI güncellemek için:
        setRenderTrigger(r => r + 1);
    };

    return (
        <div className={styles.demo}>
            <h3>Yaygın Hatalar ve Doğru Kullanım</h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4>❌ Hata 1: Render Sırasında ref.current Değiştirme</h4>
                <div className={styles.code}>
                    <pre>{`// ❌ YANLIŞ
function Component() {
  const ref = useRef(0);
  ref.current += 1; // Render sırasında!
  return <div>{ref.current}</div>;
}

// ✅ DOĞRU
function Component() {
  const ref = useRef(0);
  useEffect(() => {
    ref.current += 1; // useEffect içinde
  });
  return <div>{ref.current}</div>;
}`}</pre>
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4>❌ Hata 2: UI için useRef Kullanma</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
                    UI'da gösterilecek değerler için useState kullan
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                    <div>
                        <p><strong>useState (✅ Doğru):</strong></p>
                        <p>Count: {count}</p>
                        <button onClick={incrementState} className={styles.button}>
                            Artır (useState)
                        </button>
                    </div>
                    <div>
                        <p><strong>useRef (❌ Yanlış):</strong></p>
                        <p>Count: {countRef.current}</p>
                        <button onClick={incrementRef} className={styles.button}>
                            Artır (useRef)
                        </button>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>
                            (Manuel re-render gerekti)
                        </p>
                    </div>
                </div>

                <div className={styles.code}>
                    <pre>{`// ❌ YANLIŞ: UI için useRef
const countRef = useRef(0);
countRef.current += 1; // UI güncellenmiyor!

// ✅ DOĞRU: UI için useState
const [count, setCount] = useState(0);
setCount(c => c + 1); // UI güncelleniyor!`}</pre>
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4>❌ Hata 3: Callback Ref vs useRef Karışıklığı</h4>
                <div className={styles.code}>
                    <pre>{`// useRef: Basit DOM referansı
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} />

// Callback Ref: Element mount/unmount takibi
const [element, setElement] = useState<HTMLElement | null>(null);
<div ref={setElement} />

// Callback Ref: Daha fazla kontrol
<div ref={(el) => {
  if (el) {
    console.log('Element mounted:', el);
  } else {
    console.log('Element unmounted');
  }
}} />`}</pre>
                </div>
            </div>

            <div className={styles.highlights}>
                <h4>🎯 Ne Zaman Hangisi?</h4>
                <ul>
                    <li>
                        <strong>useState:</strong> UI'da gösterilecek değerler için
                    </li>
                    <li>
                        <strong>useRef (DOM):</strong> DOM elementlerine erişim için
                    </li>
                    <li>
                        <strong>useRef (Değer):</strong> Re-render tetiklemeyen değerler için
                    </li>
                    <li>
                        <strong>Callback Ref:</strong> Mount/unmount takibi için
                    </li>
                </ul>
            </div>

            <div className={styles.highlights} style={{ marginTop: '1rem' }}>
                <h4>⚠️ Önemli Kurallar</h4>
                <ul>
                    <li>Render sırasında ref.current'i değiştirme</li>
                    <li>UI değerleri için useRef değil useState kullan</li>
                    <li>Ref değişiklikleri re-render tetiklemez</li>
                    <li>DOM ref'leri null olabilir, her zaman kontrol et</li>
                </ul>
            </div>
        </div>
    );
}
