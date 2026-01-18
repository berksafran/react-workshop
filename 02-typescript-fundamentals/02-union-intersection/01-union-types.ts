/**
 * UNION VE INTERSECTION - UNION TYPES
 * Detaylı notlar: NOTES.md
 */

console.log("=== UNION TYPES ===\n");

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "text";
value = 42;

console.log("Union değer:", value);

// Literal types
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  console.log(`${direction} yönüne hareket`);
}

move("up");

console.log("\n=== ÖRNEK TAMAMLANDI ===");
