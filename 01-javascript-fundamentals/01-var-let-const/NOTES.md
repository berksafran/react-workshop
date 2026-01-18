# Var, Let, Const - Detaylı Notlar

⚠️ **Kod örnekleri için `index.js` dosyasına bakın.**

## Genel Bakış

Bu örnek, JavaScript'te değişken tanımlama yöntemlerini (var, let, const) ve aralarındaki kritik farkları gösterir.

## 1. Block Scope Farkı

### Var - Function Scope

- `var` ile tanımlanan değişkenler **function scope**'a sahiptir.
- Block (if, for, while) dışında erişilebilir.
- Dikkat! `var` kullanmak beklenmedik hatalara yol açabilir.

### Let ve Const - Block Scope

- `let` ve `const` ile tanımlanan değişkenler **block scope**'a sahiptir.
- Block dışında erişilemez.
- Daha güvenli ve öngörülebilir.

### Neden Önemli?

Block scope sayesinde:

- Değişken çakışmaları önlenir.
- Kod daha öngörülebilir olur.
- Debugging kolaylaşır.

---

## 2. For Loop'ta Block Scope

⚠️ **Tricky Nokta:** For loop'ta var kullanımı

### Var ile Problem

- `var` function scope olduğu için tek bir `i` değişkeni var.
- Loop bittiğinde `i = 3`
- setTimeout çalıştığında hepsi aynı `i`'yi görüyor
- **Sonuç:** Hepsi 3 yazdırır!

### Let ile Çözüm

- `let` her iterasyonda yeni bir scope oluşturur
- Her setTimeout kendi `i`'sini görüyor
- **Sonuç:** 0, 1, 2 yazdırır

⚠️ **Dikkat:** Bu React'ta event handler'larda sık karşılaşılan bir hatadır!

**Detay için:** `index.js` dosyasındaki "For Loop'ta Block Scope" bölümüne bakın.

---

## 3. Const ile Mutation

⚠️ **En Çok Yanlış Anlaşılan Konu!**

### Const Ne Demek?

`const` = **constant reference** (sabit referans)

- Değişkenin **referansı** değiştirilemez
- Ama referans edilen **objenin içeriği** değiştirilebilir!

### Obje Mutation

- ✅ İçerik değiştirilebilir: `kullanici.isim = 'Mehmet'`
- ✅ Yeni property eklenebilir: `kullanici.yas = 30`
- ❌ Referans değiştirilemez: `kullanici = { ... }` → TypeError!

**Gerçek Hayattan Örnek:**

- `const` bir evin adresini sabitler.
- Ama evin içindeki mobilyaları değiştirebilirsin.
- Evi başka bir adrese taşıyamazsın.

### Array Mutation

- ✅ Array metodları çalışır: `push()`, `pop()`, `splice()`
- ✅ Index ile değiştirme: `sayilar[0] = 10`
- ❌ Yeni array atayamazsın: `sayilar = [...]` → TypeError!

### React'ta Neden Önemli?

- State'ler genellikle const ile tanımlanır.
- Ama state içeriği değişir (immutable pattern ile).
- Örnek: `const [users, setUsers] = useState([])` ← const ama users değişir!

⚠️ **Önemli:** const, immutable demek değildir! Sadece referans sabittir.

**Detay için:** `index.js` dosyasındaki "Const ile Mutation" bölümüne bakın.

---

## 4. Hoisting

### Var Hoisting

- `var` ile tanımlanan değişkenler yukarı çekilir (hoisted).
- `undefined` olarak başlatılır.
- Tanımlanmadan önce kullanılabilir (hata vermez!)

### Let/Const - Temporal Dead Zone

- `let` ve `const` da hoist edilir ama...
- Tanımlanmadan önce kullanılamaz (Temporal Dead Zone).
- ReferenceError verir.
- Daha güvenli!

⚠️ **Best Practice:** Değişkenleri her zaman en üstte tanımla, hoisting'e güvenme!

**Detay için:** `index.js` dosyasındaki "Hoisting" bölümüne bakın.

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Varsayılan olarak `const` kullan**
   - Değerin değişmeyeceğini belirtir.
   - Kod daha öngörülebilir olur.

2. **Değer değişecekse `let` kullan**
   - Counter, loop variable, vs.

3. **`var` kullanma**
   - Legacy kod hariç
   - Block scope problemleri yaratır

### ❌ Yapılmaması Gerekenler

1. `var` kullanmak (modern JavaScript'te gereksiz)
2. `const` ile immutable sanmak (obje içeriği değişir!)
3. Hoisting'e güvenmek (değişkenleri üstte tanımla)

---

## Sık Sorulan Sorular

1. **Soru:** `const` ile tanımlanan bir objenin property'sini değiştirebilir miyiz?
   **Cevap:** Evet! `const` sadece referansı sabitler.

2. **Soru:** For loop'ta `var` kullanırsak ne olur?
   **Cevap:** Tüm iterasyonlar aynı değişkeni kullanır, async işlemlerde problem çıkar.

3. **Soru:** React'ta neden `const [state, setState] = useState()` kullanıyoruz?
   **Cevap:** `state` değişkeni referansı sabit ama içeriği değişiyor (immutable pattern).

---

## Ek Kaynaklar

- [MDN - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
