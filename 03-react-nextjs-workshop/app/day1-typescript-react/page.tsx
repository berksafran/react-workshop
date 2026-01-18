import Link from 'next/link';
import styles from '../day1-react-core/page.module.scss';

export default function Day1TypeScriptReactPage() {
    const topics = [
        {
            id: 1,
            title: 'Simple Props',
            description: 'React component props typing (FC kullanmadan)',
            path: '/day1-typescript-react/01-simple-props',
            emoji: '📝'
        },
        {
            id: 2,
            title: 'Props with Children',
            description: 'PropsWithChildren kullanımı',
            path: '/day1-typescript-react/02-props-with-children',
            emoji: '👶'
        },
        {
            id: 3,
            title: 'Ödev: React Component Types',
            description: 'Farklı tipte props alan React bileşeni',
            path: '/day1-typescript-react/03-ODEV-react-ts-types',
            emoji: '📚'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Gün 1: TypeScript + React</h1>
                <p>React component'lerini TypeScript ile tip güvenli yazma</p>
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
