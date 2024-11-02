// ====================================================================================================
//      Objects
// ====================================================================================================

let myFancyEmptyObject = {}; //empty Object;

//Object == Liste von Key:Value pairs // hier können variablen und functionen angegeben werden
let myFancyObject = {
    age: 34,
    height: 175,
    name: "Marco",
    job: {
        name: 'Koch',
        Einstieg: '01.01.2000'
    }, // Object im Object
    writeName: function (vorwort) {
        console.log("Ich bin eine Funktion des Objectes und schreibe den Namen in die Console : " + vorwort + " " + this.name);
    }
}

// Variante 1: Zugriff auf Key:Value x vom Object myFancyObject
console.log("Variante 1: Age meines Objekcts: " + myFancyObject.age);

// Variante 2: Zugriff auf Key:Value x vom Object myFancyObject
console.log("Variante 2: Age meines Objekcts: " + myFancyObject["age"]);
// typischer Anwendungsfall für diese Schreibweise ist der Zugriff mit Variablen
let objKey = "age";
console.log(myFancyObject[objKey]);

// Variante 3: Zugriff auf Funktion y vom Object myFancyObject
myFancyObject.writeName("Hallo");

// Variante 4: Zugriff auf Object im Object
console.log(myFancyObject.job.name);

// Variante 5: Zugriff auf Ganzes Objekt (geht auch als Tabelle)
console.table(myFancyObject);

//Key's eines Objektes auslesen => Object.Keys() verlangt als Parameter ein Objekt und gibt ein Array aus Strings (mit allen Keys des Objektes) zurück
console.table(Object.keys(myFancyObject));
// typischer Anwendungsfall ==> aus Objekt ein Array machen
let objKeys = Object.keys(myFancyObject);
let ourArray = [];
for (let i = 0; i < objKeys.length; i++) {
    ourArray.push(myFancyObject[objKeys[i]]); // Schreibweise von Variante 2
}
console.log("Unser array");
console.table(ourArray);


//Entries eines Objektes auslesen => Object.entries() verlangt als Parameter ein Objekt und gibt ein Array aus Array's zurück die immer jeweils zwei Werte haben (Key und passender Value).
console.table(Object.entries(myFancyObject));