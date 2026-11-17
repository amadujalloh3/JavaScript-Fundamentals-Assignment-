// ---- Q4. String Indexing & Abbreviations ----
console.log("---- Q4 ----");
let name1 = "Franklina Fatmata Nylanda";
let name2 = "Hawanatu Mariama Conteh";
let name3 = "Despitch Brian Alliu";

// First letter of each word: index 0, then the letter after each space
let abbr1 = name1[0] + name1[10] + name1[18]; // F + F + N
let abbr2 = name2[0] + name2[9] + name2[17]; // H + M + C
let abbr3 = name3[0] + name3[9] + name3[15]; // D + B + A
console.log(abbr1); // FFN
console.log(abbr2); // HMC
console.log(abbr3); // DBA
