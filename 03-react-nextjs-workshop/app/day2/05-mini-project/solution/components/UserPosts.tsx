import { Post } from '../types/user';
import styles from './UserPosts.module.scss';

interface UserPostsProps {
    userId: number;
}

// Server Component - fetches data on the server
export default async function UserPosts({ userId }: UserPostsProps) {
    // Fetch posts for this user
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
        { cache: 'no-store' }
    );

    if (!response.ok) {
        return <div className={styles.error}>Gönderiler yüklenirken bir hata oluştu.</div>;
    }

    const posts: Post[] = await response.json();

    if (posts.length === 0) {
        return <div className={styles.empty}>Bu kullanıcının henüz gönderisi yok.</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Kullanıcının Gönderileri ({posts.length})</h2>
            <div className={styles.postsGrid}>
                {posts.map((post) => (
                    <article key={post.id} className={styles.postCard}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postBody}>{post.body}</p>
                        <div className={styles.postFooter}>
                            <span className={styles.postId}>Gönderi #{post.id}</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
