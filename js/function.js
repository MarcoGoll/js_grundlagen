//=================================================================================================
// function - ALLGEMEIN
//=================================================================================================
let discount1 = 50;
let price1 = 500;

// funktions definition (deklaration) ==> Wird einmalig gemacht
function logCalculatePrice1() {
    console.log("Price1: " + (price1 - discount1) * 1.19);
}

// funktions call ==> Kann beliebig oft an unterschiedlichen Stellen aufgerufen werden
logCalculatePrice1();

// HINWEIS: Ein Script wird allgemein einmal komplett gelesen und erst danach ausgeführt. Da es zunächst gelesen wird
//          ist die Reihenfolge der Functions-Definition (wird beim Lesen erkannt) und des Functions-Call (wird beim Ausführen aufgerufen) egal.
//          Das Funktioniert aber nur bei Funktions-definitionen. Variablen werden erst beim Ausführen angelegt und müssen daher zu Beginn
//          des Dokumentes definiert werden, bzw. vor dem verändern der Werte dieser Variablen. 






//=================================================================================================
// function - ALLGEMEIN - Input
//=================================================================================================
function logCalculatePrice2(price2, discount2) {
    console.log("Price2: " + (price2 - discount2) * 1.19);
}

logCalculatePrice2(5000, 500);

//price2 und discount2 sind Parameter (Platzhalter), die nur innerhalb der Function gelten.

//=================================================================================================
// function - ALLGEMEIN - globale Variable vs. Funktionsparameter
//=================================================================================================

// Beispiel: Welcher Name wird ausgegeben? Und Warum?
let name1 = "Max";
let name2 = "Peter";

function testFunction(name1) {
    console.log("Die lokale Funktions-Variable name1 bzw. der Funktionsparameter (Ausgabe aus Funktion herraus): " + name1); // Result: Dieter (Parameter name1 wird verwendet)
    name1 = "Anna";         // ACHTUNG: Der Funktionsparameter name1 wird überschrieben, nicht die globale Variable name1
    name2 = "Konstanze "    // Hier wird hingegen die globale Variable name2 überschrieben
}

// Call testFunction
testFunction("Dieter");
// console.log mit globalen Variablen
console.log("Die globale Variable name1: " + name1);  // Result: Max (Globale Variable name1 wird verwendet)
console.log("Die globale Variable name2: " + name2); // Result: Konstanze  (Globale Variable name2 verwendet)

// Frage1 an Frederic: Kann man aus der Funktion herraus die globale Variable name1 erreichen, auch wenn es ein gleich geschriebenen Parameter innerhalb der Funktion gibt?
// Frage2 an Frederic: Versucht man in der Praxis einfach nie Parameter zu verwenden, die es als Variable schon gibt?