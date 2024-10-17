//
// booleans + OR-Gatter (||)
//
let myCondition1 = true; // true
let myCondition2 = !true; // false

myCondition1 = !myCondition1; // Gegenteil zuweisen // false

let myCondition3 = true || true; // true
let myCondition4 = false || true; // true
let myCondition5 = false || false; // false
let myCondition6 = true || true || false || false || false; // true


console.log(myCondition1); // false
console.log(myCondition2); // false
console.log(myCondition3); // true
console.log(myCondition4); // true
console.log(myCondition5); // false
console.log(myCondition6); // true

//
// booleans + AND-Gatter (&&)
//
let myCondition7 = true && true; // true
let myCondition8 = false && true; // false
let myCondition9 = false && false; // false
let myCondition10 = true && true && false && false || true; // true

console.log(myCondition7); // true
console.log(myCondition8); // false
console.log(myCondition9); // false
console.log(myCondition10); // true


