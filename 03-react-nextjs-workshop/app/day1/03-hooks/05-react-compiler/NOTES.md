# React Compiler (Next.js 16)

## Genel Bakış

Next.js 16 ile gelen React Compiler, otomatik olarak component'leri optimize eder. Artık useCallback ve useMemo'ya daha az ihtiyaç var!

---

## Ne Değişti?

### Öncesi (Next.js 15)

```typescript
function MyComponent({ data }) {
  // ❌ Her render'da yeni fonksiyon
  const handleClick = () => {
    console.log(data);
  };

  // ❌ Her render'da yeni array
  const sorted = data.sort();

  return <Child onClick={handleClick} data={sorted} />;
}
```

### Sonrası (Next.js 16 - React Compiler)

```typescript
function MyComponent({ data }) {
  // ✅ Compiler otomatik memoize eder!
  const handleClick = () => {
    console.log(data);
  };

  // ✅ Compiler otomatik memoize eder!
  const sorted = data.sort();

  return <Child onClick={handleClick} data={sorted} />;
}
```

---

## Nasıl Çalışır?

React Compiler build time'da kodu analiz eder ve otomatik olarak:

- Fonksiyonları memoize eder (useCallback gibi)
- Değerleri memoize eder (useMemo gibi)
- Component'leri optimize eder (React.memo gibi)

---

## Hala useCallback/useMemo Gerekli Mi?

### ✅ Hala Gerekli:

1. **Explicit control:** Tam kontrol istiyorsan
2. **Complex dependencies:** Compiler anlayamayacak kadar complex
3. **Performance critical:** Kritik performans gerektiren yerler

### ❌ Artık Gereksiz:

1. **Basit fonksiyonlar:** Compiler halleder
2. **Basit hesaplamalar:** Otomatik optimize edilir
3. **"Her ihtimale karşı":** Compiler zaten optimize ediyor

---

## Next.js 16 Özellikleri

### 1. React Compiler

- Otomatik memoization
- Daha az manuel optimizasyon
- Daha temiz kod

### 2. Turbopack (Stable)

- Webpack'ten 10x daha hızlı
- Development ve production'da kullanılabilir

### 3. Improved Caching

- Daha akıllı cache stratejileri
- Fetch cache improvements

## Best Practices

### ✅ Yapılması Gerekenler

1. **React Compiler'a güven:** Basit durumlar için manual optimization yapma
2. **Profiler kullan:** Gerçekten gerekli mi kontrol et
3. **Kademeli migration:** Yavaş yavaş geç

### ❌ Yapılmaması Gerekenler

1. **Tüm useCallback/useMemo'ları silme:** Bazıları hala gerekli
2. **Compiler'a körü körüne güvenme:** Profiler ile doğrula
3. **Premature optimization:** İhtiyaç olmadan optimize etme

---

## Örnek: Öncesi vs Sonrası

### Öncesi (Next.js 15)

```typescript
function UserList({ users }) {
  const [filter, setFilter] = useState('');

  // Manuel memoization
  const filteredUsers = useMemo(() => {
    return users.filter(u => u.name.includes(filter));
  }, [users, filter]);

  const handleClick = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <div>
      <input onChange={e => setFilter(e.target.value)} />
      {filteredUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
```

### Sonrası (Next.js 16)

```typescript
function UserList({ users }) {
  const [filter, setFilter] = useState('');

  // Compiler otomatik optimize eder!
  const filteredUsers = users.filter(u => u.name.includes(filter));

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <input onChange={e => setFilter(e.target.value)} />
      {filteredUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
```

---

## Sık Sorulan Sorular

1. **Soru:** Tüm useCallback/useMemo'ları silebilir miyim?
   **Cevap:** Hayır, bazıları hala gerekli. Profiler ile kontrol et.

2. **Soru:** React Compiler her zaman çalışır mı?
   **Cevap:** Evet, build time'da otomatik çalışır.

3. **Soru:** Performance farkı var mı?
   **Cevap:** Evet, daha temiz kod + otomatik optimizasyon.

4. **Soru:** Eski projelerde kullanabilir miyim?
   **Cevap:** Evet, Next.js 16'ya güncelle ve config'i ayarla.

---

## Ek Kaynaklar

- [Next.js 16 Release Notes](https://nextjs.org/blog/next-16)
- [React Compiler Documentation](https://react.dev/learn/react-compiler)
- [Turbopack](https://turbo.build/pack)
