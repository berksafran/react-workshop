'use client';

import { useState } from 'react';
import { MarkdownViewer } from './MarkdownViewer';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
    title: string;
    description: string;
    notesContent?: string;
    children: React.ReactNode;
}

export function PageContainer({ title, description, notesContent, children }: PageContainerProps) {
    const [activeTab, setActiveTab] = useState<'demo' | 'notes'>('demo');

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <button onClick={goBack} className={styles.goBackButton}>
                        ←
                    </button>
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>

                {notesContent && (
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'demo' ? styles.active : ''}`}
                            onClick={() => setActiveTab('demo')}
                        >
                            🎮 Demo
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'notes' ? styles.active : ''}`}
                            onClick={() => setActiveTab('notes')}
                        >
                            📚 Notlar
                        </button>
                    </div>
                )}
            </header>

            <div className={styles.content}>
                {activeTab === 'demo' ? (
                    children
                ) : (
                    <MarkdownViewer content={notesContent || ''} />
                )}
            </div>
        </div>
    );
}
