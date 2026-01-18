/**
 * ÖDEV ÇÖZÜMÜ: Farklı Tipte Props Alan React Bileşeni
 * 
 * Bu dosya örnek bir çözümdür. Önce kendin yapmayı dene!
 */

// User tipi
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

// UserCard props tipi (FC kullanmadan!)
type UserCardProps = {
    user: User;
    onEdit: (userId: number) => void;
    onDelete: (userId: number) => void;
    isLoading?: boolean;
    variant?: 'compact' | 'detailed';
};

// ✅ DOĞRU: Direkt props'a tip ver (FC kullanma!)
const UserCard = ({
    user,
    onEdit,
    onDelete,
    isLoading = false,
    variant = 'detailed'
}: UserCardProps) => {
    if (isLoading) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>

            {variant === 'detailed' && (
                <p>Yaş: {user.age}</p>
            )}

            <div style={{ marginTop: '1rem' }}>
                <button onClick={() => onEdit(user.id)}>Düzenle</button>
                <button onClick={() => onDelete(user.id)} style={{ marginLeft: '0.5rem' }}>
                    Sil
                </button>
            </div>
        </div>
    );
};

export default UserCard;

// Kullanım örneği:
// <UserCard
//   user={{ id: 1, name: 'Ahmet', email: 'ahmet@example.com', age: 25 }}
//   onEdit={(id) => console.log('Edit:', id)}
//   onDelete={(id) => console.log('Delete:', id)}
//   variant="compact"
// />
