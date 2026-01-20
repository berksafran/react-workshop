# Next.js Router Basics

## 📚 Giriş

Next.js App Router, dosya sistemi tabanlı (file-based) bir routing sistemidir. React Router'dan farklı olarak, route'ları manuel olarak tanımlamanıza gerek yoktur - dosya yapısı otomatik olarak route'ları oluşturur.

## 🎯 Temel Kavramlar

### 1. File-Based Routing

Klasör yapısı = Route yapısı

```
app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
└── blog/
    ├── page.tsx      → /blog
    └── [id]/
        └── page.tsx  → /blog/:id
```

### 2. page.tsx

Her route için `page.tsx` dosyası gereklidir.

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <h1>Hakkımızda</h1>;
}
```

### 3. layout.tsx

Birden fazla sayfa için ortak layout tanımlar.

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>{/* Navigation */}</nav>
        {children}
        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}
```

### 4. Link Component

Next.js'in kendi Link component'i.

```tsx
import Link from 'next/link';

<Link href="/">Ana Sayfa</Link>
<Link href="/about">Hakkımızda</Link>
```

### 5. useRouter Hook

Programatik navigasyon ve route bilgisi.

```tsx
"use client";
import { useRouter } from "next/navigation";

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return <button onClick={handleClick}>Dashboard'a Git</button>;
}
```

## 🔍 Özel Dosyalar

### loading.tsx

Route yüklenirken gösterilecek UI.

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Yükleniyor...</div>;
}
```

### error.tsx

Hata durumunda gösterilecek UI.

```tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Bir hata oluştu!</h2>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
}
```

### not-found.tsx

404 sayfası.

```tsx
// app/not-found.tsx
export default function NotFound() {
  return <h1>404 - Sayfa Bulunamadı</h1>;
}
```

## 🆚 React Router ile Karşılaştırma

| Özellik         | React Router               | Next.js Router           |
| --------------- | -------------------------- | ------------------------ |
| Route Tanımlama | Manuel (kod ile)           | Otomatik (dosya sistemi) |
| Setup           | Kütüphane kurulumu gerekli | Built-in                 |
| SSR             | Yok                        | Var                      |
| Code Splitting  | Manuel                     | Otomatik                 |
| Loading States  | Manuel                     | `loading.tsx`            |
| Error Handling  | Manuel                     | `error.tsx`              |
| Nested Layouts  | Outlet ile                 | `layout.tsx` ile         |

## 💡 Avantajlar

1. **Otomatik Code Splitting** - Her route otomatik olarak ayrı chunk'lara bölünür
2. **SSR Desteği** - Server-side rendering built-in
3. **Kolay Setup** - Route tanımlamaya gerek yok
4. **Optimized Prefetching** - Link'ler otomatik olarak prefetch edilir
5. **Streaming** - React 18 Suspense ile streaming SSR

## 🎯 App Router vs Pages Router

Next.js 13+ ile gelen App Router, eski Pages Router'ın yerine geçiyor:

### Pages Router (Eski)

```
pages/
├── index.tsx        → /
├── about.tsx        → /about
└── blog/
    └── [id].tsx     → /blog/:id
```

### App Router (Yeni)

```
app/
├── page.tsx         → /
├── about/
│   └── page.tsx     → /about
└── blog/
    └── [id]/
        └── page.tsx → /blog/:id
```

## 📝 Best Practices

1. **Server Components kullanın** (varsayılan)
2. **Client Components'i minimize edin** ("use client" sadece gerektiğinde)
3. **loading.tsx ve error.tsx ekleyin** (her route için)
4. **Metadata export edin** (SEO için)
5. **Route Groups kullanın** - `(group)` syntax ile organizasyon

## 🔗 Kaynaklar

- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
