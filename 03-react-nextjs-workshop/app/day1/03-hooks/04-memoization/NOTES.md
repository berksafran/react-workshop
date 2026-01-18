# Memoization - Detaylı Notlar

⚠️ **Kod örnekleri için `components/PerformanceDemo.tsx` dosyasına bakın.**

## Memoization Nedir?

Memoization, bir fonksiyonun veya hesaplamanın sonucunu **önbelleğe alma** tekniğidir. Aynı girdi için tekrar hesaplama yapmak yerine, önbellekteki sonucu döner.

### Temel Konsept

```typescript
// Memoization olmadan
function expensiveCalculation(n) {
  console.log("Hesaplanıyor...");
  return n * 2;
}

expensiveCalculation(5); // Hesaplanıyor... → 10
expensiveCalculation(5); // Hesaplanıyor... → 10 (Tekrar hesaplandı!)

// Memoization ile
const cache = {};
function memoizedCalculation(n) {
  if (cache[n]) {
    console.log("Cache'ten döndü");
    return cache[n];
  }
  console.log("Hesaplanıyor...");
  cache[n] = n * 2;
  return cache[n];
}

memoizedCalculation(5); // Hesaplanıyor... → 10
memoizedCalculation(5); // Cache'ten döndü → 10 (Önbellekten!)
```

### React'te Memoization

React'te 3 ana memoization aracı var:

1. **useCallback** → Fonksiyonları memoize eder
2. **useMemo** → Değerleri/hesaplamaları memoize eder
3. **React.memo** → Component'leri memoize eder

### Neden Gerekli?

React'te her state değişikliğinde component **yeniden render** edilir. Bu da:

- Fonksiyonların yeniden oluşturulması
- Hesaplamaların tekrar yapılması
- Child component'lerin gereksiz re-render'ı

demektir. Memoization bu maliyetleri azaltır!

### Örnek: Re-render Problemi

```typescript
function Parent() {
  const [count, setCount] = useState(0);

  // Her render'da YENİ fonksiyon oluşturulur
  const handleClick = () => {
    console.log('Clicked');
  };

  // Her render'da YENİ obje oluşturulur
  const config = { theme: 'dark' };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* handleClick ve config her zaman "farklı" olduğu için Child re-render olur */}
      <Child onClick={handleClick} config={config} />
    </>
  );
}

const Child = memo(({ onClick, config }) => {
  console.log('Child rendered'); // Her parent render'ında çalışır!
  return <button onClick={onClick}>Click</button>;
});
```

### Çözüm: Memoization

```typescript
function Parent() {
  const [count, setCount] = useState(0);

  // useCallback: Fonksiyon memoize edildi
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []); // Dependency boş → Hiç değişmez

  // useMemo: Obje memoize edildi
  const config = useMemo(() => ({ theme: 'dark' }), []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* handleClick ve config aynı kaldığı için Child re-render OLMAZ */}
      <Child onClick={handleClick} config={config} />
    </>
  );
}
```

### ⚠️ Dikkat: Aşırı Kullanma!

Memoization **bedava değil**! Her memoization:

- Ekstra bellek kullanır (cache)
- Dependency karşılaştırması yapar
- Kod karmaşıklığı artar

**Kural:** Sadece **gerçekten gerektiğinde** kullan. Profiler ile ölç!

---

## Genel Bakış

useCallback, useMemo ve React.memo performans optimizasyonu için kullanılır. **Ama dikkatli kullan!** Gereksiz kullanım performansı düşürür.

---

## useCallback

### Tanım

Fonksiyonları memoize eder. Dependency değişmedikçe aynı fonksiyon referansını döner.

### Kullanım

```typescript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b], // a veya b değişince yeni fonksiyon
);
```

### Ne Zaman Kullan?

✅ **Child component'e props olarak geçerken:**

```typescript
// Child React.memo ile optimize edilmiş
<ExpensiveChild onUpdate={handleUpdate} />

// useCallback kullan
const handleUpdate = useCallback(() => {
  setData(newData);
}, []);
```

✅ **useEffect dependency'sinde:**

```typescript
const fetchData = useCallback(() => {
  // API call
}, [userId]);

useEffect(() => {
  fetchData();
}, [fetchData]); // fetchData değişmez
```

❌ **Gereksiz kullanım:**

```typescript
// ❌ Child component yok, gereksiz
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

**Detay için:** `components/PerformanceDemo.tsx` → `CallbackDemo`

---

## useMemo

### Tanım

Pahalı hesaplamaları memoize eder. Dependency değişmedikçe önbelleğe alınmış değeri döner.

### Kullanım

```typescript
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b], // a veya b değişince yeniden hesapla
);
```

### Ne Zaman Kullan?

✅ **Pahalı hesaplamalar:**

```typescript
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]); // data değişince sırala
```

✅ **Referans eşitliği önemli:**

```typescript
const config = useMemo(() => ({
  url: '/api',
  headers: { ... }
}), []); // Her render'da yeni obje oluşturma

<Child config={config} /> // config referansı sabit
```

❌ **Gereksiz kullanım:**

```typescript
// ❌ Basit hesaplama, gereksiz
const doubled = useMemo(() => count * 2, [count]);

// ✅ Doğrudan yap
const doubled = count * 2;
```

**Detay için:** `components/PerformanceDemo.tsx` → `MemoDemo`

---

## React.memo

### Tanım

Component'i memoize eder. Props değişmedikçe re-render olmaz.

### Kullanım

```typescript
const MemoizedComponent = memo(({ data }: Props) => {
  return <div>{data}</div>;
});
```

### useCallback ile Birlikte

```typescript
// Parent
const handleClick = useCallback(() => {
  // ...
}, []);

<MemoizedChild onClick={handleClick} />

// Child
const MemoizedChild = memo(({ onClick }) => {
  // onClick değişmediği için re-render yok
});
```

⚠️ **Önemli:** React.memo shallow comparison yapar!

---

## useCallback vs useMemo

| Özellik      | useCallback                 | useMemo                    |
| ------------ | --------------------------- | -------------------------- |
| Memoize eder | Fonksiyon                   | Değer                      |
| Döner        | Fonksiyon referansı         | Hesaplanan değer           |
| Kullanım     | Child'a callback geçerken   | Pahalı hesaplama           |
| Örnek        | `useCallback(() => {}, [])` | `useMemo(() => value, [])` |

**Trick:**

```typescript
// Bu ikisi aynı!
useCallback(fn, deps);
useMemo(() => fn, deps);
```

---

## Yaygın Hatalar

### 1. Her Yerde Kullanmak

```typescript
// ❌ Gereksiz - Basit component
const MyComponent = memo(() => {
  const value = useMemo(() => 5, []);
  const handleClick = useCallback(() => {}, []);

  return <div onClick={handleClick}>{value}</div>;
});
```

**Sorun:** Memoization'ın kendisi maliyetli! Basit işlemler için kullanma.

---

### 2. Dependency Unutmak

```typescript
// ❌ userId kullanılıyor ama dependency'de yok
const fetchUser = useCallback(() => {
  fetch(`/api/users/${userId}`);
}, []); // userId değişince eski değer kullanılır!
```

**Çözüm:** `[userId]` ekle

---

### 3. Obje/Array Dependency

```typescript
// ❌ Her render'da yeni obje
const config = { url: "/api" };

useMemo(() => {
  // ...
}, [config]); // config her zaman farklı!
```

**Çözüm:** Objeyi useMemo ile oluştur veya primitive değerleri kullan.

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Profiler kullan** → Gerçekten gerekli mi?
2. **React.memo ile birlikte** → useCallback/useMemo tek başına yeterli değil
3. **Pahalı işlemler için** → Basit hesaplama yapma
4. **Dependency doğru** → ESLint'i dinle

### ❌ Yapılmaması Gerekenler

1. **Premature optimization** → İhtiyaç olmadan kullanma
2. **Her fonksiyon/değer** → Seçici ol
3. **Shallow comparison unutma** → React.memo dikkatli kullan
4. **Obje dependency** → Primitive kullan

---

## React Compiler (Next.js 16)

### Otomatik Memoization

Next.js 16'da React Compiler var! Otomatik olarak optimize eder:

```typescript
// Artık useCallback/useMemo'ya daha az ihtiyaç!
function MyComponent({ data }) {
  // Compiler otomatik optimize eder
  const sorted = data.sort();

  const handleClick = () => {
    // Compiler otomatik memoize eder
  };

  return <Child onClick={handleClick} data={sorted} />;
}
```

⚠️ **Önemli:** Yine de bazı durumlarda manuel memoization gerekebilir!

**Detay için:** `05-react-compiler/NOTES.md`

---

## Ne Zaman Kullanmalı?

### useCallback Kullan:

- ✅ Child component React.memo ile optimize edilmiş
- ✅ useEffect dependency'sinde fonksiyon var
- ✅ Custom hook'ta fonksiyon dönüyorsun

### useMemo Kullan:

- ✅ Pahalı hesaplama (loop, filter, sort)
- ✅ Referans eşitliği önemli (obje/array)
- ✅ Child component'e obje/array geçiyorsun

### Kullanma:

- ❌ Basit hesaplama (a + b)
- ❌ Child component yok
- ❌ Primitive değerler
- ❌ "Her ihtimale karşı"

---

## Sık Sorulan Sorular

1. **Soru:** Her yerde useCallback/useMemo kullanmalı mıyım?
   **Cevap:** Hayır! Sadece gerektiğinde. Profiler ile ölç.

2. **Soru:** React.memo olmadan useCallback işe yarar mı?
   **Cevap:** Hayır, child re-render olur yine.

3. **Soru:** useMemo vs useState?
   **Cevap:** useMemo hesaplama, useState state yönetimi.

4. **Soru:** React Compiler ile gerekli mi?
   **Cevap:** Daha az gerekli ama bazı durumlarda evet.

---

## Ek Kaynaklar

- [React - useCallback](https://react.dev/reference/react/useCallback)
- [React - useMemo](https://react.dev/reference/react/useMemo)
- [React - memo](https://react.dev/reference/react/memo)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
