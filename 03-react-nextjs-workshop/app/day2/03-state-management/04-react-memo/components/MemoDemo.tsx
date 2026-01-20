"use client";

import { useState } from "react";
import styles from "./memo.module.scss";
import { SlowList } from "./SlowList";
import { FastList } from "./FastList";

// 5. Ana Demo Bileşeni
export function MemoDemo() {
    const [text, setText] = useState("");
    // 100 elemanlı bir liste oluşturuyoruz
    const [items] = useState<string[]>(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));
    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <h2>Parent Component</h2>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Parent state'ini güncelle..."
                    />
                    <button onClick={() => setCount(c => c + 1)} className={styles.button}>
                        Sayaç: {count}
                    </button>
                </div>
                <p>Yukarıdaki input'a yazı yazdığınızda veya butona tıkladığınızda Parent yeniden render olur.</p>
                <p>Aşağıdaki bileşenlere gönderilen <strong>items</strong> prop'u değişmediği için Memoize edilmiş bileşen gereksiz yere render olmaz.</p>
            </div>

            <div className={styles.grid}>
                <SlowList items={items} title="🐢 Slow Component" />
                <FastList items={items} title="🐰 Fast Component" />
            </div>
        </div>
    );
}
