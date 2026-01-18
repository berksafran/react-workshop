/**
 * ARRAY METODLARI - FILTER
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== FILTER - FİLTRELEME ===\n");

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Orijinal:", numbers);
console.log("Çift sayılar:", evenNumbers);

console.log("\n--- Obje Array Filtreleme ---\n");

const users = [
  { id: 1, name: "Ahmet", age: 25 },
  { id: 2, name: "Mehmet", age: 30 },
  { id: 3, name: "Ayşe", age: 28 },
];

const adults = users.filter((u) => u.age >= 28);
console.log("28+ yaş:", adults);

console.log("\n=== ÖRNEK TAMAMLANDI ===");
