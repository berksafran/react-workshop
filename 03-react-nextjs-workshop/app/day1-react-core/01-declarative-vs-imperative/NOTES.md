# Declarative vs Imperative - Detaylı Notlar

⚠️ **Kod örnekleri için `components/Counters.tsx` dosyasına bakın.**

## Genel Bakış

React'in temel felsefesi declarative (bildirimsel) programlamadır. Imperative (emir kipi) yaklaşımla farkını anlamak React'i öğrenmek için kritiktir.

## Imperative (Nasıl Yapılacak)

### Tanım

DOM'u adım adım nasıl değiştireceğimizi söyleriz.

### Özellikler

- "Nasıl yapılacağını" belirtiriz
- DOM'u direkt manipüle ederiz
- Her adımı manuel yazarız

### Sorunlar

- Çok fazla kod
- Hata yapmak kolay
- Bakımı zor
- Test etmek zor

**Detay için:** `components/Counters.tsx` → `ImperativeCounter` component'ine bakın.

---

## Declarative (Ne Olması Gerektiği)

### Tanım

UI'ın ne olması gerektiğini söyleriz, React nasıl yapılacağını halleder.

### Özellikler

- "Ne olması gerektiğini" belirtiriz
- State değişir, React UI'ı günceller
- Daha az kod
- Daha az hata

### Avantajlar

- Okunması kolay
- Bakımı kolay
- Test etmek kolay
- Performanslı (Virtual DOM)

**Detay için:** `components/Counters.tsx` → `DeclarativeCounter` component'ine bakın.

---

## Virtual DOM

### Nedir?

React'in hafızada tuttuğu DOM'un kopyası.

### Nasıl Çalışır?

1. State değişir
2. React yeni Virtual DOM oluşturur
3. Eski ve yeni Virtual DOM'u karşılaştırır (diffing)
4. Sadece değişen kısımları gerçek DOM'a uygular (reconciliation)

### Neden Performanslı?

- Gerçek DOM manipülasyonu pahalı
- Virtual DOM hafızada, çok hızlı
- Batch update yapar
- Minimum DOM değişikliği

⚠️ **Önemli:** Virtual DOM sayesinde declarative kod yazıp performans alırız!

---

## React'ta Declarative Yaklaşım

### State Değişir, UI Güncellenir

```typescript
const [count, setCount] = useState(0);

// State değişir
setCount(count + 1);

// React otomatik olarak UI'ı günceller
// Manuel DOM manipülasyonu yok!
```

### Conditional Rendering

```typescript
{isVisible && <Component />}
{isLoading ? <Spinner /> : <Content />}
```

### List Rendering

```typescript
{items.map(item => <Item key={item.id} {...item} />)}
```

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Declarative düşün** → State değiştir, React halleder
2. **State kullan** → DOM'u direkt değiştirme
3. **Key prop kullan** → List rendering'de
4. **Conditional rendering** → if/else yerine ternary veya &&

### ❌ Yapılmaması Gerekenler

1. **DOM'u direkt değiştirme** → document.getElementById kullanma
2. **Imperative kod yazma** → React'in işini sen yapma
3. **Key prop'u unutma** → List rendering'de
4. **innerHTML kullanma** → XSS riski

---

## Sık Sorulan Sorular

1. **Soru:** Neden declarative daha iyi?
   **Cevap:** Daha az kod, daha az hata, daha kolay bakım.

2. **Soru:** Virtual DOM gerçekten hızlı mı?
   **Cevap:** Evet, gerçek DOM manipülasyonundan çok daha hızlı.

3. **Soru:** Hiç imperative kod yazmayacak mıyız?
   **Cevap:** Çok nadir durumlarda ref kullanarak yapabiliriz (örn: focus, scroll).

4. **Soru:** React nasıl neyin değiştiğini biliyor?
   **Cevap:** Virtual DOM diffing algoritması ile eski ve yeni DOM'u karşılaştırır.

---

## Ek Kaynaklar

- [React - Thinking in React](https://react.dev/learn/thinking-in-react)
- [React - Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)
