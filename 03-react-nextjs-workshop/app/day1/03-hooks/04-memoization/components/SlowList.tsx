"use client";

import { useRef } from "react";
import styles from "./memo.module.scss";
import { heavyCalculation } from "./memoUtils";

interface ListProps {
    items: string[];
    title: string;
}

export function SlowList({ items, title }: ListProps) {
    // Render sayısını takip etmek için useRef
    const renderCount = useRef(0);
    renderCount.current += 1;

    // Yapay yavaşlık (50ms bloklama)
    heavyCalculation(50);

    return (
        <div className={`${styles.card} ${styles.slow}`}>
            <h3>
                {title} <span className={styles.renderCount}>{renderCount.current}</span>
            </h3>
            <p>⚠️ React.memo YOK (Her parent render'ında ben de render olurum)</p>
            <ul className={styles.list}>
                {items.slice(0, 5).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
                {items.length > 5 && <li>...ve {items.length - 5} daha</li>}
            </ul>
        </div>
    );
}
