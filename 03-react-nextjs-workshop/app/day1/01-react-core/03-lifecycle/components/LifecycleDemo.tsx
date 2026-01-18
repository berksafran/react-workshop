'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.scss';

type LifecycleDemoProps = {
    count: number;
    onLog: (message: string) => void;
};

export function LifecycleDemo({ count, onLog }: LifecycleDemoProps) {
    useEffect(() => {
        onLog('🟢 MOUNT: Component ilk kez render edildi');

        return () => {
            onLog('🔴 UNMOUNT: Component DOM\'dan kaldırıldı');
        };
    }, []); // Empty dependency array = sadece mount/unmount

    useEffect(() => {
        onLog(`🔄 UPDATE: Count değişti (${count})`);
    }, [count]); // count değişince çalışır

    return (
        <div className={styles.lifecycleDemo}>
            <h3>Lifecycle Demo Component</h3>
            <p>Current Count: {count}</p>
        </div>
    );
}
