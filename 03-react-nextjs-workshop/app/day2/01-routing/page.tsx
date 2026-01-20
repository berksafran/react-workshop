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
            title: 'Nested Routes',
            description: 'İç içe route yapıları ve Outlet kullanımı',
            path: '/day2/01-routing/02-nested-routes',
            emoji: '📁'
        },
        {
            id: 3,
            title: 'Dynamic Routes',
            description: 'URL parametreleri ve useParams hook\'u',
            path: '/day2/01-routing/03-dynamic-routes',
            emoji: '🔀'
        },
        {
            id: 4,
            title: 'Profile Page',
            description: 'Nested + Dynamic Routes birlikte kullanımı',
            path: '/day2/01-routing/04-profile-page',
            emoji: '👤'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>⚛️ React Router</h1>
                <p>Client-side routing ile Single Page Application geliştirme</p>
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
        </div>
    );
}
