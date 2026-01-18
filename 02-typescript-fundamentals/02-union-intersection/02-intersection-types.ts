/**
 * UNION VE INTERSECTION - INTERSECTION TYPES
 * Detaylı notlar: NOTES.md
 */

console.log("=== INTERSECTION TYPES ===\n");

type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  position: string;
};

type EmployeePerson = Person & Employee;

const ahmet: EmployeePerson = {
  name: "Ahmet",
  age: 30,
  company: "ABC Tech",
  position: "Backend Developer",
};

console.log("Çalışan:", ahmet);

console.log("\n=== ÖRNEK TAMAMLANDI ===");
