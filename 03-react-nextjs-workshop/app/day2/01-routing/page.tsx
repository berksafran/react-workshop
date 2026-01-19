import Link from 'next/link';
import styles from '../../day1/02-react-core/page.module.scss';

export default function RoutingPage() {
    const topics = [
        {
            id: 1,
            title: 'React Router Basics',
            description: 'BrowserRouter, Routes, Route temel kullanımı',
            path: '/day2/01-routing/01-react-router-basics',
            emoji: '⚛️'
        },
        {
            id: 2,
            title: 'Next.js Router Basics',
            description: 'App Router yapısı ve temel kullanım',
            path: '/day2/01-routing/02-nextjs-router-basics',
            emoji: '▲'
        },
        {
            id: 3,
            title: 'Nested Routes',
            description: 'İç içe route yapıları ve Outlet kullanımı',
            path: '/day2/01-routing/03-nested-routes',
            emoji: '📁'
        },
        {
            id: 4,
            title: 'Dynamic Routes',
            description: 'Dinamik parametreli route\'lar',
            path: '/day2/01-routing/04-dynamic-routes',
            emoji: '🔀'
        },
        {
            id: 5,
            title: 'Comparison',
            description: 'React Router vs Next.js Router karşılaştırması',
            path: '/day2/01-routing/05-comparison',
            emoji: '⚖️'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>🛣️ Routing Fundamentals</h1>
                <p>React Router ve Next.js Router karşılaştırmalı öğrenme</p>
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
