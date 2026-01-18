/**
 * REDUCE - BASIT TOPLAMA
 * Detaylı notlar: ../NOTES.md
 */

console.log("=== REDUCE - BASIT TOPLAMA ===\n");

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => {
  console.log(`acc: ${acc}, num: ${num}`);
  return acc + num;
}, 0);

console.log("\nToplam:", sum);
