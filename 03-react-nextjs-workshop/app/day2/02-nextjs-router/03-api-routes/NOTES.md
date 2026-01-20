# Next.js API Routes

Next.js API Routes, backend API endpoint'leri oluşturmanızı sağlar. Aynı projede hem frontend hem backend kod yazabilirsiniz.

## App Router'da API Routes

App Router'da API routes **Route Handlers** olarak adlandırılır ve `route.ts` (veya `route.js`) dosyalarında tanımlanır.

### Temel Yapı

```
app/
└── api/
    ├── hello/
    │   └── route.ts
    └── users/
        └── route.ts
```

## HTTP Methods

### GET Request

```typescript
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello from API!" });
}
```

### POST Request

```typescript
// app/api/users/route.ts
export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    success: true,
    data: body,
  });
}
```

### PUT Request

```typescript
export async function PUT(request: Request) {
  const body = await request.json();
  // Update logic
  return Response.json({ updated: true });
}
```

### DELETE Request

```typescript
export async function DELETE(request: Request) {
  // Delete logic
  return Response.json({ deleted: true });
}
```

## Dynamic Routes

URL parametrelerini yakalamak için:

```typescript
// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const userId = params.id;

  return Response.json({
    userId,
    name: "User " + userId,
  });
}
```

## Request & Response

### Request Headers

```typescript
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ data: "Protected data" });
}
```

### Query Parameters

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  return Response.json({ query });
}
```

### Response Status Codes

```typescript
// 200 OK (default)
return Response.json({ data: "Success" });

// 201 Created
return Response.json({ created: true }, { status: 201 });

// 400 Bad Request
return Response.json({ error: "Invalid input" }, { status: 400 });

// 404 Not Found
return Response.json({ error: "Not found" }, { status: 404 });

// 500 Internal Server Error
return Response.json({ error: "Server error" }, { status: 500 });
```

## CORS

```typescript
export async function GET(request: Request) {
  return Response.json(
    { data: "CORS enabled" },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
```

## Kullanım Alanları

1. **Form Submission** - Contact forms, newsletter signup
2. **Authentication** - Login, register endpoints
3. **Database Operations** - CRUD operations
4. **Third-party API Proxy** - API key'leri gizlemek için
5. **Webhooks** - External service callbacks
6. **File Upload** - Image/file processing

## Avantajlar

- ✅ **Tek Proje** - Frontend ve backend aynı yerde
- ✅ **TypeScript Desteği** - Type-safe API'ler
- ✅ **Otomatik Deployment** - Vercel gibi platformlarda
- ✅ **Serverless** - Otomatik scaling
- ✅ **API Key Gizleme** - Environment variables ile güvenli
