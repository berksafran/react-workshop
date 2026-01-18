/**
 * CALLBACK HELL - ÇÖZÜM: ASYNC/AWAIT
 * Detaylı notlar: NOTES.md
 *
 * 00-callback-hell.js dosyasındaki problemin çözümü
 */

console.log("=== CALLBACK HELL ÇÖZÜMÜ: ASYNC/AWAIT ===\n");

// Async/await ile temiz çözüm
const getUserAsync = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Ahmet" }), 500),
  );

const getPostsAsync = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, title: "İlk Post", userId }]), 500),
  );

const getCommentsAsync = (postId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: "Güzel post!", postId }]), 500),
  );

const fetchData = async () => {
  try {
    console.log("Veri getiriliyor...\n");

    const user = await getUserAsync();
    console.log("1. Kullanıcı:", user.name);

    const posts = await getPostsAsync(user.id);
    console.log("2. Post:", posts[0].title);

    const comments = await getCommentsAsync(posts[0].id);
    console.log("3. Yorum:", comments[0].text);

    console.log("\n✅ Çok daha okunabilir ve temiz!");
    console.log("✅ Senkron kod gibi okunur");
    console.log("✅ Try-catch ile hata yönetimi kolay");

    console.log("\n=== ÖRNEK TAMAMLANDI ===");
  } catch (error) {
    console.log("Hata:", error);
  }
};

fetchData();
