# Lifecycle - Detaylı Notlar

⚠️ **Kod örnekleri için `components/LifecycleDemo.tsx` dosyasına bakın.**

## Genel Bakış

Component lifecycle (yaşam döngüsü), bir component'in doğumundan ölümüne kadar geçirdiği aşamalardır.

## Lifecycle Aşamaları

### 1. Mount (Doğum)

Component ilk kez DOM'a eklenir.

**Ne zaman olur?**

- Component ilk kez render edildiğinde
- Parent component render olup child'ı eklediğinde

**useEffect ile:**

```typescript
useEffect(() => {
  console.log("Component mount oldu!");
}, []); // Boş dependency array
```

⚠️ **Önemli:** Boş array `[]` = sadece mount'ta çalışır!

---

### 2. Update (Güncelleme)

State veya props değiştiğinde component güncellenir.

**Ne zaman olur?**

- State değiştiğinde
- Props değiştiğinde
- Parent re-render olduğunda

**useEffect ile:**

```typescript
useEffect(() => {
  console.log("Count değişti!");
}, [count]); // count dependency
```

⚠️ **Önemli:** Dependency array'e eklediğin değer değişince çalışır!

---

### 3. Unmount

Component DOM'dan kaldırılır.

**Ne zaman olur?**

- Conditional rendering ile component gizlendiğinde
- Parent component unmount olduğunda
- Route değiştiğinde

**useEffect cleanup ile:**

```typescript
useEffect(() => {
  // Mount
  return () => {
    console.log("Component unmount oldu!");
  };
}, []);
```

⚠️ **Önemli:** Cleanup function her zaman çalıştır! Memory leak önler.

**Detay için:** `components/LifecycleDemo.tsx` dosyasına bakın.

---

## useEffect Dependency Array

### Boş Array `[]`

Sadece mount ve unmount'ta çalışır.

```typescript
useEffect(() => {
  // Mount
  return () => {
    // Unmount
  };
}, []); // Sadece bir kez
```

### Dependency ile `[dep]`

Dependency değişince çalışır.

```typescript
useEffect(() => {
  // count her değiştiğinde
}, [count]);
```

### Array yok

Her render'da çalışır (genellikle istemezsin!).

```typescript
useEffect(() => {
  // Her render'da çalışır - SAKINCALI!
}); // Dependency array yok
```

⚠️ **Önemli:** Dependency array'i doğru kullan! Infinite loop'a düşebilirsin.

---

## Cleanup Function

### Neden Gerekli?

- Timer'ları temizlemek için
- Event listener'ları kaldırmak için
- Subscription'ları iptal etmek için
- Memory leak'i önlemek için

### Kullanım

```typescript
useEffect(() => {
  // Setup
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Cleanup
  return () => {
    clearInterval(timer);
  };
}, []);
```

⚠️ **Önemli:** Timer, interval, subscription varsa mutlaka cleanup yap!

---

## React'ta Lifecycle (Class vs Hooks)

### Class Component (Eski)

```typescript
componentDidMount() { }
componentDidUpdate() { }
componentWillUnmount() { }
```

### Hooks (Modern)

```typescript
useEffect(() => {
  // Mount + Update
  return () => {
    // Unmount
  };
}, [deps]);
```

⚠️ **Önemli:** Artık class component kullanmıyoruz! Hooks kullan.

---

## Yaygın Kullanım Senaryoları

### API Çağrısı

```typescript
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch("/api/users");
    setUsers(data);
  };
  fetchData();
}, []); // Mount'ta bir kez
```

### Event Listener

```typescript
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

### Timer

```typescript
useEffect(() => {
  const timer = setTimeout(() => {
    setShow(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);
```

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Cleanup yap** → Timer, listener, subscription
2. **Dependency array doğru** → Kullandığın değerleri ekle
3. **Async function** → useEffect içinde tanımla
4. **AbortController** → Fetch isteklerini iptal et

### ❌ Yapılmaması Gerekenler

1. **useEffect async yapma** → `useEffect(async () => {})` ❌
2. **Dependency unutma** → Infinite loop riski
3. **Cleanup unutma** → Memory leak riski
4. **Her render'da çalıştırma** → Performans sorunu

---

## Sık Sorulan Sorular

1. **Soru:** useEffect ne zaman çalışır?
   **Cevap:** Dependency array'e göre: boş [] = mount, [dep] = dep değişince, yok = her render.

2. **Soru:** Cleanup function ne zaman çalışır?
   **Cevap:** Component unmount olduğunda veya effect yeniden çalışmadan önce.

3. **Soru:** useEffect async olabilir mi?
   **Cevap:** Hayır! İçinde async function tanımla.

4. **Soru:** Dependency array'e ne eklemeliyim?
   **Cevap:** useEffect içinde kullandığın tüm state ve props'ları.

---

## Ek Kaynaklar

- [React - useEffect](https://react.dev/reference/react/useEffect)
- [React - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
