import styles from '../nested.module.scss';

export function ProfileSettings() {
    return (
        <div className={styles.card}>
            <h3>Profil Ayarları</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                    <label>Ad Soyad</label>
                    <input
                        type="text"
                        defaultValue="Öğrenci Adı"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>E-posta</label>
                    <input
                        type="email"
                        defaultValue="ogrenci@patika.dev"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Biyografi</label>
                    <textarea
                        defaultValue="React öğreniyorum..."
                    />
                </div>
                <button className={styles.button}>
                    Kaydet
                </button>
            </form>
        </div>
    );
}
