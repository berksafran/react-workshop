'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.scss';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Animated Background */}
            <div className={styles.backgroundAnimation}>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Animated 404 Illustration */}
                <div className={styles.illustration}>
                    <div className={styles.astronaut}>
                        <div className={styles.helmet}>
                            <div className={styles.visor}></div>
                            <div className={styles.reflection}></div>
                        </div>
                        <div className={styles.body}></div>
                        <div className={styles.armLeft}></div>
                        <div className={styles.armRight}></div>
                        <div className={styles.legLeft}></div>
                        <div className={styles.legRight}></div>
                    </div>

                    {/* Floating Elements */}
                    <div className={styles.planet}></div>
                    <div className={styles.moon}></div>
                    <div className={styles.satellite}></div>
                </div>

                {/* Error Message */}
                <div className={styles.errorContent}>
                    <h1 className={styles.errorCode}>
                        <span className={styles.digit}>4</span>
                        <span className={styles.digit}>0</span>
                        <span className={styles.digit}>4</span>
                    </h1>

                    <h2 className={styles.errorTitle}>Sayfa Bulunamadı</h2>

                    <p className={styles.errorMessage}>
                        Üzgünüz, aradığınız sayfa uzayda kaybolmuş gibi görünüyor.
                        Belki de hiç var olmadı, ya da başka bir galaksiye taşındı.
                    </p>

                    {/* Action Buttons */}
                    <div className={styles.actions}>
                        <button
                            onClick={() => router.back()}
                            className={styles.secondaryButton}
                        >
                            <span className={styles.icon}>←</span>
                            Geri Dön
                        </button>

                        <Link href="/" className={styles.primaryButton}>
                            <span className={styles.icon}>🏠</span>
                            Ana Sayfaya Git
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className={styles.helpfulLinks}>
                        <p className={styles.helpText}>Belki bunlar işinize yarayabilir:</p>
                        <div className={styles.linkGrid}>
                            <Link href="/day1" className={styles.helpLink}>
                                📚 Day 1 - React Temelleri
                            </Link>
                            <Link href="/day2" className={styles.helpLink}>
                                🚀 Day 2 - Rendering Patterns
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
