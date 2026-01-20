'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../basics.module.scss';

export function RouterDemo() {
    const router = useRouter();
    const pathname = usePathname();
    const [targetPath, setTargetPath] = useState('/');

    const navigate = () => {
        router.push(targetPath);
    };

    return (
        <div className={styles.demoContainer}>
            <div className={styles.demoCard}>
                <h3>🧭 Current Route</h3>
                <div className={styles.currentPath}>
                    <code>{pathname}</code>
                </div>
            </div>

            <div className={styles.demoCard}>
                <h3>🚀 useRouter Hook Demo</h3>
                <p>Programmatic navigation ile sayfa değiştirme:</p>
                <div className={styles.navigationDemo}>
                    <select
                        value={targetPath}
                        onChange={(e) => setTargetPath(e.target.value)}
                        className={styles.select}
                    >
                        <option value="/">Ana Sayfa</option>
                        <option value="/day1">Day 1</option>
                        <option value="/day2">Day 2</option>
                        <option value="/day2/01-routing">React Router</option>
                        <option value="/day2/02-nextjs-router">Next.js Router</option>
                    </select>
                    <button onClick={navigate} className={styles.navigateButton}>
                        Navigate →
                    </button>
                </div>
                <div className={styles.codeExample}>
                    <pre>{`const router = useRouter();
router.push('${targetPath}');`}</pre>
                </div>
            </div>

            <div className={styles.demoCard}>
                <h3>🔗 Link Component Demo</h3>
                <p>Next.js Link component'i ile navigation:</p>
                <div className={styles.linkExamples}>
                    <a href="/" className={styles.demoLink}>
                        ← Ana Sayfa
                    </a>
                    <a href="/day2" className={styles.demoLink}>
                        Day 2 →
                    </a>
                    <a href="/day2/02-nextjs-router" className={styles.demoLink}>
                        Next.js Router →
                    </a>
                </div>
                <div className={styles.codeExample}>
                    <pre>{`import Link from 'next/link';

<Link href="/day2">Day 2</Link>`}</pre>
                </div>
            </div>

            <div className={styles.infoBox}>
                <strong>💡 Not:</strong> Next.js Link component'leri otomatik olarak prefetch edilir ve client-side navigation sağlar.
            </div>
        </div>
    );
}
