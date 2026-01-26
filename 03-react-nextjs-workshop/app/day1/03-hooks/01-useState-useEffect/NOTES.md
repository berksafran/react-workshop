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

---

## useRef

### Tanım

useRef, iki ana kullanım alanı olan bir React hook'udur:

1. **DOM Referansları:** DOM elementlerine direkt erişim
2. **Değer Saklama:** Re-render tetiklemeyen değer saklama

### Temel Kullanım

```typescript
const ref = useRef(initialValue);
```

- `ref.current`: Mevcut değer
- `initialValue`: Başlangıç değeri
- **Önemli:** ref.current değişince component re-render olmaz!

---

### DOM Referansları

DOM elementlerine erişmek için en yaygın kullanım:

```typescript
const inputRef = useRef<HTMLInputElement>(null);

// JSX'te kullan
<input ref={inputRef} />

// DOM elementine erişim
inputRef.current?.focus();
inputRef.current?.scrollIntoView();
```

**Detay için:** `components/RefDemo.tsx` → `RefDomDemo`

#### Kullanım Alanları

1. **Input Focus:** Form validasyonunda hatalı alana focus
2. **Scroll Kontrolü:** Belirli bir elemente scroll
3. **Element Ölçümleri:** getBoundingClientRect() ile boyut/pozisyon
4. **Video/Audio Kontrolü:** play(), pause(), currentTime
5. **Canvas Manipülasyonu:** Canvas API'ye erişim
6. **Third-party Kütüphaneler:** D3.js, Chart.js gibi kütüphaneler

⚠️ **Önemli:** DOM ref'leri null olabilir, her zaman `?.` kullan!

---

### Değer Saklama (Re-render Tetiklemeden)

useState'ten farkı: ref değişince component re-render olmaz.

```typescript
const countRef = useRef(0);

// Değeri değiştir (re-render yok!)
countRef.current += 1;

// Oku
console.log(countRef.current);
```

**Detay için:** `components/RefDemo.tsx` → `RefValueDemo`

#### Kullanım Alanları

1. **Önceki Değer Saklama:**

```typescript
const prevCountRef = useRef<number>();

useEffect(() => {
  prevCountRef.current = count;
}, [count]);

// Şimdi prevCountRef.current önceki count değerini tutuyor
```

2. **Render Sayısını Takip Etme:**

```typescript
const renderCount = useRef(0);

useEffect(() => {
  renderCount.current += 1; // Re-render tetiklenmez!
});
```

3. **Timer/Interval ID Saklama:**

```typescript
const timerRef = useRef<NodeJS.Timeout>();

// Başlat
timerRef.current = setInterval(() => {...}, 1000);

// Durdur
clearInterval(timerRef.current);
```

4. **Debounce/Throttle:**

```typescript
const timeoutRef = useRef<NodeJS.Timeout>();

const handleSearch = (query: string) => {
  clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(() => {
    // API çağrısı
  }, 500);
};
```

⚠️ **Önemli:** UI'da gösterilecek değerler için useState kullan, useRef değil!

**Detay için:** `components/RefDemo.tsx` → `RefCommonMistakes`

---

### React 19 Değişiklikleri

#### 1. Ref as Prop (forwardRef Artık Gerekmiyor!)

```typescript
// ❌ React 18 ve öncesi: forwardRef gerekli
const MyInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

// ✅ React 19: ref direkt prop olarak
function MyInput({ ref }: { ref: React.RefObject<HTMLInputElement> }) {
  return <input ref={ref} />;
}

// Kullanım (her ikisi de aynı)
<MyInput ref={inputRef} />
```

**Avantajlar:**

- Daha az boilerplate kod
- Daha temiz ve okunabilir
- TypeScript tip çıkarımı daha iyi
- forwardRef wrapper'ı gereksiz

**Detay için:** `components/RefDemo.tsx` → `RefReact19Demo`

#### 2. Ref Cleanup Function

React 19'da ref'ler artık cleanup fonksiyonu döndürebilir:

```typescript
useEffect(() => {
  const element = ref.current;

  // Element ile işlemler
  element?.addEventListener("click", handler);

  // Cleanup
  return () => {
    element?.removeEventListener("click", handler);
  };
}, []);
```

⚠️ **Önemli:** Cleanup her zaman yap! Memory leak önler.

**Detay için:** `components/RefDemo.tsx` → `RefReact19Demo`

---

### useRef vs useState

| Özellik    | useRef                | useState          |
| ---------- | --------------------- | ----------------- |
| Re-render  | ❌ Tetiklemez         | ✅ Tetikler       |
| Kullanım   | Değer saklama, DOM    | UI değerleri      |
| Güncelleme | `ref.current = value` | `setState(value)` |
| Async      | Senkron               | Async (batch)     |
| Performans | Daha hızlı            | Daha yavaş        |

**Ne zaman hangisi?**

- **useState:** UI'da gösterilecek değerler
- **useRef (DOM):** DOM elementlerine erişim
- **useRef (Değer):** Re-render tetiklemeyen değerler

---

### Yaygın Hatalar

#### 1. Render Sırasında ref.current Değiştirme

```typescript
// ❌ YANLIŞ
function Component() {
  const ref = useRef(0);
  ref.current += 1; // Render sırasında!
  return <div>{ref.current}</div>;
}

// ✅ DOĞRU
function Component() {
  const ref = useRef(0);
  useEffect(() => {
    ref.current += 1; // useEffect içinde
  });
  return <div>{ref.current}</div>;
}
```

⚠️ **Neden?** Render fonksiyonu pure olmalı, side effect içermemeli.

#### 2. UI Değerleri için useRef Kullanma

```typescript
// ❌ YANLIŞ: UI için useRef
const countRef = useRef(0);
countRef.current += 1; // UI güncellenmiyor!

// ✅ DOĞRU: UI için useState
const [count, setCount] = useState(0);
setCount((c) => c + 1); // UI güncelleniyor!
```

#### 3. Null Check Yapmama

```typescript
// ❌ YANLIŞ
inputRef.current.focus(); // Hata: current null olabilir!

// ✅ DOĞRU
inputRef.current?.focus(); // Optional chaining
```

**Detay için:** `components/RefDemo.tsx` → `RefCommonMistakes`

---

### Callback Ref

useRef'e alternatif: Callback ref pattern

```typescript
// useRef
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} />

// Callback Ref
const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null);
<input ref={setInputElement} />

// Callback Ref: Mount/unmount takibi
<div ref={(el) => {
  if (el) {
    console.log('Element mounted:', el);
  } else {
    console.log('Element unmounted');
  }
}} />
```

**Ne zaman kullan?**

- Element mount/unmount takibi gerekiyorsa
- Ref değişikliklerinde side effect çalıştırmak istiyorsan
- Dinamik ref listesi (array) oluşturuyorsan

---

## Best Practices (Güncellenmiş)

### ✅ Yapılması Gerekenler

1. **Dependency array doğru kullan** → ESLint'i dinle
2. **Cleanup yap** → Timer, listener, subscription
3. **Functional updates** → Async işlemlerde
4. **Lazy initialization** → Pahalı hesaplamalar
5. **AbortController** → Fetch isteklerini iptal et
6. **useRef için null check** → Optional chaining kullan
7. **DOM ref'leri useEffect içinde** → Render sırasında değil

### ❌ Yapılmaması Gerekenler

1. **useEffect async yapma** → İçinde async function tanımla
2. **Dependency unutma** → Infinite loop riski
3. **Cleanup unutma** → Memory leak
4. **Her render'da çalıştırma** → Performans sorunu
5. **State'i direkt değiştirme** → Sadece setter kullan
6. **Render sırasında ref.current değiştirme** → useEffect kullan
7. **UI değerleri için useRef** → useState kullan

---

## Performans Avantajları

### useRef Kullanımının Avantajları

1. **Re-render Yok:** Değer değişince component re-render olmaz
2. **Senkron:** useState gibi batch edilmez, hemen güncellenir
3. **Memory Efficient:** Gereksiz re-render'ları önler
4. **DOM Erişimi:** Imperative DOM işlemleri için gerekli

### Örnek: Performans Karşılaştırması

```typescript
// ❌ Kötü: Her tıklamada re-render
const [clickCount, setClickCount] = useState(0);
const handleClick = () => setClickCount((c) => c + 1);

// ✅ İyi: Re-render yok (UI'da gösterilmiyorsa)
const clickCountRef = useRef(0);
const handleClick = () => (clickCountRef.current += 1);
```

---

## Sık Sorulan Sorular (Güncellenmiş)

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

6. **Soru:** useRef vs useState ne zaman?
   **Cevap:** UI değerleri → useState, DOM/değer saklama → useRef

7. **Soru:** React 19'da forwardRef gerekli mi?
   **Cevap:** Hayır! Artık ref direkt prop olarak kullanılabilir

8. **Soru:** Callback ref ne zaman kullanılır?
   **Cevap:** Mount/unmount takibi veya dinamik ref listesi için

---

## Ek Kaynaklar

- [React - useState](https://react.dev/reference/react/useState)
- [React - useEffect](https://react.dev/reference/react/useEffect)
- [React - useRef](https://react.dev/reference/react/useRef)
- [React - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React 19 - Ref as Prop](https://react.dev/blog/2024/04/25/react-19#ref-as-a-prop)
