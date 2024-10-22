// Modul 6 - 07 - Aufgabe: for-Schleifen

//============================================================================================================================================================
//AUFGABE 1
//============================================================================================================================================================
// Aufgabenstellung 1: Summe der Elemente eines Arrays
// Aufgabe:
// Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen und zurückzugeben.
function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

// Test:
console.log("AUSGABE AUFGABE 1:");
console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)
console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)






//============================================================================================================================================================
//AUFGABE 2
//============================================================================================================================================================
// Aufgabenstellung 2: Ausgabe einer Zahlenreihe
// Aufgabe:
// Implementiere eine for-Schleife, um die Zahlen von 1 bis n in aufsteigender Reihenfolge auszugeben.
function printNumbers(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push(i + 1);
    }
    console.log(array);
}

// Test:
console.log("AUSGABE AUFGABE 2:");
printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5
printNumbers(3); // Erwartete Ausgabe: 1, 2, 3





//============================================================================================================================================================
//AUFGABE 3
//============================================================================================================================================================
// Aufgabenstellung 3: Rückwärts laufende for-Schleife
// Aufgabe:
// Implementiere eine for-Schleife, die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.
// Test:
console.log("AUSGABE AUFGABE 3:");
printNumbersReverse(5);

// Erwartete Ausgabe: 5, 4, 3, 2, 1


printNumbersReverse(3);

// Erwartete Ausgabe: 3, 2, 1







//============================================================================================================================================================
//AUFGABE 4
//============================================================================================================================================================
// Aufgabenstellung 4: Nur jedes dritte Element ausgeben
// Aufgabe:
// Implementiere eine for-Schleife, die jedes dritte Element des gegebenen Arrays ausgibt.
//Test:
console.log("AUSGABE AUFGABE 4:");
printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Erwartete Ausgabe: 1, 4, 7


printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']);

// Erwartete Ausgabe: 'a', 'd'





//============================================================================================================================================================
//AUFGABE 5
//============================================================================================================================================================
// Bonusaufgabe: Prüfung auf Primzahlen
// Aufgabe:
// Implementiere eine for-Schleife, um zu überprüfen, ob die gegebene Zahl eine Primzahl ist (d.h. nur durch 1 und sich selbst teilbar ist). Gib true zurück, wenn sie eine Primzahl ist, andernfalls false.
// Test:
console.log("AUSGABE AUFGABE 5 (Bonus):");
console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)

console.log(isPrime(4)); // Erwartete Ausgabe: false (4 ist keine Primzahl)