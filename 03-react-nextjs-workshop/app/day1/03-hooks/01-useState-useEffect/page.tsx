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
            </div>
        </div>
    );
}
