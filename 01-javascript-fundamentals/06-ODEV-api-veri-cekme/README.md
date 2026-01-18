# ÖDEV: API'den Veri Çekme ve Array Metodlarıyla Dönüştürme

## Amaç

Fetch API kullanarak veri çekmek, async/await ile asenkron işlemleri yönetmek ve array metodlarıyla (map, filter, reduce) veriyi dönüştürmek.

## Görev

JSONPlaceholder API'sinden veri çekip, array metodlarıyla işleyerek farklı formatlar oluşturun.

### Adımlar

1. **Kullanıcıları Getir**
   - Endpoint: `https://jsonplaceholder.typicode.com/users`
   - Tüm kullanıcıları çek

2. **Postları Getir**
   - Endpoint: `https://jsonplaceholder.typicode.com/posts`
   - Tüm postları çek

3. **Veriyi Dönüştür**
   - Her kullanıcı için kaç post yazdığını hesapla (reduce kullan)
   - Sadece 5'ten fazla post yazan kullanıcıları filtrele (filter kullan)
   - Her kullanıcı için özet bilgi oluştur (map kullan)

4. **Sonucu Göster**
   - Console'a yazdır
   - Formatlanmış çıktı

## Beklenen Çıktı

```
En Aktif Kullanıcılar:
1. Leanne Graham - 10 post
2. Ervin Howell - 8 post
...
```

## Çözüm

`solution.js` dosyasında örnek çözüm var. Önce kendin yapmayı dene!

## İpuçları

⚠️ **Önemli:**

- Fetch API kullan (axios değil)
- async/await kullan
- Try-catch ile hataları yakala
- Promise.all ile paralel istekler yap
- reduce ile gruplama yap

## Test

```bash
node solution.js
```

## Ek Görevler (Bonus)

1. En çok post yazan kullanıcıyı bul
2. Ortalama post sayısını hesapla
3. Kullanıcıları post sayısına göre sırala
