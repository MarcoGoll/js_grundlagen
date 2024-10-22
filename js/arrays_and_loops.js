
//=================================================================================================
// array - ALLGEMEIN
//=================================================================================================
let myList = [12, "Banana", true, 234034235, "Hallo"]; // in der Liste kann alles stehen
let myList2 = [
    {
        "name": "marco",
        "age": 34
    },
    {
        "name": "peter",
        "age": 55
    }
];

function initArray() {
    console.log(myList);    // Darstellung Standard-Array in Console als standard-log
    console.dir(myList);    // Darstellung Standard-Array in Console als .dir (fast identisch zu log)
    console.log(myList2);   // Darstellung Array mit Objekten in Console als standard-log
    console.dir(myList2);   // Darstellung Array mit Objekten in Console als standard-dir (fast identisch zu log)
    console.table(myList2);   // Darstellung Array mit Objekten in Console als Tabelle
}

// Index eines Array ansprechen über []
console.log("ich bin der Index 0 von myList: " + myList[0]); // 12
myList[0] = "Apple"
console.log("ich bin der Index 0 von myList: " + myList[0]); // Apple
