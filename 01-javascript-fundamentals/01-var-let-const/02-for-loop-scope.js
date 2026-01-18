/**
 * VAR, LET, CONST - FOR LOOP SCOPE
 * Detaylı notlar: ../NOTES.md
 *
 * ⚠️ ÖNEMLI: Bu örnek setTimeout kullanır (async davranış göstermek için)
 * Çıktıyı görmek için birkaç saniye bekleyin.
 */

console.log("=== FOR LOOP'TA BLOCK SCOPE ===\n");

console.log("1. VAR ile (Yanlış):");

// var ile - tüm iterasyonlar aynı değişkeni kullanır
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("   var i:", i); // Hepsi 3 yazdırır!
  }, 1000);
}

setTimeout(() => {
  console.log("\n2. LET ile (Doğru):");

  // let ile - her iterasyon kendi scope'una sahip
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      console.log("   let j:", j); // 0, 1, 2 yazdırır
    }, 1000);
  }
}, 1500);
