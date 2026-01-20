import Link from 'next/link';
import styles from '../../day1/02-react-core/page.module.scss';

export default function StateManagementPage() {
    const topics = [
        {
            id: 1,
            title: 'Context API Basics',
            description: 'Global state yönetimi ve prop drilling çözümü',
            path: '/day2/03-state-management/01-context-api',
            emoji: '🔄'
        },
        {
            id: 2,
            title: 'Context + useReducer',
            description: 'Gelişmiş state yönetimi (Shopping Cart)',
            path: '/day2/03-state-management/02-context-with-reducer',
            emoji: '🛒'
        },
        {
            id: 3,
            title: 'Mini Ödev: To-Do App',
            description: 'Context ve Reducer pratik uygulaması',
            path: '/day2/03-state-management/03-todo-app',
            emoji: '📝'
        },
        {
            id: 4,
            title: 'React.memo & Performance',
            description: 'Render optimizasyonu ve performans',
            path: '/day2/03-state-management/04-react-memo',
            emoji: '⚡'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>State Management</h1>
                <p>React uygulamalarında global state yönetimi ve performans optimizasyonu</p>
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
