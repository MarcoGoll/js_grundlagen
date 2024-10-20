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





// Aufgabe 1:
// // Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.
// Aufgabe 2:
// Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "klick mich"

function createButton() {
    let myDiv = document.getElementById('createButtonTest');
    const myBTN = document.createElement("button");
    myBTN.textContent = "New Button";
    myBTN.style.padding = "10px 50px";
    myBTN.style.borderRadius = "8px";
    myBTN.classList.add("newClass1", "newClass2");
    console.log("Classes myBTN: " + myBTN.classList)
    myDiv.appendChild(myBTN);
}
createButton();





// 1. Aufgabe:
// Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.
let p = document.createElement("p");
p.setAttribute("id", "createdP")
p.innerText = "Ich bin der erstellte Paragraph";
document.body.appendChild(p);





// 2. Aufgabe:
// Füge mit JavaScript dem p-tag einen title hinzu.
// Hinweis: das title Attribute ist meist auch als Tooltip zu verstehen, mehr dazu zB. hier:
//  https://www.w3schools.com/tags/att_global_title.asp
p.setAttribute('title', 'generatedTitle');






// 3. Probiere aus:
// Kannst du auch eine css class mit setAttribute hinzufügen?
p.setAttribute("class", "pInPink");





// 4. Probiere aus:
// Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?
// Hinweis: Füge hierzu vorher schon einmal eine andere class ein!
let myDivDifferenzClassListAdd_vs_setAttribut = document.getElementById('divContainer');
myDivDifferenzClassListAdd_vs_setAttribut.classList.add("divFontGreen"); // hängt klassen an bestehende klassen ran
myDivDifferenzClassListAdd_vs_setAttribut.setAttribute("class", "divInPink"); // überschreibt bereits gesetzte klassen


// Vorbereitung nächstes Video:
// Erstelle im CSS eine Klasse d_none, diese sollte "display:none;" beinhalten.
// Bau nun eine Funktion, die die Klasse "d_none" mit classList.toggle() hinzufügt/entfernt bei einem beliebigen HTML Element.
// Hinweis: Beliebig heißt hier, dass die id aus dem Parameter der Funktion genommen wird.





// 01 Aufgabe:
// Erstelle ein inputfeld mit einer selbst gewählten id
// 02 Aufgabe:
// Erstelle eine Funktion, die den Value dieses inputfeldes aus loggt.
// 03 Probiere aus:
// Vergleiche nun den log von onkeyup und onkeydown. Siehst du einen Unterschied?

function loggValue(id) {
    let myElement = document.getElementById(id);
    console.log("Trigerred");
}