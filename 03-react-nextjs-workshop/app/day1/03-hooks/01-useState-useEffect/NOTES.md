# useState & useEffect - Detaylı Notlar

⚠️ **Kod örnekleri için `components/StateDemo.tsx` ve `components/EffectDemo.tsx` dosyalarına bakın.**

## Genel Bakış

useState ve useEffect, React'in en temel ve en çok kullanılan hooks'larıdır. Her React developer'ın derinlemesine bilmesi gerekir.

---

## useState

### Tanım

Component'te state (durum) tutmak için kullanılır. State değiştiğinde component yeniden render edilir.

### Temel Kullanım

```typescript
const [state, setState] = useState(initialValue);
```

- `state`: Mevcut değer
- `setState`: State'i güncelleyen fonksiyon
- `initialValue`: Başlangıç değeri

**Detay için:** `components/StateDemo.tsx` → `StateBasicDemo`

---

### Functional Updates

State'i önceki değerine göre güncellemek için:

```typescript
// ❌ Yanlış - Birden fazla güncelleme çalışmaz
setCount(count + 1);
setCount(count + 1); // count hala aynı!

// ✅ Doğru - Functional update
setCount((prev) => prev + 1);
setCount((prev) => prev + 1); // Çalışır!
```

⚠️ **Önemli:** Async işlemlerde veya event handler'larda functional update kullan!

**Detay için:** `components/StateDemo.tsx` → `StateFunctionalDemo`

---

### Lazy Initialization

Pahalı hesaplamalar için:

```typescript
// ❌ Her render'da çalışır
const [data, setData] = useState(expensiveCalculation());

// ✅ Sadece ilk render'da çalışır
const [data, setData] = useState(() => expensiveCalculation());
```

⚠️ **Önemli:** Function olarak ver, çağırma!

**Detay için:** `components/StateDemo.tsx` → `StateLazyDemo`

---

## useEffect

### Tanım

Side effect'ler (yan etkiler) için kullanılır: API çağrıları, subscriptions, timers, DOM manipülasyonu.

### Temel Kullanım

```typescript
useEffect(() => {
  // Effect kodu

  return () => {
    // Cleanup kodu
  };
}, [dependencies]);
```

---

### Dependency Array

#### 1. Array yok → Her render'da çalışır

```typescript
useEffect(() => {
  console.log("Her render");
}); // Genellikle istemezsin!
```

#### 2. Boş array `[]` → Sadece mount/unmount

```typescript
useEffect(() => {
  console.log("Mount");
  return () => console.log("Unmount");
}, []); // Component lifecycle
```

#### 3. Dependency ile `[dep]` → dep değişince

```typescript
useEffect(() => {
  console.log("Count değişti:", count);
}, [count]); // count her değiştiğinde
```

⚠️ **Önemli:** Kullandığın tüm state ve props'ları dependency array'e ekle!

**Detay için:** `components/EffectDemo.tsx` → `EffectBasicDemo`

---

### Cleanup Function

Timer, subscription, event listener temizlemek için:

```typescript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Cleanup
  return () => {
    clearInterval(timer);
  };
}, []);
```

⚠️ **Önemli:** Cleanup her zaman yap! Memory leak önler.

**Ne zaman çalışır?**

- Component unmount olduğunda
- Effect yeniden çalışmadan önce (dependency değişince)

**Detay için:** `components/EffectDemo.tsx` → `EffectCleanupDemo`

---

### Data Fetching Pattern

```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); // Mount'ta bir kez
```

⚠️ **Önemli:** useEffect async olamaz! İçinde async function tanımla.

**Detay için:** `components/EffectDemo.tsx` → `EffectFetchDemo`

---

## Yaygın Hatalar

### 1. Infinite Loop

```typescript
// ❌ Infinite loop!
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // Her render'da çalışır!
}); // Dependency array yok!
```

**Çözüm:** Dependency array ekle veya condition kullan.

---

### 2. Missing Dependencies

```typescript
// ❌ ESLint uyarısı
useEffect(() => {
  console.log(count); // count kullanılıyor
}, []); // Ama dependency'de yok!
```

**Çözüm:** Kullandığın tüm değerleri ekle: `[count]`

---

### 3. useEffect async yapma

```typescript
// ❌ Çalışmaz!
useEffect(async () => {
  const data = await fetch("/api");
}, []);
```

**Çözüm:** İçinde async function tanımla.

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Dependency array doğru kullan** → ESLint'i dinle
2. **Cleanup yap** → Timer, listener, subscription
3. **Functional updates** → Async işlemlerde
4. **Lazy initialization** → Pahalı hesaplamalar
5. **AbortController** → Fetch isteklerini iptal et

### ❌ Yapılmaması Gerekenler

1. **useEffect async yapma** → İçinde async function tanımla
2. **Dependency unutma** → Infinite loop riski
3. **Cleanup unutma** → Memory leak
4. **Her render'da çalıştırma** → Performans sorunu
5. **State'i direkt değiştirme** → Sadece setter kullan

---

## Sık Sorulan Sorular

1. **Soru:** useState vs useReducer ne zaman?
   **Cevap:** Basit state → useState, complex state → useReducer

2. **Soru:** useEffect ne zaman çalışır?
   **Cevap:** Render'dan SONRA, DOM güncellenince

3. **Soru:** Cleanup ne zaman çalışır?
   **Cevap:** Unmount'ta veya effect yeniden çalışmadan önce

4. **Soru:** Neden functional update?
   **Cevap:** Closure problemi, async işlemlerde eski state kullanma riski

5. **Soru:** useEffect içinde async function?
   **Cevap:** useEffect async olamaz, içinde tanımla

---

## React 18+ Değişiklikleri

### Strict Mode Double Render

Development'ta useEffect 2 kez çalışır (mount/unmount/mount):

```typescript
useEffect(() => {
  console.log("Mount"); // 2 kez görürsün!
  return () => console.log("Unmount"); // 1 kez
}, []);
```

⚠️ **Önemli:** Bu normal! Production'da 1 kez çalışır.

---

## Ek Kaynaklar

- [React - useState](https://react.dev/reference/react/useState)
- [React - useEffect](https://react.dev/reference/react/useEffect)
- [React - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
