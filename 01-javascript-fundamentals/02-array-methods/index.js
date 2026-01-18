/**
 * ARRAY METODLARI: MAP, FILTER
 * Detaylı notlar: NOTES.md
 */

console.log("=== ARRAY METODLARI: MAP, FILTER ===\n");

// ============================================
// 1. MAP - HER ELEMANI DÖNÜŞTÜRME
// ============================================

console.log("1. MAP - Dönüştürme:");

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log("Orijinal:", numbers);
console.log("İki katları:", doubled);

// Obje array'i dönüştürme
const users = [
  { id: 1, name: "Ahmet", age: 25 },
  { id: 2, name: "Mehmet", age: 30 },
  { id: 3, name: "Ayşe", age: 28 },
];

const names = users.map((u) => u.name);
console.log("İsimler:", names);

const cards = users.map((u) => ({
  title: `${u.name} (${u.age} yaşında)`,
  id: u.id,
}));
console.log("Kartlar:", cards);

console.log("\n");

// ============================================
// 2. FILTER - FİLTRELEME
// ============================================

console.log("2. FILTER - Filtreleme:");

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Çift sayılar:", evenNumbers);

const adults = users.filter((u) => u.age >= 28);
console.log("28+ yaş:", adults);

console.log("\n");

// ============================================
// 3. MAP + FILTER BERABER
// ============================================

console.log("3. Map + Filter:");

const adultNames = users.filter((u) => u.age >= 28).map((u) => u.name);

console.log("28+ yaş isimleri:", adultNames);

console.log("\n");

// ============================================
// 4. REACT ÖRNEĞİ
// ============================================

console.log("4. React Örneği:");

const products = [
  { id: 1, name: "Laptop", price: 15000, inStock: true },
  { id: 2, name: "Mouse", price: 200, inStock: true },
  { id: 3, name: "Keyboard", price: 500, inStock: false },
  { id: 4, name: "Monitor", price: 3000, inStock: true },
];

const availableProducts = products
  .filter((p) => p.inStock)
  .map((p) => ({
    ...p,
    priceText: `${p.price} TL`,
    onSale: p.price > 1000,
  }));

console.log("Stokta olan ürünler:", availableProducts);
