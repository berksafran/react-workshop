/**
 * REACT COMPONENT TİPLERİ - PROPSWITHCHILDREN
 * Detaylı notlar: NOTES.md
 */

import { PropsWithChildren } from 'react';

type CardProps = {
    title: string;
    subtitle?: string;
};

// Children eklemek için PropsWithChildren kullan
const Card = ({ title, subtitle, children }: PropsWithChildren<CardProps>) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
