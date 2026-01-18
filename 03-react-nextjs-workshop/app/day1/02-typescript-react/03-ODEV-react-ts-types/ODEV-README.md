# ÖDEV: Farklı Tipte Props Alan React Bileşeni

## Amaç

TypeScript ile tip güvenli React component yazmak. FC<> kullanmadan, direkt props'a tip vermek.

## Görev

Farklı tipte props alan bir `UserCard` component'i oluşturun.

### Gereksinimler

1. **Props Tipleri:**
   - `user`: Kullanıcı objesi (id, name, email, age)
   - `onEdit`: Edit butonu callback (userId parametresi alır)
   - `onDelete`: Delete butonu callback (userId parametresi alır)
   - `isLoading`: Optional boolean (default: false)
   - `variant`: Optional literal type ('compact' | 'detailed')

2. **Component Özellikleri:**
   - Direkt props'a tip ver
   - Optional props için default değer
   - Event handler tipleri doğru olmalı

3. **Görünüm:**
   - Compact: Sadece isim ve email
   - Detailed: Tüm bilgiler + yaş

## Çözüm

`solution.tsx` dosyasında örnek çözüm var. Önce kendin yapmayı dene!

## İpuçları

⚠️ **Önemli:**

- Props tipini ayrı tanımla
- Optional props için `?` kullan
- Event handler için doğru tip: `(userId: number) => void`
- Variant için literal type kullan

## Ek Görevler (Bonus)

1. PropsWithChildren kullanarak children ekle
2. Generic type ile farklı user tipleri destekle
3. Discriminated union ile farklı variant'lar oluştur
