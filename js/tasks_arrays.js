// https://developer-akademie.teachable.com/courses/modul-6-javascript-vorkus/lectures/54921235 - Modul 6 - Einführung JavaScript - 04 - Aufgaben: Arrays

//Aufgabenstellung 1: includes
//Aufgabe:
//Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.
function containsElement(array, element) {
    return array.includes(element);
}

console.log("Task1:");
console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false

//Aufgabenstellung 2: indexOf
//Aufgabe:
//Implementiere eine Funktion namens findElementIndex(array, element), die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.
function findElementIndex(array, element) {
    return array.indexOf(element);
}

console.log("Task2:");
console.log(findElementIndex([10, 20, 30, 40], 30)); // 2
console.log(findElementIndex([10, 20, 30, 40], 50)); // -1

//Aufgabenstellung 3: shift
//Aufgabe:
//Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.
function removeFirstElement(array) {
    let firstElement = array.shift();
    return array;
}

console.log("Task3:");
console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']

//Aufgabenstellung 4: unshift
//Aufgabe:
//Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.
function addElementToStart(array, element) {
    array.unshift(element);
    return array
}

console.log("Task4:");
console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']

//Aufgabenstellung 5: slice
//Aufgabe:
//Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.
function getSubArray(array, start, end) {
    array.slice(start, end);
    return array;
}

console.log("Task5:");
console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']

//Aufgabenstellung 6: join
//Aufgabe:
//Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.
function joinArray(array, separator) {
    let maNewString = array.join(separator);
    return maNewString;
}

console.log("Task6:");
console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"
console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"

