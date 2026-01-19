"use client";

import { useEffect, useRef } from 'react';
import styles from '../page.module.scss';

type LifecycleDemoProps = {
    count: number;
    onLog: (message: string, type: 'mount' | 'update' | 'unmount') => void;
};

export function LifecycleDemo({ count, onLog }: LifecycleDemoProps) {
    // useRef ile ilk render kontrolü (React 18 Strict Mode double-invoke için)
    const renderCount = useRef(0);

    useEffect(() => {
        onLog('🟢 Component MOUNTED', 'mount');

        return () => {
            onLog('🔴 Component UNMOUNTED', 'unmount');
        };
    }, []); // Empty dependency = sadece mount/unmount

    useEffect(() => {
        // İlk render'da update log'u atmayalım (mount zaten attı)
        if (renderCount.current > 0) {
            onLog(`🔄 Component UPDATED (Count: ${count})`, 'update');
        }
        renderCount.current++;
    }, [count]);

    return (
        <div className={styles.activeComponent}>
            <div className={styles.statusBadge}>Alive</div>
            <h3>✨ Active Component</h3>

            <div className={styles.counter}>
                <span className={styles.label}>Prop Value:</span>
                <span className={styles.value}>{count}</span>
            </div>

            <p className={styles.info}>
                Ben canlı bir componentim! DOM üzerindeyim.
            </p>
        </div>
    );
}
