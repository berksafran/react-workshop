# Ödev: Custom Hooks Oluşturma

## Amaç

Kendi custom hook'larını oluşturarak React'in reusable logic pattern'ini öğrenmek.

---

## Görevler

### 1. useToggle Hook ⭐

Boolean state toggle için bir custom hook oluştur.

**Gereksinimler:**

- `value` state'i (boolean)
- `toggle()` fonksiyonu (değeri tersine çevir)
- `setTrue()` fonksiyonu (true yap)
- `setFalse()` fonksiyonu (false yap)
- Opsiyonel: `initialValue` parametresi

**Kullanım:**

```typescript
function Modal() {
  const { value: isOpen, toggle, setTrue, setFalse } = useToggle();

  return (
    <>
      <button onClick={setTrue}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <h2>Modal Content</h2>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </>
  );
}
```

---

### 2. useCounter Hook ⭐

Sayaç işlemleri için bir custom hook oluştur.

**Gereksinimler:**

- `count` state'i
- `increment()` fonksiyonu
- `decrement()` fonksiyonu
- `reset()` fonksiyonu
- `setValue(value)` fonksiyonu
- Opsiyonel: `min` ve `max` limitleri
- Opsiyonel: `step` parametresi (kaçar kaçar artsın)

**Kullanım:**

```typescript
function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter(0, {
    min: 0,
    max: 10,
    step: 1
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} disabled={count >= 10}>+</button>
      <button onClick={decrement} disabled={count <= 0}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setValue(5)}>Set to 5</button>
    </div>
  );
}
```

## Gereksinimler

1. **TypeScript kullan** → Generic types ile tip güvenliği
2. **Hook kurallarına uy** → "use" ile başla, üst seviyede çağır
3. **Test et** → Her hook için bir demo component oluştur
4. **Kod kalitesi** → Temiz, okunabilir kod yaz

---

## Teslim

1. Her hook için ayrı dosya oluştur:
   - `hooks/useToggle.ts`
   - `hooks/useCounter.ts`
2. Demo component'ler oluştur:
   - `components/ToggleDemo.tsx`
   - `components/CounterDemo.tsx`
3. Ana sayfa oluştur:
   - `solution.tsx` (tüm hook'ları kullanan sayfa)

---

## Örnek Çözüm Yapısı

```
ODEV-custom-hooks/
├── hooks/
│   ├── useToggle.ts
│   └── useCounter.ts
├── components/
│   ├── ToggleDemo.tsx
│   └── CounterDemo.tsx
└── solution.tsx
```

---

## Değerlendirme Kriterleri

- ✅ Hook kurallarına uygunluk
- ✅ TypeScript kullanımı
- ✅ Reusability (tekrar kullanılabilirlik)
- ✅ API tasarımı (kullanım kolaylığı)
- ✅ Kod kalitesi ve okunabilirlik
- ✅ Demo component'ler çalışıyor mu?

---

## İpuçları

1. **useState** → Custom hook'ların temeli
2. **Return değer** → Object veya array (tutarlı ol)
3. **TypeScript** → Type safety için önemli
4. **Test et** → Her hook'u bir component'te kullan
5. **Basit tut** → Önce çalışır hale getir, sonra optimize et

Başarılar! 🚀
