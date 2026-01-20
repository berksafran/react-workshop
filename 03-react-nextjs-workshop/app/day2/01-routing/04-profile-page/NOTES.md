# Nested Routes + Dynamic Routes Birlikte Kullanımı

Bu örnek, React Router'ın iki güçlü özelliğini bir arada gösterir:

1. **Dynamic Routes** (`:userId` parametresi)
2. **Nested Routes** (Tab yapısı için `Outlet`)

## Route Yapısı

```
/users/:userId                    → ProfileLayout (Header + Tabs + Outlet)
  ├── /users/:userId              → ProfileOverview (index route)
  ├── /users/:userId/posts        → ProfilePosts
  └── /users/:userId/settings     → ProfileSettings
```

## Nasıl Çalışır?

### 1. Parent Route (ProfileLayout)

Parent route hem **dynamic** hem de **nested** bir yapıdır:

- `:userId` parametresi ile hangi kullanıcının profilini göstereceğini belirler
- `<Outlet />` ile tab içeriklerinin nerede render edileceğini belirtir

```tsx
<Route path="/users/:userId" element={<ProfileLayout />}>
  <Route index element={<ProfileOverview />} />
  <Route path="posts" element={<ProfilePosts />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>
```

### 2. useParams Her Yerde Kullanılabilir

Hem parent (`ProfileLayout`) hem de child component'ler (`ProfileOverview`, `ProfilePosts`, vb.) `useParams` ile aynı `userId` parametresine erişebilir:

```tsx
function ProfileLayout() {
  const { userId } = useParams(); // "1", "2", vb.
  // Header'da kullanıcı bilgilerini göster
}

function ProfilePosts() {
  const { userId } = useParams(); // Aynı userId'ye erişim
  // Bu kullanıcının postlarını göster
}
```

### 3. URL Değişimleri

- **Kullanıcı değişimi**: `/users/1` → `/users/2` (Tüm sayfa yeniden render)
- **Tab değişimi**: `/users/1` → `/users/1/posts` (Sadece Outlet içeriği değişir, Header sabit kalır)

## Index Route

`index` prop'u, parent route'un tam path'ine (`/users/:userId`) gidildiğinde varsayılan olarak hangi component'in gösterileceğini belirtir.

## Gerçek Dünya Kullanımı

Bu pattern çok yaygındır:

- GitHub: `/username` → `/username/repositories` → `/username/projects`
- Twitter: `/username` → `/username/tweets` → `/username/likes`
- LinkedIn: `/in/username` → `/in/username/details/experience`
