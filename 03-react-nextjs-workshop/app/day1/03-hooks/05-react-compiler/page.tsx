import Link from 'next/link';
import styles from '../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default function ReactCompilerPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>React Compiler (Next.js 16)</h1>
                <p>Otomatik optimizasyon ve memoization</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🚀 React Compiler Nedir?</h2>
                    <p className={styles.description}>
                        Next.js 16 ile gelen React Compiler, build time'da kodu analiz eder ve otomatik olarak optimize eder.
                        Artık useCallback ve useMemo'ya daha az ihtiyaç var!
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>✨ Özellikler</h2>
                    <ul style={{ lineHeight: '2' }}>
                        <li>✅ Otomatik memoization (useCallback/useMemo gibi)</li>
                        <li>✅ Component optimization (React.memo gibi)</li>
                        <li>✅ Daha temiz kod</li>
                        <li>✅ Daha az manuel optimizasyon</li>
                        <li>✅ Build time'da çalışır</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>📝 Örnek</h2>
                    <div className={styles.code}>
                        <pre>{`// Öncesi (Next.js 15)
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

const sorted = useMemo(() => 
  data.sort(), [data]
);

// Sonrası (Next.js 16)
const handleClick = () => {
  console.log('clicked');
}; // Compiler otomatik memoize eder!

const sorted = data.sort(); // Compiler halleder!`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>⚙️ Nasıl Aktif Edilir?</h2>
                    <div className={styles.code}>
                        <pre>{`// next.config.js
module.exports = {
  experimental: {
    reactCompiler: true
  }
}`}</pre>
                    </div>
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Otomatik:</strong> Build time'da çalışır, runtime overhead yok
                        </li>
                        <li>
                            <strong>Daha az kod:</strong> useCallback/useMemo gereksiz olabilir
                        </li>
                        <li>
                            <strong>Hala gerekli:</strong> Complex durumlarda manual optimization
                        </li>
                        <li>
                            <strong>Profiler kullan:</strong> Gerçekten optimize ediyor mu kontrol et
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>📚 Detaylı Bilgi</h2>
                    <p>
                        Daha fazla bilgi için <code>NOTES.md</code> dosyasına bakın.
                    </p>
                </section>
            </div>

            <Link href="/day1/03-hooks" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
