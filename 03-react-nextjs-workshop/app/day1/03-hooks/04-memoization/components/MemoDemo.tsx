"use client";

import { useState } from "react";
import styles from "./memo.module.scss";
import { SlowList } from "./SlowList";
import { FastList } from "./FastList";
import { UserCard } from "./UserCard";

// 5. Ana Demo Bileşeni
export function MemoDemo() {
    const [text, setText] = useState("");
    // 100 elemanlı bir liste oluşturuyoruz
    const [items] = useState<string[]>(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));
    const [count, setCount] = useState(0);

    // Custom Comparison Demo State
    const [user, setUser] = useState({
        name: "Ali Veli",
        email: "ali@test.com",
        lastSeen: new Date()
    });

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

            <div style={{ marginTop: '2rem', borderTop: '2px dashed #eee', paddingTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>React.memo(Component, arePropsEqual) Örneği</h3>

                <div className={styles.container} style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start', padding: 0 }}>
                    <div className={styles.controls} style={{ flex: 1, marginBottom: 0 }}>
                        <h4>User State Controls</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginTop: '1rem' }}>
                            <button
                                className={styles.button}
                                onClick={() => setUser(prev => ({ ...prev, lastSeen: new Date() }))}
                            >
                                ⏱ Sadece Saati Güncelle
                                <br />
                                <small>(Render Olmaz)</small>
                            </button>

                            <button
                                className={styles.button}
                                style={{ backgroundColor: '#ef4444' }}
                                onClick={() => setUser(prev => ({ ...prev, name: `Ali Veli ${Math.floor(Math.random() * 100)}` }))}
                            >
                                👤 İsmi Değiştir
                                <br />
                                <small>(Render Olur)</small>
                            </button>
                        </div>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                            Şu anki saat state: {user.lastSeen.toLocaleTimeString()}
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <UserCard user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
}
