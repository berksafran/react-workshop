# Redux vs Context API

React ekosisteminde state yönetimi için en sık karşılaşılan soru: **"Context API mi kullanmalıyım yoksa Redux mı?"**

Bu sorunun cevabı projenin ölçeğine, ihtiyaçlarına ve state'in karmaşıklığına göre değişir.

## Temel Karşılaştırma

| Özellik            | Context API                                                           | Redux (Toolkit)                                                                 |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Yerleşiklik**    | React'in bir parçasıdır. Ekstra paket gerekmez.                       | Harici bir kütüphanedir. Kurulum gerektirir.                                    |
| **Öğrenme Eğrisi** | Düşük. Provider ve Hook mantığı basittir.                             | Orta/Yüksek. Store, Slice, Dispatch, Selector kavramları vardır.                |
| **Performans**     | Context değeri değiştiğinde tüm tüketici componentler re-render olur. | Selector'lar sayesinde sadece ilgili data değiştiğinde component render edilir. |
| **Debugging**      | React DevTools ile sınırlı takip yapılabilir.                         | Redux DevTools ile "Time Travel" ve detaylı aksiyon takibi çok güçlüdür.        |
| **Kullanım Alanı** | Statik veya az değişen veriler (Tema, Dil, Auth).                     | Sık değişen, karmaşık veri akışları (E-ticaret sepeti, Dashboard).              |

## Detaylı Bakış

### 1. Context API

Context API, **"Prop Drilling"** (veriyi component ağacında yukarıdan aşağıya taşımak) sorununu çözmek için tasarlanmıştır.

**Avantajları:**

- Kurulum gerektirmez.
- Küçük ve orta ölçekli projeler için yeterlidir.
- Boilerplate (basmakalıp) kod daha azdır.

**Dezavantajları:**

- State güncelleme mantığını (logic) UI componentlerinden ayırmak için ekstra çaba (Reducer vb.) gerektirir.
- Büyük ve sık değişen state yapılarında performans sorunlarına yol açabilir (Gereksiz renderlar).

### 2. Redux (Redux Toolkit)

Redux, öngörülebilir bir state container'ıdır. Uygulama state'ini tek bir merkezde (Store) tutar ve değişiklikleri belirli kurallarla (Reducer/Action) yönetir.

**Avantajları:**

- **Öngörülebilirlik:** State'in ne zaman ve nasıl değiştiği bellidir.
- **Maintenance:** State mantığı UI'dan tamamen ayrılmıştır.
- **Debugging:** Redux DevTools ile hata ayıklamak çok kolaydır.
- **Middleware:** API çağrıları ve asenkron işlemler (Thunk, Saga) için güçlü bir altyapı sunar.

**Dezavantajları:**

- Kurulum ve konfigürasyon (Toolkit ile azalmış olsa da) Context'e göre daha fazladır.
- Basit projeler için "Overkill" (Gereğinden fazla karmaşık) olabilir.

## Hangisini Seçmeliyim?

### Context API Seçin, Eğer:

- Sadece prop drilling sorununu çözmek istiyorsanız.
- Veriniz çok sık değişmiyorsa (Örn: Tema rengi, Kullanıcı dili, Oturum bilgisi).
- Harici bir kütüphane bağımlılığı eklemek istemiyorsanız.

### Redux Seçin, Eğer:

- Uygulamanız büyük ölçekli ve veri akışı karmaşıksa.
- Aynı veriyi birçok farklı yerde ve farklı şekillerde kullanıyorsanız.
- State değişimlerini takip etmek (Trace/Debug) hayati önem taşıyorsa.
- State yönetim mantığını UI'dan tamamen ayırmak istiyorsanız.
