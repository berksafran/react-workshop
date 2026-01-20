import { useParams } from 'react-router-dom';
import { users } from './ProfileLayout';
import styles from '../profile.module.scss';

export function ProfileSettings() {
    const { userId } = useParams();
    const user = users.find(u => u.id === Number(userId));

    if (!user) return null;

    return (
        <div>
            <h2 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                Profil Ayarları
            </h2>
            <form className={styles.settingsForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                    <label>Ad Soyad</label>
                    <input type="text" defaultValue={user.name} />
                </div>

                <div className={styles.formGroup}>
                    <label>Kullanıcı Adı</label>
                    <input type="text" defaultValue={user.username} />
                </div>

                <div className={styles.formGroup}>
                    <label>E-posta</label>
                    <input type="email" defaultValue={`${user.username.slice(1)}@example.com`} />
                </div>

                <div className={styles.formGroup}>
                    <label>Biyografi</label>
                    <textarea defaultValue="React ve TypeScript ile web uygulamaları geliştiriyorum." />
                </div>

                <button type="submit" className={styles.saveButton}>
                    Değişiklikleri Kaydet
                </button>
            </form>
        </div>
    );
}
