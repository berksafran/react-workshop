'use client';

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import styles from './ReactRouterDemo.module.scss';

// Demo Pages
function HomePage() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <h2>🏠 Ana Sayfa</h2>
            <p>React Router demo uygulamasına hoş geldiniz!</p>
            <button onClick={() => navigate('/about')} className={styles.button}>
                Hakkımızda Sayfasına Git
            </button>
        </div>
    );
}

function AboutPage() {
    return (
        <div className={styles.page}>
            <h2>ℹ️ Hakkımızda</h2>
            <p>Bu, React Router'ın temel özelliklerini gösteren bir demo uygulamasıdır.</p>
            <ul>
                <li>Client-side routing</li>
                <li>Sayfa yenilenmeden navigasyon</li>
                <li>Browser history API kullanımı</li>
            </ul>
        </div>
    );
}

function ContactPage() {
    return (
        <div className={styles.page}>
            <h2>📧 İletişim</h2>
            <p>Bizimle iletişime geçin:</p>
            <form className={styles.form}>
                <input type="text" placeholder="Adınız" />
                <input type="email" placeholder="E-posta" />
                <textarea placeholder="Mesajınız" rows={4} />
                <button type="submit" className={styles.button}>Gönder</button>
            </form>
        </div>
    );
}

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <h2>❌ 404 - Sayfa Bulunamadı</h2>
            <p>Aradığınız sayfa mevcut değil.</p>
            <button onClick={() => navigate('/')} className={styles.button}>
                Ana Sayfaya Dön
            </button>
        </div>
    );
}

// Main Router Component
export function ReactRouterDemo() {
    return (
        <BrowserRouter>
            <div className={styles.demo}>
                <nav className={styles.nav}>
                    <h3>React Router Demo</h3>
                    <div className={styles.navLinks}>
                        <Link to="/" className={styles.navLink}>Ana Sayfa</Link>
                        <Link to="/about" className={styles.navLink}>Hakkımızda</Link>
                        <Link to="/contact" className={styles.navLink}>İletişim</Link>
                    </div>
                </nav>

                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
