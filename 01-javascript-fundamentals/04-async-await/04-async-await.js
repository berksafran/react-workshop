/**
 * ASYNC/AWAIT - KULLANIMI
 * Detaylı notlar: NOTES.md
 */

console.log("=== ASYNC/AWAIT ===\n");

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

    console.log("Veri getiriliyor...\n");

    const user = await getUser();
    console.log("Kullanıcı:", user.name);

    const posts = await getPosts();
    console.log("İlk post:", posts[0].title);

    console.log("\n=== ÖRNEK TAMAMLANDI ===");
  } catch (error) {
    console.log("Hata:", error);
  }
};

fetchData();
