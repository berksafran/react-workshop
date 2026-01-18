/**
 * TEMEL TİPLER - ANY, UNKNOWN, NEVER
 * Detaylı notlar: NOTES.md
 */

console.log("=== ANY, UNKNOWN, NEVER ===\n");

// ❌ ANY - Kullanma!
console.log("1. ANY (Kullanma!):");
let anyValue: any = "string";
anyValue = 42;
anyValue = { name: "Test" };
console.log("   any değer:", anyValue);
console.log("   ❌ Tip güvenliği yok!\n");

// ✅ UNKNOWN - Güvenli any
console.log("2. UNKNOWN (Güvenli):");
let unknownValue: unknown = "string";
unknownValue = 42;

if (typeof unknownValue === "number") {
  const squared = unknownValue * unknownValue;
  console.log("   Sayının karesi:", squared);
}
console.log("   ✅ Tip kontrolü gerekir!\n");

// NEVER - Exhaustive checking
console.log("3. NEVER (Exhaustive Check):");
type Color = "red" | "green" | "blue";

function handleColor(color: Color): string {
  switch (color) {
    case "red":
      return "Kırmızı";
    case "green":
      return "Yeşil";
    case "blue":
      return "Mavi";
    default:
      const _check: never = color;
      return _check;
  }
}

console.log("   Renk:", handleColor("red"));
console.log("   ✅ Tüm case'ler kontrol edildi!\n");

console.log("=== ÖRNEK TAMAMLANDI ===");
