# Reduce - Detaylı Notlar

⚠️ **Kod örnekleri için `index.js` dosyasına bakın.**

## Genel Bakış

Reduce, array metodlarının en güçlüsü ama en az anlaşılanıdır. Bir array'i tek bir değere indirgeyebilir (number, string, object, array, vs.).

⚠️ **Önceki eğitimde hiç girilmemiş, bu yüzden önemli!**

## 1. Reduce Nasıl Çalışır?

### Parametreler

- **accumulator**: Biriken değer (her iterasyonda güncellenir)
- **currentValue**: Şu anki eleman
- **index**: Şu anki index (optional)
- **array**: Orijinal array (optional)
- **initialValue**: Başlangıç değeri (ÖNEMLİ!)

⚠️ **Tricky Nokta:** Başlangıç değeri vermek zorunlu değil ama her zaman ver!

**Detay için:** `index.js` dosyasındaki "Basit Toplama" bölümüne bakın.

---

## 2. Farklı Tipte Çıktılar - Reduce'un Gücü!

### Number Çıktı

- Toplam, ortalama, min, max hesaplama

### String Çıktı

- String birleştirme, formatl ama

### Object Çıktı (Çok Kullanılır!)

- Gruplama (departmana göre, kategoriye göre)
- ID lookup objesi oluşturma (performans için)

### Array Çıktı

- Flatten (iç içe array'leri düzleştirme)
- Filtreleme + dönüştürme (tek döngüde)

**Detay için:** `index.js` dosyasındaki "Farklı Tipte Çıktılar" bölümüne bakın.

---

## 3. React'ta Kullanım Örnekleri

### Sepet Toplamı (E-commerce)

Ürün fiyatları ve adetlerini çarpıp toplamak için.

### ID Lookup Objesi (Performans)

Array'den object'e çevirerek O(1) lookup sağlamak.

- Array'de arama: O(n) → Yavaş
- Object'te arama: O(1) → Çok hızlı!

### Form Validasyon Hataları

Birden fazla field'ın hatalarını tek bir objede toplamak.

**Detay için:** `index.js` dosyasındaki "React Örneği" bölümüne bakın.

---

## 4. Reduce ile Map+Filter Birleştirme

### İki Döngü vs Tek Döngü

- ❌ İki döngü: `.filter(...).map(...)` → Yavaş (büyük array'lerde)
- ✅ Tek döngü: `.reduce(...)` → Hızlı

### Ne Zaman Kullan?

- Büyük array'lerde performans kritikse
- Hem filtreleme hem dönüştürme gerekiyorsa

### Ne Zaman Kullanma?

- Okunabilirlik önemliyse (map+filter daha açık)
- Array küçükse (performans farkı yok)

⚠️ **Kural:** YAGNI (You Aren't Gonna Need It) - Basit yöntem yeterli ise reduce kullanma!

**Detay için:** `index.js` dosyasındaki "Reduce ile Map+Filter" bölümüne bakın.

---

## 5. Yaygın Hatalar ve Çözümler

### Hata 1: Başlangıç Değeri Vermemek

⚠️ **En Yaygın Hata!**

Başlangıç değeri vermezsen:

- İlk eleman başlangıç olur
- Beklenmedik sonuçlar çıkar
- Boş array'de hata verir

**Kural:** Her zaman başlangıç değeri ver!

### Hata 2: Accumulator'ı Return Etmemek

⚠️ **İkinci En Yaygın Hata!**

Return etmeyi unutursan:

- undefined döner
- Sonraki iterasyonlar çalışmaz

**Kural:** Her zaman accumulator'ı return et!

### Hata 3: Yanlış Başlangıç Değeri

- Object biriktiriyorsan `{}` ile başla
- Array biriktiriyorsan `[]` ile başla
- Number biriktiriyorsan `0` ile başla

**Detay için:** `index.js` dosyasındaki örneklere bakın.

---

## 6. Ne Zaman Reduce Kullanmalı?

### ✅ Reduce Kullan

1. **Array'den tek bir değer üretiyorsan** (toplam, ortalama, min, max)
2. **Farklı tipte çıktı istiyorsan** (Array → Object, Array → String)
3. **Gruplama, birleştirme yapıyorsan**
4. **Map + Filter'ı tek döngüde yapmak istiyorsan** (performans kritikse)

### ❌ Reduce Kullanma

1. **Basit map yeterli ise**
2. **Basit filter yeterli ise**
3. **Okunabilirlik önemliyse**

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Her zaman başlangıç değeri ver**
2. **Accumulator'ı return et**
3. **Doğru başlangıç tipi kullan** ({}, [], 0, '', vs.)
4. **Karmaşık işlemler için reduce kullan**
5. **Performans kritikse map+filter yerine reduce**

### ❌ Yapılmaması Gerekenler

1. **Başlangıç değeri vermemek**
2. **Return etmeyi unutmak**
3. **Basit işlemler için reduce kullanmak**
4. **Okunabilirliği feda etmek**

---

## Sık Sorulan Sorular

1. **Soru:** Reduce'un map ve filter'dan farkı nedir?
   **Cevap:** Reduce farklı tipte çıktı üretebilir, map/filter sadece array döner.

2. **Soru:** Başlangıç değeri neden önemli?
   **Cevap:** Vermezsen ilk eleman başlangıç olur, beklenmedik sonuçlar çıkar.

3. **Soru:** Ne zaman reduce, ne zaman map/filter?
   **Cevap:** Basit işlemler için map/filter, karmaşık/farklı tip için reduce.

4. **Soru:** React'ta reduce nerede kullanılır?
   **Cevap:** Sepet toplamı, gruplama, lookup objesi, form validasyon, vs.

---

## Ek Kaynaklar

- [MDN - Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [JavaScript.info - Reduce](https://javascript.info/array-methods#reduce-reduceright)
