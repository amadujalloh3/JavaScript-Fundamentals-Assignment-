// ---- Q13. Array Manipulation ----
console.log("---- Q13 ----");
let marketBasket = [];
marketBasket.push("Rice", "Palm Oil", "Onions"); // [Rice, Palm Oil, Onions]
marketBasket.pop(); // removes Onions -> [Rice, Palm Oil]
marketBasket.unshift("Pepper"); // [Pepper, Rice, Palm Oil]
marketBasket.unshift("Salt"); // [Salt, Pepper, Rice, Palm Oil]
marketBasket.shift(); // removes Salt -> [Pepper, Rice, Palm Oil]
console.log(marketBasket);
console.log("Remaining elements: Pepper, Rice and Palm Oil");

