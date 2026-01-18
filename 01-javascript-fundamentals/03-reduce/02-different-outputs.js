/**
 * REDUCE - FARKLI TİPTE ÇIKTILAR
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== REDUCE - FARKLI TİPTE ÇIKTILAR ===\n");

// String çıktı
console.log("1. String Çıktı:");
const names = ["Ahmet", "Mehmet", "Ayşe"];
const combined = names.reduce((acc, name, index) => {
  if (index === 0) return name;
  if (index === names.length - 1) return `${acc} ve ${name}`;
  return `${acc}, ${name}`;
}, "");

console.log("   Birleşik:", combined);

// Object çıktı - Gruplama
console.log("\n2. Object Çıktı (Gruplama):");
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

console.log("   Departman grupları:", byDepartment);

// Array çıktı - Flatten
console.log("\n3. Array Çıktı (Flatten):");
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log("   Düzleştirilmiş:", flat);
