# Static Site Generation (SSG)

## Nedir?

SSG, sayfaların **build zamanında (build time)** oluşturulması ve her istekte aynı statik HTML dosyasının sunulmasıdır. Next.js App Router'da bileşenler varsayılan olarak statiktir.

Eğer veri çekme işleminde herhangi bir cache stratejisi belirtmezseniz (veya \`force-cache\` kullanırsanız), Next.js bu veriyi build sırasında çeker ve HTML'in içine gömer.

## Avantajları

1.  **En Yüksek Performans:** HTML önceden hazır olduğu için sunucu işlem yapmaz, sadece dosyayı gönderir. CDN üzerinden çok hızlı dağıtılır.
2.  **Düşük Sunucu Maliyeti:** Veritabanına veya API'ye sürekli istek gitmez.
3.  **SEO:** İçerik her zaman hazırdır.

## Dezavantajları

1.  **Bayat Veri:** Build işleminden sonra veri değişirse, sayfadaki içerik eski kalır (bunu çözmek için ISR kullanılır).
2.  **Build Süresi:** Binlerce sayfa varsa build süresi uzayabilir.

## Nasıl Yapılır?

App Router'da \`fetch\` varsayılan olarak veriyi önbellekler.

\`\`\`typescript
// Bu istek build sırasında 1 kez çalışır
async function getData() {
const res = await fetch('https://api.example.com/data'); // default: force-cache
return res.json();
}
\`\`\`
