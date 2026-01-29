'use client';

import { User } from '../types/user';
import FavoriteButton from './FavoriteButton';
import styles from './UserDetails.module.scss';

interface UserDetailsProps {
    user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.name}>{user.name}</h1>
                    <p className={styles.username}>@{user.username}</p>
                </div>
                <FavoriteButton userId={user.id} />
            </div>

            <div className={styles.grid}>
                {/* Contact Information */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>İletişim Bilgileri</h2>
                    <div className={styles.infoGroup}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Email:</span>
                            <span className={styles.value}>{user.email}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Telefon:</span>
                            <span className={styles.value}>{user.phone}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Website:</span>
                            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                {user.website}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Address Information */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Adres Bilgileri</h2>
                    <div className={styles.infoGroup}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Sokak:</span>
                            <span className={styles.value}>{user.address.street}, {user.address.suite}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Şehir:</span>
                            <span className={styles.value}>{user.address.city}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Posta Kodu:</span>
                            <span className={styles.value}>{user.address.zipcode}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Koordinatlar:</span>
                            <span className={styles.value}>
                                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Company Information */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Şirket Bilgileri</h2>
                    <div className={styles.infoGroup}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Şirket Adı:</span>
                            <span className={styles.value}>{user.company.name}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Slogan:</span>
                            <span className={styles.value}>{user.company.catchPhrase}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>İş Alanı:</span>
                            <span className={styles.value}>{user.company.bs}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
