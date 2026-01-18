/**
 * ARRAY METODLARI - MAP
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== MAP - DÖNÜŞTÜRME ===\n");

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log("Orijinal:", numbers);
console.log("İki katları:", doubled);

console.log("\n--- Obje Array Dönüştürme ---\n");

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
