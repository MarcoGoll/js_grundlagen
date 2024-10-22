
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

//empty Array
const cars = []; // empty Array
cars[0] = "VW";
cars[2] = "Ford";
cars[3] = "Mercedes";
console.log(cars); // VW, empty, Ford, Mercedes (cars[1] wurde nicht befüllt und bleibt daher empty. 
//Im Browser sieht das standardmäßig so aus "VW,,Ford,Mercedes")


//===========================================
// array - push()
//===========================================
const cars2 = []; //empty

cars2.push("Opel", "Ferrari");

console.log(cars2);
