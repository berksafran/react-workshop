'use client';

import { useState } from 'react';
import { LifecycleDemo } from './LifecycleDemo';
import styles from '../page.module.scss';
import { PageContainer } from '@/app/components/PageContainer';

export function LifecycleContainer() {
    const [isVisible, setIsVisible] = useState(true);
    const [count, setCount] = useState(0);
    const [logs, setLogs] = useState<Array<{ id: number; message: string; type: 'mount' | 'update' | 'unmount' }>>([]);

    const addLog = (message: string, type: 'mount' | 'update' | 'unmount') => {
        const log = {
            id: Date.now(),
            message,
            type
        };
        setLogs(prev => [log, ...prev].slice(0, 50)); // Son 50 log
    };

    const clearLogs = () => setLogs([]);

    return (
        <div className={styles.lifecycleContainer}>
            <div className={styles.controls}>
                <div className={styles.buttonGroup}>
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className={`${styles.button} ${isVisible ? styles.danger : styles.success}`}
                    >
                        {isVisible ? '🔴 Unmount Component' : '🟢 Mount Component'}
                    </button>

                    <button
                        onClick={() => setCount(c => c + 1)}
                        disabled={!isVisible}
                        className={styles.button}
                    >
                        ➕ Update Count ({count})
                    </button>

                    <button
                        onClick={clearLogs}
                        className={styles.button}
                        style={{ marginLeft: 'auto' }}
                    >
                        🗑️ Logs Temizle
                    </button>
                </div>
            </div>

            <div className={styles.demoArea}>
                <div className={styles.componentArea}>
                    {isVisible ? (
                        <LifecycleDemo count={count} onLog={addLog} />
                    ) : (
                        <div className={styles.placeholder}>
                            Component Unmounted (DOM'da yok)
                        </div>
                    )}
                </div>

                <div className={styles.logArea}>
                    <h3>📋 Lifecycle Logs</h3>
                    <div className={styles.logs}>
                        {logs.length === 0 && <p className={styles.emptyLog}>Henüz bir işlem yok...</p>}
                        {logs.map(log => (
                            <div key={log.id} className={`${styles.logItem} ${styles[log.type]}`}>
                                <span className={styles.time}>{new Date(log.id).toLocaleTimeString()}</span>
                                <span className={styles.message}>{log.message}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
