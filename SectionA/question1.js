//-----Q1 Arithmetic & Modulus----
console.log("-----Q1-----");
const price = 45;
const quantity = 4;
const totalCost = price * quantity;       // multiplication
const discounted = totalCost - 15;        // subtraction
const splitCost = totalCost / 3;          // division
const leftover = totalCost % 7;           // modulus (remainder)
console.log("Total cost:", totalCost);               // 180
console.log("Discounted cost:", discounted);         // 165
console.log("Cost per friend:", splitCost);          // 60
console.log("Leftover (total % 7):", leftover);      // 5