// ====================================================================================================
//      Variablen
// ====================================================================================================

let meinName = "Marco";  // allgemeine Variablen (Wie ein Container in den man in JS alles packen kann was man will)
const WARNUNG1 = "Dies ist eine Warnung"; // Variablen die einmal zugewiesen werden und die danach Constant bleiben. Es wird nichts anderes mehr zugewiesen 
// var WAR GESTERN - NICHT MEHR VERWENDEN

// ====================================================================================================
//      Datentypen
// ====================================================================================================

//          String
let myString1 = ""; //das ist bereits eins String mit 0 Zeichen, eingeschlossen in Doppelten Anführungszeichen
let myString2 = 'Das ist ein String' // String mit einfachen Anführungszeichen
let myString = `0` // String mit einfachen Anführungszeichen (bei dieser Variante kann sourcecode integriert werden)

//          Number
let myInt = 32; //Integer ist eine Ganzzahl
let myFloat = 32.5 // float ist eine Kommazahl

//          Boolean
let myBoolean = true; // true oder false

//          Object (als Array)         
//          Ein typische Anwendungsfall für den Datentyp: Object sind Array's (Vergleiche console.log(typeof(myArray)))
let myArray = [2, 5, "ABC"]; // häufiger Anwendungsfall für ein Object ist ein Array (eine einfache Liste)

//          Object
let myObject = { age: 32, height: 175 }; // Object ist wie ein Array auch eine Liste, allerdings eine Liste aus KEY:VALUE pairs