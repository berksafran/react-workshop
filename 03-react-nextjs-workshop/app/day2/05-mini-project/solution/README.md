# Mini Proje Çözümü: Kullanıcı Rehberi

Bu klasör, **React & Next.js Workshop** için hazırlanan **Mini Proje: Kullanıcı Rehberi** uygulamasının tam çözümünü içermektedir.

## 🎯 Proje Özeti

Bu mini proje, workshop boyunca öğrenilen aşağıdaki konuları tek bir uygulamada birleştirir:

- ✅ **Server Side Rendering (SSR)** - Kullanıcı listesi sayfası
- ✅ **Client Side Rendering (CSR)** - Kullanıcı detay sayfası
- ✅ **Promise.all ile Paralel Data Fetching** - Request waterfall'dan kaçınma
- ✅ **Context API** - Global favoriler yönetimi
- ✅ **SCSS Modules** - Modüler ve responsive tasarım
- ✅ **TypeScript** - Tip güvenli kod yapısı
- ✅ **Next.js 16 App Router** - Modern routing yapısı

## 📂 Proje Yapısı

```
solution/
├── components/              # Yeniden kullanılabilir bileşenler
│   ├── UserCard.tsx        # Kullanıcı kartı (liste görünümü için)
│   ├── UserCard.module.scss
│   ├── UserDetails.tsx     # Kullanıcı detay bilgileri
│   ├── UserDetails.module.scss
│   ├── UserPosts.tsx       # Kullanıcı gönderileri (Server Component)
│   ├── UserPosts.module.scss
│   ├── FavoriteButton.tsx  # Favori ekleme/çıkarma butonu
│   ├── FavoriteButton.module.scss
│   ├── Loading.tsx         # Yükleniyor bileşeni
│   └── Loading.module.scss
├── contexts/               # Global state yönetimi
│   └── FavoritesContext.tsx  # Favoriler için Context & Custom Hook
├── types/                  # TypeScript tip tanımlamaları
│   └── user.ts            # User, Address, Company, Post, Album tipleri
├── users/                  # Kullanıcı sayfaları
│   ├── page.tsx           # Kullanıcı listesi (SSR)
│   ├── page.module.scss
│   └── [id]/              # Dinamik route
│       ├── page.tsx       # Kullanıcı detayı (CSR)
│       └── page.module.scss
├── layout.tsx             # FavoritesProvider wrapper
├── page.tsx               # Redirect to /users
└── README.md              # Bu dokümantasyon
```

## 🚀 Özellikler

### 1. Server Side Rendering (SSR)

**Dosya:** `users/page.tsx`

- Kullanıcı listesi her istekte sunucuda çekilir
- `fetch` ile `cache: 'no-store'` kullanılarak SSR zorlanır
- Veriler HTML olarak tarayıcıya gelir
- Terminal konsolunda "🚀 Fetching users on SERVER..." mesajını görebilirsiniz

### 2. Client Side Rendering (CSR)

**Dosya:** `users/[id]/page.tsx`

- Kullanıcı detayları ve albümleri `useEffect` ile istemci tarafında çekilir
- **Promise.all** kullanarak paralel data fetching (request waterfall yok!)
- Loading state ve error handling implementasyonu
- `'use client'` direktifi ile client component olarak işaretlenmiş
- Tarayıcı konsolunda "🔵 Fetching user and albums on CLIENT with Promise.all..." mesajını görebilirsiniz

**Paralel Data Fetching:**

```typescript
// Ayrı fonksiyonlar ile daha okunaklı ve test edilebilir kod
const fetchUser = useCallback(async (id: string): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  if (!response.ok) throw new Error("Kullanıcı bulunamadı");
  return response.json();
}, []);

const fetchAlbums = useCallback(async (id: string): Promise<Album[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
  );
  if (!response.ok) throw new Error("Albümler yüklenemedi");
  return response.json();
}, []);

// Promise.all ile paralel çalıştırma
const [userData, albumsData] = await Promise.all([
  fetchUser(userId),
  fetchAlbums(userId),
]);
```

**Avantajları:**

- ✅ Her fonksiyon tek bir sorumluluğa sahip (Single Responsibility)
- ✅ useCallback ile optimize edilmiş
- ✅ Test edilmesi daha kolay
- ✅ Daha okunaklı ve bakımı kolay kod

Bu yaklaşım, isteklerin sırayla değil aynı anda başlamasını sağlar ve toplam yükleme süresini azaltır.

### 3. Context API ile Global State

**Dosya:** `contexts/FavoritesContext.tsx`

- Favori kullanıcıları global olarak yönetir
- Custom hook (`useFavorites`) ile kolay kullanım
- `addFavorite`, `removeFavorite`, `isFavorite` metodları
- Provider, `layout.tsx` içinde tüm uygulamayı sarar

### 4. SCSS Modules

Her bileşenin kendi `.module.scss` dosyası var:

- Scoped styling (stil çakışması yok)
- Responsive tasarım
- Hover efektleri ve animasyonlar
- Modern ve temiz görünüm

### 5. TypeScript

**Dosya:** `types/user.ts`

- JSONPlaceholder API'sine uygun tip tanımlamaları
- `User`, `Address`, `Company`, `Post`, `Album` interface'leri
- Tip güvenli kod yapısı

## 🔗 API Endpoints

Proje, [JSONPlaceholder](https://jsonplaceholder.typicode.com/) mock API'sini kullanır:

- **Kullanıcı Listesi:** `GET /users`
- **Kullanıcı Detayı:** `GET /users/{id}`
- **Kullanıcı Gönderileri:** `GET /users/{id}/posts`
- **Kullanıcı Albümleri:** `GET /albums?userId={id}`

## 💡 Öğrenme Noktaları

### SSR vs CSR

- **SSR:** SEO dostu, ilk yükleme hızlı, sunucu yükü fazla
- **CSR:** İnteraktif, dinamik veri güncellemeleri, SEO zayıf

### Context API

- Props drilling problemini çözer
- Global state için basit ve etkili
- Redux'a alternatif (küçük-orta projeler için)

### SCSS Modules

- CSS Modules ile stil izolasyonu
- SCSS'nin güçlü özellikleri (nesting, variables, mixins)
- Bakımı kolay ve ölçeklenebilir

### Next.js 16 App Router

- Server ve Client Components ayrımı
- File-based routing
- Dinamik route'lar (`[id]`)
- Layout sistemi

### Promise.all ile Paralel Data Fetching

- **Request Waterfall Problemi:** Bir isteğin bitmesini bekleyip diğerini başlatmak
- **Çözüm:** Promise.all ile tüm istekleri aynı anda başlatmak
- **Avantaj:** Toplam yükleme süresini önemli ölçüde azaltır
- **Kullanım:** User ve albums verilerini paralel olarak çekme

## 🎨 Tasarım Özellikleri

- Modern ve temiz arayüz
- Responsive grid layout
- Card-based design
- Hover animasyonları
- Loading states
- Error handling UI
- Gradient başlıklar
- Icon kullanımı

## 🔍 Nasıl Çalıştırılır?

1. Projeyi çalıştırın:

   ```bash
   npm run dev
   ```

2. Tarayıcıda şu URL'yi açın:

   ```
   http://localhost:3000/day2/05-mini-project/solution
   ```

3. "🚀 Uygulamayı Başlat" butonuna tıklayın

4. Kullanıcı listesini görüntüleyin (SSR)

5. Bir kullanıcının detaylarına gidin (CSR)

6. Favori butonunu kullanarak favorilere ekleyin/çıkarın

## 📝 Notlar

- **Terminal Konsolu:** SSR loglarını görmek için terminal konsoluna bakın
- **Tarayıcı Konsolu:** CSR loglarını görmek için tarayıcı konsoluna bakın
- **Network Tab:** API isteklerini görmek için tarayıcının Network sekmesini kullanın

## 🎓 Ödev Önerileri

Bu çözümü inceledikten sonra, aşağıdaki geliştirmeleri kendiniz yapmayı deneyin:

1. **Favoriler Sayfası:** Favori kullanıcıları listeleyen bir sayfa ekleyin
2. **Arama Özelliği:** Kullanıcı listesinde arama yapabilme
3. **Filtreleme:** Şehir veya şirkete göre filtreleme
4. **Pagination:** Kullanıcı listesinde sayfalama
5. **Local Storage:** Favorileri tarayıcıda saklama
6. **Dark Mode:** Karanlık tema desteği
7. **Skeleton Loading:** Daha iyi loading UX
8. **Error Boundary:** React Error Boundary implementasyonu

## 📚 İlgili Kaynaklar

- [Next.js Documentation](https://nextjs.org/docs)
- [React Context API](https://react.dev/reference/react/useContext)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

**Not:** Bu çözüm, workshop'ta öğrenilen tüm konuları pratikte görmek için hazırlanmıştır. Kodu inceleyerek ve üzerinde değişiklikler yaparak daha fazla öğrenebilirsiniz!
