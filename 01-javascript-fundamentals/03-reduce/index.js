/**
 * REDUCE - DERİN BAKIŞ
 * Detaylı notlar: NOTES.md
 */

console.log("=== REDUCE - DERİN BAKIŞ ===\n");

// ============================================
// 1. BASIT TOPLAMA
// ============================================

console.log("1. Basit Toplama:");

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => {
  console.log(`  acc: ${acc}, num: ${num}`);
  return acc + num;
}, 0);

console.log("Toplam:", sum);
console.log("\n");

// ============================================
// 2. FARKLI TİPTE ÇIKTILAR
// ============================================

console.log("2. Farklı Tipte Çıktılar:");

// String çıktı
const names = ["Ahmet", "Mehmet", "Ayşe"];
const combined = names.reduce((acc, name, index) => {
  if (index === 0) return name;
  if (index === names.length - 1) return `${acc} ve ${name}`;
  return `${acc}, ${name}`;
}, "");

console.log("Birleşik:", combined);

// Object çıktı - Gruplama
const users = [
  { name: "Ahmet", department: "IT" },
  { name: "Mehmet", department: "HR" },
  { name: "Ayşe", department: "IT" },
];

const byDepartment = users.reduce((acc, user) => {
  if (!acc[user.department]) {
    acc[user.department] = [];
  }
  acc[user.department].push(user.name);
  return acc;
}, {});

console.log("Departman grupları:", byDepartment);

// Array çıktı - Flatten
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log("Düzleştirilmiş:", flat);

console.log("\n");

// ============================================
// 3. REACT ÖRNEĞİ - SEPET TOPLAMI
// ============================================

console.log("3. React Örneği - Sepet:");

const cart = [
  { id: 1, name: "Laptop", price: 15000, quantity: 1 },
  { id: 2, name: "Mouse", price: 200, quantity: 2 },
];

const cartTotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log("Sepet toplamı:", cartTotal, "TL");

// ID lookup objesi
const productLookup = cart.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

console.log("Lookup:", productLookup[2]);

console.log("\n");

// ============================================
// 4. REDUCE İLE MAP+FILTER
// ============================================

console.log("4. Reduce ile Map+Filter:");

const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Mouse", inStock: false },
  { id: 3, name: "Keyboard", inStock: true },
];

// Tek döngüde hem filtrele hem dönüştür
const availableNames = products.reduce((acc, product) => {
  if (product.inStock) {
    acc.push(product.name);
  }
  return acc;
}, []);

console.log("Stokta olan ürünler:", availableNames);

console.log("\n");

// ============================================
// BEST PRACTICES
// ============================================

console.log("Best Practices:");
console.log("✅ Her zaman başlangıç değeri ver");
console.log("✅ Accumulator'ı return et");
console.log("✅ Farklı tip çıktılar için kullan");
console.log("❌ Basit map/filter yeterli ise reduce kullanma");

console.log("\n=== ÖRNEK TAMAMLANDI ===");
