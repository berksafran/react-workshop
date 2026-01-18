# Async/Await ve Promise - Detaylı Notlar

⚠️ **Kod örnekleri için `index.js` dosyasına bakın.**

## Genel Bakış

Asenkron programlama JavaScript'in en önemli konularından biri. React'ta API çağrıları, useEffect, veri yükleme gibi işlemlerde sürekli kullanılır.

## 1. Promise Nedir?

Promise, gelecekte tamamlanacak bir işlemi temsil eder. 3 durumu vardır:

- **pending**: Bekliyor
- **fulfilled**: Başarıyla tamamlandı
- **rejected**: Hata ile sonuçlandı

**Detay için:** `index.js` dosyasındaki "Promise Temelleri" bölümüne bakın.

---

## 2. Promise Chaining vs Async/Await

### Promise Chaining (Eski Yöntem)

**Sorunlar:**

- Okunması zor ("callback hell" benzeri)
- Hata yönetimi karmaşık
- Debugging zor

### Async/Await (Modern Yöntem)

**Avantajlar:**

- Senkron kod gibi okunur
- Try-catch ile hata yönetimi
- Debugging kolay

⚠️ **Best Practice:** Her zaman async/await kullan, Promise chaining yerine!

**Detay için:** `index.js` dosyasındaki "Async/Await" bölümüne bakın.

---

## 3. Paralel vs Sıralı İşlemler

⚠️ **Performans - Çok Önemli!**

### Sıralı (Yavaş)

- Her işlem bir önceki bittikten sonra başlar
- Toplam süre: Tüm işlemlerin toplamı
- Örnek: 3 işlem × 1 saniye = 3 saniye

### Paralel (Hızlı)

- Tüm işlemler aynı anda başlar
- Toplam süre: En uzun işlem kadar
- Örnek: 3 işlem, en uzunu 1 saniye = 1 saniye

⚠️ **Kural:** Birbirinden bağımsız işlemler için Promise.all kullan!

### Promise.all vs Promise.allSettled

- **Promise.all**: Bir hata tüm işlemi durdurur
- **Promise.allSettled**: Hepsi tamamlanır, hata olsa bile

**Detay için:** `index.js` dosyasındaki "Paralel İşlemler" bölümüne bakın.

---

## 4. React'ta Kullanım

### useEffect ile Veri Çekme

Loading, error, data state'lerini yönetmek için kullanılır.

⚠️ **Tricky Nokta:** useEffect async olamaz!

- ❌ Yanlış: `useEffect(async () => { ... })`
- ✅ Doğru: İçinde async function tanımla

### Cleanup ile AbortController

Component unmount olduğunda devam eden istekleri iptal etmek için.

⚠️ **Önemli:** Cleanup yapmazsan memory leak olur!

**Detay için:** `index.js` dosyasındaki "React Örneği" bölümüne bakın.

---

## 5. Hata Yönetimi

### Try-Catch

Her async function'da try-catch kullan!

### Birden Fazla Try-Catch

Her işlem için ayrı try-catch kullanabilirsin:

- Kritik işlem başarısız olursa erken çık
- Kritik olmayan işlem başarısız olursa default değer kullan

**Detay için:** `index.js` dosyasındaki "Hata Yönetimi" bölümüne bakın.

---

## 6. Yaygın Hatalar

⚠️ **Hata 1:** await Unutmak

- Promise döner, veri değil!
- `console.log(data)` → Promise { <pending> }

⚠️ **Hata 2:** async Olmayan Fonksiyonda await

- SyntaxError verir
- Function'ı async yap

⚠️ **Hata 3:** Paralel Yapılabilecek İşlemleri Sıralı Yapmak

- Performans kaybı
- Promise.all kullan

**Detay için:** `index.js` dosyasındaki örneklere bakın.

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **async/await kullan** (Promise chaining yerine)
2. **Try-catch ile hataları yakala**
3. **Paralel işlemler için Promise.all**
4. **React'ta cleanup yap** (AbortController)
5. **Loading ve error state'leri yönet**

### ❌ Yapılmaması Gerekenler

1. **useEffect'i async yapma**
2. **await unutma**
3. **Hata yönetimi yapmamak**
4. **Gereksiz sıralı işlemler**

---

## Sık Sorulan Sorular

1. **Soru:** async function ne döner?
   **Cevap:** Her zaman Promise döner.

2. **Soru:** useEffect async olabilir mi?
   **Cevap:** Hayır! İçinde async function tanımla.

3. **Soru:** Promise.all ne zaman kullanılır?
   **Cevap:** Birbirinden bağımsız paralel işlemler için.

4. **Soru:** Cleanup neden gerekli?
   **Cevap:** Component unmount olduğunda devam eden istekleri iptal etmek için.

---

## Ek Kaynaklar

- [MDN - async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React - Data Fetching](https://react.dev/learn/synchronizing-with-effects#fetching-data)
