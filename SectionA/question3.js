// ---- Q3. Logical Operators ----
console.log("---- Q3 ----");
let username = "lecturer_dict";
let pin = "2026";
// && -> false because pin is a string, not the number 2026 (data-type mismatch)
console.log(username === "lecturer_dict" && pin === 2026); // false
// || -> first condition false, second true
console.log(username === "admin" || pin === "2026"); // true
// ! -> checks username is NOT strictly equal to "admin"
console.log(!(username === "admin")); // true
