/**
 * REDUCE - REACT ÖRNEĞİ
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== REDUCE - REACT ÖRNEĞİ ===\n");

// Sepet toplamı
console.log("1. Sepet Toplamı:");
const cart = [
  { id: 1, name: "Laptop", price: 15000, quantity: 1 },
  { id: 2, name: "Mouse", price: 200, quantity: 2 },
];

const cartTotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log("   Sepet toplamı:", cartTotal, "TL");

// ID lookup objesi
console.log("\n2. ID Lookup Objesi:");
const productLookup = cart.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

console.log("   Lookup objesi:", productLookup);
console.log("   ID 2 ile ürün:", productLookup[2]);

// Tek döngüde map + filter
console.log("\n3. Tek Döngüde Map + Filter:");
const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Mouse", inStock: false },
  { id: 3, name: "Keyboard", inStock: true },
];

const availableNames = products.reduce((acc, product) => {
  if (product.inStock) {
    acc.push(product.name);
  }
  return acc;
}, []);

console.log("   Stokta olan ürünler:", availableNames);

console.log("\n=== ÖRNEK TAMAMLANDI ===");
