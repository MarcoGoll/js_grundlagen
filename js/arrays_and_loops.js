
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
let lengthCars2 = cars2.push("Opel", "Ferrari");
console.log(cars2); // Opel, Ferrari
console.log(lengthCars2); // 2


//===========================================
// array - pop()
//===========================================
const cars3 = ["Opel", "Ferrari"];
let deletedElementStep1 = cars3.pop();
console.log("Deleted: " + deletedElementStep1 + " Remeining Array: " + cars3); // Deleted: Ferrari Remeining Array: Opel
let deletedElementStep2 = cars3.pop();
console.log("Deleted: " + deletedElementStep2 + " Remeining Array: " + cars3); // Deleted: Opel Remeining Array: ==> Hinweis: Array ist jetzt empty ==> []
let deletedElementStep3 = cars3.pop();
console.log("Deleted: " + deletedElementStep3 + " Remeining Array: " + cars3); // Deleted: undefined Remeining Array:  ==> wenn das Array empty ist liefert pop() den Wert "undefined"



//===========================================
// for loop Allgemein
//===========================================
let contentRef = document.getElementById("myContent");
// contentRef.innerHTML = "";

for (let myIndex = 0; myIndex < 10; myIndex++) {
    contentRef.innerHTML += "Schritt: " + myIndex + " ";
}


//===========================================
// for loop + Array (Im Schnellmenu die nach for das zweite for auswählen und wir bekommen eine Vorlage für den Mainanwendungsfall for schleife geht durch array durch)
//===========================================
let myLoopArray = ["A", "B", "C"]

for (let index = 0; index < myLoopArray.length; index++) {
    const element = myLoopArray[index];
    contentRef.innerHTML += "<div>" + element + "</div>"; // nicht so schreiben geht viel leichter mit `...§{}...` siehe nächste Zeile
    contentRef.innerHTML += `<div>${element}</div>`; // nicht so schreiben geht viel leichter siehe nächste Zeile
}


//===========================================
// loop - break
//===========================================
function testWithBreak(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "error") {
            console.error("Hier war ein Fehler");
            break; // hier wird die For-Schleife abgebrochen
        }
        console.log(arr[i]);
    }
}

console.log("AUSGABE testWithBreak");
testWithBreak([1, 2, 3, 4, 5, "error", 6, 7, 8, 9, 10]);


//===========================================
// loop - continue
//===========================================
function testWithContinue(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "error") {
            continue; // hier wird mit der nächsten Iteration der For-Schleife fortgesetzt. Die akteulle wird einfach übersprungen
        }
        console.log(arr[i]);
    }
}
console.log("AUSGABE testWithContinue");
testWithContinue([1, 2, 3, 4, 5, "error", 6, 7, 8, 9, 10]);

//===========================================
// getByClassName + Array
//===========================================
let refList = document.getElementsByClassName("redbox");
function changeBorderColorToBlue(arr) {
    for (let i = 0; i < arr.length; i++) {
        refList[i].style.border = "3px solid blue";
        if (refList[i].classList.contains("green_fill")) {
            refList[i].classList.remove("green_fill");
            refList[i].classList.add("red_fill");
        }
    }
}

changeBorderColorToBlue(refList);


//===========================================
// loop - while - SOLANGE WAHR mach weiter
//===========================================
let myZaehler = 0;
while (myZaehler < 20) {
    console.log("myZaehler ist noch kleiner als 20");
    myZaehler++;
}

//===========================================
// loop - forEach - mach X für jedes Element eines Array (das gleiche wie for(i=0; i<array.length; i++) - nur verständlicher geschrieben)
//===========================================
let myForEachArray = ["Schritt: ", "Schritt: ", "Schritt: ", "Schritt: ", "Schritt: "]
let zaehlerForEach = 0;


myForEachArray.forEach(element => {
    myForEachArray[zaehlerForEach] = element.concat(zaehlerForEach + 1);
    zaehlerForEach++;
});

console.log(myForEachArray);
