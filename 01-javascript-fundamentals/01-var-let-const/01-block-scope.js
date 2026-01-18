/**
 * VAR, LET, CONST - BLOCK SCOPE
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== BLOCK SCOPE FARKI ===\n");

// var: block dışında erişilebilir
if (true) {
  var varVariable = "var ile tanımlandı";
  let letVariable = "let ile tanımlandı";
  const constVariable = "const ile tanımlandı";
}

console.log("varVariable:", varVariable); // ✅ Çalışır
// console.log('letVariable:', letVariable); // ❌ ReferenceError
// console.log('constVariable:', constVariable); // ❌ ReferenceError

console.log("\n=== ÖRNEK TAMAMLANDI ===");
