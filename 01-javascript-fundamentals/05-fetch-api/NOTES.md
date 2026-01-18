# Fetch API - Detaylı Notlar

⚠️ **Kod örnekleri için `index.js` dosyasına bakın.**
⚠️ **İnternet bağlantısı gerekir** (JSONPlaceholder API kullanıyor)

## Genel Bakış

Fetch API, modern JavaScript'te HTTP istekleri yapmak için kullanılır. React'ta veri çekmek için en yaygın yöntemdir.

⚠️ **Önemli:** Axios değil, Fetch API kullanıyoruz!

## 1. Basit GET İsteği

### Adımlar

1. `fetch(url)` → Promise döner
2. `response.ok` kontrolü → HTTP status (200-299 arası mı?)
3. `response.json()` → Promise döner, await kullan!

⚠️ **Tricky Nokta:** `response.json()` da Promise döner, await kullanmayı unutma!

**Detay için:** `index.js` dosyasındaki "Basit GET" bölümüne bakın.

---

## 2. Query Parameters

URL'e query parameter eklemek için:

- Template literal kullan: `` `${url}?userId=${id}` ``
- Veya URLSearchParams kullan

**Detay için:** `index.js` dosyasındaki "Query Parameters" bölümüne bakın.

---

## 3. POST İsteği - Veri Gönderme

### Gerekli Ayarlar

1. **method**: 'POST'
2. **headers**: `{ 'Content-Type': 'application/json' }`
3. **body**: `JSON.stringify(data)` → Objeyi string'e çevir!

⚠️ **Tricky Nokta:** Body'yi JSON.stringify() ile çevirmeyi unutma!

**Detay için:** `index.js` dosyasındaki "POST İsteği" bölümüne bakın.

---

## 4. Paralel İstekler - Promise.all

Birden fazla bağımsız istek için Promise.all kullan:

- Hepsi aynı anda başlar
- En uzun işlem kadar sürer
- Performans kazancı!

**Detay için:** `index.js` dosyasındaki "Paralel İstekler" bölümüne bakın.

---

## 5. React'ta Kullanım

### useState ile State Yönetimi

- `loading`: İstek devam ediyor mu?
- `data`: Gelen veri
- `error`: Hata mesajı

### useEffect ile Veri Çekme

Component mount olduğunda veri çek.

⚠️ **Önemli:** useEffect async olamaz, içinde async function tanımla!

### Cleanup ile AbortController

Component unmount olduğunda isteği iptal et.

**Detay için:** `index.js` dosyasındaki "React Örneği" bölümüne bakın.

---

## 6. Fetch vs Axios Farkları

### FETCH API

- ✅ Native JavaScript (ek kütüphane gerektirmez)
- ✅ Modern tarayıcılarda desteklenir
- ❌ `response.json()` manuel çağrılmalı
- ❌ HTTP hataları (404, 500) otomatik throw etmez
- ❌ Request/response interceptor yok
- ❌ Timeout desteği yok (AbortController gerekir)

### AXIOS

- ✅ Otomatik JSON parsing
- ✅ HTTP hataları otomatik throw eder
- ✅ Request/response interceptor var
- ✅ Timeout desteği var
- ❌ Ek kütüphane (bundle size artar)

⚠️ **Tavsiye:** Basit projeler için Fetch, kompleks için Axios

---

## 7. Yaygın Hatalar

⚠️ **Hata 1:** response.ok Kontrolü Yapmamak

- Fetch, 404 veya 500 hatalarında throw etmez!
- Manuel kontrol gerekir

⚠️ **Hata 2:** response.json() await Unutmak

- Promise döner, veri değil!

⚠️ **Hata 3:** Body'yi JSON.stringify() Yapmamak

- POST/PUT isteklerinde body string olmalı

⚠️ **Hata 4:** Content-Type Header Eklememek

- Server veriyi parse edemez

**Detay için:** `index.js` dosyasındaki örneklere bakın.

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **response.ok ile status kontrol et** (200-299 arası)
2. **response.json() da Promise döner**, await kullan!
3. **POST/PUT için Content-Type header ekle**
4. **Body'yi JSON.stringify() ile çevir**
5. **Try-catch ile hataları yakala**
6. **React'ta cleanup yap** (AbortController)

### ❌ Yapılmaması Gerekenler

1. **response.ok kontrolü yapmamak**
2. **await unutmak**
3. **Hata yönetimi yapmamak**
4. **CORS hatalarını görmezden gelmek**

---

## Sık Sorulan Sorular

1. **Soru:** fetch() ne döner?
   **Cevap:** Her zaman Promise döner.

2. **Soru:** response.json() neden await gerekir?
   **Cevap:** O da Promise döner!

3. **Soru:** Fetch 404 hatası throw eder mi?
   **Cevap:** Hayır! response.ok ile manuel kontrol gerekir.

4. **Soru:** POST isteğinde body nasıl gönderilir?
   **Cevap:** JSON.stringify() ile string'e çevrilir.

---

## Ek Kaynaklar

- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React - Data Fetching](https://react.dev/learn/synchronizing-with-effects#fetching-data)
