# Temel Tipler - any, unknown, never

## Genel Bakış

TypeScript'in temel tiplerini ve özellikle **any, unknown, never** arasındaki farkları anlamak kritiktir.

## ÖNEMLİ: TypeScript Runtime'da Çalışmaz!

**Java'dan farklı olarak:**

- TypeScript sadece **compile time**'da kontrol eder
- Tip hatası olsa bile **JavaScript'e compile edilir**
- Runtime'da **tip kontrolü yok**

```typescript
const sayi: number = 42;
// const metin: string = sayi; // TS Hatası!

// Ama compile edilirse JavaScript olur ve çalışır!
```

**Sonuç:** Runtime validasyon da gerekir (Zod, Yup, vs.)

---

## 1. ANY - Tip Güvenliğini Kaybettirir

### Ne İşe Yarar?

Her şey olabilir, TypeScript'in tip kontrolünü devre dışı bırakır.

```typescript
let deger: any = "string";
deger = 42;
deger = { isim: "Test" };
deger.olmayan.property; // Hata vermez! (runtime'da crash)
```

### Neden Kötü?

- ❌ Tip güvenliği yok
- ❌ IDE yardımı yok
- ❌ Refactoring zor
- ❌ Hatalar runtime'da ortaya çıkar

### Ne Zaman Kullanılır?

- Sadece **3rd party** kütüphaneler tip tanımı yoksa
- **Geçici** olarak (sonra düzelt)
- **Asla** production kodunda yaygın kullanma!

---

## 2. UNKNOWN - Güvenli ANY

### Ne İşe Yarar?

Her şey atanabilir ama **tip kontrolü yapmadan kullanılamaz**.

```typescript
let deger: unknown = "string";
deger = 42;

// ❌ Direkt kullanılamaz
// const uzunluk = deger.length; // TS Hatası!

// ✅ Önce tip kontrolü yap
if (typeof deger === "string") {
  const uzunluk = deger.length; // ✅ Artık string
}
```

### Neden İyi?

- ✅ Tip güvenliği var
- ✅ IDE yardımı var (tip kontrolünden sonra)
- ✅ Runtime hataları önler
- ✅ Refactoring güvenli

### Ne Zaman Kullanılır?

- API'den gelen veri
- User input
- JSON.parse() sonucu
- Tip bilgisi olmayan her şey

**Kural:** any yerine **her zaman** unknown kullan!

---

## 3. NEVER - Hiçbir Zaman Dönmeyen

### Ne İşe Yarar?

Fonksiyon hiçbir zaman return etmez veya exhaustive checking için kullanılır.

### Kullanım 1: Hata Fırlatan Fonksiyon

```typescript
function hataFirlat(mesaj: string): never {
  throw new Error(mesaj);
  // Hiçbir zaman return etmez
}
```

### Kullanım 2: Sonsuz Döngü

```typescript
function sonsuzDongu(): never {
  while (true) {
    // Sonsuz döngü
  }
}
```

### Kullanım 3: Exhaustive Checking (Önemli!)

```typescript
type Durum = "basarili" | "basarisiz" | "bekliyor";

function durumIsle(durum: Durum): string {
  switch (durum) {
    case "basarili":
      return "Başarılı";
    case "basarisiz":
      return "Başarısız";
    case "bekliyor":
      return "Bekliyor";
    default:
      // Eğer yeni bir durum eklenirse TypeScript hata verir!
      const _exhaustiveCheck: never = durum;
      return _exhaustiveCheck;
  }
}
```

**Tricky Nokta:** Yeni bir durum eklenirse TypeScript compile hatası verir!

```typescript
type Durum = "basarili" | "basarisiz" | "bekliyor" | "iptal"; // Yeni!

// ❌ TypeScript hatası: 'iptal' never'a atanamaz
// Switch'e yeni case eklemen gerekir!
```

---

## 4. ANY vs UNKNOWN vs NEVER Karşılaştırma

| Özellik              | ANY       | UNKNOWN    | NEVER      |
| -------------------- | --------- | ---------- | ---------- |
| Her şey atanabilir   | ✅        | ✅         | ❌         |
| Tip kontrolü gerekir | ❌        | ✅         | -          |
| Tip güvenliği        | ❌        | ✅         | ✅         |
| IDE yardımı          | ❌        | ✅ (sonra) | ✅         |
| Kullanım             | 3rd party | API, input | Exhaustive |

---

## 5. React'ta Kullanım

### API Response - unknown kullan

```typescript
const fetchUser = async (): Promise<unknown> => {
  const response = await fetch("/api/user");
  const data = await response.json(); // unknown döner

  // Tip kontrolü yap
  if (isUser(data)) {
    return data; // Artık User tipi
  }

  throw new Error("Geçersiz veri");
};

// Type guard
function isUser(data: unknown): data is User {
  return (
    typeof data === "object" && data !== null && "id" in data && "name" in data
  );
}
```

### State - never kullanma, union kullan

```typescript
// ❌ YANLIŞ
const [data, setData] = useState<any>(null);

// ✅ DOĞRU
type DataState =
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };

const [state, setState] = useState<DataState>({ status: "loading" });
```

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **any yerine unknown kullan**
2. **Tip kontrolü yap** (type guards)
3. **never ile exhaustive check**
4. **Strict mode aç** (tsconfig.json)
5. **Runtime validasyon** (Zod, Yup)

### ❌ Yapılmaması Gerekenler

1. **any kullanmak** (tip güvenliği kaybeder)
2. **unknown'ı kontrol etmeden kullanmak**
3. **Tip hatalarını ignore etmek** (@ts-ignore)

---

## Sık Sorulan Sorular

1. **Soru:** any ve unknown farkı nedir?
   **Cevap:** any tip kontrolü yok, unknown tip kontrolü gerekir.

2. **Soru:** TypeScript tip hatası olsa bile kod çalışır mı?
   **Cevap:** Evet! TypeScript sadece compile time'da kontrol eder.

3. **Soru:** never ne zaman kullanılır?
   **Cevap:** Exhaustive checking ve hiçbir zaman return etmeyen fonksiyonlar.

4. **Soru:** API'den gelen veri için hangi tip?
   **Cevap:** unknown + tip kontrolü (type guard).

---

## Ek Kaynaklar

- [TypeScript Handbook - any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
- [TypeScript Handbook - unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)
- [TypeScript Handbook - never](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)
