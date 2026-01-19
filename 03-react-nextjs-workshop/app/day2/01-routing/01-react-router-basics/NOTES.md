# React Router Basics

## 📚 Giriş

React Router, React uygulamalarında client-side routing (SPA routing) sağlayan en popüler kütüphanedir. Sayfa yenilenmeden farklı görünümler arasında geçiş yapmayı sağlar.

## 🎯 Temel Kavramlar

### 1. BrowserRouter

Uygulamanın en üst seviyesinde kullanılır ve HTML5 history API'sini kullanır.

```tsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return <BrowserRouter>{/* Routes burada */}</BrowserRouter>;
}
```

### 2. Routes ve Route

Hangi URL'de hangi component'in gösterileceğini tanımlar.

```tsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>;
```

### 3. Link

Sayfalar arası navigasyon için kullanılır. HTML `<a>` tag'inin aksine sayfa yenilenmez.

```tsx
import { Link } from 'react-router-dom';

<Link to="/">Ana Sayfa</Link>
<Link to="/about">Hakkımızda</Link>
```

### 4. useNavigate

Programatik navigasyon için kullanılır.

```tsx
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login işlemi
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Giriş Yap</button>;
}
```

## 🔍 Önemli Noktalar

### SPA (Single Page Application) Mantığı

- Sayfa yenilenmez, sadece component'ler değişir
- Daha hızlı kullanıcı deneyimi
- Browser history API kullanılır

### Route Matching

- React Router v6'da routes otomatik olarak en iyi eşleşmeyi bulur
- Exact matching artık varsayılan

### 404 Sayfası

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## 💡 Best Practices

1. **Route'ları merkezi bir yerde tanımlayın**
2. **Lazy loading kullanın** (büyük uygulamalarda)
3. **Link component'ini kullanın** (`<a>` yerine)
4. **useNavigate'i dikkatli kullanın** (gereksiz yere programatik navigasyon yapmayın)

## 🆚 Next.js ile Karşılaştırma

| Özellik        | React Router | Next.js    |
| -------------- | ------------ | ---------- |
| Routing Type   | Client-side  | File-based |
| Setup          | Manuel       | Otomatik   |
| SSR            | Yok          | Var        |
| Code Splitting | Manuel       | Otomatik   |

## 📝 Örnek Uygulama

Sağdaki demo'da basit bir React Router uygulaması görebilirsiniz:

- Ana sayfa
- Hakkımızda sayfası
- İletişim sayfası
- 404 sayfası

Her sayfa arasında geçiş yaparken sayfanın yenilenmediğine dikkat edin!

## 🔗 Kaynaklar

- [React Router Docs](https://reactrouter.com/)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
