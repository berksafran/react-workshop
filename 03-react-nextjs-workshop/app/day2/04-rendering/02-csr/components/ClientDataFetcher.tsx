"use client";

import { useState, useEffect } from "react";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export function ClientDataFetcher() {
    const [data, setData] = useState<Todo | null>(null);
    const [loading, setLoading] = useState(true);
    const [fetchTime, setFetchTime] = useState<string>("");

    useEffect(() => {
        // Component mount olduğunda çalışır (Browser'da)
        const fetchData = async () => {
            // Yapay gecikme
            await new Promise(resolve => setTimeout(resolve, 1500));

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const json = await response.json();
                setData(json);
                setFetchTime(new Date().toLocaleTimeString());
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginTop: '1rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                }}>Client Side</span>
                <h3 style={{ margin: 0 }}>Browser Fetching</h3>
            </div>

            {loading ? (
                <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
                    ⏳ Veri tarayıcıda yükleniyor (Loading skeleton)...
                </div>
            ) : data ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Todo ID:</strong> {data.id}
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Başlık:</strong> {data.title}
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong>Durum:</strong> {data.completed ? '✅ Tamamlandı' : '❌ Yapılmadı'}
                    </li>
                    <li style={{ color: '#059669', fontWeight: 'bold', marginTop: '1rem', fontSize: '0.9rem' }}>
                        Fetched at: {fetchTime} (Client Time)
                    </li>
                </ul>
            ) : (
                <div style={{ color: 'red' }}>Hata oluştu.</div>
            )}

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6', fontSize: '0.9rem', color: '#6b7280' }}>
                <p>
                    Bu bileşen yüklendiğinde, HTML önce boş (veya loading) olarak gelir,
                    ardından JS çalışır ve veriyi çeker. Sayfa kaynağını görüntülerseniz veriyi göremezsiniz.
                </p>
            </div>
        </div>
    );
}
