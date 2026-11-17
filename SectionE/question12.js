// ---- Q12. Mixed Data Types & Nested Access ----
console.log("---- Q12 ----");
let studentProfile = { name: "Foday", age: 34 };
let records = [
  "DICT Department",
  2026,
  true,
  null,
  { name: "Samuel", age: 67 },
  studentProfile,
  ["Cassava", "Plantain", "Mango"],
];
console.log(records[4].name); // Samuel
console.log(records[5].age); // 34 (studentProfile inside records)
console.log(records[6][1]); // Plantain
