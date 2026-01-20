import { useParams } from 'react-router-dom';
import { users } from './ProfileLayout';
import styles from '../profile.module.scss';

export function ProfileOverview() {
    const { userId } = useParams();
    const user = users.find(u => u.id === Number(userId));

    if (!user) return null;

    return (
        <div>
            <div className={styles.overviewGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Takipçi</div>
                    <div className={styles.statValue}>1,234</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Takip</div>
                    <div className={styles.statValue}>567</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Gönderi</div>
                    <div className={styles.statValue}>89</div>
                </div>
            </div>

            <div className={styles.bioSection}>
                <h3>Hakkında</h3>
                <p>
                    Merhaba! Ben {user.name}. React ve TypeScript ile web uygulamaları geliştiriyorum.
                    Açık kaynak projelere katkıda bulunmayı ve yeni teknolojileri öğrenmeyi seviyorum.
                </p>
            </div>
        </div>
    );
}
