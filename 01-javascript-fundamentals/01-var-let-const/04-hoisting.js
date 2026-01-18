/**
 * VAR, LET, CONST - HOISTING
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== HOISTING ===\n");

console.log("1. VAR Hoisting:");

console.log("   varValue:", varValue); // undefined (hata vermez!)
var varValue = "var değeri";
console.log("   Atama sonrası:", varValue);

console.log("\n2. LET/CONST - Temporal Dead Zone:");

// ❌ Temporal Dead Zone - Hata verir!
// console.log('letValue:', letValue); // ReferenceError!

let letValue = "let değeri";
console.log("   letValue:", letValue);

console.log("\n=== ÖRNEK TAMAMLANDI ===");
