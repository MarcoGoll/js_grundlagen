let globalVariable = "ich bin eine globale Variable";

function scopeTest() {
    let functionVariable = "ich bin eine Variable in der Funktion";
    console.log("Innerhalb der Funktion sieht die Ausgabe der globalVariable so aus: " + globalVariable);
    console.log("Innerhalb der Funktion sieht die Ausgabe der functionVariable so aus: " + functionVariable);
}


console.log("Außerhalb der Funktion sieht die Ausgabe der globalVariable so aus: " + globalVariable);
// console.log("Außerhalb der Funktion sieht die Ausgabe der functionVariable so aus: " + functionVariable); // geht nicht ERROR: "Uncaught ReferenceError: functionVariable is not defined"

// **INFO (MERKSATZ):**
// Variablen gelten nur da wo sie deklariert werden (also wo `let` oder `const` genutzt wird)!
// **Sonderlocke ⇒** Globale Variablen, die sind von überall erreichbar.

// ACHTUNG EINE FUNKTION IN EINER FUNKTION ÖFFNET NEUEN SCOPE
function parent() {
    let testVariable = "geht nicht!"
    child();
}

function child() {
    console.log(testVariable); // nicht Erreichbar, da child() einen neuen functionsScope aufmacht (geht nur, wenn die Variable als Parameter übergeben wird) 
    //==> "scope.js:24 Uncaught ReferenceError: testVariable is not defined"
}
parent();

// Das Verhalten gilt für Funktionen. Schleifen-Blöcke machen keinen neuen Scope auf
function parent2() {
    let testVariable2 = "geht"
    if (true) {
        console.log(testVariable2);
    } else { }
}
parent2();

