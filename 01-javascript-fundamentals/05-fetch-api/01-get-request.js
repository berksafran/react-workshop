/**
 * FETCH API - BASIT GET
 * Detaylı notlar: NOTES.md
 *
 * Not: İnternet bağlantısı gerekir (JSONPlaceholder API)
 */

console.log("=== BASIT GET İSTEĞİ ===\n");

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Hatası! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log("✅ Kullanıcılar:", users.length, "adet");
    console.log("İlk kullanıcı:", users[0].name);

    console.log("\n=== ÖRNEK TAMAMLANDI ===");
  } catch (error) {
    console.log("❌ Hata:", error.message);
  }
};

fetchUsers();
