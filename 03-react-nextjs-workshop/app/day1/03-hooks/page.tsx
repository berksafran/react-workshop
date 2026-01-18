import Link from 'next/link';
import styles from '../02-react-core/page.module.scss';

export default function Day1HooksPage() {
    const topics = [
        {
            id: 1,
            title: 'useState & useEffect',
            description: 'Temel hooks: State yönetimi ve side effects',
            path: '/day1/03-hooks/01-useState-useEffect',
            emoji: '🎣'
        },
        {
            id: 2,
            title: 'useReducer',
            description: 'Complex state management (Redux benzeri)',
            path: '/day1/03-hooks/02-useReducer',
            emoji: '🔄'
        },
        {
            id: 3,
            title: 'Custom Hooks',
            description: 'Kendi hook\'larını oluştur (useFetch, useLocalStorage)',
            path: '/day1/03-hooks/03-custom-hooks',
            emoji: '🛠️'
        },
        {
            id: 4,
            title: 'Memoization (useCallback, useMemo, React.memo)',
            description: 'Performans optimizasyonu ve memoization teknikleri',
            path: '/day1/03-hooks/04-memoization',
            emoji: '⚡'
        },
        {
            id: 5,
            title: 'React Compiler (Next.js 16)',
            description: 'Otomatik optimizasyon ve memoization',
            path: '/day1/03-hooks/05-react-compiler',
            emoji: '🚀'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Gün 1: Hooks Deep Dive</h1>
                <p>React Hooks detaylı inceleme ve performans optimizasyonu</p>
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
