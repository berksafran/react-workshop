import Link from 'next/link';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.icon}>⚛️</span>
                    <span className={styles.title}>React & Next.js Workshop</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        🏠 Ana Sayfa
                    </Link>
                </nav>
            </div>
        </header>
    );
}
