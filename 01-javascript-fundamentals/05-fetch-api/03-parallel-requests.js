/**
 * FETCH API - PARALEL İSTEKLER
 * Detaylı notlar: NOTES.md
 *
 * Not: İnternet bağlantısı gerekir (JSONPlaceholder API)
 */

console.log("=== PARALEL İSTEKLER ===\n");

const fetchAllData = async () => {
  try {
    const start = Date.now();

    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    ]);

    const duration = Date.now() - start;
    console.log(`✅ Tamamlandı (${duration}ms)`);
    console.log("Kullanıcılar:", users.length);
    console.log("Postlar:", posts.length);

    console.log("\n=== ÖRNEK TAMAMLANDI ===");
  } catch (error) {
    console.log("❌ Hata:", error.message);
  }
};

fetchAllData();
