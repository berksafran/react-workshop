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

// http://latentflip.com/loupe/?code=Cgpjb25zb2xlLmxvZygiSGkhIik7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiQ2xpY2sgdGhlIGJ1dHRvbiEiKTsKfSwgNTAwMCk7Cgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBsb3VwZS4iKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
