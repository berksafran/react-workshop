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
                    <h2>📝 Ödev Açıklaması</h2>

                    <div className={styles.note}>
                        <strong>📌 Not:</strong> Çözüm dosyaları (<code>components/</code>, <code>hooks/</code>, <code>solution/</code> klasörleri) web uygulamasında görüntülenmiyor.
                        Çözümleri incelemek için lütfen IDE'den (VS Code) projeyi açın ve ilgili klasörlere bakın.
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>1. useToggle Hook ⭐</h3>
                        <p>Boolean state toggle için bir custom hook oluştur.</p>

                        <h4>Gereksinimler:</h4>
                        <ul>
                            <li><code>value</code> state'i (boolean)</li>
                            <li><code>toggle()</code> fonksiyonu (değeri tersine çevir)</li>
                            <li><code>setTrue()</code> fonksiyonu (true yap)</li>
                            <li><code>setFalse()</code> fonksiyonu (false yap)</li>
                            <li>Opsiyonel: <code>initialValue</code> parametresi</li>
                        </ul>

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
                        <p>Sayaç işlemleri için bir custom hook oluştur.</p>

                        <h4>Gereksinimler:</h4>
                        <ul>
                            <li><code>count</code> state'i</li>
                            <li><code>increment()</code> fonksiyonu</li>
                            <li><code>decrement()</code> fonksiyonu</li>
                            <li><code>reset()</code> fonksiyonu</li>
                            <li><code>setValue(value)</code> fonksiyonu</li>
                            <li>Opsiyonel: <code>min</code> ve <code>max</code> limitleri</li>
                            <li>Opsiyonel: <code>step</code> parametresi (kaçar kaçar artsın)</li>
                        </ul>

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
                    <h2>📂 Dosya Yapısı</h2>
                    <p>Aşağıdaki yapıda dosyalarınızı oluşturun:</p>
                    <div className={styles.code}>
                        <pre>{`ODEV-custom-hooks/
├── hooks/
│   ├── useToggle.ts
│   └── useCounter.ts
├── components/
│   ├── ToggleDemo.tsx
│   └── CounterDemo.tsx
└── page.tsx (demo sayfası)`}</pre>
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

                <section className={styles.section}>
                    <h2>💡 İpuçları</h2>
                    <ul>
                        <li><strong>useState</strong> → Custom hook'ların temeli</li>
                        <li><strong>Return değer</strong> → Object veya array (tutarlı ol)</li>
                        <li><strong>TypeScript</strong> → Type safety için önemli</li>
                        <li><strong>Test et</strong> → Her hook'u bir component'te kullan</li>
                        <li><strong>Basit tut</strong> → Önce çalışır hale getir, sonra optimize et</li>
                    </ul>
                </section>
            </div>

            <Link href="/day1/03-hooks/03-custom-hooks" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
