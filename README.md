# React & Next.js Workshop 🚀

2 günlük pratik odaklı React ve Next.js eğitim materyalleri. Bu workshop, modern web geliştirme için gerekli temel ve ileri seviye konuları kapsamaktadır.

## 📋 İçindekiler

- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Workshop İçeriği](#workshop-içeriği)
  - [Gün 1 - React Fundamentals](#gün-1---react-fundamentals)
  - [Gün 2 - Routing & State Management](#gün-2---routing--state-management)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Teknolojiler](#teknolojiler)

## 🔧 Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki araçların sisteminizde yüklü olması gerekmektedir:

- **Node.js** 18.0.0 veya üzeri
- **npm** 9.0.0 veya üzeri

### Gereksinimler Kontrolü

Tüm gereksinimlerin yüklü olup olmadığını kontrol etmek için:

```bash
make check
```

## 🚀 Kurulum

1. **Bağımlılıkları yükleyin:**

```bash
npm install
```

2. **Development sunucusunu başlatın:**

```bash
npm run dev
```

3. **Tarayıcınızda açın:**

```
http://localhost:3000
```

## 📚 Workshop İçeriği

### Gün 1 - React Fundamentals

#### 1. TypeScript + React

- Simple Props
- Props with Children
- **Ödev:** Component Types

#### 2. React Core Concepts

- Declarative vs Imperative Programming
- State & Props
- Component Lifecycle
- **Ödev:** Counter App

#### 3. Hooks Deep Dive

- `useState` & `useEffect`
- `useReducer` (Redux alternatifi)
- Custom Hooks (`useFetch`, `useLocalStorage`)
- Memoization (`useCallback`, `useMemo`, `React.memo`)
- React Compiler (Next.js 16 özelliği)

### Gün 2 - Routing & State Management

#### 1. React Router

- Basic Routing
- Nested Routes
- Dynamic Routes
- Profile Page (Nested + Dynamic)

#### 2. Next.js Router

- Next.js App Router Basics
- React Router vs Next.js Karşılaştırması
- API Routes
- Middleware (Proxy)

#### 3. State Management

- Context API
- Context + useReducer
- **Örnek Proje:** To-Do App

#### 4. Rendering Patterns

- SSR (Server Side Rendering)
- CSR (Client Side Rendering)
- SSG (Static Site Generation)
- ISR (Incremental Static Regeneration)

#### 5. Mini Project

- User Directory
- SSR ile kullanıcı listesi
- CSR ile detay sayfası
- Context API ile favoriler yönetimi

#### 6. 🎨 BONUS: SCSS

- SCSS Basics (Variables, Nesting, Mixins)
- SCSS Deep Dive (Functions, Loops, Maps, Extends)

#### 7. 🎨 BONUS: Next.js Versionları

- Next.js 15 vs 16 Karşılaştırması

## 💻 Kullanım

### Development Sunucusu

```bash
npm run dev
```

Sunucu `http://localhost:3000` adresinde çalışacaktır.

### Production Build

```bash
npm run build
npm start
```

### Temizlik

Build dosyalarını ve node_modules'ü temizlemek için:

```bash
make clean
```

## 🛠 Teknolojiler

Bu workshop aşağıdaki teknolojileri kullanmaktadır:

- **[Next.js 16](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering

## 📖 Öğrenme Yolu

1. **Başlangıç:** Ana sayfadan (`/`) başlayın
2. **Sıralı İlerleme:** Gün 1'den başlayarak sırayla ilerleyin
3. **Pratik Yapın:** Her konunun sonundaki ödevleri mutlaka yapın
4. **Notları İnceleyin:** Her klasördeki `NOTES.md` dosyalarını okuyun
5. **Kod İnceleyin:** Örnekleri inceleyip kendiniz de yazın

## 🎯 Hedefler

Bu workshop sonunda:

- ✅ React'in temel ve ileri seviye özelliklerini öğreneceksiniz
- ✅ TypeScript ile tip güvenli React uygulamaları yazabileceksiniz
- ✅ State management konusunda uzmanlaşacaksınız
- ✅ Next.js ile modern web uygulamaları geliştirebileceksiniz
- ✅ Rendering pattern'lerini anlayacak ve uygulayabileceksiniz
- ✅ SCSS ile profesyonel stiller yazabileceksiniz

## 📝 Notlar

- Her konu için ayrı `NOTES.md` dosyası bulunmaktadır
- Örnekler pratik odaklı ve interaktiftir
- Ödevler konuları pekiştirmek için tasarlanmıştır
- Mini proje tüm öğrenilen konuları birleştirir

## 🤝 Katkıda Bulunma

Bu eğitim materyalleri sürekli geliştirilmektedir. Önerileriniz için issue açabilirsiniz.

## 📄 Lisans

Bu proje eğitim amaçlıdır ve özgürce kullanılabilir.

---

**Happy Coding! 🚀**
