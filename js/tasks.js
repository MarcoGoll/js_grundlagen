// 01 Aufgabe:
// Erstelle eine Funktion namens "fullName" die zwei Strings als Parameter übernimmt und sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).
// Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann

function fullName(firstName, familyName) {
    return firstName + " " + familyName;
}

console.log("Task 01 ==> fullName: " + fullName("Hans", "Wurst"));






// 02 Aufgabe:
// Erstelle eine Funktion namens "capitalizeLetters" die einen String als Parameter übernimmt und jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.
// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

function capitalizeLetters(myString) {
    return myString.toLocaleUpperCase();
}

console.log("Task 02 ==> UpperCase: " + capitalizeLetters("Ich bin ein Berliner!"));





// 03 Aufgabe:
// Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.
// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

function countCharacters(myString) {
    return myString.length;
}

console.log("Task 03 ==> count characters `banana`: " + countCharacters("banana"));





// Knacker-Aufgabe: Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt.
// Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen, und ersetze den Punkt durch ein Komma.
// Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"

function formatToCurrency(myFloat) {
    let myFloatNew = myFloat.toFixed(2);
    return myFloatNew.replace(".", ",") + " €";

}

let myFlotToCurrency = 2.5;
console.log("Task Knacker-Aufgabe ==> Float in String mit 2 Nachkommastellen und nem Währungszeichen: " + formatToCurrency(myFlotToCurrency));