# Next.js 16 Middleware

## Middleware Nedir?

Middleware, Next.js'te **request tamamlanmadan önce** kod çalıştırmanıza olanak tanıyan bir özelliktir. Request ve response'u değiştirebilir, yönlendirebilir, header ekleyebilir veya rewrite yapabilirsiniz.

## Edge Runtime Nedir?

Edge Runtime, V8 JavaScript motorunun (Chrome tarayıcısında ve Node.js'te kullanılan motor) optimize edilmiş ve hafifletilmiş bir versiyonudur. Web standartlarına (Request, Response, Fetch API vb.) uyumludur ancak Node.js'in tüm özelliklerini barındırmaz.

### Node.js'den Farkı Nedir?

1.  **API Desteği:**
    - **Node.js:** Dosya sistemi (`fs`), işletim sistemi (`os`), path manipülasyonu gibi tüm sistem kaynaklarına erişebilir.
    - **Edge Runtime:** `fs`, `path`, `os` gibi Node.js modüllerini desteklemez. Sadece standart Web API'lerini (`fetch`, `Request`, `Response`, `URL`, `crypto`, `ReadableStream`) destekler.

2.  **Çalışma Ortamı (Environment):**
    - **Node.js:** Genellikle tek bir sunucuda veya belirli bir bölgedeki container'da çalışır.
    - **Edge Runtime:** Global olarak dağıtılmış CDN (Content Delivery Network) sunucularında, kullanıcının fiziksel konumuna en yakın noktada çalışır "Edge" (Uç) ismini buradan alır.

3.  **Performans ve Latency:**
    - **Node.js:** Cold start süreleri daha uzun olabilir ve kullanıcı sunucuya uzaksa latency (gecikme) artar.
    - **Edge Runtime:** İnanılmaz hızlı başlatma sürelerine (low cold start) sahiptir ve kullanıcıya fiziksel olarak yakın olduğu için latency minimaldir.

### Neden Next.js'de Edge Runtime İhtiyacı Olmuştur?

1.  **Hız ve Performans:** Middleware her bir istekte (request) çalışır. Eğer middleware yavaş çalışırsa, bu tüm sitenin yavaşlamasına neden olur. Edge Runtime, milisaniyeler içinde açılarak bu performans darboğazını önler.
2.  **Global Dağıtım:** Kullanıcı dünyanın neresinde olursa olsun, auth kontrolü veya yönlendirme mantığının o kullanıcıya en yakın sunucuda gerçekleşmesi kullanıcı deneyimini iyileştirir.
3.  **Güvenlik:** Kısıtlı API seti, saldırı yüzeyini azaltır. Dosya sistemine erişim olmadığı için daha güvenli bir ortam sağlar.
4.  **Maliyet:** Daha az kaynak tükettiği için serverless fonksiyonlara gore genellikle daha maliyet etkindir.

## Temel Özellikler

### 1. Edge Runtime

- Middleware **Edge Runtime**'da çalışır (Node.js değil)
- Son derece hızlı ve düşük latency
- Tüm dünyada distributed olarak çalışır
- Node.js API'leri kullanılamaz (fs, path vb.)

### 2. Request/Response Manipulation

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Request bilgilerine erişim
  const url = request.nextUrl;
  const cookies = request.cookies;
  const headers = request.headers;

  // Response oluşturma
  const response = NextResponse.next();

  return response;
}
```

### 3. Matcher Configuration

```typescript
export const config = {
  matcher: [
    "/dashboard/:path*", // Dashboard ve alt sayfaları
    "/api/:path*", // Tüm API route'ları
    "/((?!_next|static).*)", // _next ve static hariç her şey
  ],
};
```

## Kullanım Senaryoları

### 1. Authentication & Authorization

```typescript
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

### 2. Geolocation & i18n

```typescript
export function middleware(request: NextRequest) {
  const country = request.geo?.country || "US";
  const locale = getLocaleFromCountry(country);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;

  return NextResponse.redirect(url);
}
```

### 3. API Proxy

```typescript
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/proxy")) {
    const targetUrl = request.nextUrl.searchParams.get("url");

    if (targetUrl && isAllowedDomain(targetUrl)) {
      return NextResponse.rewrite(targetUrl);
    }
  }

  return NextResponse.next();
}
```

### 4. Custom Headers

```typescript
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");

  // CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");

  // Custom tracking
  response.headers.set("X-Request-ID", crypto.randomUUID());

  return response;
}
```

### 5. Rate Limiting

```typescript
const rateLimit = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  const ip = request.ip || "unknown";
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 10;

  const requests = rateLimit.get(ip) || [];
  const recentRequests = requests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  return NextResponse.next();
}
```

## Next.js 16 Yenilikleri

### 1. Turbopack Integration

- Middleware hot reload çok daha hızlı
- Development experience iyileştirildi

### 2. Improved Type Safety

- Daha iyi TypeScript desteği
- Type inference iyileştirildi

### 3. Better Performance

- Edge Runtime optimizasyonları
- Daha düşük cold start süreleri

## Middleware vs API Routes

| Özellik      | Middleware              | API Routes                    |
| ------------ | ----------------------- | ----------------------------- |
| Runtime      | Edge Runtime            | Node.js Runtime               |
| Execution    | Her request'te          | Sadece API çağrılarında       |
| Node.js APIs | ❌ Kullanılamaz         | ✅ Kullanılabilir             |
| Performance  | ⚡ Çok hızlı            | 🐢 Daha yavaş                 |
| Use Case     | Auth, redirect, headers | Business logic, DB operations |

## Best Practices

### ✅ DO

- Middleware'i hafif tutun
- Matcher ile scope'u sınırlayın
- Edge Runtime limitlerini bilin
- Error handling yapın
- Response header'larını kullanın

### ❌ DON'T

- Ağır hesaplamalar yapmayın
- Database işlemleri yapmayın
- Node.js API'leri kullanmayın
- Her route için middleware çalıştırmayın
- Sensitive data'yı client'a expose etmeyin

## Production Considerations

### 1. Rate Limiting

- In-memory yerine Redis kullanın
- Distributed systems için uygun çözüm seçin

### 2. Caching

- Edge caching'den yararlanın
- Cache-Control header'larını doğru kullanın

### 3. Security

- CORS header'larını dikkatli ayarlayın
- Security header'ları ekleyin
- Input validation yapın

### 4. Monitoring

- Request tracking için unique ID kullanın
- Performance metrikleri toplayın
- Error logging yapın

## Kaynaklar

- [Next.js Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge)
- [NextResponse API](https://nextjs.org/docs/app/api-reference/functions/next-response)
