# Incremental Static Regeneration (ISR)

## Nedir?

ISR, Statik Site Üretimi (SSG) ile Sunucu Taraflı Render (SSR) arasında duran hibrit bir modeldir. Sayfalar build zamanında statik olarak oluşturulur, ancak **belirlenen bir süre sonra** veya **tetiklendiğinde** arka planda güncellenir.

Bu sayede, binlerce sayfalık bir siteyi her build'da yeniden oluşturmak zorunda kalmazsınız. Sadece süresi dolan sayfalar, istek geldiğinde arka planda yenilenir.

## Avantajları

1.  **Hız (SSG Gibi):** Kullanıcılar her zaman cache'lenmiş statik HTML'i görür (çok hızlı TTFB).
2.  **Güncellik (SSR Gibi):** Veriler eski kalmaz, periyodik olarak yenilenir.
3.  **Ölçeklenebilirlik:** Milyonlarca sayfayı yönetmek kolaylaşır.

## Nasıl Çalışır?

1.  Kullanıcı sayfayı ister -> Cache'deki sürüm gösterilir.
2.  Eğer belirlediğiniz `revalidate` süresi (ör: 60 saniye) dolmuşsa:
    - Next.js arka planda sayfayı yeniden oluşturmaya başlar.
    - Kullanıcı o anlık eski sayfayı görmeye devam eder.
    - Yenileme başarılı olursa cache güncellenir, sonraki kullanıcılar yeni sayfayı görür.

## Kullanımı

Fetch fonksiyonuna `next: { revalidate: 3600 }` (saniye cinsinden) eklenir.

\`\`\`typescript
async function getStockPrice() {
const res = await fetch('https://api.finance.com/AAPL', {
next: { revalidate: 60 } // 60 saniyede bir güncelle
});
return res.json();
}
\`\`\`
