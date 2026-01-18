/**
 * FETCH API - POST İSTEĞİ
 * Detaylı notlar: NOTES.md
 *
 * Not: İnternet bağlantısı gerekir (JSONPlaceholder API)
 */

console.log("=== POST İSTEĞİ ===\n");

const createPost = async () => {
  try {
    const newPost = {
      title: "Yeni Post",
      body: "Test içeriği",
      userId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) throw new Error(`HTTP Hatası! ${response.status}`);

    const created = await response.json();
    console.log("✅ Post oluşturuldu!");
    console.log("ID:", created.id);
    console.log("Title:", created.title);

    console.log("\n=== ÖRNEK TAMAMLANDI ===");
  } catch (error) {
    console.log("❌ Hata:", error.message);
  }
};

createPost();
