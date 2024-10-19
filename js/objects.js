// ====================================================================================================
//      Objects
// ====================================================================================================

let myFancyEmptyObject = {}; //empty Object;

//Object == Liste von Key:Value pairs // hier können variablen und functionen angegeben werden
let myFancyObject = {
    age: 34,
    height: 175,
    name: "Marco",
    writeName: function () {
        console.log("Ich bin eine Funktion des Objectes und schreibe den Namen in die Console : " + this.name);
    }
}

// Variante 1: Zugriff auf Key:Value x vom Object myFancyObject
console.log("Variante 1: Age meines Objekcts: " + myFancyObject.age);

// Variante 2: Zugriff auf Key:Value x vom Object myFancyObject
console.log("Variante 2: Age meines Objekcts: " + myFancyObject["age"]);

// Variante 3: Zugriff auf Funktion y vom Object myFancyObject
myFancyObject.writeName();