/**
 * VAR, LET, CONST - CONST MUTATION
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== CONST İLE MUTATION ===\n");

console.log("1. Obje Mutation:");

const user = {
  name: "Ahmet",
  age: 25,
};

console.log("   Başlangıç:", user);

// ✅ Objenin içeriğini değiştirebiliriz
user.name = "Mehmet";
user.age = 30;
console.log("   Değiştirme sonrası:", user);

// ✅ Yeni property ekleyebiliriz
user.city = "Istanbul";
console.log("   Yeni property sonrası:", user);

// ❌ Yeni obje atayamayız
// user = { name: 'Ali' }; // TypeError

console.log("\n2. Array Mutation:");

const numbers = [1, 2, 3];
console.log("   Başlangıç:", numbers);

numbers.push(4);
console.log("   push() sonrası:", numbers);

numbers[0] = 10;
console.log("   Index değiştirme sonrası:", numbers);

// ❌ Yeni array atayamayız
// numbers = [5, 6, 7]; // TypeError

console.log("\n=== ÖRNEK TAMAMLANDI ===");
