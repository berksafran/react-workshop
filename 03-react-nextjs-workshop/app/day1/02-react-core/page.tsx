import Link from 'next/link';
import styles from './page.module.scss';

export default function Day1ReactCorePage() {
    const topics = [
        {
            id: 1,
            title: 'Declarative vs Imperative',
            description: 'React\'in declarative yaklaşımı ve imperative yaklaşımla farkları',
            path: '/day1/01-react-core/01-declarative-vs-imperative',
            emoji: '🎯'
        },
        {
            id: 2,
            title: 'State & Props',
            description: 'Component state yönetimi ve props ile veri aktarımı',
            path: '/day1/02-react-core/02-state-and-props',
            emoji: '📦'
        },
        {
            id: 3,
            title: 'Lifecycle',
            description: 'Component lifecycle: Mount → Update → Unmount',
            path: '/day1/02-react-core/03-lifecycle',
            emoji: '♻️'
        },
        {
            id: 4,
            title: 'Counter App (Mini Ödev)',
            description: 'State ve props ilişkisini gösteren sayaç uygulaması',
            path: '/day1/02-react-core/04-ODEV-counter-app',
            emoji: '🔢'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Gün 1: React Core Concepts</h1>
                <p>React'in temel mantığı ve component yapısı</p>
            </header>

            <div className={styles.grid}>
                {topics.map((topic) => (
                    <Link
                        key={topic.id}
                        href={topic.path}
                        className={styles.card}
                    >
                        <div className={styles.emoji}>{topic.emoji}</div>
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                    </Link>
                ))}
            </div>

            <Link href="/" className={styles.backLink}>
                ← Ana Sayfaya Dön
            </Link>
        </div>
    );
}
