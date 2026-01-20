"use client";

import { memo, useRef } from "react";
import styles from "./memo.module.scss";
import { heavyCalculation } from "./utils";

interface ListProps {
    items: string[];
    title: string;
}

// Hızlı Bileşen (React.memo ile sarmalanmış)
// Sadece props (items veya title) değiştiğinde render olur.
export const FastList = memo(function FastList({ items, title }: ListProps) {
    const renderCount = useRef(0);
    renderCount.current += 1;

    // Burada da yavaşlık var ama sadece gerekli olduğunda çalışacak!
    heavyCalculation(50);

    return (
        <div className={`${styles.card} ${styles.fast}`}>
            <h3>
                {title} <span className={styles.renderCount}>{renderCount.current}</span>
            </h3>
            <p>✅ React.memo VAR (Sadece props değişirse render olurum)</p>
            <ul className={styles.list}>
                {items.slice(0, 5).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
                {items.length > 5 && <li>...ve {items.length - 5} daha</li>}
            </ul>
        </div>
    );
});
