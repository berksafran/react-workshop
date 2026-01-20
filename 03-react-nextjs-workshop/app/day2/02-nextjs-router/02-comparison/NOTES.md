# React Router vs Next.js Router Karşılaştırması

## Temel Farklar

### 1. Routing Yaklaşımı

**React Router:**

- **Code-based routing** - JavaScript ile route tanımlama
- Manuel konfigürasyon gerektirir
- Daha fazla esneklik

**Next.js Router:**

- **File-based routing** - Klasör yapısı = Route yapısı
- Otomatik route oluşturma
- Convention over configuration

### 2. Route Tanımlama

**React Router:**

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users/:id" element={<UserDetail />} />
  </Routes>
</BrowserRouter>;
```

**Next.js Router:**

```
app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
└── users/
    └── [id]/
        └── page.tsx  → /users/:id
```

### 3. Data Fetching

**React Router:**

- Client-side data fetching (useEffect)
- React Router v6.4+ ile loader fonksiyonları
- Genellikle CSR (Client-Side Rendering)

**Next.js Router:**

- Server Components (varsayılan)
- Built-in SSR, SSG, ISR desteği
- Async/await direkt component içinde

### 4. Nested Routes

**React Router:**

```tsx
<Route path="dashboard" element={<DashboardLayout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// DashboardLayout içinde:
<Outlet />
```

**Next.js Router:**

```
app/dashboard/
├── layout.tsx        (Outlet yerine {children})
├── profile/
│   └── page.tsx
└── settings/
    └── page.tsx
```

### 5. Navigation

**React Router:**

```tsx
import { Link, useNavigate } from "react-router-dom";

<Link to="/about">About</Link>;

const navigate = useNavigate();
navigate("/dashboard");
```

**Next.js Router:**

```tsx
import Link from "next/link";
import { useRouter } from "next/navigation";

<Link href="/about">About</Link>;

const router = useRouter();
router.push("/dashboard");
```

## Karşılaştırma Tablosu

| Özellik            | React Router             | Next.js Router        |
| ------------------ | ------------------------ | --------------------- |
| **Routing Tipi**   | Code-based               | File-based            |
| **Setup**          | Manuel konfigürasyon     | Otomatik              |
| **SSR Desteği**    | Harici kütüphane gerekir | Built-in              |
| **Code Splitting** | Manuel (lazy)            | Otomatik              |
| **SEO**            | CSR için zayıf           | Güçlü (SSR/SSG)       |
| **Öğrenme Eğrisi** | Orta                     | Kolay (dosya sistemi) |
| **Esneklik**       | Yüksek                   | Orta                  |
| **API Routes**     | Yok                      | Built-in              |
| **Middleware**     | Yok                      | Built-in              |
| **Prefetching**    | Manuel                   | Otomatik              |

## Ne Zaman Hangisi?

### React Router Kullan:

- ✅ Pure SPA (Single Page Application) geliştiriyorsan
- ✅ SEO önemli değilse
- ✅ Mevcut React projesine routing ekleyeceksen
- ✅ Tam kontrol ve esneklik istiyorsan
- ✅ Backend ayrı bir servis olarak çalışıyorsa

### Next.js Router Kullan:

- ✅ SEO kritik öneme sahipse
- ✅ Server-side rendering gerekiyorsa
- ✅ Hızlı başlangıç istiyorsan
- ✅ Full-stack uygulama geliştiriyorsan (API routes ile)
- ✅ Otomatik optimizasyonlar istiyorsan
- ✅ Static site generation (SSG) kullanacaksan

## Hibrit Yaklaşım

Bazı projeler her ikisini de kullanabilir:

- Next.js ana framework olarak
- Belirli sayfalar için React Router (karmaşık client-side routing gerektiren durumlar)

Ancak genellikle **bir tanesini seçmek** daha mantıklıdır.
