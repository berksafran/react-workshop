import Link from 'next/link';
import styles from '../day1/02-react-core/page.module.scss';

export default function Day2Page() {
    const topics = [
        {
            id: 1,
            title: 'React Router',
            description: 'Client-side routing ile SPA geliştirme',
            path: '/day2/01-routing',
            emoji: '⚛️'
        },
        {
            id: 2,
            title: 'Next.js Router',
            description: 'File-based routing ve App Router',
            path: '/day2/02-nextjs-router',
            emoji: '▲'
        },
        {
            id: 3,
            title: 'State Management',
            description: 'Context API, useReducer ve performans',
            path: '/day2/03-state-management',
            emoji: '🗂️'
        },
        {
            id: 4,
            title: 'Rendering Patterns',
            description: 'SSR, CSR, SSG, ISR stratejileri',
            path: '/day2/04-rendering',
            emoji: '🎨'
        },
        {
            id: 5,
            title: 'Mini Project',
            description: 'User Directory - Tüm konseptler birlikte',
            path: '/day2/05-mini-project',
            emoji: '🚀'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Gün 2: Routing & State Management</h1>
                <p>Next.js routing, rendering patterns ve state yönetimi</p>
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
