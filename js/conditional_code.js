//=================================================================================================
// booleans + OR-Gatter (||)
//=================================================================================================
let myCondition1 = true; // true
let myCondition2 = !true; // false

myCondition1 = !myCondition1; // Gegenteil zuweisen // false

let myCondition3 = true || true; // true
let myCondition4 = false || true; // true
let myCondition5 = false || false; // false
let myCondition6 = true || true || false || false || false; // true


console.log("myCondition1: " + myCondition1); // false
console.log("myCondition2: " + myCondition2); // false
console.log("myCondition3: " + myCondition3); // true
console.log("myCondition4: " + myCondition4); // true
console.log("myCondition5: " + myCondition5); // false
console.log("myCondition6: " + myCondition6); // true

//=================================================================================================
// booleans + AND-Gatter (&&)
//=================================================================================================
let myCondition7 = true && true; // true
let myCondition8 = false && true; // false
let myCondition9 = false && false; // false
let myCondition10 = true && true && false && false || true; // true

console.log("myCondition7: " + myCondition7); // true
console.log("myCondition8: " + myCondition8); // false
console.log("myCondition9: " + myCondition9); // false
console.log("myCondition10: " + myCondition10); // true

// Beispiel Aufgaben
console.log("START LOGISCHE OPERATOREN");
console.log(true && false); // false
console.log(true || false); // true
console.log(false && true); // false
console.log(true && (false || true)); // true
console.log((true && false) || true); // true
console.log(!(true && false)); //true
console.log(!(false || true)); //false
console.log(!(true && (false || true))); // false
console.log((true && !(false || true)) || (false && (true || false))); //false
console.log((true || !(false && true)) && (!(true || false) || (false && true))); // false
console.log("END LOGISCHE OPERATOREN");



//=================================================================================================
// numbers + Vergleich == testet ob gleich (OHNE TYPE)
//=================================================================================================
let myCondition11 = 45 == "45"; // true 
let myCondition17 = 45 != "45" // false

console.log("myCondition11: " + myCondition11);
console.log("myCondition17: " + myCondition17);

//=================================================================================================
// numbers + Vergleich === testet ob EXAKT gleich (MIT TYPE)
//=================================================================================================

let myCondition12 = 45 === "45"; // false
let myCondition18 = 45 !== "45"; // true

console.log("myCondition12: " + myCondition12);
console.log("myCondition18: " + myCondition18);

//=================================================================================================
// numbers + Vergleich | > größer | < kleiner | >= görßer gleich | <= kleiner gleich
//=================================================================================================

let myCondition13 = 45 > 123; // false
let myCondition14 = 45 < 123; // true
let myCondition15 = 45 <= 45; // true
let myCondition16 = 45 >= 44; // true

console.log("myCondition13: " + myCondition13);
console.log("myCondition14: " + myCondition14);
console.log("myCondition15: " + myCondition15);
console.log("myCondition16: " + myCondition16);





//=================================================================================================
// if, else und else if => Allgemein
//=================================================================================================
let myBoolean1 = true;
let myBoolean2 = false;
let myBoolean3 = false;

if (myBoolean1) {
    console.log("myBoolean1:" + myBoolean1 + " Hello World!") // wird angezeigt
} else {
    console.log("myBoolean1:" + myBoolean1 + " Bye World!") // wird nicht angezeigt
}

if (myBoolean2) {
    console.log("myBoolean2:" + myBoolean2 + " Hello World!")  // wird nicht angezeigt
} else {
    console.log("myBoolean2:" + myBoolean2 + " Bye World!") // wird angezeigt
}

if (myBoolean3) {
    console.log("myBoolean3:" + myBoolean3 + " Hello World!")  // wird nicht angezeigt weil myBoolean3 == false
} else if (!myBoolean3) {
    console.log("myBoolean3:" + myBoolean3 + " Bye World!") // wird angezeigt, weil !(myBoolean3 == false) == true
} else {
    console.log("myBoolean3:" + myBoolean3 + " Ich werde nie angezeigt!") // wird angezeigt, weil else if ture war und diese else-Schleife damit nicht erreicht wird
}

//=================================================================================================
// if, else und else if => mit Logischem Gatter
//=================================================================================================
let myBoolean4 = false;
let myBoolean5 = true;

if (myBoolean4 && myBoolean5) {
    console.log("Result if, else mit Logischem Gatter " + "A: " + myBoolean4 + " &&" + " B: " + myBoolean5 + " ist wahr/true"); // wird nicht angezeigt, weil Bedingung false
} else if (myBoolean4 || myBoolean5) {
    console.log("Result if, else mit Logischem Gatter " + "A: " + myBoolean4 + " ||" + " B: " + myBoolean5 + " ist wahr/true"); // wird angezeigt, weil Bedingung true
} else {
    console.log("Alle Bedingungen sind falsch/false") // wird nicht angezeigt, weil else if Bedingung schon true war
}

//=================================================================================================
// if, else und else if => mit Vergleich
//=================================================================================================
let myInteger1 = 5;
let myInteger2 = 10;

if (myInteger1 > myInteger2) {
    console.log("Result vom Vergleich " + "A: " + myInteger1 + " >" + " B: " + myInteger2 + " ist wahr/true"); // wird nicht angezeigt, weil Bedingung false
} else if (myInteger1 <= myInteger2) {
    console.log("Result vom Vergleich " + "A: " + myInteger1 + " <=" + " B: " + myInteger2 + " ist wahr/true"); // wird angezeigt, weil Bedingung true
} else {
    console.log("Alle Bedingungen sind falsch/false") // wird nicht angezeigt, weil else if Bedingung schon true war
}
