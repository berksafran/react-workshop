/**
 * CALLBACK HELL - NEDEN ASYNC/AWAIT GEREKLİ?
 * Detaylı notlar: NOTES.md
 *
 * Bu örnek eski yöntemin (callback) ne kadar karmaşık olduğunu gösterir.
 */

console.log("=== CALLBACK HELL ===\n");

// Simüle edilmiş async fonksiyonlar
const getUser = (callback) => {
  setTimeout(() => {
    callback(null, { id: 1, name: "Ahmet" });
  }, 500);
};

const getPosts = (userId, callback) => {
  setTimeout(() => {
    callback(null, [{ id: 1, title: "İlk Post", userId }]);
  }, 500);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    callback(null, [{ id: 1, text: "Güzel post!", postId }]);
  }, 500);
};

// ❌ CALLBACK HELL - Okunması zor!
console.log("❌ Callback Hell (Eski Yöntem):");
console.log("Bekleyin...\n");

getUser((error, user) => {
  if (error) {
    console.log("Hata:", error);
    return;
  }
  console.log("1. Kullanıcı:", user.name);

  getPosts(user.id, (error, posts) => {
    if (error) {
      console.log("Hata:", error);
      return;
    }
    console.log("2. Post:", posts[0].title);

    getComments(posts[0].id, (error, comments) => {
      if (error) {
        console.log("Hata:", error);
        return;
      }
      console.log("3. Yorum:", comments[0].text);

      // Daha fazla iç içe callback olabilir...
      // Bu "Callback Hell" veya "Pyramid of Doom" olarak bilinir!

      console.log("\n❌ Çok karmaşık ve okunması zor!");
      console.log(
        "✅ Çözüm için: 00-callback-hell-solution.js dosyasına bakın\n",
      );
      console.log("=== ÖRNEK TAMAMLANDI ===");
    });
  });
});
