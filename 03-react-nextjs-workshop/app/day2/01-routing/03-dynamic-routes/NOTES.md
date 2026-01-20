# Dynamic Routes ve URL Parametreleri

Dynamic Routes (Dinamik Rotalar), URL'deki değişken kısımları yakalamamızı sağlar. Örneğin, `/products/1`, `/products/2`, `/products/123` gibi farklı ürün sayfalarını tek bir route tanımıyla yönetebiliriz.

## URL Parametreleri Nasıl Tanımlanır?

Route path'inde `:` (iki nokta) ile başlayan kısımlar parametre olarak kabul edilir:

```tsx
<Route path="/products/:id" element={<ProductDetail />} />
```

Bu tanım şu URL'lerle eşleşir:

- `/products/1` → `id = "1"`
- `/products/abc` → `id = "abc"`
- `/products/123-xyz` → `id = "123-xyz"`

## useParams Hook'u

`useParams` hook'u, URL'deki parametreleri okumamızı sağlar:

```tsx
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  // id değişkeni URL'deki :id parametresinin değerini içerir

  return <div>Ürün ID: {id}</div>;
}
```

## Birden Fazla Parametre

Bir route'ta birden fazla parametre tanımlayabiliriz:

```tsx
<Route path="/users/:userId/posts/:postId" element={<PostDetail />} />
```

```tsx
function PostDetail() {
  const { userId, postId } = useParams();
  // URL: /users/5/posts/42
  // userId = "5", postId = "42"
}
```

## Query String Parametreleri

URL'deki `?key=value` şeklindeki parametreler için `useSearchParams` hook'u kullanılır:

```tsx
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category"); // ?category=electronics
  const sort = searchParams.get("sort"); // ?sort=price
}
```

## Önemli Notlar

- URL parametreleri **her zaman string** olarak gelir. Sayısal değerleri kullanmak için `Number()` veya `parseInt()` ile dönüştürmeliyiz.
- Parametreler optional (isteğe bağlı) değildir. Optional parametre için iki ayrı route tanımlanmalıdır.
