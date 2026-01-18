import Link from 'next/link';
import styles from '../01-react-core/page.module.scss';

export default function CustomHooksIndexPage() {
    const hooks = [
        {
            id: 1,
            title: 'useFetch',
            description: 'API çağrıları için custom hook',
            path: '/day1/03-hooks/03-custom-hooks/01-useFetch',
            emoji: '🌐'
        },
        {
            id: 2,
            title: 'useLocalStorage',
            description: 'LocalStorage ile state senkronizasyonu',
            path: '/day1/03-hooks/03-custom-hooks/02-useLocalStorage',
            emoji: '💾'
        },
        {
            id: 3,
            title: 'Ödev: useToggle + useCounter',
            description: 'useToggle ve useCounter hook\'larını oluştur',
            path: '/day1/03-hooks/03-custom-hooks/ODEV-custom-hooks',
            emoji: '📚'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Custom Hooks</h1>
                <p>Kendi hook'larını oluştur - Reusable logic</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🛠️ Custom Hook Nedir?</h2>
                    <p className={styles.description}>
                        Tekrar kullanılabilir logic için kendi hook'larını oluşturabilirsin.
                        Hook kurallarına uymalı: "use" ile başlamalı, sadece component/hook içinde çağrılmalı.
                    </p>
                </section>

                <div className={styles.grid}>
                    {hooks.map((hook) => (
                        <Link
                            key={hook.id}
                            href={hook.path}
                            className={styles.card}
                        >
                            <div className={styles.emoji}>{hook.emoji}</div>
                            <h2>{hook.title}</h2>
                            <p>{hook.description}</p>
                        </Link>
                    ))}
                </div>

                <section className={styles.highlights}>
                    <h3>🎯 Hook Kuralları</h3>
                    <ul>
                        <li>
                            <strong>"use" ile başla:</strong> useFetch, useLocalStorage
                        </li>
                        <li>
                            <strong>Sadece üst seviyede:</strong> Loop, condition içinde çağırma
                        </li>
                        <li>
                            <strong>Sadece React fonksiyonlarında:</strong> Component veya hook içinde
                        </li>
                        <li>
                            <strong>Reusable logic:</strong> Birden fazla yerde kullanılacak logic için
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
