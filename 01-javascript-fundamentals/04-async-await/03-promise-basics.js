/**
 * ASYNC/AWAIT - PROMISE TEMELLERİ
 * Detaylı notlar: NOTES.md
 */

console.log("=== PROMISE TEMELLERİ ===\n");

const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("İşlem başarılı!");
  }, 1000);
});

console.log("Promise oluşturuldu, bekleyin...\n");

simplePromise
  .then((result) => {
    console.log("✅", result);
    console.log("\n=== ÖRNEK TAMAMLANDI ===");
  })
  .catch((error) => console.log("❌", error));
