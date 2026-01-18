/**
 * ASYNC/AWAIT - HATA YÖNETİMİ
 * Detaylı notlar: NOTES.md
 */

console.log("=== HATA YÖNETİMİ ===\n");

const mayFail = async (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldSucceed ? resolve("Başarılı!") : reject(new Error("Hata oluştu!"));
    }, 500);
  });
};

const handleError = async () => {
  console.log("1. Başarılı İşlem:");
  try {
    const result = await mayFail(true);
    console.log("   ✅", result);
  } catch (error) {
    console.log("   ❌ Hata:", error.message);
  }

  console.log("\n2. Başarısız İşlem:");
  try {
    await mayFail(false);
  } catch (error) {
    console.log("   ❌ Yakalanan hata:", error.message);
  }

  console.log("\n=== ÖRNEK TAMAMLANDI ===");
};

handleError();
