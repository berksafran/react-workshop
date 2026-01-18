/**
 * ASYNC/AWAIT - PARALEL İŞLEMLER
 * Detaylı notlar: NOTES.md
 *
 * ⚠️ Bu örnek setTimeout kullanır (async davranış göstermek için)
 */

console.log("=== PARALEL İŞLEMLER - PROMISE.ALL ===\n");

const getUser = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Ayşe" }), 1000),
  );

const getSettings = () =>
  new Promise((resolve) => setTimeout(() => resolve({ theme: "dark" }), 800));

const fetchParallel = async () => {
  const start = Date.now();

  console.log("Paralel istekler başlatılıyor...\n");

  const [user, settings] = await Promise.all([getUser(), getSettings()]);

  const duration = Date.now() - start;
  console.log(`✅ Tamamlandı (${duration}ms)`);
  console.log("Kullanıcı:", user.name);
  console.log("Tema:", settings.theme);

  console.log("\n=== ÖRNEK TAMAMLANDI ===");
};

fetchParallel();
