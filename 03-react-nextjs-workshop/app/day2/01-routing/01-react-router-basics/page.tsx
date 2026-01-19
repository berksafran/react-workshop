import Link from 'next/link';
import styles from '../../../day1/02-react-core/page.module.scss';
import { ReactRouterDemo } from './components/ReactRouterDemo';

export default function ReactRouterBasicsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>⚛️ React Router Basics</h1>
                <p>Client-side routing temel kavramları</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>🎮 Canlı Demo</h2>
                    <p>
                        Aşağıdaki demo'da React Router'ın temel özelliklerini görebilirsiniz.
                        Sayfalar arası geçiş yaparken tarayıcının yenilenmediğine dikkat edin!
                    </p>
                    <ReactRouterDemo />
                </section>
            </div>

            <Link href="/day2/01-routing" className={styles.backLink}>
                ← Routing Ana Sayfa
            </Link>
        </div>
    );
}
