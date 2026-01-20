import { useParams } from 'react-router-dom';
import { users } from './ProfileLayout';
import styles from '../profile.module.scss';

const mockPosts = [
    {
        id: 1,
        title: 'React Router ile SPA Geliştirme',
        content: 'Single Page Application geliştirirken React Router kullanmanın avantajları...',
        date: '2 gün önce'
    },
    {
        id: 2,
        title: 'TypeScript Best Practices',
        content: 'TypeScript kullanırken dikkat edilmesi gereken önemli noktalar ve en iyi pratikler...',
        date: '5 gün önce'
    },
    {
        id: 3,
        title: 'Next.js 16 Yenilikleri',
        content: 'Next.js 16 ile gelen yeni özellikler ve performans iyileştirmeleri hakkında...',
        date: '1 hafta önce'
    },
];

export function ProfilePosts() {
    const { userId } = useParams();
    const user = users.find(u => u.id === Number(userId));

    if (!user) return null;

    return (
        <div>
            <h2 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                {user.name} - Gönderiler
            </h2>
            <div className={styles.postsList}>
                {mockPosts.map(post => (
                    <div key={post.id} className={styles.postCard}>
                        <div className={styles.postHeader}>
                            <h4>{post.title}</h4>
                            <span className={styles.postDate}>{post.date}</span>
                        </div>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
