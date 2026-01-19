'use client';

import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
    title: string;
}>;

export const Card = ({ title, children }: CardProps) => {
    const styles = {
        card: {
            background: 'white',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            padding: '1.5rem',
        },
        title: {
            margin: '0 0 1rem 0',
            color: '#667eea',
            fontSize: '1.25rem',
        },
        content: {
            color: '#666',
        }
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{title}</h3>
            <div style={styles.content}>{children}</div>
        </div>
    );
};
