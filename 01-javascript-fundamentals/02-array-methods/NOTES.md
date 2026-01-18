# Array Metodları: Map, Filter - Detaylı Notlar

⚠️ **Kod örnekleri için `index.js` dosyasına bakın.**

## Genel Bakış

Map ve filter, JavaScript'in en çok kullanılan array metodlarıdır. React'ta JSX render etmek için neredeyse her component'te kullanılır.

## 1. Map - Array Dönüştürme

### Ne İşe Yarar?

- Her elemanı dönüştürür
- **Aynı uzunlukta** yeni array döner
- Orijinal array'i **değiştirmez** (immutable)

### React'ta Kullanım

React'ta en çok kullanılan array metodu! Veriyi JSX'e dönüştürmek için kullanılır.

⚠️ **Önemli:** Her eleman için unique `key` prop gerekir!

### Tricky Nokta: Obje Dönüştürme

Arrow function ile obje döndürürken parantez kullanmayı unutma:

- ❌ Yanlış: `map(k => { baslik: k.isim })` → undefined döner
- ✅ Doğru: `map(k => ({ baslik: k.isim }))` → obje döner

**Detay için:** `index.js` dosyasındaki "Map" bölümüne bakın.

---

## 2. Filter - Array Filtreleme

### Ne İşe Yarar?

- Koşula uyan elemanları seçer
- **Daha kısa veya aynı uzunlukta** array döner
- Orijinal array'i **değiştirmez**

### React'ta Kullanım

Sadece belirli koşulu sağlayan elemanları göstermek için kullanılır.

**Detay için:** `index.js` dosyasındaki "Filter" bölümüne bakın.

---

## 3. Map + Filter Beraber - Method Chaining

### Sıralama Önemli!

⚠️ **Performans:** Önce filter kullan (array'i küçült), sonra map ile dönüştür!

- ✅ Doğru: `.filter(...).map(...)` → Önce azalt, sonra dönüştür
- ❌ Yanlış: `.map(...).filter(...)` → Tüm array'i dönüştür, sonra filtrele (gereksiz işlem)

**Detay için:** `index.js` dosyasındaki "Map + Filter Beraber" bölümüne bakın.

---

## 4. Immutability - Orijinal Array Değişmez

### Neden Önemli?

React'ta state immutable olmalı. Map ve filter bu prensibi destekler.

### React State Güncellemesi

- ❌ Yanlış: `users.push(newUser)` → Mutasyon!
- ✅ Doğru: `setUsers([...users, newUser])` → Yeni array

- ❌ Yanlış: `users.splice(index, 1)` → Mutasyon!
- ✅ Doğru: `setUsers(users.filter(u => u.id !== deleteId))` → Yeni array

⚠️ **Önemli:** React state'i direkt değiştirme, her zaman yeni array oluştur!

**Detay için:** `index.js` dosyasındaki "React Örneği" bölümüne bakın.

---

## 5. Key Prop - React'ta Önemli!

⚠️ **Tricky Nokta:** Index'i key olarak kullanma!

### Neden Gerekli?

React, hangi elemanın değiştiğini anlamak için `key` kullanır.

### Index Neden Kötü?

Liste sıralanıyor, ekleniyor veya siliniyorsa:

- Index değişir
- React yanlış elemanları yeniden render eder
- Performans kaybı ve hatalar

### Doğru Kullanım

- ❌ Yanlış: `key={index}`
- ✅ Doğru: `key={user.id}` (unique ID)
- ✅ Doğru: `key={uuid()}` (unique identifier)

⚠️ **Kural:** Eğer liste değişiyorsa (sıralama, ekleme, silme) index kullanma!

**Detay için:** `index.js` dosyasındaki "React Örneği" bölümüne bakın.

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **map() ile JSX render et**
2. **Unique key kullan** (genellikle `id` field'ı)
3. **Method chaining kullan** (önce filter, sonra map)
4. **Arrow function kullan** (kısa ve öz)

### ❌ Yapılmaması Gerekenler

1. **Index'i key olarak kullanma** (liste değişiyorsa)
2. **Orijinal array'i mutate etme**
3. **Gereksiz map kullanma** (sadece console.log için forEach kullan)

---

## Sık Sorulan Sorular

1. **Soru:** map() ve filter() orijinal array'i değiştirir mi?
   **Cevap:** Hayır, yeni array döner (immutable).

2. **Soru:** React'ta neden key prop gerekli?
   **Cevap:** React'ın hangi elemanın değiştiğini anlaması için.

3. **Soru:** Index'i key olarak kullanabilir miyiz?
   **Cevap:** Sadece liste hiç değişmiyorsa. Genellikle kullanma!

4. **Soru:** map() ve filter() hangisi önce kullanılmalı?
   **Cevap:** Önce filter (array'i küçült), sonra map (dönüştür).

---

## Ek Kaynaklar

- [MDN - Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [React - Lists and Keys](https://react.dev/learn/rendering-lists)
