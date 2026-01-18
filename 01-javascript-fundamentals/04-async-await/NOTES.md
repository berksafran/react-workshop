# Async/Await ve Promise - Detaylı Notlar

⚠️ **Kod örnekleri için ilgili `.js` dosyalarına bakın.**

## Genel Bakış

Asenkron programlama JavaScript'in en önemli konularından biri. React'ta API çağrıları, useEffect, veri yükleme gibi işlemlerde sürekli kullanılır.

## 0. Callback Hell - Neden Async/Await Gerekli?

### Problem: İç İçe Callback'ler

Eski JavaScript'te async işlemler callback ile yapılırdı. Bu çok hızlı karmaşıklaşır:

- İç içe callback'ler (Pyramid of Doom)
- Okunması ve bakımı zor
- Hata yönetimi karmaşık
- Debugging zor

### Çözüm: Async/Await

Modern JavaScript'te async/await kullanırız:

- Senkron kod gibi okunur
- Try-catch ile hata yönetimi
- Debugging kolay
- Daha temiz ve bakımı kolay

**Detay için:** `00-callback-hell.js` ve `00-callback-hell-solution.js` dosyalarına bakın.

---

## 1. Promise Nedir?

Promise, gelecekte tamamlanacak bir işlemi temsil eder. 3 durumu vardır:

- **pending**: Bekliyor
- **fulfilled**: Başarıyla tamamlandı
- **rejected**: Hata ile sonuçlandı

**Detay için:** `01-promise-basics.js` dosyasına bakın.

---

## 2. Async/Await Kullanımı

### Avantajlar

- Senkron kod gibi okunur
- Try-catch ile hata yönetimi
- Debugging kolay

⚠️ **Best Practice:** Her zaman async/await kullan, Promise chaining yerine!

**Detay için:** `02-async-await.js` dosyasına bakın.

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

**Detay için:** `03-promise-all.js` dosyasına bakın.

---

## 4. Hata Yönetimi

### Try-Catch

Her async function'da try-catch kullan!

### Birden Fazla Try-Catch

Her işlem için ayrı try-catch kullanabilirsin:

- Kritik işlem başarısız olursa erken çık
- Kritik olmayan işlem başarısız olursa default değer kullan

**Detay için:** `04-error-handling.js` dosyasına bakın.

---

## 5. JavaScript Single Thread - Paralel İşlemler Nasıl Olur?

⚠️ **Önemli Kavram:** JavaScript single thread'dir ama paralel gibi çalışır!

### Event Loop

- JavaScript tek thread'te çalışır (bir seferde bir iş)
- Ama async işlemler "beklerken" diğer işlere geçer (non-blocking)
- setTimeout, fetch gibi işlemler browser/Node.js tarafından arka planda yürütülür (Web APIs)
- Bitince Event Loop ile geri döner

### Nasıl Paralel Gibi Görünür?

- Tüm task'lar aynı anda BAŞLAR (setTimeout/fetch'e verilir)
- JavaScript beklemeden devam eder
- En uzun task bitince Promise.all tamamlanır

**Detay için:** `05-single-thread-paralel.js` dosyasına bakın.

---

## 6. React'ta Kullanım

### useEffect ile Veri Çekme

Loading, error, data state'lerini yönetmek için kullanılır.

⚠️ **Tricky Nokta:** useEffect async olamaz!

- ❌ Yanlış: `useEffect(async () => { ... })`
- ✅ Doğru: İçinde async function tanımla

### Cleanup ile AbortController

Component unmount olduğunda devam eden istekleri iptal etmek için.

⚠️ **Önemli:** Cleanup yapmazsan memory leak olur!

---

## Yaygın Hatalar

⚠️ **Hata 1:** await Unutmak

- Promise döner, veri değil!
- `console.log(data)` → Promise { <pending> }

⚠️ **Hata 2:** async Olmayan Fonksiyonda await

- SyntaxError verir
- Function'ı async yap

⚠️ **Hata 3:** Paralel Yapılabilecek İşlemleri Sıralı Yapmak

- Performans kaybı
- Promise.all kullan

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

4. **Soru:** JavaScript single thread ama paralel nasıl çalışır?
   **Cevap:** Event Loop sayesinde. Async işlemler arka planda (Web APIs) çalışır.

---

## Ek Kaynaklar

- [MDN - async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React - Data Fetching](https://react.dev/learn/synchronizing-with-effects#fetching-data)
