import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styles from '../profile.module.scss';

// Mock user data
const users = [
    { id: 1, name: 'Ahmet Yılmaz', username: '@ahmetyilmaz', avatar: '👨‍💻' },
    { id: 2, name: 'Ayşe Demir', username: '@aysedemir', avatar: '👩‍🎨' },
    { id: 3, name: 'Mehmet Kaya', username: '@mehmetkaya', avatar: '👨‍🔬' },
];

export function ProfileLayout() {
    const { userId } = useParams();
    const location = useLocation();

    // Find user by ID
    const user = users.find(u => u.id === Number(userId));

    if (!user) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Kullanıcı Bulunamadı</h2>
                <p>ID: {userId}</p>
            </div>
        );
    }

    // Helper to check if tab is active
    const isActive = (path: string) => {
        const fullPath = `/users/${userId}${path}`;
        return location.pathname === fullPath;
    };

    return (
        <div className={styles.container}>
            {/* Profile Header */}
            <div className={styles.profileHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.avatar}>{user.avatar}</div>
                    <div className={styles.userInfo}>
                        <h1>{user.name}</h1>
                        <p>{user.username}</p>
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <nav className={styles.tabs}>
                <Link
                    to={`/users/${userId}`}
                    className={isActive('') ? styles.active : ''}
                >
                    Genel Bakış
                </Link>
                <Link
                    to={`/users/${userId}/posts`}
                    className={isActive('/posts') ? styles.active : ''}
                >
                    Gönderiler
                </Link>
                <Link
                    to={`/users/${userId}/settings`}
                    className={isActive('/settings') ? styles.active : ''}
                >
                    Ayarlar
                </Link>
            </nav>

            {/* Tab Content (Outlet) */}
            <div className={styles.tabContent}>
                <Outlet />
            </div>
        </div>
    );
}

export { users };
