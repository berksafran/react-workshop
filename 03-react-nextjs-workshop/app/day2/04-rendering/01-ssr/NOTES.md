# Server Side Rendering (SSR)

## Nedir?

SSR, sayfanın her istek (request) geldiğinde sunucuda oluşturulup HTML olarak tarayıcıya gönderilmesidir. Next.js App Router'da bileşenler varsayılan olarak **Server Component**'tir ancak bu otomatik olarak dinamik SSR anlamına gelmez.

Eğer bir bileşen:

1.  Dinamik bir fonksiyon kullanıyorsa (cookies(), headers(), searchParams)
2.  Önbelleklenmemiş (uncached) bir veri isteği yapıyorsa (\`cache: 'no-store'\`)

Next.js bu sayfayı **Dynamic Rendering** moduna geçirir, bu da klasik SSR'a karşılık gelir.

## Avantajları

1.  **Daima Güncel Veri:** Kullanıcı her zaman en son veriyi görür.
2.  **SEO Dostu:** Arama motorları içeriği tam olarak indeksleyebilir.
3.  **Güvenlik:** API anahtarları ve hassas mantık sunucuda kalır.

## Dezavantajları

1.  **Maliyet ve Yük:** Her istek sunucuda işlem gerektirir.
2.  **Latency:** Sunucunun yanıt vermesi ve render etmesi beklendiği için TTFB (Time to First Byte) artabilir.

## Nasıl Yapılır?

App Router'da \`fetch\` fonksiyonuna \`cache: 'no-store'\` parametresi geçerek verinin her istekte yeniden çekilmesini sağlarsınız.

\`\`\`typescript
async function getData() {
const res = await fetch('https://api.example.com/data', {
cache: 'no-store'
});
return res.json();
}
\`\`\`
