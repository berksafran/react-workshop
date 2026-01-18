/**
 * ÖDEV ÇÖZÜMÜ: API'den Veri Çekme ve Array Metodlarıyla Dönüştürme
 *
 * Bu dosya örnek bir çözümdür. Önce kendin yapmayı dene!
 */

console.log("=== EN AKTİF KULLANICILAR ===\n");

// Ana fonksiyon
const getMostActiveUsers = async () => {
  try {
    console.log("Veriler getiriliyor...\n");

    // 1. Paralel olarak kullanıcıları ve postları çek
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    ]);

    // 2. Her kullanıcı için post sayısını hesapla (reduce kullanarak)
    const postCountByUser = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    // 3. Kullanıcılara post sayısını ekle (map kullanarak)
    const usersWithPostCount = users.map((user) => ({
      id: user.id,
      name: user.name,
      postCount: postCountByUser[user.id] || 0,
    }));

    // 4. 5'ten fazla post yazan kullanıcıları filtrele
    const activeUsers = usersWithPostCount
      .filter((u) => u.postCount > 5)
      .sort((a, b) => b.postCount - a.postCount); // Post sayısına göre sırala

    // 5. Sonucu göster
    console.log("En Aktif Kullanıcılar (5+ post):");
    console.log("================================\n");

    activeUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} - ${user.postCount} post`);
    });

    console.log("\n");

    // BONUS: İstatistikler
    const totalPosts = Object.values(postCountByUser).reduce(
      (a, b) => a + b,
      0,
    );
    const avgPosts = (totalPosts / users.length).toFixed(1);
    const maxPosts = Math.max(...Object.values(postCountByUser));
    const topUser = usersWithPostCount.find((u) => u.postCount === maxPosts);

    console.log("İstatistikler:");
    console.log("==============");
    console.log(`Toplam kullanıcı: ${users.length}`);
    console.log(`Toplam post: ${totalPosts}`);
    console.log(`Ortalama post: ${avgPosts}`);
    console.log(`En çok post yazan: ${topUser.name} (${maxPosts} post)`);
  } catch (error) {
    console.error("❌ Hata:", error.message);
  }
};

// Çalıştır
getMostActiveUsers();
