// ---- Q2. Loose vs Strict Equality ----
console.log("---- Q2 ----");
let codeA = "100";
let codeB = 100;
console.log(codeA == codeB); // true  -> == converts "100" to the number 100 (type coercion), values match
console.log(codeA === codeB); // false -> === also compares types: string vs number
console.log(codeA != codeB); // false -> != is the opposite of ==; since == is true, != is false
console.log(codeA !== codeB); // true  -> !== is the opposite of ===; types differ, so it is true
