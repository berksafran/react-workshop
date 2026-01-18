# Custom Hooks - Detaylı Notlar

⚠️ **Kod örnekleri için ilgili klasörlere bakın:**

- `01-useFetch/useFetch.ts`
- `02-useLocalStorage/useLocalStorage.ts`

## Genel Bakış

Custom hooks, tekrar kullanılabilir logic için kendi hook'larını oluşturmanı sağlar. React'in en güçlü özelliklerinden biri!

---

## Hook Kuralları

### 1. "use" ile Başla

```typescript
// ✅ Doğru
function useFetch() {}
function useLocalStorage() {}

// ❌ Yanlış
function fetchData() {} // Hook değil!
```

### 2. Sadece Üst Seviyede Çağır

```typescript
// ✅ Doğru
function MyComponent() {
  const data = useFetch('/api');
  return <div>{data}</div>;
}

// ❌ Yanlış
function MyComponent() {
  if (condition) {
    const data = useFetch('/api'); // Loop/condition içinde!
  }
}
```

### 3. Sadece React Fonksiyonlarında

```typescript
// ✅ Doğru - Component içinde
function MyComponent() {
  const data = useFetch("/api");
}

// ✅ Doğru - Hook içinde
function useMyHook() {
  const data = useFetch("/api");
}

// ❌ Yanlış - Normal fonksiyon
function fetchData() {
  const data = useFetch("/api"); // React fonksiyonu değil!
}
```

---

## useFetch - API Çağrıları

### Implementasyon

```typescript
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

### Kullanım

```typescript
function UserList() {
  const { data, loading, error } = useFetch<User[]>('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <ul>{data.map(user => <li>{user.name}</li>)}</ul>;
}
```

**Detay için:** `01-useFetch/` klasörü

---

## useLocalStorage - Persistence

### Implementasyon

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;

    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}
```

### Kullanım

```typescript
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current: {theme}
    </button>
  );
}
```

⚠️ **Önemli:** Lazy initialization kullan! Her render'da localStorage okuma.

**Detay için:** `02-useLocalStorage/` klasörü

---

## Custom Hook Patterns

### 1. Data Fetching Pattern

```typescript
function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(() => {
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [endpoint]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, refetch };
}
```

### 2. State Management Pattern

```typescript
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
```

### 3. Side Effect Pattern

```typescript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
```

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **"use" ile başla** → Hook kuralı
2. **Reusable logic** → Birden fazla yerde kullanılacak
3. **TypeScript** → Generic types kullan
4. **Cleanup** → useEffect cleanup unutma
5. **Return değer** → Tutarlı API (object veya array)

### ❌ Yapılmaması Gerekenler

1. **Her şeyi hook yapma** → Gereksiz abstraction
2. **Hook kurallarını çiğneme** → Loop/condition içinde çağırma
3. **Side effects unutma** → Cleanup yap
4. **Çok complex** → Basit tut

---

## Yaygın Custom Hooks

### useDebounce

```typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

### useOnClickOutside

```typescript
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}
```

### usePrevious

```typescript
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```

---

## Sık Sorulan Sorular

1. **Soru:** Her logic için custom hook yapmalı mıyım?
   **Cevap:** Hayır, sadece reusable logic için.

2. **Soru:** Custom hook'ta başka hook kullanabilir miyim?
   **Cevap:** Evet! Hook kurallarına uygun olduğu sürece.

3. **Soru:** Custom hook component re-render eder mi?
   **Cevap:** Evet, içindeki state değişirse.

4. **Soru:** Custom hook'u test edebilir miyim?
   **Cevap:** Evet, @testing-library/react-hooks ile.

---

## Ödev

useToggle ve useCounter hook'larını oluştur!

**Detay için:** `ODEV-custom-hooks/ODEV-README.md`

---

## Ek Kaynaklar

- [React - Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [usehooks.com](https://usehooks.com/) - Custom hooks koleksiyonu
- [react-use](https://github.com/streamich/react-use) - Custom hooks library
