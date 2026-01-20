import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from '../nested.module.scss';

export function DashboardLayout() {
    const location = useLocation();

    // Helper to check active state
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.header}>
                    <h2>Dashboard</h2>
                    <p>Yönetim Paneli</p>
                </div>

                <nav>
                    <Link
                        to="/dashboard"
                        className={isActive('/dashboard') ? styles.active : styles.inactive}
                    >
                        Genel Bakış
                    </Link>
                    <Link
                        to="/dashboard/profile"
                        className={isActive('/dashboard/profile') ? styles.active : styles.inactive}
                    >
                        Profil Ayarları
                    </Link>
                    <Link
                        to="/dashboard/account"
                        className={isActive('/dashboard/account') ? styles.active : styles.inactive}
                    >
                        Hesap Ayarları
                    </Link>
                </nav>

                <div className={styles.infoBox}>
                    <p>
                        <strong>Bilgi:</strong> Burası Layout bileşeni ("DashboardLayout").
                        Menü burada sabit kalır, sağ taraftaki içerik <code>&lt;Outlet /&gt;</code> sayesinde değişir.
                    </p>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={styles.mainContent}>
                {/* 
                     Outlet bileşeni, child route'ların render edileceği yerdir.
                     URL '/dashboard/profile' olduğunda burada <ProfileSettings /> render olur.
                */}
                <Outlet />
            </main>
        </div>
    );
}

// Default component to show on /dashboard index
export function DashboardHome() {
    return (
        <div className={styles.dashboardHome}>
            <div className={styles.icon}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </div>
            <h3>Hoşgeldiniz!</h3>
            <p>
                Sol taraftaki menüyü kullanarak alt sayfalara geçiş yapabilirsiniz.
                Sayfa değişse bile soldaki menü (Layout) sabit kalacaktır.
            </p>
        </div>
    );
}
