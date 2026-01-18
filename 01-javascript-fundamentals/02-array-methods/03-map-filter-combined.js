/**
 * ARRAY METODLARI - MAP + FILTER
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== MAP + FILTER BERABER ===\n");

const users = [
  { id: 1, name: "Ahmet", age: 25 },
  { id: 2, name: "Mehmet", age: 30 },
  { id: 3, name: "Ayşe", age: 28 },
];

// Method chaining
const adultNames = users.filter((u) => u.age >= 28).map((u) => u.name);

console.log("28+ yaş isimleri:", adultNames);

console.log("\n--- React Örneği ---\n");

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

console.log("\n=== ÖRNEK TAMAMLANDI ===");
