/**
 * VAR, LET, CONST FARKLARI
 * Detaylı notlar: NOTES.md
 */

console.log("=== VAR, LET, CONST FARKLARI ===\n");

// ============================================
// 1. BLOCK SCOPE FARKI
// ============================================

console.log("1. Block Scope Farkı:");

// var: block dışında erişilebilir
if (true) {
  var varVariable = "var ile tanımlandı";
  let letVariable = "let ile tanımlandı";
  const constVariable = "const ile tanımlandı";
}

console.log("varVariable:", varVariable); // ✅ Çalışır
// console.log('letVariable:', letVariable); // ❌ ReferenceError
// console.log('constVariable:', constVariable); // ❌ ReferenceError

console.log("\n");

// ============================================
// 2. FOR LOOP'TA BLOCK SCOPE
// ============================================

console.log("2. For Loop'ta Block Scope:");

// var ile - tüm iterasyonlar aynı değişkeni kullanır
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var i:", i); // Hepsi 3 yazdırır
  }, 100);
}

// let ile - her iterasyon kendi scope'una sahip
setTimeout(() => {
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      console.log("let j:", j); // 0, 1, 2 yazdırır
    }, 200);
  }
}, 150);

console.log("\n");

// ============================================
// 3. CONST İLE MUTATION
// ============================================

console.log("3. Const ile Mutation:");

const user = {
  name: "Ahmet",
  age: 25,
};

console.log("Başlangıç:", user);

// ✅ Objenin içeriğini değiştirebiliriz
user.name = "Mehmet";
user.age = 30;
console.log("Değiştirme sonrası:", user);

// ✅ Yeni property ekleyebiliriz
user.city = "Istanbul";
console.log("Yeni property sonrası:", user);

// ❌ Yeni obje atayamayız
// user = { name: 'Ali' }; // TypeError

console.log("\n");

// ============================================
// 4. CONST ARRAY MUTATION
// ============================================

console.log("4. Const Array Mutation:");

const numbers = [1, 2, 3];
console.log("Başlangıç:", numbers);

numbers.push(4);
console.log("push() sonrası:", numbers);

numbers[0] = 10;
console.log("Index değiştirme sonrası:", numbers);

// ❌ Yeni array atayamayız
// numbers = [5, 6, 7]; // TypeError

console.log("\n");

// ============================================
// 5. HOISTING
// ============================================

console.log("5. Hoisting:");

console.log("varValue:", varValue); // undefined
var varValue = "var değeri";

// let ve const: Temporal Dead Zone
// console.log('letValue:', letValue); // ❌ ReferenceError
let letValue = "let değeri";

console.log("\n");

// ============================================
// BEST PRACTICES
// ============================================

console.log("Best Practices:");
console.log("✅ Varsayılan olarak CONST kullan");
console.log("✅ Değer değişecekse LET kullan");
console.log("❌ VAR kullanma");

console.log("\n=== ÖRNEK TAMAMLANDI ===");
