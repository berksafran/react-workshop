import Link from 'next/link';
import styles from '../../day1/02-react-core/page.module.scss';

export default function RenderingPatternsPage() {
    const topics = [
        {
            id: 1,
            title: 'Server Side Rendering (SSR)',
            description: 'Dynamic Rendering & no-store cache',
            path: '/day2/04-rendering/01-ssr',
            emoji: '🔄'
        },
        {
            id: 2,
            title: 'Client Side Rendering (CSR)',
            description: '"use client" ve useEffect kullanımı',
            path: '/day2/04-rendering/02-csr',
            emoji: '🖥️'
        },
        {
            id: 3,
            title: 'Static Site Generation (SSG)',
            description: 'Default rendering behavior & force-cache',
            path: '/day2/04-rendering/03-ssg',
            emoji: '📦'
        },
        {
            id: 4,
            title: 'Incremental Static Regeneration (ISR)',
            description: 'Hibrit model ve revalidation',
            path: '/day2/04-rendering/04-isr',
            emoji: '⏱️'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Rendering Patterns</h1>
                <p>Next.js'in sunduğu farklı render stratejileri ve kullanım senaryoları.</p>
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
        </div>
    );
}
