/**
 * ASYNC/AWAIT VE PROMISE
 * Detaylı notlar: NOTES.md
 */

console.log("=== ASYNC/AWAIT VE PROMISE ===\n");

// ============================================
// 1. PROMISE TEMELLERİ
// ============================================

console.log("1. Promise Temelleri:");

const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("İşlem başarılı!");
  }, 1000);
});

simplePromise
  .then((result) => console.log("✅", result))
  .catch((error) => console.log("❌", error));

setTimeout(() => {
  console.log("\n");

  // ============================================
  // 2. ASYNC/AWAIT - DAHA OKUNAKLI
  // ============================================

  console.log("2. Async/Await:");

  const fetchData = async () => {
    try {
      const getUser = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ id: 1, name: "Ahmet" }), 500),
        );

      const getPosts = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve([{ id: 1, title: "İlk Post" }]), 500),
        );

      const user = await getUser();
      console.log("  Kullanıcı:", user.name);

      const posts = await getPosts();
      console.log("  İlk post:", posts[0].title);
    } catch (error) {
      console.log("  Hata:", error);
    }
  };

  fetchData();
}, 1500);

// ============================================
// 3. PARALEL İŞLEMLER - PROMISE.ALL
// ============================================

setTimeout(() => {
  console.log("\n");
  console.log("3. Paralel İşlemler:");

  const getUser = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ id: 1, name: "Ayşe" }), 1000),
    );

  const getSettings = () =>
    new Promise((resolve) => setTimeout(() => resolve({ theme: "dark" }), 800));

  // Paralel - Hepsi aynı anda başlar
  const fetchParallel = async () => {
    const start = Date.now();

    const [user, settings] = await Promise.all([getUser(), getSettings()]);

    const duration = Date.now() - start;
    console.log(`  ✅ Tamamlandı (${duration}ms)`);
    console.log("  Kullanıcı:", user.name);
    console.log("  Tema:", settings.theme);
  };

  fetchParallel();
}, 3000);

// ============================================
// 4. HATA YÖNETİMİ
// ============================================

setTimeout(() => {
  console.log("\n");
  console.log("4. Hata Yönetimi:");

  const mayFail = async (shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        shouldSucceed
          ? resolve("Başarılı!")
          : reject(new Error("Hata oluştu!"));
      }, 500);
    });
  };

  const handleError = async () => {
    try {
      await mayFail(false);
    } catch (error) {
      console.log("  ❌ Yakalanan hata:", error.message);
    }
  };

  handleError();
}, 5000);

// ============================================
// BEST PRACTICES
// ============================================

setTimeout(() => {
  console.log("\n");
  console.log("Best Practices:");
  console.log("✅ async function her zaman Promise döner");
  console.log("✅ await sadece async function içinde");
  console.log("✅ Paralel işlemler için Promise.all");
  console.log("✅ Try-catch ile hataları yakala");

  console.log("\n=== ÖRNEK TAMAMLANDI ===");
}, 6000);
