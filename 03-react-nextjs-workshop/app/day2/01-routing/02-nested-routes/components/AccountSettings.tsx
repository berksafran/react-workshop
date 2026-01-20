import styles from '../nested.module.scss';

export function AccountSettings() {
    return (
        <div className={styles.card}>
            <h3>Hesap Ayarları</h3>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <h4>Şifre Değiştir</h4>
                    <div className={styles.inputGroup}>
                        <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                            <input
                                type="password"
                                placeholder="Mevcut Şifre"
                            />
                        </div>
                        <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                            <input
                                type="password"
                                placeholder="Yeni Şifre"
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.divider}`}>
                    <h4>Bildirim Tercihleri</h4>
                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" defaultChecked />
                            <span>E-posta bildirimlerini al</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" />
                            <span>SMS bildirimlerini al</span>
                        </label>
                    </div>
                </div>

                <div className={styles.divider}>
                    <button className={`${styles.button} ${styles.danger}`}>
                        Hesabımı Sil
                    </button>
                </div>
            </div>
        </div>
    );
}
