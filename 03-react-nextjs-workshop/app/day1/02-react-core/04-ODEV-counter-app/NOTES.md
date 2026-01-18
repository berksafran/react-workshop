# Counter App - Detaylı Notlar

⚠️ **Kod örnekleri için `components/CounterApp.tsx` dosyasına bakın.**

## Genel Bakış

Bu mini ödev, State, Props, ve Component Composition konularını bir arada kullanarak pratik yapmak için tasarlanmıştır.

## Öğrenilen Konular

### 1. State Management (Parent Component)

Parent component'te state tutulur:

- `count`: Mevcut sayaç değeri
- `history`: Tüm değişikliklerin geçmişi

```typescript
const [count, setCount] = useState(0);
const [history, setHistory] = useState<number[]>([0]);
```

⚠️ **Önemli:** State'i en yakın ortak parent'ta tut!

---

### 2. Props (Child Components)

Child component'ler props ile veri alır:

**CounterDisplay:**

- `count`: Gösterilecek sayı
- `title`: Başlık

**CounterControls:**

- `onIncrement`: Artır callback
- `onDecrement`: Azalt callback
- `onReset`: Sıfırla callback

⚠️ **Önemli:** Props read-only'dir, child değiştiremez!

---

### 3. Callback Functions

Child component'ler, parent'ın state'ini callback ile değiştirir:

```typescript
// Parent
const handleIncrement = () => {
  setCount(count + 1);
};

// Child'a gönder
<CounterControls onIncrement={handleIncrement} />

// Child kullanır
<button onClick={onIncrement}>Artır</button>
```

⚠️ **Önemli:** Child, parent'a "ne yapması gerektiğini" söyler, direkt değiştirmez!

---

### 4. Component Composition

Küçük, tekrar kullanılabilir component'lerden büyük uygulama:

```
CounterApp (Parent)
├── CounterDisplay (Child)
└── CounterControls (Child)
```

**Avantajlar:**

- Her component tek bir işe odaklanır
- Test etmek kolay
- Tekrar kullanılabilir
- Bakımı kolay

---

### 5. Immutability (Değişmezlik)

State'i güncellerken spread operator kullan:

```typescript
// ❌ Yanlış - Direkt değiştirme
history.push(newCount);

// ✅ Doğru - Yeni array oluştur
setHistory([...history, newCount]);
```

⚠️ **Önemli:** State'i asla direkt değiştirme! Yeni değer oluştur.

---

### 6. Array Metodları

**map:** Her elemanı dönüştür

```typescript
history.map((value, index) => (
  <div key={index}>{value}</div>
))
```

**Math.max/min:** En büyük/küçük değer

```typescript
Math.max(...history); // En yüksek
Math.min(...history); // En düşük
```

---

## Uygulama Özellikleri

### Temel Özellikler

- Sayaç artırma/azaltma
- Sıfırlama
- İşlem geçmişi

### İstatistikler

- Toplam işlem sayısı
- En yüksek değer
- En düşük değer

### Geçmiş

- Tüm değişiklikler
- Değişim yönü (↑↓=)

---

## Best Practices

### ✅ Bu Örnekte Kullanılan

1. **Single Responsibility** → Her component tek iş yapar
2. **Props Typing** → TypeScript ile tip güvenliği
3. **Immutability** → Spread operator ile state güncelleme
4. **Composition** → Küçük component'lerden büyük uygulama
5. **Callback Pattern** → Child'dan parent'a iletişim

### ❌ Yapılmaması Gerekenler

1. **State'i direkt değiştirme** → `count++` ❌
2. **Props'u değiştirme** → `props.count = 5` ❌
3. **Çok fazla state** → Gereksiz state oluşturma
4. **God component** → Tek component'te her şey

---

## Genişletme Fikirleri

### Kolay

- [ ] Adım sayısı ekle (1, 5, 10)
- [ ] Maksimum/minimum limit
- [ ] Renk değişimi (pozitif/negatif)

### Orta

- [ ] LocalStorage ile kaydetme
- [ ] Undo/Redo özelliği
- [ ] Animasyonlar

### Zor

- [ ] Çoklu sayaç
- [ ] Grafik gösterimi
- [ ] Zaman bazlı istatistikler

---

## Sık Sorulan Sorular

1. **Soru:** Neden state parent'ta?
   **Cevap:** Birden fazla child kullanıyor, ortak parent'ta olmalı.

2. **Soru:** Neden spread operator?
   **Cevap:** State'i immutable tutmak için. React değişikliği algılar.

3. **Soru:** Key prop neden gerekli?
   **Cevap:** React'in hangi elemanın değiştiğini anlaması için.

4. **Soru:** Callback yerine state'i direkt değiştiremez miyiz?
   **Cevap:** Hayır! Props read-only, child değiştiremez.

---

## Ek Kaynaklar

- [React - Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [React - Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
