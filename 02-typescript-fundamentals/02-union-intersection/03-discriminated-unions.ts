/**
 * UNION VE INTERSECTION - DISCRIMINATED UNIONS
 * Detaylı notlar: NOTES.md
 */

console.log("=== DISCRIMINATED UNIONS ===\n");

type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: unknown };
type ErrorState = { status: "error"; error: string };

type ApiState = LoadingState | SuccessState | ErrorState;

function handleState(state: ApiState): void {
  switch (state.status) {
    case "loading":
      console.log("Yükleniyor...");
      break;
    case "success":
      console.log("Başarılı! Data:", state.data);
      break;
    case "error":
      console.log("Hata:", state.error);
      break;
  }
}

handleState({ status: "loading" });
handleState({ status: "success", data: { id: 1 } });
handleState({ status: "error", error: "Bağlantı hatası" });

console.log("\n=== ÖRNEK TAMAMLANDI ===");
