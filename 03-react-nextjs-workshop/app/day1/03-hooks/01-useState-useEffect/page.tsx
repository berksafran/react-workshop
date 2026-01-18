import Link from 'next/link';
import styles from '../../02-react-core/page.module.scss';

export default function UseStateUseEffectIndexPage() {
    const hooks = [
        {
            id: 1,
            title: 'useState',
            description: 'Component state yönetimi - Temel, Functional Updates, Lazy Init',
            path: '/day1/03-hooks/01-useState-useEffect/01-useState',
            emoji: '📦'
        },
        {
            id: 2,
            title: 'useEffect',
            description: 'Side effects - API calls, subscriptions, cleanup',
            path: '/day1/03-hooks/01-useState-useEffect/02-useEffect',
            emoji: '⚡'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>useState & useEffect</h1>
                <p>React'in en temel hooks'ları</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🎣 Temel Hooks</h2>
                    <p className={styles.description}>
                        useState ve useEffect, React'in en çok kullanılan hooks'larıdır.
                        Her React developer'ın derinlemesine bilmesi gerekir.
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
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>useState:</strong> State değişince component re-render edilir
                        </li>
                        <li>
                            <strong>Functional Updates:</strong> Önceki state'e göre güncelleme için kullan
                        </li>
                        <li>
                            <strong>useEffect Dependency:</strong> Boş [] = mount, [dep] = dep değişince
                        </li>
                        <li>
                            <strong>Cleanup:</strong> Timer, subscription temizlemek için mutlaka kullan
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
