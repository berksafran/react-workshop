/**
 * GENERICS - UTILITY TYPES
 * Detaylı notlar: NOTES.md
 */

console.log("=== UTILITY TYPES ===\n");

type User = {
  id: number;
  name: string;
  email: string;
};

// Partial - Tüm property'ler optional
type UserUpdate = Partial<User>;

const update: UserUpdate = {
  name: "Yeni İsim", // Sadece name güncellenebilir
};

console.log("Partial:", update);

// Pick - Sadece belirli property'ler
type UserSummary = Pick<User, "id" | "name">;

const summary: UserSummary = {
  id: 1,
  name: "Ahmet",
};

console.log("Pick:", summary);

// Omit - Belirli property'leri çıkar
type UserWithoutEmail = Omit<User, "email">;

const withoutEmail: UserWithoutEmail = {
  id: 1,
  name: "Mehmet",
};

console.log("Omit:", withoutEmail);

console.log("\n=== ÖRNEK TAMAMLANDI ===");
