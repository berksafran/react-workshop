/**
 * JAVASCRIPT SINGLE THREAD - PARALEL İŞLEMLER NASIL OLUR?
 * Detaylı notlar: NOTES.md
 *
 * JavaScript single thread'dir ama Event Loop sayesinde paralel gibi çalışır.
 */

console.log("=== JAVASCRIPT SINGLE THREAD ===\n");

console.log("JavaScript tek thread'te çalışır ama...\n");

// Simüle edilmiş async işlemler
const task1 = () =>
  new Promise((resolve) => {
    console.log("Task 1 başladı (1000ms)");
    setTimeout(() => {
      console.log("Task 1 bitti!");
      resolve("Task 1 sonucu");
    }, 1000);
  });

const task2 = () =>
  new Promise((resolve) => {
    console.log("Task 2 başladı (800ms)");
    setTimeout(() => {
      console.log("Task 2 bitti!");
      resolve("Task 2 sonucu");
    }, 800);
  });

const task3 = () =>
  new Promise((resolve) => {
    console.log("Task 3 başladı (600ms)");
    setTimeout(() => {
      console.log("Task 3 bitti!");
      resolve("Task 3 sonucu");
    }, 600);
  });

// SENKRON - Sırayla çalışır (YAVAŞ)
const runSequential = async () => {
  console.log("--- SENKRON (Sırayla) ---\n");
  const start = Date.now();

  await task1(); // 1000ms bekle
  await task2(); // 800ms bekle
  await task3(); // 600ms bekle

  const duration = Date.now() - start;
  console.log(`\nToplam süre: ${duration}ms (1000 + 800 + 600 = ~2400ms)\n`);

  // PARALEL - Hepsi aynı anda başlar (HIZLI)
  setTimeout(async () => {
    console.log("--- PARALEL (Promise.all) ---\n");
    const start = Date.now();

    // Hepsi aynı anda başlar!
    await Promise.all([task1(), task2(), task3()]);

    const duration = Date.now() - start;
    console.log(
      `\nToplam süre: ${duration}ms (en uzun task kadar = ~1000ms)\n`,
    );

    setTimeout(() => {
      console.log("--- NASIL OLDU? ---\n");
      console.log("1. JavaScript single thread'dir (tek seferde bir iş yapar)");
      console.log('2. Ama Event Loop sayesinde async işlemler "beklerken"');
      console.log("3. Diğer işlere geçer (non-blocking)");
      console.log(
        "4. setTimeout, fetch gibi işlemler browser/Node.js tarafından",
      );
      console.log("5. Arka planda yürütülür (Web APIs)");
      console.log("6. Bitince Event Loop ile geri döner\n");

      console.log("Sonuç: Paralel gibi görünür ama aslında:");
      console.log("- Tüm task'lar aynı anda BAŞLAR (setTimeout'a verilir)");
      console.log("- JavaScript beklemeden devam eder");
      console.log("- En uzun task bitince Promise.all tamamlanır\n");

      console.log("=== ÖRNEK TAMAMLANDI ===");
    }, 1000);
  }, 3000);
};

runSequential();
