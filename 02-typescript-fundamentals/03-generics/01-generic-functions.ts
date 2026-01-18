/**
 * GENERICS - BASIT GENERIC FONKS İYON
 * Detaylı notlar: NOTES.md
 */

console.log("=== GENERIC FONKS İYON ===\n");

function firstElement<T>(array: T[]): T {
  return array[0];
}

const num = firstElement([1, 2, 3]); // number
const text = firstElement(["a", "b"]); // string

console.log("Number:", num);
console.log("String:", text);

console.log("\n=== ÖRNEK TAMAMLANDI ===");
