# React Component Tipleri - Detaylı Notlar

⚠️ **Kod örnekleri için ilgili `.tsx` dosyalarına bakın.**

## Genel Bakış

React component'lerini TypeScript ile nasıl tip güvenli yazarız? FC<> kullanmadan!

## İki Farklı Yöntem: FC<> vs Direkt Props

### Yöntem 1: React.FC<Props>

- FC generic type kullanımı
- children otomatik eklenir
- Daha verbose

### Yöntem 2: Direkt Props'a Tip Verme

- Daha basit ve direkt
- children manuel eklenir (PropsWithChildren ile)
- React ekibi tarafından önerilen yaklaşım

⚠️ **Bu workshop'ta Yöntem 2 kullanıyoruz** (direkt props'a tip verme)

### Neden Yöntem 2?

1. **Daha basit**: Ekstra generic katmanı yok
2. **Daha açık**: children sadece gerektiğinde
3. **Daha esnek**: Return type kontrolü daha iyi
4. **Modern yaklaşım**: React ekibi önerisi

**Detay için:** `01-simple-props.tsx` dosyasına bakın.

---

## 1. Basit Props

### Doğru Kullanım

- Direkt props'a tip ver
- Optional props için `?` kullan
- Default değerler destructuring'de

### Özellikler

- Type safety
- IDE autocomplete
- Compile-time hata kontrolü

**Detay için:** `01-simple-props.tsx` dosyasına bakın.

---

## 2. PropsWithChildren

Children prop'u eklemek için `PropsWithChildren` kullan.

### Neden PropsWithChildren?

- Açık ve net
- children optional
- Type-safe

**Detay için:** `02-props-with-children.tsx` dosyasına bakın.

---

## 3. Event Handler Tipleri

### Mouse Events

- `React.MouseEvent<HTMLButtonElement>`
- onClick, onMouseEnter, vs.

### Change Events

- `React.ChangeEvent<HTMLInputElement>`
- onChange için

### Form Events

- `React.FormEvent<HTMLFormElement>`
- onSubmit için

⚠️ **Önemli:** Event tipini belirt, sadece `() => void` yeterli değil!

---

## 4. Generic Component Props

Farklı veri tipleriyle çalışan component'ler için generic kullan.

### Kullanım Alanları

- List component'leri
- Table component'leri
- Form field'ları

**Not:** Generic syntax: `<T,>` (trailing comma gerekli)

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Yöntem 2 kullan** → Direkt props'a tip ver (daha basit)
2. **PropsWithChildren kullan** → children için
3. **Event tiplerini belirt** → MouseEvent, ChangeEvent, vs.
4. **Optional props için ?** → Açık ve net
5. **Default değerler** → Destructuring'de

### ❌ Yapılmaması Gerekenler

1. **any kullanmak**
2. **Event tiplerini atlamak**
3. **children'ı manuel eklemek** (PropsWithChildren kullan)

---

## Sık Sorulan Sorular

1. **Soru:** FC<> ve direkt props arasındaki fark nedir?
   **Cevap:** FC<> daha verbose, direkt props daha basit. İkisi de geçerli, bu workshop'ta Yöntem 2 kullanıyoruz.

2. **Soru:** children nasıl eklenir?
   **Cevap:** PropsWithChildren<Props> kullan.

3. **Soru:** Event handler tipleri nedir?
   **Cevap:** React.MouseEvent, React.ChangeEvent, vs.

4. **Soru:** Generic component nasıl yazılır?
   **Cevap:** `<T,>` syntax kullan, props'ta T kullan.

---

## Ek Kaynaklar

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React - TypeScript](https://react.dev/learn/typescript)
