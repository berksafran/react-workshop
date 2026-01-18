# State & Props - Detaylı Notlar

⚠️ **Kod örnekleri için `components/StatePropsDemo.tsx` dosyasına bakın.**

## Genel Bakış

State ve Props, React'in veri yönetiminin temelidir. Aralarındaki farkı anlamak kritiktir.

## State (Component'in Kendi Verisi)

### Tanım

Component'in kendi içinde tuttuğu, değişebilen veridir.

### Özellikler

- Component'e özel
- Değiştirilebilir (mutable)
- State değişince component re-render edilir
- useState hook ile tanımlanır

### Kullanım

```typescript
const [count, setCount] = useState(0);

// State'i değiştir
setCount(count + 1);
```

⚠️ **Önemli:** State'i direkt değiştirme! Sadece setter fonksiyonu kullan.

**Detay için:** `components/StatePropsDemo.tsx` → `StatePropsDemo` component'ine bakın.

---

## Props (Parent'tan Gelen Veri)

### Tanım

Parent component'ten child component'e aktarılan veridir.

### Özellikler

- Parent'tan gelir
- Read-only (immutable)
- Child değiştiremez
- Function olarak da gönderilebilir (callback)

### Kullanım

```typescript
// Parent
<Greeting name="Ahmet" age={25} />

// Child
function Greeting({ name, age }: GreetingProps) {
  return <h1>Merhaba, {name}!</h1>;
}
```

⚠️ **Önemli:** Props'u asla değiştirme! Read-only'dir.

**Detay için:** `components/StatePropsDemo.tsx` → `Greeting` component'ine bakın.

---

## State vs Props

| Özellik                | State             | Props                      |
| ---------------------- | ----------------- | -------------------------- |
| Sahibi                 | Component kendisi | Parent component           |
| Değiştirilebilir mi?   | Evet (setter ile) | Hayır (read-only)          |
| Re-render tetikler mi? | Evet              | Evet (parent değiştirirse) |
| Kullanım               | useState          | Function parametresi       |

---

## Veri Akışı (One-Way Data Flow)

### Tek Yönlü Akış

React'ta veri akışı tek yönlüdür: **Parent → Child**

```typescript
// Parent
const [data, setData] = useState('test');
<Child data={data} />

// Child
function Child({ data }: { data: string }) {
  // data'yı kullan ama değiştirme!
}
```

### Child'dan Parent'a İletişim

Callback fonksiyonları ile:

```typescript
// Parent
const handleUpdate = () => setData('yeni değer');
<Child onUpdate={handleUpdate} />

// Child
function Child({ onUpdate }: { onUpdate: () => void }) {
  return <button onClick={onUpdate}>Güncelle</button>;
}
```

⚠️ **Önemli:** Child, parent'ın state'ini direkt değiştiremez. Sadece callback ile bildirir.

---

## Re-rendering

### Ne Zaman Re-render Olur?

1. State değiştiğinde
2. Props değiştiğinde
3. Parent re-render olduğunda

### Performans

- Gereksiz re-render'ları önle
- React.memo kullan (ileride göreceğiz)
- useCallback, useMemo kullan (ileride göreceğiz)

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **State'i doğru yerde tut** → En yakın ortak parent'ta
2. **Props'u destructure et** → `({ name, age })` şeklinde
3. **Callback kullan** → Child'dan parent'a iletişim için
4. **Immutability** → State'i spread operator ile güncelle

### ❌ Yapılmaması Gerekenler

1. **State'i direkt değiştirme** → `state = newValue` ❌
2. **Props'u değiştirme** → `props.name = 'yeni'` ❌
3. **Çok fazla state** → Gerekmedikçe state oluşturma
4. **Props drilling** → Çok derin prop aktarımı (Context kullan)

---

## Sık Sorulan Sorular

1. **Soru:** State ve props arasındaki fark nedir?
   **Cevap:** State component'in kendi verisi, props parent'tan gelen veri.

2. **Soru:** Child, parent'ın state'ini değiştirebilir mi?
   **Cevap:** Hayır, ama callback fonksiyonu ile parent'a bildirebilir.

3. **Soru:** Props değişince ne olur?
   **Cevap:** Component re-render edilir.

4. **Soru:** State'i nerede tutmalıyım?
   **Cevap:** O state'i kullanan component'lerin en yakın ortak parent'ında.

---

## Ek Kaynaklar

- [React - State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React - Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
