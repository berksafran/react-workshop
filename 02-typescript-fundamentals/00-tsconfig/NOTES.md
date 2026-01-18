# TSConfig - Detaylı Notlar

## Genel Bakış

`tsconfig.json` dosyası TypeScript projesinin davranışını kontrol eder. Doğru yapılandırma, tip güvenliğini artırır ve hataları önler.

## 1. Strict Mode - En Önemli!

⚠️ **Mutlaka kullan:** `"strict": true`

Strict mode şu ayarları aktif eder:

- `noImplicitAny`
- `strictNullChecks`
- `strictFunctionTypes`
- `strictBindCallApply`
- `strictPropertyInitialization`
- `noImplicitThis`
- `alwaysStrict`

### Neden Önemli?

- Daha güvenli kod
- Hataları compile time'da yakala
- Runtime hatalarını önle

---

## 2. No Implicit Any

⚠️ **Önemli:** TypeScript otomatik olarak `any` kullanmasın!

```typescript
// ❌ Yanlış (noImplicitAny: false)
function add(a, b) {
  // a ve b otomatik olarak any
  return a + b;
}

// ✅ Doğru (noImplicitAny: true)
function add(a: number, b: number): number {
  return a + b;
}
```

### Neden Önemli?

- `any` kullanımı tip güvenliğini yok eder
- Hataları compile time'da yakala
- Daha iyi IDE desteği

---

## 3. Strict Null Checks

⚠️ **Çok Önemli:** `null` ve `undefined` kontrolü

```typescript
// strictNullChecks: true ile
let name: string = "Ahmet";
name = null; // ❌ Hata! string null olamaz

let name: string | null = "Ahmet";
name = null; // ✅ Doğru
```

### Neden Önemli?

- Null pointer hatalarını önle
- "Cannot read property of undefined" hatası yok
- Daha güvenli kod

---

## 4. Module Resolution

### Module

```json
"module": "ESNext"
```

Modern JavaScript module sistemi (import/export)

### Module Resolution

```json
"moduleResolution": "bundler"
```

Next.js ve modern bundler'lar için

### Target

```json
"target": "ES2020"
```

Hangi JavaScript versiyonuna compile edilecek

---

## 5. Path Mapping

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```

### Kullanım

```typescript
// ❌ Uzun path
import { Button } from "../../../components/Button";

// ✅ Kısa path
import { Button } from "@/components/Button";
```

### Neden Önemli?

- Daha okunabilir import'lar
- Dosya taşıma kolaylaşır
- Refactoring kolay

---

## 6. Emit Ayarları

### No Emit

```json
"noEmit": true
```

Next.js kendi compile eder, TypeScript sadece type check yapar.

### Declaration

```json
"declaration": true
```

`.d.ts` dosyaları oluştur (library yazıyorsan)

### Source Map

```json
"sourceMap": true
```

Debug için source map oluştur

---

## 7. Type Checking

### Skip Lib Check

```json
"skipLibCheck": true
```

`node_modules` içindeki type check'i atla (performans için)

### No Unused Locals

```json
"noUnusedLocals": true
```

Kullanılmayan değişkenlere izin verme

### No Unused Parameters

```json
"noUnusedParameters": true
```

Kullanılmayan parametrelere izin verme

⚠️ **Dikkat:** Bazen `_` prefix ile kullanılmayan parametreyi belirtebilirsin:

```typescript
function onClick(_event: MouseEvent) {
  // event kullanılmıyor ama tip güvenliği için var
}
```

---

## 8. Advanced Ayarlar

### No Implicit Returns

```json
"noImplicitReturns": true
```

Tüm code path'leri return etmeli

```typescript
// ❌ Yanlış
function getValue(x: number): number {
  if (x > 0) {
    return x;
  }
  // else durumunda return yok!
}

// ✅ Doğru
function getValue(x: number): number {
  if (x > 0) {
    return x;
  }
  return 0;
}
```

### No Fallthrough Cases

```json
"noFallthroughCasesInSwitch": true
```

Switch case'de break zorunlu

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **strict: true** → Her zaman kullan!
2. **noImplicitAny: true** → any kullanmayı zorlaştır
3. **strictNullChecks: true** → null/undefined kontrolü
4. **paths** → @ ile kısa import path'ler
5. **noUnusedLocals/Parameters** → Temiz kod

### ❌ Yapılmaması Gerekenler

1. **strict: false** → Asla!
2. **any kullanımı** → Mümkün olduğunca kaçın
3. **skipLibCheck: false** → Performans kaybı

---

## Sık Sorulan Sorular

1. **Soru:** strict: true neden önemli?
   **Cevap:** Tüm strict kontrolleri aktif eder, daha güvenli kod.

2. **Soru:** noImplicitAny ne işe yarar?
   **Cevap:** TypeScript otomatik olarak any kullanmasın, her değişkenin tipi belirtilmeli.

3. **Soru:** strictNullChecks neden gerekli?
   **Cevap:** null/undefined hatalarını compile time'da yakalar.

4. **Soru:** paths ayarı neden kullanılır?
   **Cevap:** @ ile kısa import path'ler, daha okunabilir kod.

---

## Ek Kaynaklar

- [TypeScript Handbook - tsconfig](https://www.typescriptlang.org/tsconfig)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
