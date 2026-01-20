import Link from 'next/link';
import styles from '../../day1/02-react-core/page.module.scss';

export default function NextjsRouterPage() {
    const topics = [
        {
            id: 1,
            title: 'Next.js Router Basics',
            description: 'App Router yapısı ve temel kullanım',
            path: '/day2/02-nextjs-router/01-basics',
            emoji: '▲'
        },
        {
            id: 2,
            title: 'Comparison',
            description: 'React Router vs Next.js Router karşılaştırması',
            path: '/day2/02-nextjs-router/comparison',
            emoji: '⚖️'
        },
        {
            id: 3,
            title: 'API Routes',
            description: 'Next.js API Routes kullanımı',
            path: '/day2/02-nextjs-router/api-routes',
            emoji: '🔌'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>▲ Next.js Router</h1>
                <p>Next.js App Router özellikleri ve kullanımı</p>
            </header>

            <div className={styles.content}>
                {topics.map((topic) => (
                    <Link
                        key={topic.id}
                        href={topic.path}
                        className={styles.card}
                        style={{ textDecoration: 'none', display: 'block' }}
                    >
                        <h2>
                            {topic.emoji} {topic.title}
                        </h2>
                        <p>{topic.description}</p>
                    </Link>
                ))}
            </div>

            <Link href="/day2" className={styles.backLink}>
                ← Day 2 Ana Sayfa
            </Link>
        </div>
    );
}
