import Link from 'next/link';
import styles from '../day1/02-react-core/page.module.scss';

export default function Day2Page() {
    const sessions = [
        {
            id: 1,
            title: 'Routing Fundamentals',
            description: 'React Router ve Next.js Router karşılaştırmalı öğrenme',
            path: '/day2/01-routing',
            emoji: '🛣️',
            topics: [
                { title: 'React Router Basics', path: '/day2/01-routing/01-react-router-basics' },
                { title: 'Next.js Router Basics', path: '/day2/01-routing/02-nextjs-router-basics' },
                { title: 'Nested Routes', path: '/day2/01-routing/03-nested-routes' },
                { title: 'Dynamic Routes', path: '/day2/01-routing/04-dynamic-routes' },
                { title: 'Comparison', path: '/day2/01-routing/05-comparison' }
            ]
        },
        {
            id: 2,
            title: 'Rendering Patterns',
            description: 'SSR, CSR, SSG, ISR ve Next.js rendering stratejileri',
            path: '/day2/02-rendering',
            emoji: '🎨',
            topics: [
                { title: 'SSR Demo', path: '/day2/02-rendering/01-ssr-demo' },
                { title: 'CSR Demo', path: '/day2/02-rendering/02-csr-demo' },
                { title: 'SSG Demo', path: '/day2/02-rendering/03-ssg-demo' },
                { title: 'ISR Demo', path: '/day2/02-rendering/04-isr-demo' },
                { title: '"use client" Directive', path: '/day2/02-rendering/05-use-client-directive' },
                { title: 'Next.js 15 vs 16', path: '/day2/02-rendering/06-nextjs-versions' }
            ]
        },
        {
            id: 3,
            title: 'State Management',
            description: 'Context API, useReducer ve performans optimizasyonu',
            path: '/day2/03-state-management',
            emoji: '🗂️',
            topics: [
                { title: 'Context API', path: '/day2/03-state-management/01-context-api' },
                { title: 'Context + Reducer', path: '/day2/03-state-management/02-context-reducer' },
                { title: 'React.memo', path: '/day2/03-state-management/03-react-memo' },
                { title: 'Ödev: To-Do App', path: '/day2/03-state-management/04-ODEV-todo-app' }
            ]
        },
        {
            id: 4,
            title: 'API Integration',
            description: 'Next.js API Routes ve Server Actions',
            path: '/day2/04-api-integration',
            emoji: '🔌',
            topics: [
                { title: 'API Routes', path: '/day2/04-api-integration/01-api-routes' },
                { title: 'Server Actions', path: '/day2/04-api-integration/02-server-actions' },
                { title: 'Data Fetching', path: '/day2/04-api-integration/03-data-fetching' }
            ]
        },
        {
            id: 5,
            title: 'Mini Project',
            description: 'User Directory - SSR, CSR ve Context birlikte',
            path: '/day2/05-mini-project',
            emoji: '🚀',
            topics: [
                { title: 'User Directory', path: '/day2/05-mini-project/user-directory' }
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>📅 Day 2 - Routing & State Management</h1>
                <p>Next.js routing, rendering patterns ve state yönetimi</p>
            </header>

            <div className={styles.content}>
                {sessions.map((session) => (
                    <section key={session.id} className={styles.section}>
                        <h2>
                            {session.emoji} {session.title}
                        </h2>
                        <p className={styles.description}>{session.description}</p>

                        <ul className={styles.topicList}>
                            {session.topics.map((topic, index) => (
                                <li key={index}>
                                    <Link href={topic.path}>{topic.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <Link href="/" className={styles.backLink}>
                ← Ana Sayfa
            </Link>
        </div>
    );
}
