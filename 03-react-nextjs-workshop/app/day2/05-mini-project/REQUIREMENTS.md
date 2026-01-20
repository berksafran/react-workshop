# 🚀 Mini Proje: Kullanıcı Rehberi (User Directory)

Bu mini projenin amacı, şimdiye kadar öğrendiğimiz **Rendering Patterns (SSR, CSR)**, **Routing**, **State Management (Context API)** ve **Styling** konularını tek bir uygulamada birleştirmektir.

## 🎯 Proje Gereksinimleri

Aşağıdaki özellikleri içeren bir "Kullanıcı Rehberi" uygulaması geliştirmeniz beklenmektedir.

### 1. Kullanıcı Listesi Sayfası (`/users`)

- **Rendering Stratejisi:** Server Side Rendering (SSR)
- **Veri Kaynağı:** `https://jsonplaceholder.typicode.com/users` API'sini kullanın.
- **Beklenen Davranış:**
  - Sayfa açıldığında kullanıcı verileri sunucuda çekilmeli ve HTML olarak gelmelidir. `console.log` ile sunucu tarafında çalıştığını teyit edin.
  - Her kullanıcı için bir kart (card) oluşturun.
  - Kart üzerinde kullanıcının adı, e-postası ve "Detaylar" butonu olmalıdır.
  - "Detaylar" butonuna tıklandığında `/users/[id]` sayfasına gitmelidir.

### 2. Kullanıcı Detay Sayfası (`/users/[id]`)

- **Rendering Stratejisi:** Client Side Rendering (CSR) veya Hybrid
- **Veri Kaynağı:** `https://jsonplaceholder.typicode.com/users/[id]`
- **Beklenen Davranış:**
  - `useEffect` ve `fetch` kullanarak veriyi istemci tarafında çekin (CSR pratiği için).
  - Yüklenme sırasında bir "Loading..." yazısı veya spinner gösterin.
  - Kullanıcının tüm detaylarını (adres, şirket, telefon vb.) gösterin.
  - Sayfada bir **"Favorilere Ekle"** (veya "Favorilerden Çıkar") butonu olmalıdır.

### 3. Favoriler Yönetimi (Global State)

- **Teknoloji:** Context API + Custom Hook
- **Beklenen Davranış:**
  - `FavoritesContext` adında bir context oluşturun.
  - Favori kullanıcıların ID'lerini veya objelerini tutun.
  - Detay sayfasındaki buton bu context'i güncellemeli.
  - Navigasyon barında veya ayrı bir sayfada favori kullanıcı sayısını/listesini görebilelim.

### 4. Tasarım (Styling)

- **Teknoloji:** SCSS Modules (`.module.scss`)
- **Beklenen Davranış:**
  - Bileşenleriniz için modüler CSS dosyaları oluşturun.
  - Responsive (mobil uyumlu) bir ızgara (grid) yapısı kurun.
  - Global `styles/globals.scss` içindeki değişkenleri veya mixin'leri kullanmaya çalışın.

## 💡 İpuçları & Hatırlatmalar

- **API Çağrıları:**
  - SSR için bileşeninizi `async` fonksiyon yapıp doğrudan `fetch` çağırabilirsiniz (Next.js 13+ App Router).
  - CSR için bileşenin başına `'use client'` direktifini eklemeyi unutmayın.

- **Routing:**
  - Dinamik route oluşturmak için klasör ismini köşeli parantez içinde yazın: `[id]`.
  - Link vermek için Next.js'in `Link` bileşenini kullanın (`import Link from 'next/link'`).

- **Context:**
  - Context Provider'ı kullanacağınız yer (muhtemelen `layout.tsx` veya bir wrapper component) `'use client'` olmalıdır.

- **Typescript:**
  - Kullanıcı verisi için bir `interface User` tanımlayıp kullanmak işinizi kolaylaştıracaktır.

## 🔗 Kaynaklar

- [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)
- [Next.js App Router Documentation](https://nextjs.org/docs)

Başarılar! Çözüme geçmeden önce kendi başınıza denemeniz öğrenme süreciniz için önemlidir.
