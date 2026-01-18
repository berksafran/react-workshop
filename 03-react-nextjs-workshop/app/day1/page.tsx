import Link from 'next/link';
import styles from './02-react-core/page.module.scss';

export default function Day1Page() {
    const sections = [
        {
            id: 1,
            title: 'TypeScript + React',
            description: 'Component typing, Props, PropsWithChildren',
            path: '/day1/01-typescript-react',
            emoji: '📘',
            topics: 3
        },
        {
            id: 2,
            title: 'React Core Concepts',
            description: 'Declarative vs Imperative, State & Props, Lifecycle, Counter App',
            path: '/day1/02-react-core',
            emoji: '⚛️',
            topics: 4
        },
        {
            id: 3,
            title: 'Hooks Deep Dive',
            description: 'useState, useEffect, useCallback, useMemo, useReducer, Custom Hooks',
            path: '/day1/03-hooks',
            emoji: '🎣',
            topics: 5
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Gün 1: React Fundamentals</h1>
                <p>React'in temel kavramları, TypeScript entegrasyonu ve Hooks</p>
            </header>

            <div className={styles.grid}>
                {sections.map((section) => (
                    <Link
                        key={section.id}
                        href={section.path}
                        className={styles.card}
                    >
                        <div className={styles.emoji}>{section.emoji}</div>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                        <span style={{ fontSize: '0.9rem', color: '#999' }}>
                            {section.topics} konu
                        </span>
                    </Link>
                ))}
            </div>

            <Link href="/" className={styles.backLink}>
                ← Ana Sayfaya Dön
            </Link>
        </div>
    );
}
