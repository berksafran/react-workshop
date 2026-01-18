'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export default function LifecyclePage() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        const timestamp = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    };

    // Component that demonstrates lifecycle
    function LifecycleDemo({ count }: { count: number }) {
        useEffect(() => {
            addLog('🟢 MOUNT: Component ilk kez render edildi');

            return () => {
                addLog('🔴 UNMOUNT: Component DOM\'dan kaldırıldı');
            };
        }, []); // Empty dependency array = sadece mount/unmount

        useEffect(() => {
            addLog(`🔄 UPDATE: Count değişti (${count})`);
        }, [count]); // count değişince çalışır

        return (
            <div className={styles.lifecycleDemo}>
                <h3>Lifecycle Demo Component</h3>
                <p>Current Count: {count}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Component Lifecycle</h1>
                <p>Mount → Update → Unmount</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>♻️ Lifecycle Aşamaları</h2>

                    <div className={styles.phases}>
                        <div className={styles.phase}>
                            <div className={styles.phaseIcon}>🟢</div>
                            <h3>Mount</h3>
                            <p>Component ilk kez DOM'a eklenir</p>
                            <code>useEffect(() =&gt; { }, [])</code>
                        </div>

                        <div className={styles.phase}>
                            <div className={styles.phaseIcon}>🔄</div>
                            <h3>Update</h3>
                            <p>State veya props değiştiğinde</p>
                            <code>useEffect(() =&gt; { }, [dep])</code>
                        </div>

                        <div className={styles.phase}>
                            <div className={styles.phaseIcon}>🔴</div>
                            <h3>Unmount</h3>
                            <p>Component DOM'dan kaldırılır</p>
                            <code>return () =&gt; { }</code>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>🎮 Interaktif Demo</h2>

                    <div className={styles.controls}>
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className={styles.button}
                        >
                            {isVisible ? 'Component\'i Kaldır' : 'Component\'i Ekle'}
                        </button>

                        <button
                            onClick={() => setCount(count + 1)}
                            className={styles.button}
                            disabled={!isVisible}
                        >
                            Count Artır
                        </button>

                        <button
                            onClick={() => setLogs([])}
                            className={styles.buttonSecondary}
                        >
                            Logları Temizle
                        </button>
                    </div>

                    <div className={styles.demo}>
                        {isVisible && <LifecycleDemo count={count} />}
                    </div>

                    <div className={styles.logs}>
                        <h3>📋 Lifecycle Logları:</h3>
                        <div className={styles.logList}>
                            {logs.length === 0 ? (
                                <p className={styles.emptyLog}>Henüz log yok. Butonlara tıklayın!</p>
                            ) : (
                                logs.map((log, index) => (
                                    <div key={index} className={styles.logItem}>
                                        {log}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>Mount:</strong> Component ilk kez render edilir, useEffect çalışır
                        </li>
                        <li>
                            <strong>Update:</strong> State/props değişince component re-render edilir
                        </li>
                        <li>
                            <strong>Unmount:</strong> Component kaldırılırken cleanup function çalışır
                        </li>
                        <li>
                            <strong>Cleanup:</strong> Timer, subscription gibi kaynakları temizle
                        </li>
                        <li>
                            Dependency array boş [] → Sadece mount/unmount
                        </li>
                        <li>
                            Dependency array [dep] → dep değişince çalışır
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1-react-core" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
